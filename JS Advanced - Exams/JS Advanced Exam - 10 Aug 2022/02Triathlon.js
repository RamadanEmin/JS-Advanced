class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants[participantName]) {
            return `${participantName} has already been added to the list`;
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        const participant = this.participants[participantName];
        if (!participant) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        const completedCount = Math.floor(condition / 30);
        if (completedCount <= 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }
        this.listOfFinalists.push({
            participantName,
            participantGender: participant
        });
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        const participant = this.listOfFinalists.find(p => p.participantName === participantName);
        if (!participant) {
            return `${participantName} is not in the current finalists list`;
        }
        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }
        if (criteria === 'all') {
            return `List of all ${this.competitionName} finalists:\n` +
                this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName)).map(f => f.participantName).join('\n');
        }
        const participant = this.listOfFinalists.filter(p => p.participantGender === criteria);
        return participant
            ? `${participant[0].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`
            : `There are no ${criteria}'s that finished the competition`;
    }
};

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Peter has already been added to the list

const contest1 = new Triathlon("Dynamos");
console.log(contest1.addParticipant("Peter", "male"));
console.log(contest1.addParticipant("Sasha", "female"));
console.log(contest1.addParticipant("George", "male"));
console.log(contest1.completeness("Peter", 100));
console.log(contest1.completeness("Sasha", 70));
//console.log(contest1.completeness("George", 20));
// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Uncaught Error: George is not well prepared and cannot finish any discipline

const contest2 = new Triathlon("Dynamos");
console.log(contest2.addParticipant("Peter", "male"));
console.log(contest2.addParticipant("Sasha", "female"));
console.log(contest2.completeness("Peter", 100));
console.log(contest2.completeness("Sasha", 70));
console.log(contest2.rewarding("Peter"));
console.log(contest2.rewarding("Sasha"));
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Peter was rewarded with a trophy for his performance
// Sasha is not in the current finalists list

const contest3 = new Triathlon("Dynamos");
console.log(contest3.showRecord("all"));
// There are no finalists in this competition

const contest4 = new Triathlon("Dynamos");
console.log(contest4.addParticipant("Peter", "male"));
console.log(contest4.addParticipant("Sasha", "female"));
console.log(contest4.completeness("Peter", 100));
console.log(contest4.completeness("Sasha", 90));
console.log(contest4.rewarding("Peter"));
console.log(contest4.rewarding("Sasha"));
console.log(contest4.showRecord("all"));
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// List of all Dynamos finalists:
// Peter
// Sasha

const contest5 = new Triathlon("Dynamos");
console.log(contest5.addParticipant("Peter", "male"));
console.log(contest5.addParticipant("Sasha", "female"));
console.log(contest5.addParticipant("George", "male"));
console.log(contest5.completeness("Peter", 100));
console.log(contest5.completeness("Sasha", 90));
console.log(contest5.completeness("George", 95));
console.log(contest5.rewarding("Peter"));
console.log(contest5.rewarding("Sasha"));
console.log(contest5.rewarding("George"));
console.log(contest5.showRecord("male"));
// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon
