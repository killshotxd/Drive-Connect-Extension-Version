function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Start", "showSidebar")
    .addToUi();
}

function showSidebar() {
  let html = HtmlService.createTemplateFromFile("sidebar");
  let ui = html.evaluate().setTitle("Drive Connect");
  SpreadsheetApp.getUi().showSidebar(ui);
}

function header() {
  let ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let headers = ss.getRange("A1:D1");
  headers.setValues([["Name", "Size", "URL", "Download"]]);
  headers.setBackground("#b7e1cd");
  headers.setFontSize(12);
}

function allFiles() {
  var fi = DriveApp.getFiles();
  let ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  while (fi.hasNext()) {
    const file = fi.next();
    const fileInfo = [];
    fileInfo.push(file.getName());
    fileInfo.push(file.getSize());
    fileInfo.push(file.getUrl());
    fileInfo.push(file.getDownloadUrl());
    ss.appendRow(fileInfo);
  }
}
