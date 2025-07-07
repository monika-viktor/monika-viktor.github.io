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

const scriptURL = "https://script.google.com/macros/s/AKfycbwLpSju8OqfpD8gYcWF-Ew-PC4OO66eQqLU2lb-aC-GgCt1UTmIopvV1XTQdtY2ydef/exec"; // ← replace

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

  statusEl.textContent = i18next.t("uploading"); // add key in your locale JSON
  const data = new FormData();
  [...files].forEach((f) => data.append("files[]", f, f.name));

  try {
    const res = await fetch(scriptURL, { method: "POST", body: data });
    statusEl.textContent = await res.text();
    photoInput.value = ""; // reset picker
  } catch (err) {
    statusEl.textContent = i18next.t("uploadFailed");
  }
});
