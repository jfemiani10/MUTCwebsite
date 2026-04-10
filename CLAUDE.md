## Project Goal
Build a modern, high-quality website for the Miami University Triathlon Club.

## Tech Stack
- React (Vite)
- Tailwind CSS
- React Router v6 (BrowserRouter — hosted on Vercel, no HashRouter needed)

## Deployment
- Hosted on Vercel (connected to GitHub main branch, auto-deploys on push)
- Repository: github.com/jfemiani10/MUTCwebsite

## Pages & Routes
| Route | Component | File |
|---|---|---|
| `/` | HomePage (inline in App.jsx) | src/App.jsx |
| `/about` | AboutPage | src/pages/AboutPage.jsx |
| `/schedule` | SchedulePage | src/pages/SchedulePage.jsx |
| `/exec` | ExecTeamPage | src/pages/ExecTeamPage.jsx |
| `/donate` | DonatePage | src/pages/DonatePage.jsx |

## Components
| Component | File | Purpose |
|---|---|---|
| Navbar | src/components/Navbar.jsx | Fixed nav, transparent on homepage hero, solid on scroll/other pages. Uses `<Link>` (not buttons). Mobile menu with focus management. |
| Footer | src/components/Footer.jsx | Dark footer, email/location/Instagram, student org disclaimer |
| Hero | src/components/Hero.jsx | Full-screen auto-rotating slideshow (hero1–4.jpg), respects prefers-reduced-motion |
| AboutPreview | src/components/AboutPreview.jsx | Homepage about teaser with joeyFinish.jpg |
| WhatIsTriathlon | src/components/WhatIsTriathlon.jsx | Discipline cards + photo strip + race format cards |
| InstagramSection | src/components/InstagramSection.jsx | Follow @mu_triathlon CTA |
| PracticeSchedule | src/components/PracticeSchedule.jsx | Weekly practice table |
| Events | src/components/Events.jsx | Upcoming race events list |

## Assets in src/assets/
**In use:** logo.png (main logo, transparent PNG, displayed as circle), hero1–5.jpg, allie.jpg, anton.jpg, becca.jpg, bike.jpg, donate1.jpeg, joeyFinish.jpg, max.jpg, openWater.jpg, run.jpg, schedule1.png, team1.jpg, tent.jpg (Events bg), thea.jpg

**Unused/legacy (do not reference):** hero.png, icon.jpeg, logo.jpg, react.svg, vite.svg, swim.jpg, team.jpg, donate.jpeg

## Logo
- File: src/assets/logo.png (transparent PNG — always display with `rounded-full`)
- Favicon: public/logo.png
- Used in Navbar (h-14 w-14) and Footer (h-10 w-10)

## Key Content
- **Contact email:** turlozb@miamioh.edu (president Zach Turlo)
- **Instagram:** @mu_triathlon — https://www.instagram.com/mu_triathlon/
- **Donation URL:** https://securelb.imodules.com/s/916/lg21/form.aspx?sid=916&gid=1&pgid=6010&cid=11236&bledit=1&dids=1275
- **Practice times:** Swim Mon/Thu 5:30–7:30pm (Rec Center); Run Tue/Fri 4:45pm (Art Museum parking lot); Cycling Wed 4:45pm (Student Health Services, south side)
- **Dues:** $200/year with fundraising participation, $400/year to opt out
- **Events (2025 season):** Zoom RedHawk Sep 13 (Hueston Woods), Boilerman Sep TBD (Lake Freeman IN), USAT Nationals Mar TBD

## Exec Team
| Role | Name | Email |
|---|---|---|
| President | Charles Vallone | vallonct@miamioh.edu |
| President | Zach Turlo | turlozb@miamioh.edu |
| Treasurer | Rebecca Kolano | kolanorr@miamioh.edu |
| Secretary | Anton Mueller | muelle42@miamioh.edu |
| Vice President | Quinn LeBorgne | leborgqj@miamioh.edu |
| Safety Officer | Kai Lewis | lewisar5@miamioh.edu |
| Fundraising Chair | Jonah Femiani | femianjy@miamioh.edu |

## Style Guide
- Modern, clean, athletic aesthetic
- Color scheme: white (primary), red (secondary), black (accents)
- Modeled after Miami University athletics (miamiredhawks.com)
- Minimal and professional UI
- All-caps bold typography for headings, eyebrow labels in uppercase tracking-wide
- Page banners: black bg, right-half photo (hidden on mobile), text left — same pattern across About/Schedule/Team/Donate

## Coding Rules
- Use reusable React components
- Keep code simple and readable
- Use Tailwind for all styling
- Avoid unnecessary dependencies
- Navigation links must use `<Link>` from react-router-dom, never `<button onClick={navigate}>` 
- All interactive elements need `focus-visible:outline` styles
- Arrow characters (→) in links/buttons must have `aria-hidden="true"`

## Accessibility (REQUIRED — WCAG 2.1 Level AA)
Miami University policy requires all student organization websites to meet WCAG 2.1 AA.

**Contrast minimums:**
- Normal text (< 24px / < 18.67px bold): ≥ 4.5:1
- Large text: ≥ 3:1
- `text-red-600` (#DC2626) on white = 4.48:1 → **FAILS** for small text. Use `text-red-700` for text-xs/sm labels on white or light backgrounds
- `text-gray-500` on white = 4.48:1 → **FAILS**. Use `text-gray-600` for body text on white/light backgrounds
- `text-gray-500` on `bg-gray-50` = 4.26:1 → **FAILS**. Use `text-gray-600`
- Safe combinations already in use: `text-gray-600` on white (5.74:1 ✓), `text-red-700` on white (5.9:1 ✓), white on black (21:1 ✓), `text-gray-400` on dark backgrounds ✓

**Other requirements:**
- All decorative images: `alt=""` + `aria-hidden="true"`
- All meaningful images: descriptive `alt` text
- Semantic HTML: `<nav aria-label>`, `<main id="main-content">`, `<section aria-labelledby>`, heading hierarchy h1→h2→h3
- Skip-to-content link in App.jsx (already present)
- `aria-current="page"` on active nav links
- `aria-expanded` + `aria-controls` on hamburger button
- Mobile menu must move focus to first item on open
- Hero slideshow must check `prefers-reduced-motion` before starting interval
- Section landmarks should have `aria-labelledby` pointing to their visible heading

## Policy Compliance (Miami University)
- This website represents a registered student organization — not an official university page
- Footer disclaimer must stay: "Miami University Triathlon Club is a registered student organization and does not represent the official views or positions of Miami University."
- Must be registered with the Office of Student Activities
- Content must not promote prohibited or unsafe activities
- Any official university domain (e.g., miamioh.edu alias) requires IT approval
