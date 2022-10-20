export class DataListHelper {
    predefinedRecordsCountPerPage = [5, 10, 30, 50, 100, 250, 500];

    defaultRecordsCountPerPopup = 10;
    defaultRecordsCountPerPage = 30;
    defaultRecordsCountPerPageForWidget = 5;
    defaultRecordsCountPerScrollPage = 500;
    defaultVirtualScrollHeight = '250px';

    isResponsive = true;

    resizableColumns: boolean = false;

    totalRecordsCount = 0;
    cols: any[] = [];
    records: any[] = [];
    loading = false;
}
