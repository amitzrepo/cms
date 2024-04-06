function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var newRow = sheet.getLastRow() + 1;

  // Get form data
  var companyName = e.parameter.companyName;
  var empId = e.parameter.empId;
  var mobileNumber = e.parameter.mobileNumber;
  var inr500 = e.parameter.INR500 || 0;
  var inr200 = e.parameter.INR200 || 0;
  var inr100 = e.parameter.INR100 || 0;
  var inr50 = e.parameter.INR50 || 0;
  var inr20 = e.parameter.INR20 || 0;
  var inr10 = e.parameter.INR10 || 0;
  var inr1 = e.parameter.INR1 || 0;

  // Insert data into the sheet
  sheet.appendRow([new Date(), companyName, empId, mobileNumber, inr500, inr200, inr100, inr50, inr20, inr10, inr1]);

  return ContentService.createTextOutput("Submitted Successfully").setMimeType(ContentService.MimeType.TEXT);
}
