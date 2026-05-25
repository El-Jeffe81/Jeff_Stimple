/* script.js */

/* script.js */


// NAVBAR
fetch("./tools/nav_bar.html")
  .then(response => response.text())
  .then(data => {

    document.getElementById("navbar").innerHTML = data;

  });




// FOOTER
fetch("./tools/default_footer.html")
  .then(response => response.text())
  .then(data => {

    // inject footer HTML first
    document.getElementById("default_footer").innerHTML = data;

    // THEN fetch GitHub version
    return fetch(
      "https://api.github.com/repos/El-Jeffe81/Jeff_Stimple/commits/main"
    );

  })
  .then(res => res.json())
  .then(data => {

    document.getElementById("version").textContent =
      data.sha.substring(0, 7);

  })
  .catch(() => {

    document.getElementById("version").textContent =
      "unknown";

  });
