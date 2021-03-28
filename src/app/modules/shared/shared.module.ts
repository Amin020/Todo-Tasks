import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './sideMenu/side-menu.component';
import { MaterialModule } from 'src/app/core/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularSvgIconModule
  ],
  declarations: [
    FooterComponent,
    SideMenuComponent
  ], exports: [
    FooterComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }
