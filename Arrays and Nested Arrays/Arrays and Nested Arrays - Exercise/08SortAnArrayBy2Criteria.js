function sortAnArrayBy2Criteria(input = []) {
    const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return sorted.join('\n');
}
console.log(sortAnArrayBy2Criteria([
    'test',
    'Deny',
    'omen',
    'Default']));