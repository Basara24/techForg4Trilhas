"use strict";
class EmailSender {
    sendEmail(contact) {
        if (this.validateContact(contact)) {
            console.log(`Enviando email para ${contact.name} (${contact.email})`);
        }
        else {
            console.log("Contato inválido.");
        }
    }
    validateContact(contact) {
        return !!contact.name && /\S+@\S+\.\S+/.test(contact.email);
    }
}
class ContactValidator {
    validate(contact) {
        return !!contact.name && /\S+@\S+\.\S+/.test(contact.email);
    }
}
class EmailSender {
    constructor(validator) {
        this.validator = validator;
    }
    sendEmail(contact) {
        if (this.validator.validate(contact)) {
            console.log(`Enviando email para ${contact.name} (${contact.email})`);
        }
        else {
            console.log("Contato inválido.");
        }
    }
}
