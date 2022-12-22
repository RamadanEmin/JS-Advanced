function extractText() {
    // const liElements = [...document.getElementsByTagName('li')];
    // const elementText = liElements.map(el=>el.textContent);
    // document.getElementById('result').value=elementText.join('\n');
    let itemNodes = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');
    for (const node of itemNodes) {
        textArea.value += node.textContent + '\n';
    }
}