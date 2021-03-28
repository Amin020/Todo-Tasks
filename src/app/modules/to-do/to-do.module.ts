import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import { MaterialModule } from 'src/app/core/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';
import { MyFilterPipe } from '../shared/pipes/filter-todos';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularSvgIconModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ],
  declarations: [
    ToDoComponent,
    MyFilterPipe
  ],
  entryComponents: [
  ]
})
export class ToDoModule { }
