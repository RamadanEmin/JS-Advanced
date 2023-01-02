function playingCards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    if (faces.includes(face)===false) {
        throw new Error('Invalid face: ' + face);
    }
    if (suits[suit]===undefined) {
        throw new Error('Invalid suit: ' + suit);
    }
    return {
        face,
        suit,
        toString() {
            return `${face}${suits[suit]}`
        }
    };
}
console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());
console.log(playingCards('1', 'C').toString());