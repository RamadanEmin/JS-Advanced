function extract(content) {
    const result = [];
    const contentElement = document.getElementById(content).textContent;
    const pattern = /\(([^\(]+)\)/g;
    let match = pattern.exec(contentElement);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(contentElement);
    }
    return result.join('; ');
}