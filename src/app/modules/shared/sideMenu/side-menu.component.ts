import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animate, animateChild, group, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { fadeIn, fadeOut, squash } from '../../../global-animations';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('SideNavAnimations', [
      transition('false => true', [
        group([
          query('@menuListAnimation', stagger(30, [
            animateChild()
          ]), { optional: true }),
          query('@pulseAnimation', stagger(400, animateChild()), { optional: true }),

        ])
      ])
    ]),
    trigger('menuListAnimation', [
      transition('false => true', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('pulseAnimation', [
      transition('false => true', [
        animate('.5s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
          style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ])),
      ]),
    ]),
    squash,
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn()),
  ]
})
export class SideMenuComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter<any>();
  @Output() navigation = new EventEmitter<SideMenuItem>();
  activePageTitle = '';

  isMenuOpened = true;
  menuItems: Array<SideMenuItem> = [
    {
      title: "Home",
      navigationKey: "home",
      iconSrc: "assets/icons/side-nav/home.svg"
    },
    {
      title: "All",
      navigationKey: "all",
      iconSrc: "assets/icons/side-nav/list.svg"
    },
    {
      title: "Today",
      navigationKey: "today",
      iconSrc: "assets/icons/side-nav/calendar.svg"
    },
    {
      title: "Week",
      navigationKey: "week",
      iconSrc: "assets/icons/side-nav/calendar-1.svg"
    },
    {
      title: "Done",
      navigationKey: "done",
      iconSrc: "assets/icons/side-nav/check.svg",
    },
    {
      title: "Deleted",
      navigationKey: "deleted",
      iconSrc: "assets/icons/side-nav/delete.svg",
    }
  ];

  ngOnInit() {
    const selectedMenuItem = this.menuItems.find(menuItem => menuItem.navigationKey === 'today');
    this.emitNavigation(selectedMenuItem);
  }

  toggleSideMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    this.toggleMenu.emit();
  }

  emitNavigation(menuItem: SideMenuItem) {
    this.activePageTitle = menuItem.title;
    this.navigation.emit(menuItem);
  }

}

export interface SideMenuItem {

  title: string;
  navigationKey: string;
  iconSrc: string;

}
