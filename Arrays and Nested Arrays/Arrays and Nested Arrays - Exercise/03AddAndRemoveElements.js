function addAndRemoveElements(commands = []) {
    let number = 1;
    const output = [];
    for (const command of commands) {
        if (command === 'add') {
            output.push(number);
        } else if (command === 'remove') {
            output.pop();
        }
        number++;
    }
    if (output.length === 0) {
        return 'Empty';
    } else {
        return output.join('\n');
    }
}
console.log(addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add']));
console.log(addAndRemoveElements([
    'remove',
    'remove',
    'remove']));