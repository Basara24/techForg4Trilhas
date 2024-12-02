abstract class TaskManager {
    protected tasks: Set<string>;

    constructor() {
        this.tasks = new Set();
    }

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    addTask(task: string): void {
        if (!this.tasks.has(task)) {
            this.tasks.add(`Projeto: ${task}`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (!this.tasks.has(task)) {
            this.tasks.add(`Diária: ${task}`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

const project = new Project();
project.addTask("Criar design");
project.addTask("Criar design"); 
console.log(project.listTasks());

const daily = new DailyTasks();
daily.addTask("Exercício");
daily.addTask("Café da manhã");
console.log(daily.listTasks());