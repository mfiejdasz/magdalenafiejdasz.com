# Psychoterapia

Strona-wizytówka gabinetu psychoterapii w dwóch wersjach językowych: polskiej (`/`) i angielskiej (`/en/`).

## Stack

- Astro 5 (statyczny HTML, bez frameworka JS)
- Sass (SCSS)
- astro-icon + ikony Lucide
- Fontsource (czcionki hostowane lokalnie)
- `@astrojs/sitemap`

## Uruchomienie

```sh
npm install
npm run dev
npm run build
npm run preview
npm run check
```

## Struktura

- `src/i18n/pl.ts`, `src/i18n/en.ts` – wszystkie teksty strony (typ z `pl.ts` wymusza zgodność kluczy w EN)
- `src/config.ts` – dane gabinetu: link do rezerwacji, telefon, e-mail, adres
- `src/components/` – komponenty sekcji
- `src/layouts/Layout.astro` – `<head>`, meta, `hreflang`, canonical
- `src/pages/` – `index.astro` (PL), `en/index.astro` (EN), `404.astro`, `robots.txt.ts`
- `src/styles/` – zmienne, mixiny i style globalne

## Do uzupełnienia przed publikacją

- `site` w `astro.config.mjs` (obecnie `https://example.com`) – używane w canonical, `hreflang`, sitemap i `robots.txt`
- prawdziwe dane kontaktowe i link do ZnanyLekarz w `src/config.ts`
- teksty, ceny i zdjęcia
- obraz `og:image`
- formularz kontaktowy i polityka prywatności
