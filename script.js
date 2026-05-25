/* script.js */
// Uses GitHub-provided commit SHA if available, otherwise fallback
const version =
  document.querySelector('meta[name="version"]')?.content ||
  "dev-" + Date.now();

document.getElementById("version").textContent = version;
