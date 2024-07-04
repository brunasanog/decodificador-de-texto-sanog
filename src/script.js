document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = encryptText(inputText); 
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = decryptText(inputText);
});

document.getElementById('copyBtnInput').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    
    navigator.clipboard.writeText(inputText)
        .then()
        .catch(err => {
            console.error('Falha ao copiar texto: ', err);
        });
});

document.getElementById('copyBtnOutput').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').value;
    
    navigator.clipboard.writeText(outputText)
        .then()
        .catch(err => {
            console.error('Falha ao copiar texto: ', err);
        });
});

document.getElementById('pasteBtn').addEventListener('click', () => {
    navigator.clipboard.readText().then(text => {
        document.getElementById('inputText').value = text;
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}
