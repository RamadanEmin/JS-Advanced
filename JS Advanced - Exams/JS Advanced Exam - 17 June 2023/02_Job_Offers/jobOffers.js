class JobOffers {
    constructor(employer, possition) {
        this.employer = employer;
        this.possition = possition;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const result = [];

        for (let candidate of candidates) {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);
            const applicant = this.jobCandidates.find(c => c.name === name);
            if (!applicant) {
                result.push(name);
                this.jobCandidates.push({ name, education, yearsExperience });
            } else {
                if (yearsExperience > applicant.yearsExperience) {
                    applicant.yearsExperience = yearsExperience;
                }
            }
        }

        return `You successfully added candidates: ${result.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        const candidat = this.jobCandidates.find(c => c.name === name);

        if (!candidat) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (minimalExperience > candidat.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.possition}, minimum requirement is ${minimalExperience} years.`);
        }

        candidat.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidat = this.jobCandidates.find(c => c.name === name);

        if (!candidat) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (candidat.education == 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $50,000 per year!`;
        } else if (candidat.education == 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {
        const result=[];

        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        result.push("Candidates list:");
        const sortedCandidates = this.jobCandidates.sort((a,b)=>a.name.localeCompare(b.name));

        for (const {name,yearsExperience} of sortedCandidates) {
            result.push(`${name}-${yearsExperience}`)
        }

        return result.join('\n');
    }
}

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones-Bachelor-18"]));
// You successfully added candidates: John Doe, Peter Parker, Daniel Jones.

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones-Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));
// You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// Uncaught Error Error: John Jones is not in the candidates list!

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones-Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));
// You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// Peter Parker will sign a contract for Google, as Strategy Analyst with a salary of $60,000 per year!

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones-Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
//  You successfully added candidates: John Doe, Peter Parker, Jordan Cole, Daniel Jones.
//  Welcome aboard, our newest employee is John Doe.
//  Welcome aboard, our newest employee is Peter Parker.
//  Welcome aboard, our newest employee is Jordan Cole.
//  Jordan Cole will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!
//  John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
//  Candidates list:
//  Daniel Jones-18
//  John Doe-hired
//  Jordan Cole-hired
//  Peter Parker-hired
