import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  agreement = false;
  personNoAgreement = false;
  personWithAgreement = false;

  constructor() { }

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

}
