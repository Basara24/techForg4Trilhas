class Order {
    private items: { name: string; price: number }[] = [];
    private totalPrice: number = 0;
    private paymentStatus: boolean = false;
    private shippingStatus: boolean = false;

    addItem(item: { name: string; price: number }): void {
        this.items.push(item);
        this.calculateTotalPrice();
    }

    calculateTotalPrice(): void {
        this.totalPrice = this.items.reduce((sum, item) => sum + item.price, 0);
    }

    processPayment(): void {
        if (this.totalPrice > 0) {
            this.paymentStatus = true;
        }
    }

    updateShippingStatus(): void {
        if (this.paymentStatus) {
            this.shippingStatus = true;
        }
    }

    getOrderSummary(): object {
        return {
            items: this.items,
            totalPrice: this.totalPrice,
            paymentStatus: this.paymentStatus,
            shippingStatus: this.shippingStatus,
        };
    }
}


class Cart {
    private items: { name: string; price: number }[] = [];

    addItem(item: { name: string; price: number }): void {
        this.items.push(item);
    }

    calculateTotalPrice(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    getItems(): { name: string; price: number }[] {
        return this.items;
    }
}

class Payment {
    private status: boolean = false;

    processPayment(amount: number): void {
        if (amount > 0) {
            this.status = true;
        }
    }

    getStatus(): boolean {
        return this.status;
    }
}

class Shipping {
    private status: boolean = false;

    updateStatus(paymentStatus: boolean): void {
        if (paymentStatus) {
            this.status = true;
        }
    }

    getStatus(): boolean {
        return this.status;
    }
}

class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;

    constructor(cart: Cart, payment: Payment, shipping: Shipping) {
        this.cart = cart;
        this.payment = payment;
        this.shipping = shipping;
    }

    processOrder(): void {
        const totalPrice = this.cart.calculateTotalPrice();
        this.payment.processPayment(totalPrice);
        this.shipping.updateStatus(this.payment.getStatus());
    }

    getOrderSummary(): object {
        return {
            items: this.cart.getItems(),
            totalPrice: this.cart.calculateTotalPrice(),
            paymentStatus: this.payment.getStatus(),
            shippingStatus: this.shipping.getStatus(),
        };
    }
}