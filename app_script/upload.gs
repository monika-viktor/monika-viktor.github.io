/**
 * Receives a multipart/form-data POST from the site
 * and saves every “files[]” blob to a Drive folder.
 * Front-end: assets/js/upload.js
 */
function doPost(e) {
  const folder = DriveApp.getFolderById('16h9GpDxkEYubk0iBCeB7h7mAEUDtM3_W');

  // Google gives either a single blob or an array when several
  let blobs = e.parameters['files[]'];
  if (!blobs) {
    return ContentService.createTextOutput('No files');
  }
  if (!Array.isArray(blobs)) blobs = [blobs];     // normalise

  blobs.forEach((blob, i) => {
    const name = blob.getName() || `photo_${Date.now()}_${i}`;
    folder.createFile(blob).setName(name);
  });
  return ContentService.createTextOutput('Thanks! Files uploaded.');
}