import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  declarations: []
})
export class MaterialModule { }
