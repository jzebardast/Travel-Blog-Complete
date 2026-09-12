Travel Blog – Complete Project
==============================
CHANGELOG
=========
- Hamburger-Menü auf Mobilgeräten entfernt
- Zentrierung der Abschnitts-Überschriften korrigiert (Highlights, FAQ, Kontakt)
- Hero-Bereich für kleine Bildschirme optimiert
- Neues, scharfes Logo eingefügt
- Nicht verwendete Bild- und Icon-Dateien entfernt
- Deploy-Pfad korrigiert (Dateien liegen jetzt im Hauptverzeichnis)
- Footer-Abstand auf Desktop korrigiert (unnoetiger Weissraum unter dem Footer entfernt)
- Content-Breite in Artikelseiten vereinheitlicht (Hero, Text und Charts nutzen jetzt dieselbe Breite)
- Karussell-Groesse fuer Laptop-Bildschirme angepasst (Bilder werden nicht mehr seitlich abgeschnitten)
- Social-Media-Icons (TikTok, YouTube, Facebook, Instagram) durch echten Figma-Export ersetzt (einheitliche Farbe, abgerundete Ecken, korrekt zentriert)
- Hover-Effekte fuer Highlights/FAQ/Contact-Links hinzugefuegt (Wackel-Animation + Unterstrich)
- Cappadocia-Badge im Hero-Bereich durch echtes Figma-Design ersetzt (Tuerkei-Flagge + rotierender Text)
- Mount-Fuji-Unterseite (article4.html) erstellt und Link auf der Startseite korrigiert
- Share-Button-Textfarbe auf Gelb korrigiert (passend zu Figma)
- Contact-Formular-Checkbox neu gestaltet (brauner Rahmen leer, tuerkis mit gelbem Haken wenn aktiviert)
- Highlights-Icon durch echtes Figma-Icon ersetzt (Rakete statt falschem Platzhalter-Icon)
- FAQ-Pfeile durch echtes Figma-Icon ersetzt (outlined Chevron statt gefuelltem Dreieck)
- Weisse Box hinter dem Highlights-Karussell-Text entfernt (dunkler Farbverlauf statt Weissglas-Effekt)
- Mobile Bottom-Nav-Icons durch echte Figma-Icons ersetzt (Home, Highlights, FAQ, Contact)
- FAQ-Icon korrigiert (gelbes live_help-Icon statt tuerkisem Platzhalter, Ausrichtung an Figma-Spezifikation angepasst)
- Cappadocia-Badge-Position im Hero-Bereich korrigiert (ueberlappte vorher den Paragraphen-Text, jetzt exakt an Figma-Position)
- Highlights-Karussell-Textbox: transparenter weisser Hintergrund (10% Deckkraft) exakt nach Figma-Spezifikation wiederhergestellt
- Header komplett nach Figma-Spezifikation korrigiert: Hoehe 72px auf 128px, Logo 52px auf 72px, Nav-Abstand 48px auf 72px, Schriftgroesse 20px auf 24px, Layout von 'space-between' auf gruppiert (Logo+Nav zusammen links, 102px Abstand dazwischen)
- Pro-Tipps-Box nach Figma korrigiert: Hintergrund-Deckkraft, Eckenradius 30px, Label-Schriftgroesse und -Rotation, Textfarbe
- Share-CTA-Text auf 24px vergroessert, dekorativer gelber Pfeil neben dem Share-Button hinzugefuegt (laut Figma-Spezifikation)

PAGES
- index.html     → Home (Hero Cappadocia, Highlights carousel, FAQ accordion, Contact form)
- article1.html  → Beaches article + 3D card carousel (prev/next + dots + autoplay) + charts
- article2.html  → City Adventures + playable video (poster + custom play button)
- article3.html  → Pattaya Pulse + stats + bar charts (visitor interest / best months)
- article4.html  → Mount Fuji + charts

USER STORIES COVERED
✓ FAQ section with 4 entries, individually expandable, CSS animated open/close
✓ Article subpage with functional carousel (prev/next buttons, visible slide change, swipe, autoplay)
✓ Article subpage with embedded video (playable, responsive, custom overlay play button)
✓ Author section with photo + short bio on every article page
✓ Responsive down to 320px, burger menu on mobile, content max-width 1440px
✓ Header + footer, contact form with validation
✓ Big-screen layout: header/footer full-bleed, content centered at 1440px

STRUCTURE
/
  index.html
  article1.html
  article2.html
  article3.html
  article4.html
  style.css
  font.css
  standard.css
  variabels.css
  script.js
  README.txt
  assets/
    images/   (logo, hero, highlights, carousel, charts, author, badge)
    fonts/    (Arima + Palanquin woff2)
    icons/    (Blog-logo.svg, tiktok.png, youtube.png, facebook.png, instagram.png)

Fonts: Local woff2 + Google Fonts fallback.
Video: sample MP4 (no account needed).
Colors: Teal #4EA487, Yellow #F1C953, Brown #54370D

Letztes Update: 11.09.2026
