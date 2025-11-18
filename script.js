function appendChar(char) {
    document.getElementById('result').value += char;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}