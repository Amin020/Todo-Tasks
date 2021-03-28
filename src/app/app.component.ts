import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('menuMinAnimation', [
      state('true', style({
        width: '80px'
      })),
      state('false', style({
        width: '250px'
      })),
      transition(':enter,false => true', [
        style({ width: '250px' }),
        animate(200, style({ width: '60px' }))
      ]),
      transition(':enter,true => false', [
        style({ width: '80px' }),
        animate(200, style({ width: '250px' }))
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {

  isMenuOpened = true;
  menuSidNavMode = "side";
  mobileWidth = 544;
  notificationsStyle = "material";
  activePageTitle = "";
  @ViewChild('snav') snav: MatSidenav;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMenuItemPage(menuItem: any): void {
    this.activePageTitle = menuItem.title;
    this.router.navigate([`./`, menuItem.navigationKey]);
  }

  toggleSideMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  onMobile(): void {
    const isMobile = window.matchMedia(`(max-width: ${this.mobileWidth}px)`).matches;
    this.isMenuOpened = !isMobile;
    isMobile ? this.snav.close() : this.snav.open();
  }

}
