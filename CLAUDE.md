## Project Goal
Build a modern, high-quality website for the Miami University Triathlon Team.

## Tech Stack
- React (Vite)
- Tailwind CSS

## Style Guide
- Modern, clean, athletic aesthetic
- Color scheme: primarily white with red as secondary color and black accents
- Modeled after Miami University athletics (e.g., miamiredhawks.com/sports/football)
- Minimal and professional UI

## Pages
- Home
- About
- Team / Roster
- Schedule
- Contact

## Coding Rules
- Use reusable React components
- Keep code simple and readable
- Use Tailwind for all styling
- Avoid unnecessary dependencies

## Accessibility (REQUIRED)
- The website MUST conform to WCAG 2.1 Level AA at all times
- This is required by Miami University policy for all student organization websites
- Key requirements:
  - All interactive elements must have visible focus indicators (focus-visible)
  - Navigation links must use <a>/<Link> elements, NOT <button> elements
  - Color contrast: normal text ≥ 4.5:1, large text (≥24px or ≥18.67px bold) ≥ 3:1
  - text-red-600 (#DC2626) on white = 4.48:1 — FAILS for small text; use text-red-700 for text-xs/text-sm labels on light backgrounds
  - text-gray-500 on white = 4.48:1 — FAILS; use text-gray-600 for body text on white/light backgrounds
  - text-gray-500 on bg-gray-50 = 4.26:1 — FAILS; use text-gray-600
  - All images need alt text or aria-hidden="true" if decorative
  - Animations must respect prefers-reduced-motion
  - Mobile menus must move focus to first item on open
  - Section landmarks should have aria-labelledby pointing to their heading
  - Skip-to-content link must be present
  - Pages must have <main id="main-content">

## Policy Compliance (Miami University)
- This website represents a student organization at Miami University
- The organization must be registered with the Office of Student Activities
- The website must follow all university policies and student life guidelines
- Content must not promote prohibited or unsafe activities
- The site should follow accessibility and branding expectations if seeking official recognition
- Any official university domain (e.g., miamioh.edu alias) requires approval from Miami University IT
