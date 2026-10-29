const themes = [
  { id: "mustard", label: "Pierwszy motyw" },
  { id: "lilac", label: "Drugi motyw" },
];

const storageKey = "theme";
const root = document.documentElement;
const buttons = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");

const getCurrent = () => themes.find((theme) => theme.id === root.dataset.theme) ?? themes[0];

const render = () => {
  const current = getCurrent();
  buttons.forEach((button) => {
    button.textContent = current.label;
  });
};

const save = (id: string) => {
  try {
    localStorage.setItem(storageKey, id);
  } catch {
    return;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = themes.indexOf(getCurrent());
    const next = themes[(index + 1) % themes.length];
    root.dataset.theme = next.id;
    save(next.id);
    render();
  });
});

render();
