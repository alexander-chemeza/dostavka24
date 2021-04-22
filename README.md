# Dostavka24

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Basic forms templates
#### Checkbox
This is styled in forms.scss.
```
<div class="checkbox-block" style="margin-right: 15px;">
   <input class="checkbox-block-item" type="checkbox" name="if-mail" id="if-mail">
   <span class="checkbox-block-icon"></span>
</div>
```
#### Select
Here Angular Material has been used here. Go to the official web-site for more information.
The custom theme has been placed in material.scss. Example of select:
```
<mat-form-field floatLabel="never" appearance="none">
   <mat-select [(ngModel)]="serviceType">
       <mat-option *ngFor="let service of serviceTypes" [value]="service.value">
          {{service.viewValue}}
       </mat-option>
   </mat-select>
</mat-form-field>
```
