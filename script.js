/* script.js */

// Socials bar
fetch("./tools/social_bar.html")
  .then(response => response.text())
  .then(data => {

    document.getElementById("socials-bar").innerHTML = data;

  });

// NAVBAR
fetch("./tools/nav_bar.html")
  .then(response => response.text())
  .then(data => {

    document.getElementById("navbar").innerHTML = data;

  });




// FOOTER
fetch("./tools/default_footer.html")
  .then(response => response.text())
  .then(html => {

    document.getElementById("default_footer").innerHTML = html;

    // NOW guarantee DOM is updated before continuing
    const versionEl = document.getElementById("version");

    return fetch("https://api.github.com/repos/El-Jeffe81/Jeff_Stimple/commits/main")
      .then(res => res.json())
      .then(data => {

        if (versionEl) {
          versionEl.textContent = data.sha.substring(0, 7);
        }

      });

  })
  .catch(error => {
    console.log("ERROR:", error);
  });
