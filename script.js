document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const toggleButton = document.getElementById("toggle-button");
  const sidebar = document.getElementById("sidebar");

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    const gameCards = document.querySelectorAll(".game-card");
    gameCards.forEach(function (card) {
      const title = card.querySelector("h3").textContent.toLowerCase();
      if (title.includes(filter)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    sidebar.style.transform = sidebar.classList.contains("active")
      ? "translateX(0)"
      : "translateX(-100%)";
  });

  const categoryLinks = document.querySelectorAll(".sidebar ul li a");
  const gameCards = document.querySelectorAll(".game-card");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const category = link.getAttribute("data-category").toLowerCase();

      gameCards.forEach((card) => {
        const gameCategory = card.getAttribute("data-category").toLowerCase();
        card.style.display =
          gameCategory.includes(category) || category === "all" ? "" : "none";
      });
    });
  });
});
