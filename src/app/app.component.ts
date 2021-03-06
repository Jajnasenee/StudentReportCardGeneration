import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl = '';
  constructor(private router: Router) {
    this.router.events.subscribe((res) => {
      this.currentUrl = this.router.url;
    })
  }
  title = 'kara4kids';
  menus = [
    {
      title: 'Branches',
      naviagateTo: ['/branches'],
      availableRoles: ['superAdmin']
    },
    {
      title: 'Hoc',
      naviagateTo: ['/hoc'],
      availableRoles: ['superAdmin']
    },
    {
      title: 'Teachers',
      naviagateTo: ['/teacher'],
      availableRoles: ['superAdmin', 'admin']
    },
    {
      title: 'Student',
      naviagateTo: ['/student'],
      availableRoles: ['superAdmin', 'admin', 'user']
    }
  ];
  


  public navigateTo(nav) {
    this.router.navigate(nav);
  }
}
