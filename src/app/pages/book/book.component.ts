import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // Grid
  public gridApi;
  public gridColumnApi;
  public autoGroupColumnDef;
  public defaultColDef;
  public rowSelection;
  public rowGroupPanelShow;
  public pivotPanelShow;
  public paginationPageSize;
  public paginationNumberFormatter;
  // Columns
  public columnDefsContrAgent;
  public columnDefsAddress;
  public columnDefsContacts;
  // Rows
  public rowDataContrAgent;
  public rowDataAddress;
  public rowDataContacts;

  constructor() {
    // Columns
    this.columnDefsContrAgent = [
      { headerName: 'Наименование', field: 'name', sortable: true, flex: 1}
    ];
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
    // Rows
    this.rowDataContrAgent = [
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
    // Grid
    // this.defaultColDef = {
    //   // editable: true,
    //   // // enableRowGroup: true,
    //   // // enablePivot: true,
    //   // // enableValue: true,
    //   sortable: true,
    //   resizable: true,
    //   filter: true,
    //   flex: 1,
    //   minWidth: 100,
    // };
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
    this.paginationPageSize = 10;

    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      resizable: true,
      icons: {check: '../../../assets/img/common/checked.svg'}
    };
    this.paginationNumberFormatter = function(params) {
      return '[' + params.value.toLocaleString() + ']';
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log(this.gridApi);
  }

  ngOnInit(): void {
  }

  onPageSizeChanged(event) {
    const value = event.target.value;
    console.log(value);
    this.gridApi.paginationSetPageSize(Number(value));
    this.gridApi.paginationGetCurrentPage();
  }
}
