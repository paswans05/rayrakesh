# Rakesh Ray - Next.js Interior Design Landing Page Template

**Rakesh Ray** is a Next.js Interior Design Landing Page Template crafted with a modern architecture, rich aesthetics, and a premium visual user experience. Built using Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

---

## 🌟 Key Features

- **Modern Luxury Design**: Crafted with curated color palettes (warm bronze accents and deep charcoal darks), sleek typography (`Libre Franklin` headings and `Roboto` body text), and smooth micro-animations.
- **Multi-Page Layouts**: Complete page structures for **Home**, **About Us**, **Services**, **Projects**, **Project Detail**, **Team**, **FAQs**, **Blog**, **Blog Detail**, and **Contact Us**.
- **Interactive Direction-Aware Hero Carousel**: Built on Embla Carousel with automated CSS state transitions (`group-data-active/slide`), direction-aware background parallax effects, and staggered reveal animations.
- **Dynamic Component Architecture**: 
  - Dynamic 3-step process section (*How It Works*).
  - Reusable project showcase & testimonials sliders.
  - Interactive video modal popup (`VideoPopup`).
  - Contact section featuring Google Maps integration & interactive service request forms.
- **Tailwind CSS v4 `@theme` Engine**: Pure CSS design tokens with custom grid utilities (`row`, `column-6`, etc.) and animation keyframes without legacy JS configuration files.
- **Full Type Safety**: Clean TypeScript definitions across all sections and data models.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) and `npm` installed.

### Installation

Clone the repository and install dependencies:

```bash
# Install project dependencies
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 🛠️ Build & Type Verification

To check TypeScript types and build the production bundle:

```bash
# Typecheck codebase
npx tsc --noEmit

# Build production bundle
npm run build
```

---

## 📁 Project Structure

```
├── src/
│   ├── app/                # Next.js 16 App Router page routes (Home, About, Services, Contact, etc.)
│   ├── components/         # Modular UI & Section components
│   │   ├── layout/         # Header, Footer, Navbar, Section wrappers
│   │   ├── sections/       # Hero, About, Services, Projects, Reviews, HowItWorks, Contact
│   │   └── ui/             # Button, Carousel, VideoPopup, Tooltip, Dropdown
│   ├── data/               # Structured data files (services, projects, team, process, reviews)
│   ├── css/                # Tailwind CSS v4 globals, grid system, and utility styles
│   ├── hooks/              # Custom React hooks (useFormatDate, etc.)
│   └── lib/                # Utility helper functions (cn, clsx)
├── design.md               # Design system & token documentation
└── README.md               # Project documentation
```

---

## 📄 License

This project is licensed under the MIT License.
