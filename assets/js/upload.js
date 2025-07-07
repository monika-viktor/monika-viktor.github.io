/*
 * upload.js — handles the "Share Your Photos" form.
 *
 * ① Deploy your Apps Script as a **Web App** (Deploy → New deployment → Web app).
 *    • Execute as: **Me** (so the script can write to your Drive folder)
 *    • Who has access: **Anyone** (so guests can POST from the website)
 *    • Click **Deploy**, authorise once, then copy the **Web app URL** that ends with /exec
 *
 * ② Paste that URL into the scriptURL constant below, commit, push.
 *
 * Done!  The static site will now POST images directly to Google Drive.
 */

const scriptURL = "https://script.google.com/macros/s/AKfycbyQ57vmwbiQDtzImAL4DvKW4g6W5kEox5ty40NomhbHUMFH5TFIIjYE71Nbyl1zYW2i/exec"; // ← your live Apps Script URL

const uploadForm = document.getElementById("uploadForm");
const photoInput = document.getElementById("photoFiles");
const statusEl = document.getElementById("uploadStatus");

uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const files = photoInput.files;
  if (!files.length) {
    statusEl.textContent = i18next.t("chooseFiles");
    return;
  }

  statusEl.textContent = i18next.t("uploading");
  const data = new FormData();
  
  // Append each file with correct field name
  [...files].forEach((f) => data.append("file", f, f.name));

  try {
    const res = await fetch(scriptURL, {
      method: "POST",
      body: data,
      // Add redirect handling
      redirect: "follow"
    });

    // Log response details
    console.log("Status:", res.status, "OK:", res.ok);
    const responseText = await res.text();
    console.log("Response:", responseText);
    
    statusEl.textContent = responseText;
    photoInput.value = "";
  } catch (err) {
    console.error("Upload error:", err);
    statusEl.textContent = i18next.t("uploadFailed");
  }
});