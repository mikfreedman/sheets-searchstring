 export default function SHEET_NAMES() {
   let names = [];
   return SpreadsheetApp.getActiveSpreadsheet().getSheets().filter(s => !s.isSheetHidden()).map(s => s.getSheetName())
 }