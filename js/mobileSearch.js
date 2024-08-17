document
  .getElementById("searchToggleBtn")
  .addEventListener("click", function () {
    const searchBar = document.getElementById("searchBar");

    if (searchBar.classList.contains("show")) {
      searchBar.classList.remove("show");
      searchBar.classList.add("hide");
    } else {
      searchBar.classList.remove("hide");
      searchBar.classList.add("show");
    }
  });
