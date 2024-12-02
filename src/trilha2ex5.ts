class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado.`);
    }

    listarCompromissos(): void {
        console.log("Lista de compromissos:");
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
    }
}

const agenda = new Agenda();
agenda.adicionarCompromisso("Reunião às 14h");
agenda.adicionarCompromisso("Consulta médica às 10h");
agenda.listarCompromissos();