class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length < this.space) {
            this.wines.push({ wineName, wineType, price, paid: false });

            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        } else {
            throw new Error('Not enough space in the cellar.');
        }
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName == wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid === true) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wine = this.wines.find(w => w.wineName == wineName);

        if (!wine) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        if (wine.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        const index = this.wines.indexOf(wineName);
        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let result = [];
            result.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);

            const sortedWineList = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            for(let wine of sortedWineList) {
                result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
            }

            return result.join('\n').trim();
        } else {
            const wineList = this.wines.filter(w => w.wineType == wineType);

            if (wineList.length === 0) {
                throw new Error (`There is no ${wineType} in the cellar.`);
            } else {
                let result = [];
                for (let wine of wineList) {
                    result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
                }

                return result.join('\n').trim();
            }
        }
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());