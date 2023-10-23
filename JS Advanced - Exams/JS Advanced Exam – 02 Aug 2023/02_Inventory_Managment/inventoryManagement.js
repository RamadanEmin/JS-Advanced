class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (this.items.length === this.capacity) {
            throw new Error('The inventory is already full.');
        }

        const item = this.items.find(i => i.itemName == itemName);
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });

            return `Added ${quantity} ${itemName}(s) to the inventory.`;
        }
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const item = this.items.find(i => i.itemName == itemName);

        if (!item) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (quantity > item.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        item.quantity -= quantity;

        if (item.quantity === 0) {
            const index = this.items.findIndex(i => i.itemName == itemName);
            this.items.splice(index, 1);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;

    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const item = this.items.find(i => i.itemName == itemName);
        if (item) {
            item.quantity += quantity;
        } else {
            const itemOutOfStock = this.outOfStock.find(i => i.itemName === itemName);
            if (itemOutOfStock) {
                const index = this.outOfStock.findIndex(i => i.itemName == itemName);
                this.outOfStock.splice(index, 1);
            }

            this.items.push({ itemName, quantity });

        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let result = [];
        let resultOut = [];

        result.push('Current Inventory:');
        for (const item of this.items) {
            result.push(`${item.itemName}: ${item.quantity}`);
        }

        if (this.outOfStock.length > 0) {

            for (let item of this.outOfStock) {
                resultOut.push(item);
            }
            result.push(`Out of Stock: ${resultOut.join(', ')}`);
        }

        return result.join('\n');
    }
}

// const manager = new InventoryManager(2);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));
// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Uncaught Error Error: The inventory is already full.

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Paintbrush", 2));

// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Added 3 Chisel(s) to the inventory.
// Sold 3 Drill(s) from the inventory.
// Uncaught Error Error: The item Paintbrush is not available in the inventory.

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

// Added 10 Drill(s) to the inventory. 
// Added 5 Hammer(s) to the inventory. 
// Added 3 Chisel(s) to the inventory. 
// Sold 3 Drill(s) from the inventory. 
// Restocked 5 Drill(s) in the inventory. 
// Restocked 1 Paintbrush(s) in the inventory.

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());

// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Added 3 Chisel(s) to the inventory.
// Sold 3 Drill(s) from the inventory.
// Sold 5 Hammer(s) from the inventory.
// Restocked 5 Drill(s) in the inventory.
// Restocked 1 Paintbrush(s) in the inventory.
// Current Inventory:
// Drill: 12
// Chisel: 3
// Paintbrush: 1
// Out of Stock: Hammer
