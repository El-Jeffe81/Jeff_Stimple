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

    console.log("Footer loaded");

    document.getElementById("default_footer").innerHTML = data;

    return fetch(
      "https://api.github.com/repos/El-Jeffe81/Jeff_Stimple/commits/main"
    );

  })
  .then(res => res.json())
  .then(data => {

    console.log(data);

    document.getElementById("version").textContent =
      data.sha.substring(0, 7);

  })
  .catch(error => {

    console.log("ERROR:", error);

  });
