abstract class Inventory {
    protected items: Record<string, number>;

    constructor() {
        this.items = {};
    }

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        this.items[item] = (this.items[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    private static MAX_QUANTITY = 10;

    addItem(item: string, quantity: number): void {
        const currentQuantity = this.items[item] || 0;
        this.items[item] = Math.min(currentQuantity + quantity, StoreInventory.MAX_QUANTITY);
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Parafuso", 100);
warehouse.removeItem("Parafuso");
console.log(warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Chave", 5);
store.addItem("Chave", 10); 
console.log(store.getInventory());
