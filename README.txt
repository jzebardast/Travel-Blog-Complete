# Travel Blog – Fixes applied (based on feedback + Wireframes)

## Applied from 3 feedback videos + Figma wireframes

### Layout / Structure
- [x] Content max-width consistent (1440px / sections ~1200px)
- [x] Header full-bleed teal, inner content max 1440px
- [x] Footer full-bleed teal, padding 60px 120px on large screens
- [x] Sticky footer (no white bar / no extra scroll)
- [x] main { flex: 1 } for proper footer stick

### Hero
- [x] Yellow wave path updated from Property 1=03.svg
- [x] Text max-width tightened so it stays inside yellow area
- [x] Badge + photo structure preserved

### FAQ
- [x] Items background #F1C953 (yellow) as in Figma
- [x] border-radius 12px, gap 32px
- [x] Accordion grid animation

### Contact form
- [x] Underline inputs (border-bottom only)
- [x] Send button: disabled = outlined grey; active = teal bg + yellow text
- [x] Privacy checkbox enables Send (JS already present)
- [x] Form max-width ~1100px

### Icons / Assets
- [x] Social icons paths fixed (images/ folder)
- [x] Nav mobile icons paths fixed
- [x] Font paths fixed relative to css/

### Nav
- [x] Hover wiggle + yellow underline (::after) already present

## Still recommended (next pass)
- [ ] Export / replace social icons with exact Figma yellow-circle SVGs if PNG quality differs
- [ ] Article pages: unify content width, Pro-tips rotated label, Share button design
- [ ] Hero on very large screens (1920): header full 1920, content 1440 centered
- [ ] Carousel notebook scaling (images not cut off)
- [ ] Mount Fuji page (article4) – optional layout reuse

## How to use
1. Open `index.html` in browser (or serve the folder)
2. Work in the **same** GitHub repo – new commits only, do not create new repo
3. Make repo **Public**

Colors: --teal #4EA487 | --yellow #F1C953 | --brown #54370D
