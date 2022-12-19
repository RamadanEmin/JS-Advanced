function ticTacToe(input = []) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];
    let player = 'X';
    let win = false;
    function checkForWinner(dashboard, player) {
        let isWinner = false;
        for (let i = 0; i < 3; i++) {
            if (dashboard[i][0] === player && dashboard[i][1] === player && dashboard[i][2] === player) {
                isWinner = true;
                break;
            }
            if (dashboard[0][i] === player && dashboard[1][i] === player && dashboard[2][i] === player) {
                isWinner = true;
                break;
            }
            if (!isWinner) {
                if (dashboard[0][0] === player && dashboard[1][1] === player && dashboard[2][2] === player ||
                    dashboard[2][0] === player && dashboard[1][1] === player && dashboard[0][2] === player) {
                    isWinner = true;
                    break;
                }
            }
        }
        return isWinner;
    }
    function hasFreeSpaces(dashboard) {
        return dashboard.some(row => row.some(value => !value));
    }
    function printMatrix(dashboard) {
        dashboard.forEach(row => console.log(row.join('\t')));
    }

    for (const line of input) {
        let [row, col] = line.split(' ').map(num => Number(num));
        if (!dashboard[row][col]) {
            dashboard[row][col] = player;
            if (checkForWinner(dashboard, player)) {
                win = true;
                break;
            }
            player = player === 'X' ? 'O' : 'X';
        } else {
            console.log("This place is already taken. Please choose another!");
        }
        if (!hasFreeSpaces(dashboard)) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
    }
    if (win) {
        console.log(`Player ${player} wins!`);
    }
    printMatrix(dashboard);
}
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
ticTacToe([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);