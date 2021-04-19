import { Component, OnInit } from '@angular/core';
import {EntityWithAgreement, RestapiService} from '../../restapi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // Used for the forms switching
  agreement = false;
  personNoAgreement = false;
  personWithAgreement = false;

  // Entity user with agreement options
  companyName: string;
  email: string;
  login: string;
  password: string;
  phone: string;
  unp: string;
  userName: string;

  constructor(private service: RestapiService, private router: Router) {
    this.companyName = '';
    this.email = '';
    this.password = '';
    this.phone = '';
    this.unp = '';
    this.userName = '';
  }

  ngOnInit(): void {
  }

  toggleNoPerson(event) {
    const controls = document.getElementsByClassName('no-agreement-control') as HTMLCollectionOf<HTMLLinkElement>;
    for (const c of Array.from(controls)) {
      c.disabled = false;
    }
    event.target.disabled = true;
    this.personNoAgreement = !this.personNoAgreement;
  }

  toggleWithPerson(event) {
    const controls = document.getElementsByClassName('with-agreement-control') as HTMLCollectionOf<HTMLLinkElement>;
    for (const c of Array.from(controls)) {
      c.disabled = false;
    }
    event.target.disabled = true;
    this.personWithAgreement = !this.personWithAgreement;
  }

  regUrWith() {
    const newUserUrWithAgreement: EntityWithAgreement = {
      companyName: this.companyName,
      email: this.email,
      login: this.login,
      password: this.password,
      phone: this.phone,
      unp: this.unp,
      userName: this.userName,
    };

    console.log(newUserUrWithAgreement);

    this.service.registerEntityWithAgreement(newUserUrWithAgreement)
      .subscribe(response => {
        if (response === '0') {
          this.router.navigate(['login']);
        }
      });
  }
}
