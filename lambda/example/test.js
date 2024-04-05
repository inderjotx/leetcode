const fs = require('fs')

class Main {
    constructor(testCases) {
        this.testCases = testCases;
    }

    reverseArray(array) {
        return array.reverse();
    }

    validation() {
        const totalTestCases = this.testCases.length;
        let testPassed = 0;
        let hasErrorOccurred = false;
        let error = { input: '', expected: '', error: '' };

        this.testCases.forEach((testCase) => {
            try {
                const response = this.reverseArray(testCase.input);
                if (this.isArraySame(response, testCase.output)) {
                    testPassed++;
                }
                else {
                    if (!hasErrorOccurred) {
                        error.input = testCase.input;
                        error.expected = testCase.output;
                        error.error = "not equal";
                        hasErrorOccurred = true;
                    }
                }
            } catch (err) {
                if (!hasErrorOccurred) {
                    error.input = testCase.input;
                    error.expected = testCase.output;
                    error.error = err;
                    hasErrorOccurred = true;
                }
            }
        });

        return {
            totalTestCases: this.testCases.length,
            noOfTestCasesPassed: testPassed,
            success: this.testCases.length === testPassed,
            error: error
        };
    }

    isArraySame(first, second) {
        try {
            for (let i = 0; i < first.length; i++) {
                if (first[i] !== second[i]) {
                    return false;
                }
            }
            return true;
        } catch {
            return false;
        }
    }
}


function main() {

    const data = fs.readFileSync('/tmp/input', 'utf8');
    const testCases = JSON.parse(data)
    const main = new Main(testCases);
    const response = JSON.stringify(main.validation());
    fs.writeFileSync('/tmp/result', response);

}


main()