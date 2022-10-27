export class DataListHelper {
    predefinedRowsCountPerPage = [5, 10, 30, 50, 100, 250, 500];

    defaultRowsCountPerPopup = 10;
    defaultRowsCountPerPage = 30;
    defaultRowsCountPerPageForWidget = 5;
    defaultRowsCountPerScrollPage = 500;
    defaultVirtualScrollHeight = '250px';
    searchText: string = '';

    isResponsive = true;

    resizableColumns: boolean = false;

    totalRowsCount = 0;
    cols: any[] = [];
    rows: any[] = [];
    loading = false;
}
