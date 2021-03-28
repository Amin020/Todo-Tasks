import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SnotifyService } from 'ng-snotify';
import { ToDoGroup } from 'src/app/core/model/todo-groups.model';
import { NotificationManager } from 'src/app/core/notification-manager';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {

  todo = new ToDoGroup();
  toaster = new NotificationManager(this.snotifyService);
  constructor(
    private dialogRef: MatDialogRef<AddNewTaskComponent>,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveToDo() {
    // if (this.validAllDataAdded()) {
    //   this.dialogRef.close(this.todo);
    // } else {
    //   this.toaster.showErrorMessage('Please add all requied values');
    // }
  }

  validAllDataAdded() {
    // return this.todo.title.trim().length && this.todo.dueDate;
  }
}
