"use strict";
class Order {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.paymentStatus = false;
        this.shippingStatus = false;
    }
    addItem(item) {
        this.items.push(item);
        this.calculateTotalPrice();
    }
    calculateTotalPrice() {
        this.totalPrice = this.items.reduce((sum, item) => sum + item.price, 0);
    }
    processPayment() {
        if (this.totalPrice > 0) {
            this.paymentStatus = true;
        }
    }
    updateShippingStatus() {
        if (this.paymentStatus) {
            this.shippingStatus = true;
        }
    }
    getOrderSummary() {
        return {
            items: this.items,
            totalPrice: this.totalPrice,
            paymentStatus: this.paymentStatus,
            shippingStatus: this.shippingStatus,
        };
    }
}
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    calculateTotalPrice() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
    getItems() {
        return this.items;
    }
}
class Payment {
    constructor() {
        this.status = false;
    }
    processPayment(amount) {
        if (amount > 0) {
            this.status = true;
        }
    }
    getStatus() {
        return this.status;
    }
}
class Shipping {
    constructor() {
        this.status = false;
    }
    updateStatus(paymentStatus) {
        if (paymentStatus) {
            this.status = true;
        }
    }
    getStatus() {
        return this.status;
    }
}
class Order {
    constructor(cart, payment, shipping) {
        this.cart = cart;
        this.payment = payment;
        this.shipping = shipping;
    }
    processOrder() {
        const totalPrice = this.cart.calculateTotalPrice();
        this.payment.processPayment(totalPrice);
        this.shipping.updateStatus(this.payment.getStatus());
    }
    getOrderSummary() {
        return {
            items: this.cart.getItems(),
            totalPrice: this.cart.calculateTotalPrice(),
            paymentStatus: this.payment.getStatus(),
            shippingStatus: this.shipping.getStatus(),
        };
    }
}
