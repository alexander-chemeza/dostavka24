import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  state: boolean;
  constructor(private router: Router) {
    this.state = false;
  }

  ngOnInit(): void {
    // On application load, if user was logged in, navigate to home, else - start page (login)
    if(localStorage.getItem('currentUser')) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
