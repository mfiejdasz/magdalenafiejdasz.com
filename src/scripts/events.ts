const lists = {
  upcoming: document.querySelector<HTMLElement>('[data-event-list="upcoming"]'),
  past: document.querySelector<HTMLElement>('[data-event-list="past"]'),
};

const groups = {
  upcoming: document.querySelector<HTMLElement>('[data-event-group="upcoming"]'),
  past: document.querySelector<HTMLElement>('[data-event-group="past"]'),
};

if (lists.upcoming && lists.past && groups.upcoming && groups.past) {
  const pad = (value: number) => String(value).padStart(2, "0");
  const now = new Date();
  const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-event-card]"));
  const start = (card: HTMLElement) => card.dataset.start ?? "";
  const isUpcoming = (card: HTMLElement) => {
    const end = card.dataset.end ?? "";
    return end !== "" && end >= today;
  };

  const upcoming = cards.filter(isUpcoming).sort((a, b) => start(a).localeCompare(start(b)));
  const past = cards
    .filter((card) => !isUpcoming(card))
    .sort((a, b) => {
      if (!start(a) || !start(b)) return start(b) ? 1 : start(a) ? -1 : 0;
      return start(b).localeCompare(start(a));
    });

  const fill = (key: "upcoming" | "past", items: HTMLElement[]) => {
    items.forEach((card) => {
      card.dataset.status = key;
      lists[key]!.appendChild(card);
    });
    groups[key]!.hidden = items.length === 0;
  };

  fill("upcoming", upcoming);
  fill("past", past);
}
