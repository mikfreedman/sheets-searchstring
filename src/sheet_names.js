 export default function SHEET_NAMES() {
   return SpreadsheetApp.getActiveSpreadsheet().getSheets().filter(s => !s.isSheetHidden()).map(s => s.getSheetName())
 }