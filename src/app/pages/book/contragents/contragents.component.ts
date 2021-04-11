import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contragents',
  templateUrl: './contragents.component.html',
  styleUrls: ['./contragents.component.scss']
})
export class ContragentsComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  public defaultColDef;
  public rowSelection;
  public paginationPageSize;
  public columnDefsContrAgent;
  public rowDataContrAgent;

  constructor() {
    this.columnDefsContrAgent = [
      { headerName: 'Наименование', field: 'name', sortable: true, flex: 1}
    ];
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
