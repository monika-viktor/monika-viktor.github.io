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

const scriptURL = "https://script.google.com/macros/s/AKfycbzQMAwzIm-mfWDMS54HZymAhKvhw1XAMhDx0jPVpr6PeLG2ZbCdSocjP8Nt3IX_04ZP/exec"; // ← your live Apps Script URL

const uploadForm = document.getElementById("uploadForm");
const photoInput = document.getElementById("photoFiles");
const statusEl   = document.getElementById("uploadStatus");

uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const files = photoInput.files;
  if (!files.length) {
    statusEl.textContent = i18next.t("chooseFiles");
    return;
  }

  statusEl.textContent = i18next.t("uploading");
  const data = new FormData();
  [...files].forEach((f) => data.append("files[]", f, f.name));

  try {
    const res = await fetch(scriptURL, { method: "POST", body: data });
    
    // Add response logging:
    console.log("Status:", res.status);
    const responseText = await res.text();
    console.log("Response:", responseText);
    
    statusEl.textContent = responseText;
    photoInput.value = "";
  } catch (err) {
    console.error("Upload failed:", err);
    statusEl.textContent = i18next.t("uploadFailed");
  }
});
