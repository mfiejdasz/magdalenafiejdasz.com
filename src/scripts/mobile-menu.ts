const nav = document.querySelector<HTMLElement>("[data-navbar]");
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
const backdrop = document.querySelector<HTMLElement>("[data-menu-backdrop]");

if (nav && toggle && menu && backdrop) {
  const isOpen = () => nav.dataset.open === "true";

  const setOpen = (open: boolean) => {
    nav.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.inert = !open;
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  backdrop.addEventListener("click", () => setOpen(false));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}
