class EmailSender {
    sendEmail(contact: { name: string; email: string }): void {
        if (this.validateContact(contact)) {
            console.log(`Enviando email para ${contact.name} (${contact.email})`);
        } else {
            console.log("Contato inválido.");
        }
    }

    private validateContact(contact: { name: string; email: string }): boolean {
        return !!contact.name && /\S+@\S+\.\S+/.test(contact.email);
    }
}


class ContactValidator {
    validate(contact: { name: string; email: string }): boolean {
        return !!contact.name && /\S+@\S+\.\S+/.test(contact.email);
    }
}

class EmailSender {
    private validator: ContactValidator;

    constructor(validator: ContactValidator) {
        this.validator = validator;
    }

    sendEmail(contact: { name: string; email: string }): void {
        if (this.validator.validate(contact)) {
            console.log(`Enviando email para ${contact.name} (${contact.email})`);
        } else {
            console.log("Contato inválido.");
        }
    }
}
