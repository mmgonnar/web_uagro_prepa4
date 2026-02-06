# Web UAGro Prepa 4 – Preparatoria No. 4 "Pablo Neruda"

Web UAGro Prepa 4 is a modern institutional website for **Preparatoria No. 4 "Pablo Neruda"**, part of the Universidad Autónoma de Guerrero (UAGro). It showcases the school’s 60th anniversary (1965–2025), history, leadership team, announcements, and news in a clean, responsive interface.

## Live Demo

Check out the latest version of the app here:

_Add your deployment URL here (e.g. web-uagro-prepa4.vercel.app)_

## Features

### Core Features

- **Hero banner**: Full-viewport hero with 60th anniversary messaging, school name, and call-to-action.
- **School stats**: Key metrics (e.g. active students, years of experience, teaching staff) on the banner.
- **History section**: “Nuestra Historia” content block with link to more (e.g. /nosotros).
- **Team section**: Administrative and leadership team presented in a carousel with member cards.
- **Announcements**: Important dates and notices with an interactive calendar and announcement cards.
- **Logo carousel**: UAGro entity logos (E,U,F,O,V UAGro) in an auto-playing carousel.
- **News section**: Latest news, events, and updates from the school community.
- **Header & navigation**: Sticky header with logo, school name, and nav links (Inicio, Historia, Equipo, Noticias).
- **Footer**: UAGro logo, quick links, breadcrumb, contact info, social media, and copyright.
- **Responsive UI**: Mobile-first layout that works across devices.
- **Reusable UI components**: Buttons, cards, badges, labels, carousels, and calendar built for consistency.

### Content & UX

- **Content sections**: Reusable section layout with icon, label, title, description, and optional CTA.
- **Timeline**: (Available in code) Timeline components for history or events; can be wired into “Nuestra Historia.”
- **Calendar**: Date picker in the announcements area for viewing events by date.
- **Loading & polish**: Structured layout and component patterns suitable for adding loaders and error states later.

### In Progress / Planned

- **History page (/nosotros)**: Dedicated “Nuestra Historia” page with full timeline.
- **News & announcements data**: Connect sections to CMS or API for dynamic content.
- **Additional routes**: Separate pages for team, news, and other sections as needed.

## Technologies Used

| Area | Stack |
|------|--------|
| **Frontend** | React 19, Next.js 15 (App Router), TypeScript |
| **Styling** | Tailwind CSS 4, PostCSS |
| **UI** | Radix UI (via Shadcn UI), Lucide React, class-variance-authority, tailwind-merge, clsx |
| **Components** | Custom feature-based components (banner, header, footer, content-section, team, news, announcements, timeline, logo-carousel, ui primitives) |
| **Carousel** | Embla Carousel (embla-carousel-react, embla-carousel-autoplay) |
| **Calendar** | react-day-picker, date-fns |
| **Tooling** | ESLint, Prettier (with Tailwind plugin), Turbopack for dev/build |

## Project Structure

```
app/                    # Next.js App Router
  layout.tsx            # Root layout and metadata
  page.tsx              # Home page composition
  globals.css           # Global styles

features/               # Feature-based modules
  announcements/        # Announcements + calendar section
  banner/               # Hero banner and school stats
  content-section/      # Reusable content block (icon, title, text, CTA)
  footer/               # Footer (logo, links, contact, social, copyright)
  header/               # Header, logo, navbar
  logo-carousel/        # UAGro entity logos carousel
  news/                 # News section and cards
  team/                 # Team carousel and member cards
  timeline/             # Timeline (history/events)
  ui/                   # Shared UI (button, card, badge, label, carousel, calendar)

utils/                  # Shared utilities
  constants.ts          # Nav items, footer links, social media, school data
  functions.ts          # Helpers (e.g. cn)
  types.ts              # Shared types

public/                 # Static assets (images, logos, icons)
```

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/web_uagro_prepa4
   cd web_uagro_prepa4
   ```

2. **Install dependencies**

   Using **bun** (recommended):

   ```bash
   bun install
   ```

   Or with **npm**:

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open in the browser**

   Go to [http://localhost:3000](http://localhost:3000).

### Other scripts

- `bun run build` / `npm run build` – Production build (with Turbopack).
- `bun run start` / `npm run start` – Run production server.
- `bun run lint` / `npm run lint` – Run ESLint.
- `bun run format` / `npm run format` – Format with Prettier.
- `bun run format:check` / `npm run format:check` – Check formatting.

## Development & Best Practices

- **Feature-based structure**: Code is organized by feature (e.g. `features/banner`, `features/team`) for scalability.
- **Reusable sections**: `ContentSection` and shared UI components keep the home page DRY and consistent.
- **TypeScript**: Typed props, shared types in `features/*/types` and `utils/types.ts`.
- **Mobile-first**: Layout and styles are built for small screens first, then enhanced for larger ones.
- **Shadcn/Radix**: UI primitives are themable and accessible where applicable.
- **No env required for run**: The app runs without environment variables; add `.env.local` if you add APIs or CMS later.

## Contact

For questions or suggestions about this project:

- **Email**: _Add your email_
- **LinkedIn**: _Add your LinkedIn_
- **Repository**: _Add your GitHub repo URL_

Feedback and contributions are welcome. This project aims to give Preparatoria No. 4 "Pablo Neruda" a clear, modern presence on the web.
