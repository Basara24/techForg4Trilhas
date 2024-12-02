"use strict";
class TaskManager {
    constructor() {
        this.tasks = new Set();
    }
}
class Project extends TaskManager {
    addTask(task) {
        if (!this.tasks.has(task)) {
            this.tasks.add(`Projeto: ${task}`);
        }
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
class DailyTasks extends TaskManager {
    addTask(task) {
        if (!this.tasks.has(task)) {
            this.tasks.add(`Diária: ${task}`);
        }
    }
    listTasks() {
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
