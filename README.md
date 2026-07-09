
---

# Abdul Kadir — Portfolio

An award-winning, high-end, futuristic developer portfolio website styled with a modern SaaS aesthetic, custom canvas particle backdrops, inertial smooth scrolling, 3D tilt glare-tracking cards, and interactive cursor spring trails.

Inspired by the design quality of **Apple, Linear, Vercel, and Framer**.

---

## 🎨 Theme & Styling System
*   **Background Theme**: `#05070A` (ultra-dark night sky)
*   **Primary Accent**: Emerald Green (`#22C55E`)
*   **Secondary Accent**: Cyan (`#06B6D4`)
*   **Gradient Flow**: Radial and linear mixes of `#22C55E` &rarr; `#16A34A` &rarr; `#06B6D4`
*   **Containers**: Glassmorphism (`backdrop-filter: blur(16px)`), thin custom borders (`rgba(255, 255, 255, 0.05)`), and 24px rounded corners.
*   **Typography**: Headings in **Space Grotesk** (geometric headers) and body copy in **Inter** (high-legibility UI font).

---

## 🚀 Key Features

*   **Custom Cursor Trail**: A spring-bound magnetic trailing pointer that dynamically resizes, shifts color signatures, and spawns ripple effects on click coordinates. Auto-disabled on mobile.
*   **3D Tilt & Glare Card Interactions**: Grid cards (Skills, Projects, Experience, and Contact) tilt in 3D space tracking cursor movement and feature a dynamic radial glow spotlight.
*   **Cinematic Backdrop**: CSS grid overlays combined with animated drifting green/cyan blurs and a lightweight HTML5 Canvas dust particle system.
*   **Scroll-Driven timelines**: The Experience timeline tracks scroll bounds using Framer Motion's `useScroll` to dynamically draw/fill the progress connector line as you scroll down.
*   **Intersection Observer Navbar**: Automatically syncs active nav highlights with section scrolling, with underlines sliding via Framer Motion shared layout `layoutId` tags.
*   **Tag-Based Category Filters**: Project grids dynamically filter and re-arrange components on the fly.
*   **Sci-Fi Radar Map Coordinate**: Illustrates base coordinates (Moradabad, India) using concentric sonar pulses and rotating sweep rings instead of loading bulky standard map APIs.
*   **Floating Status Cards**: Hero avatar graphics are overlayed with floating tags like "Available for Hire" and "Open to Work" that bounce continuously.
*   **Client-Side Form Validation**: Contact inputs feature focus glows, custom labels, client validation triggers, and submission state displays.

---

## 🛠️ Tech Stack

*   **React.js (Vite)** - Client Component architecture
*   **Tailwind CSS** - Utility styling configurations
*   **Framer Motion** - Kinematic animations, viewport reveals, and layouts
*   **Lenis Scroll** - Smooth inertia scrolling mechanics
*   **React Icons** - Vector glyph integrations (Si, Fa, Hi packs)

---

## 📂 Project Structure

```text
src/
├── assets/
│   └── profile.jpg           # Generated developer portrait avatar
├── components/
│   ├── CustomCursor.jsx      # Spring lag pointer trail & click ripples
│   ├── LenisScroll.jsx       # Smooth scrolling initialization wrapper
│   ├── BackgroundEffect.jsx  # Floating radial blurs, noise & particles
│   ├── Magnetic.jsx          # Elastic cursor attraction container
│   ├── TiltCard.jsx          # 3D interactive tilting card wrapper
│   └── Navbar.jsx            # Sticky navigation menu & active indicator
├── constants/
│   └── index.js              # Centralized portfolio data constants
├── layouts/
│   └── MainLayout.jsx        # Main layout structure container
├── sections/
│   ├── Hero.jsx              # Landing introduction page
│   ├── About.jsx             # Profile info rows and counting stats
│   ├── Skills.jsx            # Technology proficiency grid
│   ├── Projects.jsx          # Tag-filtered work showcase
│   ├── Experience.jsx        # Work history scrolling timeline
│   ├── Education.jsx         # Academic timeline
│   ├── Certifications.jsx    # Credential listings
│   ├── Blog.jsx              # Tech logs card grid
│   └── Contact.jsx           # Form inputs validation & radar map
├── utils/
│   └── cn.js                 # Utility function to merge CSS classes
├── hooks/
│   └── useMousePosition.js   # Dynamic viewport mouse pointer tracker
├── index.css                 # Global variables, scrollbars & overrides
├── App.jsx                   # Assembly file connecting layout & sections
└── main.jsx                  # Virtual DOM mounter
```

---

## ⚙️ Running Locally

### 📦 Installation
In the project directory, execute the install script:
```bash
npm install
```

### 💻 Start Developer Server
Launch the Vite hot-reloading development server:
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### 🏗️ Build production bundle
Compile optimized build assets down to code chunks:
```bash
npm run build
```
Build assets compile to the `dist/` directory.

### 🌐 Preview bundle
Locally test the built production bundle:
```bash
npm run preview
```
