import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  columnDefsContrAgent = [
    { headerName: 'Наименование', field: 'name', sortable: true, flex: 1}
  ];

  rowDataContrAgent = [
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
    { name: 'Верхнедвинская районная ветеринарная станция' },
  ];

  public gridApi;
  public gridColumnApi;

  public columnDefsAddress;
  public columnDefsContacts;
  public defaultColDef;
  public rowSelection;
  public rowDataAddress;
  public rowDataContacts;

  constructor() {
    this.columnDefsAddress = [
      {headerName: 'Основной',
        field: 'main',
        sortable: true,
        flex: 1,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        minWidth: 150,
        maxWidth: 200
      },
      {headerName: 'Наименование', field: 'name', sortable: true, filter: true, flex: 3}
    ];

    this.rowDataAddress = [
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'},
      {name: 'г. Брест, УЛ. СОВЕТСКИХ ПОГРАНИЧНИКОВ, д. 1, оф. 1'}
    ];

    this.columnDefsContacts = [
      { headerName: 'Имя контакта',
        field: 'contactNameCheck',
        sortable: true,
        flex: 1,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        minWidth: 200,
        maxWidth: 250
      },
      {
        headerName: 'Имя контакта',
        field: 'contactName',
        sortable: true,
        flex: 1,
        minWidth: 250,
        maxWidth: 400
      },
      {
        headerName: 'Должность',
        field: 'employee',
        sortable: true,
        flex: 1,
        minWidth: 250,
        maxWidth: 400
      },
      {
        headerName: 'Телефон',
        field: 'phone',
        sortable: true,
        flex: 1,
        minWidth: 200,
        maxWidth: 400
      },
      {
        headerName: 'Телефон 1',
        field: 'tel1',
        sortable: true,
        flex: 1,
        minWidth: 200,
        maxWidth: 400
      },
      {
        headerName: 'Телефон 2',
        field: 'tel2',
        sortable: true,
        flex: 1,
        minWidth: 200,
        maxWidth: 400
      },
      {
        headerName: 'Email',
        field: 'email',
        sortable: true,
        flex: 1,
        minWidth: 250,
        maxWidth: 400
      }
    ];

    this.rowDataContacts = [
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
      {contactName: 'Анна', employee: '-', phone: '+375 33 865 55 78', tel1: '+375 33 865 55 78', tel2: '+375 33 865 55 78', email: 'mail@mail.com'},
    ];

    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      resizable: true,
      icons: {check: '../../../assets/img/common/checked.svg'}
    };
    this.rowSelection = 'multiple';
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  ngOnInit(): void {
  }

}
