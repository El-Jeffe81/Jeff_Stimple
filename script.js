/* script.js */
<script>
fetch("https://api.github.com/repos/YOURUSERNAME/YOURREPO/commits/main")
  .then(res => res.json())
  .then(data => {
    document.getElementById("version").textContent =
      data.sha.substring(0, 7);
  })
  .catch(() => {
    document.getElementById("version").textContent = "unknown";
  });
</script>
