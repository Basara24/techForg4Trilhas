class UserManager {
    private users: { name: string; email: string }[] = [];

    createUser(name: string, email: string): void {
        this.users.push({ name, email });
        this.sendNotification(email);
    }

    sendNotification(email: string): void {
        console.log(`Enviando email para ${email}`);
    }

    listUsers(): { name: string; email: string }[] {
        return this.users;
    }
}



class EmailNotification {
    send(email: string): void {
        console.log(`Enviando email para ${email}`);
    }
}

class UserManager {
    private users: { name: string; email: string }[] = [];
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(name: string, email: string): void {
        this.users.push({ name, email });
        this.emailNotification.send(email);
    }

    listUsers(): { name: string; email: string }[] {
        return this.users;
    }
}
