import fs from 'fs'
import child_process from 'child_process'
import path from 'path'




export const handler = async (event) => {

    // todo add more validation
    const code = event.code;
    const lang = event.lang;

    // strinfied testcases
    const testCases = event.testCases


    // test cases in file
    // test cases will be read by code
    fs.writeFileSync('/tmp/input', testCases)



    let result, error, isError;
    const TEMP_DIR = '/tmp';
    const RESULT_FILE = '/tmp/result'
    let stateTime = new Date().getTime()

    try {
        const outputFile = path.join(TEMP_DIR, `Main`);

        switch (lang.toLowerCase()) {
            case 'javascript':
                execNode(code, outputFile);
                break;
            case 'python':
                execPython(code, outputFile);
                break;
            case 'java':
                execJava(code, outputFile);
                break;
            case 'cpp':
                result = execCpp(code, outputFile);
                isError = false;
                break;
            default:
                throw new Error(`Unsupported language: ${lang}`);


        }

        isError = false;
        result = fs.readFileSync(RESULT_FILE, 'utf8');

    } catch (err) {
        error = err.toString();
        isError = true;
    }

    let endTime = new Date().getTime()

    const response = {
        result,
        error,
        isError,
        time: endTime - stateTime
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response),
    }

};


function execNode(code, outputFile) {
    const tempFile = `${outputFile}.js`
    fs.writeFileSync(tempFile, code)
    child_process.execSync(`node ${tempFile}`)
}

function execPython(code, outputFile) {
    const tempFile = `${outputFile}.py`;
    fs.writeFileSync(tempFile, code);
    child_process.execSync(`python3 ${tempFile}`);
}

function execJava(code, outputFile) {
    const tempFile = `${outputFile}.java`;
    fs.writeFileSync(tempFile, code);
    child_process.execSync(`javac ${tempFile}`);
    child_process.execSync(`java -cp ${path.dirname(tempFile)} ${path.basename(tempFile, '.java')}`);
}

function execCpp(code, outputFile) {
    const tempFile = `${outputFile}.cpp`;
    fs.writeFileSync(tempFile, code);
    child_process.execSync(`g++ ${tempFile} -o ${outputFile}`);
    child_process.execSync(`${outputFile}`);
    const result = fs.readFileSync(`${outputFile}.out`, 'utf8');
    return result;
}



