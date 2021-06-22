(() => {
  document
    .getElementsByClassName("toggleMode")[0]
    .addEventListener("click", (event) => {
      const currentTheme = event.target.dataset.theme;
      event.target.dataset.theme = currentTheme === "dark" ? "light" : "dark";

      document.body.classList.toggle("dark");
    });
})();
