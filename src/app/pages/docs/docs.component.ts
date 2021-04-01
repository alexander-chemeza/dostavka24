import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  showModal(event) {
    let inc = 0;
    const modalOverlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    modalOverlay.style.display = 'block';
    modal.style.display = 'flex';
    setInterval(() => {
      if (inc <= 1) {
        inc += 0.2;
        modalOverlay.style.opacity = `${inc}`;
        modal.style.opacity = `${inc}`;
      }
    }, 50);
  }

  hideModal(event) {
    let inc = 1;
    const modalOverlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    setInterval(() => {
      if (inc > 0) {
        inc -= 0.2;
        modalOverlay.style.opacity = `${inc}`;
        modal.style.opacity = `${inc}`;
      } else {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
      }
    }, 50);
  }

}
