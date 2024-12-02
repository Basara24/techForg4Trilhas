"use strict";
class UserManager {
    constructor() {
        this.users = [];
    }
    createUser(name, email) {
        this.users.push({ name, email });
        this.sendNotification(email);
    }
    sendNotification(email) {
        console.log(`Enviando email para ${email}`);
    }
    listUsers() {
        return this.users;
    }
}
class EmailNotification {
    send(email) {
        console.log(`Enviando email para ${email}`);
    }
}
class UserManager {
    constructor(emailNotification) {
        this.users = [];
        this.emailNotification = emailNotification;
    }
    createUser(name, email) {
        this.users.push({ name, email });
        this.emailNotification.send(email);
    }
    listUsers() {
        return this.users;
    }
}
