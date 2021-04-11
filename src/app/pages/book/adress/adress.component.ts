import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  public defaultColDef;
  public rowSelection;
  public paginationPageSize;
  public columnDefsAddress;
  public rowDataAddress;

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
