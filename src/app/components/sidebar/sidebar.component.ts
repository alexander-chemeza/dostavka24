import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  state: boolean;

  constructor(private router: Router) {
    this.state = false;
  }

  ngOnInit(): void {
    // On hashchange check if user have this item in the localStorage, true - full sidebar, false - basic
    this.router.events.forEach(event => {
      if(event instanceof NavigationEnd) {
        if(localStorage.getItem('currentUser')) {
          this.state = true;
        } else {
          this.state = false;
        }
      }
    });
  }
}
