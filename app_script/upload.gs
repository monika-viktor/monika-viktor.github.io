function doPost(e) {
  var folderId = "YOUR_FOLDER_ID";
  var dropbox = DriveApp.getFolderById(folderId);
  var blobs = e.parameters["files[]"];
  if (!blobs || !blobs.length) {
    return ContentService.createTextOutput("No files");
  }
  blobs.forEach(function (blob, i) {
    var name = blob.getName() || "photo_" + Date.now() + "_" + i;
    dropbox.createFile(blob).setName(name);
  });
  return ContentService.createTextOutput("Thanks! Files uploaded.");
}
