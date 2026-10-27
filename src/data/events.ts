import type { Lang } from "../i18n";

export type EventType = "retreat" | "conference" | "workshop" | "training";

type Localized = Record<Lang, string>;

export interface EventItem {
  type: EventType;
  title: Localized;
  place?: Localized;
  description?: Localized;
  startDate?: string;
  endDate?: string;
  url?: string;
}

export const events: EventItem[] = [
  {
    type: "retreat",
    title: {
      pl: "Menopause — The Journey of Creation",
      en: "Menopause — The Journey of Creation",
    },
    place: { pl: "Portugalia", en: "Portugal" },
    description: {
      pl: "Gościnnie poprowadzę warsztaty psychologiczne na tygodniowym wyjeździe dla kobiet w wieku menopauzalnym (w języku angielskim).",
      en: "I will be a guest facilitator of psychological workshops during a week-long retreat for women in menopause.",
    },
    startDate: "2027-06-19",
    endDate: "2027-06-25",
    url: "https://www.unaaterra.com/retreats/menopausethejourneyofcreation",
  },
  {
    type: "retreat",
    title: {
      pl: "Tygodniowe warsztaty rozwojowe w Portugalii",
      en: "Week-long development workshops in Portugal",
    },
    place: { pl: "Portugalia", en: "Portugal" },
    description: {
      pl: "Warsztaty rozwojowe połączone z nauką surfingu, jogi i mindfulness.",
      en: "Development workshops combined with learning surfing, yoga and mindfulness.",
    },
    url: "https://www.facebook.com/profile.php?id=100038087425740",
  },
  {
    type: "conference",
    title: {
      pl: "XIV Congress of Therapeutic Horse Riding",
      en: "XIV Congress of Therapeutic Horse Riding",
    },
    place: { pl: "Ateny", en: "Athens" },
    description: {
      pl: "Wykład: „The influence of hippotherapy on emotional response and behaviour of under-aged in Youth Borstal”.",
      en: "Lecture: “The influence of hippotherapy on emotional response and behaviour of under-aged in Youth Borstal”.",
    },
  },
];
