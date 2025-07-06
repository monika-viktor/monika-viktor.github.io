const scriptURL = "YOUR_DEPLOYED_WEB_APP_URL"; // <- replace

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
  statusEl.textContent = "Uploading...";
  const data = new FormData();
  [...files].forEach((f) => data.append("files[]", f, f.name));
  try {
    const res = await fetch(scriptURL, { method: "POST", body: data });
    statusEl.textContent = await res.text();
    photoInput.value = ""; // reset picker
  } catch (err) {
    statusEl.textContent = "Upload failed";
  }
});