import { Pipe, PipeTransform } from '@angular/core';
import { TodoGroupsStatus, TodoTask } from 'src/app/core/model/todo-groups.model';

@Pipe({ name: 'filterTodos', pure: false })
export class MyFilterPipe implements PipeTransform {

    constructor() { }

    transform(items: Array<TodoTask>, excludedStatus: TodoGroupsStatus): any {
        if (!items || !excludedStatus) {
            return items;
        }
        return items.filter(item => item.status !== excludedStatus);
    }
}
