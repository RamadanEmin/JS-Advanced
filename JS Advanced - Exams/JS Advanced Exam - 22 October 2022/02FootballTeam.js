class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        const invited = [];
        for (const footballPlayer of footballPlayers) {
            let [name, age, playerValue] = footballPlayer.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            const player = this.invitedPlayers.find(p => p.name === name);
            if (player) {
                if (playerValue > player.playerValue) {
                    player.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
                invited.push(name);
            }
        }
        return `You successfully invite ${invited.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        const player = this.invitedPlayers.find(p => p.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (player.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - playerOffer} million more are needed to sign the contract!`);
        }
        player.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(p => p.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (age > player.age) {
            const ageDifference = age - player.age;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        return `${name} is above age limit!`;
    }

    transferWindowResult() {
        const result = [];
        result.push('Players list:');
        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(p => result.push(`Player ${p.name}-${p.playerValue}`));
        return result.join('\n');
    }
};

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
//console.log(fTeam.signContract("Barbukov/10"));
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// Uncaught Error: Barbukov is not invited to the selection list!

let fTeam1 = new footballTeam("Barcelona", "Spain");
console.log(fTeam1.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam1.ageLimit("Lionel Messi", 33));
console.log(fTeam1.ageLimit("Kylian Mbappé", 30));
console.log(fTeam1.ageLimit("Pau Torres", 26));
console.log(fTeam1.signContract("Kylian Mbappé/240"));
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.

let fTeam2 = new footballTeam("Barcelona", "Spain");
console.log(fTeam2.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam2.signContract("Kylian Mbappé/240"));
console.log(fTeam2.ageLimit("Kylian Mbappé", 30));
console.log(fTeam2.transferWindowResult());
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52
