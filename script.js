/* script.js */

fetch("./tools/nav_bar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });


fetch("https://api.github.com/repos/El-Jeffe81/Jeff_Stimple/commits/main")
  .then(res => res.json())
  .then(data => {
    document.getElementById("version").textContent =
      data.sha.substring(0, 7);
  });

  .catch(() => {
    document.getElementById("default_footer").textContent = "unknown";
  });

fetch("./tools/version.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("version").innerHTML = data;
  });
