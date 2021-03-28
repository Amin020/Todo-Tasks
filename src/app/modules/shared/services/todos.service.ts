import { Injectable } from '@angular/core';
import { ToDoGroup, TodoGroupsStatus } from 'src/app/core/model/todo-groups.model';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    todosGroups: Array<ToDoGroup> = [
        {
            id: "G1",
            name: "Daily Group Tasks",
            tasks: [
                {
                    id: "G1-T1",
                    name: "Drink coffee",
                    status: TodoGroupsStatus.done,
                    creationDate: 1283274829210
                },
                {
                    id: "G1-T2",
                    name: "Drink Milk",
                    status: TodoGroupsStatus.todo,
                    creationDate: 1283274829210
                },
                {
                    id: "G1-T3",
                    name: "Playing playstation",
                    status: TodoGroupsStatus.todo,
                    creationDate: 1283274829210
                },
                {
                    id: "G1-T4",
                    name: "Praying",
                    status: TodoGroupsStatus.todo,
                    creationDate: 1283274829210
                },
                {
                    id: "G1-T5",
                    name: "Watching TV",
                    status: TodoGroupsStatus.done,
                    creationDate: 1283274829210
                }
            ]
        },
        {
            id: "G2",
            name: "Group 2",
            tasks: [
                {
                    id: "G2-T1",
                    name: "Mortgage Repayment",
                    status: TodoGroupsStatus.todo,
                    creationDate: 1283274829210
                },
                {
                    id: "G2-T2",
                    name: "Look for tax organizer",
                    status: TodoGroupsStatus.todo,
                    creationDate: 1283274829210
                },
                {
                    id: "G2-T3",
                    name: "Swimming",
                    status: TodoGroupsStatus.todo,
                    creationDate: 1283274829210
                }
            ]
        },
        {
            id: "G3",
            name: "OUR HOME TO-DOS",
            tasks: [
                {
                    id: "G3-T1",
                    name: "Mortgage Repayment",
                    status: TodoGroupsStatus.deleted,
                    creationDate: 1283274829210
                },
                {
                    id: "G3-T2",
                    name: "Mortgage Repayment",
                    status: TodoGroupsStatus.todo,
                    creationDate: 1283274829210
                },
                {
                    id: "G3-T3",
                    name: "Mortgage Repayment",
                    status: TodoGroupsStatus.deleted,
                    creationDate: 1283274829210
                }
            ]
        }
    ];

    constructor() { }

}
