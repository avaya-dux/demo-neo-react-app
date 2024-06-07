export interface ITableFilterTranslations {
  clear?: string;
  close?: string;
  filterColumns?: string;
}
export interface IToolbarTranslations extends ITableFilterTranslations {
  create?: string;
  delete?: string;
  edit?: string;
  large?: string;
  medium?: string;
  noDataAvailable?: string;
  refresh?: string;
  rowsPerPage?: string;
  searchInputPlaceholder?: string;
  selectRowHeight?: string;
  small?: string;
}

export interface IBodyTranslations {
  noDataAvailable?: string;
}

export interface IPaginationTranslations {
  backIconButtonText?: string;
  itemsPerPageLabel?: string;
  nextIconButtonText?: string;
  tooltipForCurrentPage?: string;
  tooltipForShownPagesSelect?: string;
}

export interface ITableHeaderTranslations {
  clearSort?: string;
  filterColumn?: string;
  selectAll: string;
  sortAscending?: string;
  sortDescending?: string;
  toggleSortBy?: string;
}

export interface ITableTranslations {
  toolbar: IToolbarTranslations;
  header: ITableHeaderTranslations;
  body: IBodyTranslations;
  pagination: IPaginationTranslations;
}

export const translations: ITableTranslations = {
  toolbar: {
    clear: "Clear Filter",
    close: "Close",
    create: "Create",
    delete: "Delete",
    edit: "Edit",
    filterColumns: "Filter Columns",
    large: "Large",
    medium: "Medium",
    noDataAvailable: "No data available",
    refresh: "Refresh",
    rowsPerPage: "Rows per page",
    searchInputPlaceholder: "Search all",
    selectRowHeight: "Select row height",
    small: "Small",
  },
  header: {
    clearSort: "Clear Sort",
    filterColumn: "Filter Column",
    selectAll: "select all",
    sortAscending: "A - Z",
    sortDescending: "Z - A",
    toggleSortBy: "Toggle SortBy",
  },
  body: {
    noDataAvailable: "no data available",
  },
  pagination: {
    backIconButtonText: "back",
    nextIconButtonText: "next",
    itemsPerPageLabel: "SHOW: ",
    tooltipForCurrentPage: "현재 페이지",
    tooltipForShownPagesSelect: "items per page",
  },
};
