import type { Dictionary } from "./pl";

export const en: Dictionary = {
  meta: {
    title: "Psychotherapy – Find Calm and Understanding",
    description:
      "Online psychotherapy for adults. A safe, friendly atmosphere and support in discovering your own path.",
  },
  brand: "Psychotherapy",
  nav: {
    menu: "Menu",
    about: "About me",
    services: "Services",
    firstVisit: "First visit",
    pricing: "Pricing",
    contact: "Contact",
    book: "Book a visit",
  },
  languageSwitch: {
    text: "PL",
    label: "Wersja polska",
  },
  hero: {
    eyebrow: "Psychotherapy online",
    titleLine: "I walk beside you",
    titleHighlight: "as you discover your own path",
    text: "I follow your lead with curiosity and attentiveness, in a safe, friendly atmosphere. With one shared goal – improving your quality of life.",
    cta: "Book a visit",
    more: "Learn more",
  },
  about: {
    eyebrow: "About me",
    imageAlt: "Magdalena Fiejdasz, psychotherapist",
    title: "Magdalena Fiejdasz",
    role: "Psychotherapist · psychologist · educator · hippotherapist · canine-assisted therapist",
    paragraphs: [
      "For over 20 years I have been supporting people who find themselves at a critical point in life. I work in an integrative approach based on humanistic-experiential psychotherapy.",
      "Out of my love for nature, I invite animals – horses and dogs – and nature itself – forests, mountains, the ocean – into my work. I believe nature supports the healing process, which is why, besides therapy sessions, I organise personal development retreats in beautiful natural places.",
    ],
    facts: [
      { value: "20+", label: "years of experience" },
      { value: "Online", label: "work with people 18+" },
      { value: "Supervision", label: "ongoing supervision" },
    ],
    education: {
      title: "Education",
      items: [
        "4-year INTRA School of Psychotherapy",
        "Psychology at SWPS University in Warsaw",
        "Social rehabilitation pedagogy at the Maria Grzegorzewska University in Warsaw",
        "Movement recreation instructor course with a specialisation in hippotherapy (member of the Polish Hippotherapy Society)",
        "Canine-assisted therapy course",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        "Individual psychotherapy for adults",
        "Support groups for women who have experienced domestic violence at the Mederi Foundation",
        "Work with teenagers in foster care (WCPR) – individual and group support, therapeutic camps",
        "Work with youth with behavioural disorders (MOS, MOW, SOW) – sociotherapy, hippotherapy, canine-assisted therapy, art therapy and wilderness therapy",
        "Workshops and trainings, including for SWPS University in Warsaw and the Polish Hippotherapy Society",
      ],
      moreLabel: "See more",
      moreItems: [
        "Talks at international conferences, including the 14th Congress of Therapeutic Horse Riding in Athens – lecture “The influence of hippotherapy on emotional response and behaviour of under-aged in Youth Borstal”",
        "Organising and running violence prevention projects",
        "Organising trips for young people and week-long development workshops for adults",
        "Articles on psychological topics in the press",
      ],
    },
  },
  services: {
    eyebrow: "Services",
    title: "How can I help you?",
    items: [
      {
        title: "Therapy for adults",
        description:
          "Individual sessions that help you understand yourself and cope with anxiety, depression, stress and difficulties in relationships. We work at your pace.",
        points: ["Anxiety and panic attacks", "Depression and low mood", "Life crises", "Relationship difficulties"],
      },
      {
        title: "Family therapy",
        description:
          "Joint sessions for families who want to improve communication, resolve conflicts and rebuild closeness. A safe space for every family member.",
        points: ["Family conflicts", "Communication problems", "Support in a crisis", "Building bonds"],
      },
    ],
  },
  firstVisit: {
    eyebrow: "First visit",
    title: "What to expect?",
    intro: "I know the first step is often the hardest. Here is what the path to the first meeting looks like.",
    steps: [
      {
        title: "Contact",
        description: "Call or write to me. I will answer your first questions.",
      },
      {
        title: "First conversation",
        description: "The meeting lasts about 50 minutes. We get to know each other and talk about your needs and expectations.",
      },
      {
        title: "Safe space",
        description: "You do not need to prepare. Just come as you are.",
      },
      {
        title: "Therapy plan",
        description: "Together we set the goals and the frequency of sessions. You decide on your own pace.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Transparent rules",
    items: [
      { name: "Initial consultation", duration: "50 min", price: "200 PLN" },
      { name: "Individual session", duration: "50 min", price: "200 PLN" },
      { name: "Family session", duration: "80 min", price: "300 PLN" },
    ],
    officeTitle: "In-person office",
    officeText: "Sessions take place on site in a cosy office.",
    cta: "Book a visit",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    address: "Address",
    phone: "Phone",
    email: "E-mail",
  },
  footer: {
    rights: "All rights reserved",
    credit: "Made by",
  },
  notFound: {
    title: "404",
    text: "Page not found",
    back: "Back to the home page",
  },
};
