(() => {
  let defaultMode = "light";
  let mode = window.localStorage.getItem("mode");

  if (!mode) {
    window.localStorage.setItem("mode", defaultMode);
    mode = defaultMode;
  }

  const modeBtn = document.getElementsByClassName("toggleMode")[0];
  modeBtn.dataset.theme = mode;
  document.body.classList.add(mode);

  modeBtn.addEventListener("click", (event) => {
    const currentTheme = event.target.dataset.theme;
    event.target.dataset.theme = currentTheme === "dark" ? "light" : "dark";

    window.localStorage.setItem("mode", event.target.dataset.theme);
    document.body.classList.remove(currentTheme);
    document.body.classList.add(event.target.dataset.theme);
  });
})();
