"use strict";
class Inventory {
    constructor() {
        this.items = {};
    }
}
class WarehouseInventory extends Inventory {
    addItem(item, quantity) {
        this.items[item] = (this.items[item] || 0) + quantity;
    }
    removeItem(item) {
        delete this.items[item];
    }
    getInventory() {
        return this.items;
    }
}
class StoreInventory extends Inventory {
    addItem(item, quantity) {
        const currentQuantity = this.items[item] || 0;
        this.items[item] = Math.min(currentQuantity + quantity, StoreInventory.MAX_QUANTITY);
    }
    removeItem(item) {
        delete this.items[item];
    }
    getInventory() {
        return this.items;
    }
}
StoreInventory.MAX_QUANTITY = 10;
const warehouse = new WarehouseInventory();
warehouse.addItem("Parafuso", 100);
warehouse.removeItem("Parafuso");
console.log(warehouse.getInventory());
const store = new StoreInventory();
store.addItem("Chave", 5);
store.addItem("Chave", 10);
console.log(store.getInventory());
