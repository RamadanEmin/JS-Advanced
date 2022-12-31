function solution(command) {
    const commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            const upvotes = this.upvotes;
            const downvotes = this.downvotes;
            const totalVotes = upvotes + downvotes;
            const inflatedNum = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
            const balance = upvotes - downvotes;
            let rating = 'new';
            if (upvotes > totalVotes * 0.66 && totalVotes >= 10) {
                rating = 'hot';
            } else if (balance >= 0 && totalVotes > 100) {
                rating = 'controversial';
            } else if (balance < 0 && totalVotes >= 10) {
                rating = 'unpopular';
            }
            return totalVotes > 50
                ? [upvotes + inflatedNum, downvotes + inflatedNum, balance, rating]
                : [upvotes, downvotes, balance, rating];
        }
    };
    return commands[command]();
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');
score = solution.call(post, 'score'); // [127, 128, -1, 'unpopular']
console.log(score);
