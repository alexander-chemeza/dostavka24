import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  public defaultColDef;
  public rowSelection;
  public paginationPageSize;
  public columnDefsContacts;
  public rowDataContacts;

  constructor() {
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
    };
    this.rowSelection = 'multiple';
    this.paginationPageSize = 10;
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onPaginationChanged(event, space: string) {
    if(this.gridApi) {
      setText(`#current-${space}`, this.gridApi.paginationGetCurrentPage() + 1);
      setText(`#total-${space}`, this.gridApi.paginationGetTotalPages());
    }
  }

  onBtNext() {
    this.gridApi.paginationGoToNextPage();
  }

  onBtPrevious() {
    this.gridApi.paginationGoToPreviousPage();
  }

  onUserPageGrid(event) {
    this.gridApi.paginationSetPageSize(Number(event.target.value));
  }

}

function setText(selector, text) {
  document.querySelector(selector).innerHTML = text;
}
