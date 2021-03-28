export class ToDoGroup {

    id: string;
    name: string;
    tasks: Array<TodoTask>;

    constructor() {
        this.name = "";
        this.tasks = new Array<TodoTask>();
    }
}

export enum TodoGroupsStatus {
    todo = "TODO",
    done = "DONE",
    deleted = "DELETED"
}

export class TodoTask {

    id: string;
    name: string;
    status: TodoGroupsStatus;
    creationDate: any;

    constructor() { }
}
