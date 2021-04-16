import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  public rowData;
  public columnDefs;
  public defaultColDef;
  public rowSelection;
  public paginationPageSize;

  constructor() {
    this.columnDefs = [
      {
        headerName: 'Название шаблона',
        field: 'name',
        sortable: false,
        flex: 1,
        minWidth: 120,
        maxWidth: 170
      },
      {
        headerName: 'Номер',
        field: 'number',
        sortable: true,
        flex: 1,
        minWidth: 100,
        maxWidth: 114
      },
      {
        headerName: 'Тип отправления',
        field: 'type',
        sortable: true,
        flex: 1,
        minWidth: 100,
        maxWidth: 150
      },
      {
        headerName: 'Дата выдачи груза',
        field: 'date1',
        sortable: true,
        flex: 1,
        minWidth: 100,
        maxWidth: 125
      },
      {
        headerName: 'Дата доставки груза',
        field: 'date2',
        sortable: true,
        flex: 1,
        minWidth: 100,
        maxWidth: 125
      },
      {
        headerName: 'Услуга',
        field: 'service',
        sortable: true,
        flex: 1,
        minWidth: 120,
        maxWidth: 160
      },
      {
        headerName: 'Отправитель',
        field: 'sender',
        sortable: true,
        flex: 1,
        minWidth: 140,
        maxWidth: 165
      },
      {
        headerName: 'Адрес выдачи груза',
        field: 'address1',
        sortable: true,
        flex: 1,
        minWidth: 300,
        maxWidth: 370
      },
      {
        headerName: 'Адрес доставки груза',
        field: 'address2',
        sortable: true,
        flex: 1,
        minWidth: 250,
        maxWidth: 290
      }
    ];
    this.rowData = [
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        name: 'шаблон Max',
        number: 1234567890,
        type: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
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

  onPaginationChanged(event) {
    if(this.gridApi) {
      setText('#current', this.gridApi.paginationGetCurrentPage() + 1);
      setText('#total', this.gridApi.paginationGetTotalPages());
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
