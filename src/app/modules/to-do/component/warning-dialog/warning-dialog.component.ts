import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent implements OnInit {

  title: string;
  iconSrc: string;
  textMessage: string;
  buttons: any[];

  constructor(
    private dialogRef: MatDialogRef<WarningDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog(buttonType) {
    this.dialogRef.close({ type: buttonType });
  }


  isRedButtonBg(btn: any) {
    return btn.type === "delete";
  }

  isGreenButtonBg(btn: any) {
    return btn.type === "done";
  }

}
