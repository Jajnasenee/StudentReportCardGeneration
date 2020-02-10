import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css']
})
export class ApplayoutComponent {

  
  currentUrl = '';
  constructor(private router: Router,private auth: AuthService) {
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

  logout() {
    this.auth.logout();
  }

  public navigateTo(nav) {
    this.router.navigate(nav);
  }
}
