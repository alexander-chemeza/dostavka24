import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as bcrypt from 'bcryptjs';

export interface NewUrWithAgreement {
  companyName: string;
  email: string;
  login: string;
  password: string;
  phone: string;
  unp: string;
  userName: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  agreement = false;
  personNoAgreement = false;
  personWithAgreement = false;

  // Entity user with agreement options
  companyName = '';
  email = '';
  login = '';
  password = '';
  phone = '';
  unp = '';
  userName = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  toggleNoPerson(event) {
    const controls = document.getElementsByClassName('no-agreement-control') as HTMLCollectionOf<HTMLLinkElement>
    for (const c of Array.from(controls)) {
      c.disabled = false;
    }
    event.target.disabled = true;
    this.personNoAgreement = !this.personNoAgreement;
  }

  toggleWithPerson(event) {
    const controls = document.getElementsByClassName('with-agreement-control') as HTMLCollectionOf<HTMLLinkElement>
    for (const c of Array.from(controls)) {
      c.disabled = false;
    }
    event.target.disabled = true;
    this.personWithAgreement = !this.personWithAgreement;
  }

  regUrWith() {
    const salt = bcrypt.genSaltSync(10);
    const newUserUrWithAgreement: NewUrWithAgreement = {
      companyName: this.companyName,
      email: this.email,
      login: this.login,
      password: bcrypt.hashSync(this.password, 10),
      phone: this.phone,
      unp: this.unp,
      userName: this.userName,
    };

    this.http.post('http://localhost:8080/registration', newUserUrWithAgreement)
      .subscribe(response => {
        console.log(response);
      });
  }
}
