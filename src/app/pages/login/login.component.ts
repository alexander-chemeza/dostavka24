import { Component, OnInit } from '@angular/core';
import {RestapiService} from "../../restapi.service";
import {Router} from "@angular/router";
// import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private service: RestapiService, private router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.service.login(this.username, this.password)
      .subscribe(data => {
        if(data) {
          localStorage.setItem('currentUser', data.name);
          this.router.navigate(['home']);
        } else {
          alert('No such user or invalid password');
        }
      })
  }

}
