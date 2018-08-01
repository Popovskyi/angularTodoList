export class TodoListClass {
    name: string;
    editTask: boolean;
    taskOnEdit: boolean;
    taskIsDone: boolean;
    constructor(name, editTask, taskOnEdit, taskIsDone) {
        this.name = name;
        this.editTask = editTask;
        this.taskOnEdit = taskOnEdit;
        this.taskIsDone = taskIsDone;
    }
}
