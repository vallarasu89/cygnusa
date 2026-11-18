# CYGNUSA Technologies — Corporate Website

A premium, modern corporate website built for **CYGNUSA Technologies**, inspired by the enterprise structure, navigation experience, and layout clarity of Hitachi Vantara while maintaining CYGNUSA's distinct brand identity.

## Overview & Highlights

- **Visual Design:** Clean white and light corporate surfaces with 60/30/10 brand palette (Cygnusa Sky `#0EA5E9`, Cosmic Deep `#0ea5e9`, Void Black `#0F172A`, Ether White `#F0F9FF`, Silver Mist `#64748B`, Abundance Green `#10B981`).
- **Typography:** Poppins (Headings: 600, 700, 800) and Inter (Body/UI: 400, 500, 600).
- **Mega Menu (Hitachi Vantara Style):** Full-width, 3-column architecture (Left category sidebar, Center content & links, Right featured card) with active state switching, outside-click close, Escape key support, and mobile accordion.
- **Genuine Credentials:** Incorporates CYGNUSA's real company data, verified case studies (APAC Dice App, GoFuel, Airportzo, TLCX), ISO certifications (ISO 27001, 20000-1, 9001), and global delivery footprint.
- **Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, React Router DOM, Lucide Icons, React Hook Form, Zod validation, and React Helmet Async.

## Project Structure

```
cygnusa-website/
├── public/                # Static assets, logos, favicon, robots.txt, sitemap.xml
├── src/
│   ├── assets/            # Brand marks and graphics
│   ├── components/
│   │   ├── common/        # Button, SectionHeading, ImageWithFallback, Breadcrumbs
│   │   ├── forms/         # ContactForm (RHF + Zod)
│   │   ├── layout/        # Header, Footer, MainLayout, Container
│   │   ├── navigation/    # Navbar, MegaMenu (3 columns), MobileNavigation
│   │   └── sections/      # 11 homepage modular sections
│   ├── data/              # navigation, services, solutions, industries, caseStudies, insights
│   ├── hooks/             # useMediaQuery, useScrollPosition
│   ├── lib/               # utils, validation schemas
│   ├── pages/             # Home, About, Services, Solutions, Industries, CaseStudies, Insights, Contact, PrivacyPolicy, NotFound
│   ├── seo/               # SEO meta management & JSON-LD schema generators
│   └── styles/            # globals.css, variables.css, animations.css
```

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
