import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/services/todos.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ToDoGroup, TodoGroupsStatus, TodoTask } from 'src/app/core/model/todo-groups.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  dateSearch: any;
  titleSearch = "";
  groupSearch: any;
  selection = new SelectionModel<any>(true, []);
  todosGroups = new Array<ToDoGroup>();
  todoGroupsStatus = TodoGroupsStatus;
  tasksStatus: string;

  constructor(
    private todosService: TodosService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.todosGroups = this.todosService.todosGroups;
    this.activatedRoute.params.subscribe(params => {
      this.tasksStatus = params['menuItem'];
      this.filterTasks();
      this.selection = new SelectionModel<any>(true, []);
    });
  }

  filterTasks(): void {
    this.todosGroups = [];
    for (const todoGroup of this.todosService.todosGroups) {
      const newTodoGroup = { id: todoGroup.id, name: todoGroup.name, tasks: [] };
      for (const todoTask of todoGroup.tasks) {
        if (this.isCriteriaMatched(todoTask)) {
          newTodoGroup.tasks.push(todoTask);
        }
      }
      if (newTodoGroup.tasks.length > 0) {
        this.todosGroups.push(newTodoGroup);
      }
    }
  }

  private isCriteriaMatched(todoTask: TodoTask) {
    return (this.tasksStatus === 'all' || (this.tasksStatus === 'done' && todoTask.status === this.todoGroupsStatus.done) ||
      (this.tasksStatus === 'deleted' && todoTask.status === this.todoGroupsStatus.deleted) ||
      (this.tasksStatus !== 'all' && this.tasksStatus !== 'done' && this.tasksStatus !== 'deleted'))
      && this.isSearchCriteriaMatched(todoTask);
  }

  private isSearchCriteriaMatched(todoTask: TodoTask): boolean {
    return todoTask.name.toLowerCase().includes(this.titleSearch.toLowerCase());
  }

  toggleSelection(groupTask: TodoTask): void {
    this.selection.toggle(groupTask);
  }

  addNewToDo(): void {
  }

  removeTasks(tasks: Array<TodoTask>): void {
    tasks.forEach(task => {
      task.status = TodoGroupsStatus.deleted;
    });
    for (let i = this.todosGroups.length - 1; i >= 0; i--) {
      const todosGroup = this.todosGroups[i];
      todosGroup.tasks = todosGroup.tasks.filter(task => task.status !== TodoGroupsStatus.deleted);
      if (todosGroup.tasks.length === 0) {
        this.todosGroups.splice(i, 1);
        i--;
      }
    }
    this.selection = new SelectionModel<any>(true, []);
  }

  markTasksAsDone(tasks: Array<TodoTask>): void {
    tasks.forEach(task => {
      task.status = TodoGroupsStatus.done;
    });
    this.selection = new SelectionModel<any>(true, []);
  }

}
