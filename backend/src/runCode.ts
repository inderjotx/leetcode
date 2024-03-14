import { KubeConfig, CoreV1Api } from '@kubernetes/client-node'
import path from 'path'
import fs from 'fs'
import util from 'util'



const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


export async function runCodeInPod(code: string) {

    const startingTime = Date.now()
    const containerImage = 'node:21-alpine3.18';
    const podName = 'compile-container'
    const filePathAnswer = path.resolve(__dirname, 'answer.txt');
    const filePathQuestion = path.resolve(__dirname, 'question.js');


    try {
        await writeFileAsync(filePathQuestion, code)
    }
    catch (error) {
        console.log(error)
    }


    const kubeConfig = new KubeConfig();

    kubeConfig.loadFromDefault();

    const k8sApi = kubeConfig.makeApiClient(CoreV1Api);


    const podDefinition = {
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
            name: podName,
        },
        spec: {
            containers: [
                {
                    name: podName,
                    image: containerImage,
                    command: ['sh', '-c'],
                    args: [`ls ./src && ls -l ./src && node ./src/question.js > answer.txt && cat answer.txt `],
                    volumeMounts: [
                        {
                            name: 'shared-volume',
                            mountPath: '/src', // change this 
                        },
                    ],
                },
            ],
            volumes: [
                {
                    name: 'shared-volume',
                    hostPath: {
                        path: '/home/inderharrysingh/projects/full-stack/leetcode/backend/src',
                    },
                },
            ],
            restartPolicy: 'Never',
        },
    };


    await k8sApi.createNamespacedPod('default', podDefinition);

    let podStatus: string;
    let response: string

    while (((podStatus = await waitForPodCompletion(k8sApi, podName)) === ('Pending' || 'Unknown')) && ((startingTime + 10 * 1000) > Date.now())) {
        console.log(podStatus)
    }


    if (podStatus == 'Succeeded') {

        console.log(podStatus)
        const pvContent = await readPersistentVolumeContent(filePathAnswer);
        response = pvContent
    }

    else if (podStatus == 'Pending') {
        console.log(podStatus)
        response = 'Time out '
    }


    else if (podStatus == 'Failed') {
        console.log(podStatus)
        const logs = await k8sApi.readNamespacedPodLog(podName, 'default');
        response = logs.body || 'Error running code ';
    }


    else {
        console.log(podStatus)
        console.error('Error getting pod logs:');
        response = "Error Executing code"
    }


    await deletePod(k8sApi, podName);
    return response

}



async function waitForPodCompletion(k8client: CoreV1Api, podName: string) {

    const response = await k8client.readNamespacedPodStatus(podName, "default")
    const status = response.body.status?.phase

    return status || "Unknown"

}

async function readPersistentVolumeContent(path: string) {

    const response = await readFileAsync(path, 'utf-8')
    return response

}

// function parseOutputFromFiles(filesContent) {
//     // Parse the output files according to your needs

// }



// function cleanUpPersistentVolume(pvcName) {

// delete the file in persistent valuve

// Implement logic to remove the Persistent Volume and its data
// For example, using the Kubernetes client library or the kubectl tool

// }


async function deletePod(k8client: CoreV1Api, podName: string) {
    await k8client.deleteNamespacedPod(podName, "default")
}


const code = 'const panda="apple" ; console.log(panda)'
runCodeInPod(code).then((response) => {
    console.log("this is respnose")
    console.log(response)
})
    .catch((err) => {
        console.log(err)
    })
