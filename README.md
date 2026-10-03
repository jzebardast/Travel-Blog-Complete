# Travel Blog

A responsive travel blog built with plain HTML, CSS and JavaScript. It was created as a course project and follows a Figma design (desktop 1440 px, large screen 1920 px and mobile).

**Live site:** https://blog-3246.developerakademie.net/  
**Repository:** https://github.com/jzebardast/Travel-Blog-Complete

## What is on the site

- **Home page** with a Cappadocia hero (animated yellow wave and rotating badge), a Highlights carousel, a FAQ accordion and a contact form.
- **Four article pages**: beaches (stacked card carousel), Copenhagen (video), Pattaya (charts) and Mount Fuji (charts).
- **Responsive layout** for mobile, tablet, laptop and large screens, with a bottom navigation on mobile.

## Features

- Highlights carousel with autoplay, dots and swipe support
- FAQ accordion where every item opens and closes independently
- Contact form: the Send button becomes active only after the privacy checkbox is ticked
- Share button on article pages (native share, WhatsApp, Instagram, copy link)
- Navigation with hover effect and highlighting of the section in view

## Project structure

```
index.html          Home page
article1.html       Beaches
article2.html       Copenhagen
article3.html       Pattaya
article4.html       Mount Fuji
style.css           All page styles
font.css            Local font definitions (Arima, Palanquin)
standard.css        Basic reset values
variabels.css       Color and font variables
script.js           Carousel, FAQ, form, share button and navigation
assets/             Fonts, icons and images
```

## Layout rules

- Header and footer backgrounds use the full screen width.
- All content (header, sections, articles, footer) shares one centered line: maximum width 1200 px with 20 px spacing at the sides.
- Text is never smaller than 16 px.

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a browser (or use the Live Server extension in VS Code).

## Design

The layout, colors and icons follow the Figma file of the course.

| Name | Color |
|------|-------|
| Primary green | `#4EA487` |
| Primary yellow | `#F1C953` |
| Brown (text) | `#54370D` |

Fonts: Arima (headings) and Palanquin (text).
