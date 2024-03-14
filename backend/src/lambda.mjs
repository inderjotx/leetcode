import fs from 'fs'
import child_process from 'child_process'
import path from 'path'

export const handler = async (event) => {
    const code = event.code;
    const lang = event.lang;
    let result, error, isError;
    const tempDir = '/tmp';

    try {
        const outputFile = path.join(tempDir, `Main`);

        switch (lang.toLowerCase()) {
            case 'javascript':
                execNode(code, outputFile);
                result = fs.readFileSync(outputFile, 'utf8');
                break;
            case 'python':
                execPython(code, outputFile);
                result = fs.readFileSync(outputFile, 'utf8');
                break;
            case 'java':
                execJava(code, outputFile);
                result = fs.readFileSync(outputFile, 'utf8');
                break;
            case 'cpp':
                result = execCpp(code, outputFile);
                isError = false;
                break;
            default:
                throw new Error(`Unsupported language: ${lang}`);


        }

        fs.unlinkSync(outputFile);
        isError = false;

    } catch (err) {
        error = err.toString();
        isError = true;
    }

    const response = {
        result,
        error,
        isError,
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response),
    }

};


function execNode(code, outputFile) {
    const tempFile = `${outputFile}.js`
    fs.writeFileSync(tempFile, code)
    child_process.execSync(`node ${tempFile} > ${outputFile}`)
    fs.unlinkSync(tempFile)
}

function execPython(code, outputFile) {
    const tempFile = `${outputFile}.py`;
    fs.writeFileSync(tempFile, code);
    child_process.execSync(`python3 ${tempFile} > ${outputFile}`);
    fs.unlinkSync(tempFile);
}

function execJava(code, outputFile) {
    const tempFile = `${outputFile}.java`;
    fs.writeFileSync(tempFile, code);
    child_process.execSync(`javac ${tempFile}`);
    child_process.execSync(`java -cp ${path.dirname(tempFile)} ${path.basename(tempFile, '.java')} > ${outputFile}`);
    fs.unlinkSync(tempFile);
    fs.unlinkSync(`${tempFile.replace('.java', '.class')}`);
}

function execCpp(code, outputFile) {
    const tempFile = `${outputFile}.cpp`;
    fs.writeFileSync(tempFile, code);
    child_process.execSync(`g++ ${tempFile} -o ${outputFile}`);
    child_process.execSync(`${outputFile} > ${outputFile}.out`);
    const result = fs.readFileSync(`${outputFile}.out`, 'utf8');
    fs.unlinkSync(tempFile);
    fs.unlinkSync(`${outputFile}.out`);
    return result;
}



