import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
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
        headerName: 'Выбрать',
        field: 'select',
        sortable: false,
        flex: 1,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        minWidth: 150,
        maxWidth: 200
      },
      {
        headerName: 'Номер',
        field: 'number',
        sortable: true,
        flex: 1,
        minWidth: 150,
        maxWidth: 200
      },
      {
        headerName: 'Статусы',
        field: 'status',
        sortable: true,
        flex: 1,
        minWidth: 150,
        maxWidth: 200
      },
      {
        headerName: 'Дата выдачи груза',
        field: 'date1',
        sortable: true,
        flex: 1,
        minWidth: 150,
        maxWidth: 200
      },
      {
        headerName: 'Дата доставки груза',
        field: 'date2',
        sortable: true,
        flex: 1,
        minWidth: 150,
        maxWidth: 200
      },
      {
        headerName: 'услуга',
        field: 'service',
        sortable: true,
        flex: 1,
        minWidth: 150,
        maxWidth: 200
      },
      {
        headerName: 'Отправитель',
        field: 'sender',
        sortable: true,
        flex: 1,
        minWidth: 150,
        maxWidth: 200
      },
      {
        headerName: 'Адрес выдачи груза',
        field: 'address1',
        sortable: true,
        flex: 1,
        minWidth: 150,
        maxWidth: 200
      },
      {
        headerName: 'Адрес доставки груза',
        field: 'address2',
        sortable: true,
        flex: 1,
        minWidth: 150,
        maxWidth: 200
      }
    ];
    this.rowData = [
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
        date1: '21.10.2020',
        date2: '25.10.2020',
        service: 'Экспресс-доставка грузов',
        sender: 'ООО "НТТ Импорт"',
        address1: 'МИНСКАЯ ОБЛАСТЬ, Минский, д. Большое Стиклево, ТЕР. РАЙОН Д. БОЛЬШОЕ СТИКЛЕВО, д. 40, корп. 2',
        address2: 'г. Брест, УЛ. КАТИН БОР, д. 103'
      },
      {
        number: 1234567890,
        status: 'Груз',
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
    this.paginationPageSize = 20;
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
