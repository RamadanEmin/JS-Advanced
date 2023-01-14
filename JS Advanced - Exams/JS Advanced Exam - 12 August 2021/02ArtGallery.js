class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel = '', articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }
        const article = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);
        if (article) {
            article.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(g => g.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 50;
        if (personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        }
        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        const article = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);
        if (!article) {
            throw new Error('This article is not found.');
        }
        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        const guest = this.guests.find(g => g.guestName === guestName);
        if (!guest) {
            return 'This guest is not invited.';
        }
        if (guest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        }
        guest.points -= this.possibleArticles[articleModel];
        article.quantity--;
        guest.purchaseArticle++;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        const result = [];
        if (criteria === 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        } else {
            result.push('Guests information:');
            this.guests.forEach(g=>result.push(`${g.guestName} - ${g.purchaseArticle}`));
        }
        return result.join('\n');
    }
};

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// Successfully added article Mona Liza with a new quantity- 3.
// Successfully added article Ancient vase with a new quantity- 2.
// Successfully added article Mona Liza with a new quantity- 1.

console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
//console.log(artGallery.inviteGuest('John', 'Middle'));
// You have successfully invited John!
// You have successfully invited Peter!
// John has already been invited.

const artGallery1 = new ArtGallery('Curtis Mayfield');
artGallery1.addArticle('picture', 'Mona Liza', 3);
artGallery1.addArticle('Item', 'Ancient vase', 2);
artGallery1.addArticle('picture', 'Mona Liza', 1);
artGallery1.inviteGuest('John', 'Vip');
artGallery1.inviteGuest('Peter', 'Middle');
console.log(artGallery1.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery1.buyArticle('item', 'Ancient vase', 'Peter'));
//console.log(artGallery1.buyArticle('item', 'Mona Liza', 'John'));
// John successfully purchased the article worth 200 points.
// Peter successfully purchased the article worth 250 points.
// This article is not found.

const artGallery2 = new ArtGallery('Curtis Mayfield');
artGallery2.addArticle('picture', 'Mona Liza', 3);
artGallery2.addArticle('Item', 'Ancient vase', 2);
artGallery2.addArticle('picture', 'Mona Liza', 1);
artGallery2.inviteGuest('John', 'Vip');
artGallery2.inviteGuest('Peter', 'Middle');
artGallery2.buyArticle('picture', 'Mona Liza', 'John');
artGallery2.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery2.showGalleryInfo('article'));
console.log(artGallery2.showGalleryInfo('guest'));
// Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1
