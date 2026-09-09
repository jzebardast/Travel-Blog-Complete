// ===== Mobiles Menü =====
(function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!menuBtn || !mobileMenu) return;
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
})();

// ===== Highlights-Karussell (Startseite) =====
(function initHomeCarousel() {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const dots = Array.from(document.querySelectorAll('#carouselDots .dot'));
  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const INTERVAL = 3500;

  function show(index) {
    const next = ((index % slides.length) + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      if (i === next) {
        slide.classList.add('active');
        slide.classList.remove('is-leaving');
      } else if (slide.classList.contains('active')) {
        slide.classList.remove('active');
        slide.classList.add('is-leaving');
        setTimeout(() => slide.classList.remove('is-leaving'), 800);
      } else {
        slide.classList.remove('active', 'is-leaving');
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === next);
      dot.setAttribute('aria-current', i === next ? 'true' : 'false');
    });
    current = next;
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  function startAuto() {
    stopAuto();
    timer = setInterval(next, INTERVAL);
  }
  function stopAuto() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  show(0);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      show(i);
      startAuto();
    });
  });

  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  let startX = 0;
  carousel.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
    stopAuto();
  }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - startX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) next(); else prev();
    }
    startAuto();
  }, { passive: true });

  startAuto();
})();

// ===== FAQ-Akkordeon =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ===== Kontaktformular =====
(function () {
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const privacy = document.getElementById('privacy').checked;

    if (!name || !email || !message || !privacy) {
      alert('Please fill in all fields and accept the privacy policy.');
      return;
    }

    contactForm.hidden = true;
    formSuccess.hidden = false;
    setTimeout(() => {
      contactForm.reset();
      contactForm.hidden = false;
      formSuccess.hidden = true;
    }, 4000);
  });
})();

// ===== Teilen-Button =====
(function () {
  function getShareData() {
    const title = document.querySelector('.article-content h1')?.textContent?.trim() || document.title;
    const text = document.querySelector('.article-lead')?.textContent?.trim() || 'Check out this travel story!';
    const url = window.location.href;
    return { title, text, url };
  }

  function openWhatsApp(data) {
    const msg = encodeURIComponent(data.title + '\n\n' + data.text + '\n\n' + data.url);
    window.open('https://wa.me/?text=' + msg, '_blank', 'noopener');
  }

  function openInstagram() {
    // Instagram-App bzw. Website öffnen
    window.open('instagram://app', '_blank');
    // Fallback
    setTimeout(() => {
      window.open('https://www.instagram.com/', '_blank', 'noopener');
    }, 800);
  }

  async function nativeShare(data) {
    if (navigator.share) {
      try {
        await navigator.share({
          title: data.title,
          text: data.text,
          url: data.url
        });
        return true;
      } catch (err) {
        if (err.name === 'AbortError') return true; // user cancelled
        return false;
      }
    }
    return false;
  }

  function showShareMenu(btn) {
    // Bestehendes Menü entfernen
    document.querySelectorAll('.share-menu').forEach(m => m.remove());

    const data = getShareData();
    const menu = document.createElement('div');
    menu.className = 'share-menu';
    menu.innerHTML = `
      <button type="button" class="share-option" data-action="native">
        <span>📤</span> Share via device
      </button>
      <button type="button" class="share-option" data-action="whatsapp">
        <span>💬</span> WhatsApp
      </button>
      <button type="button" class="share-option" data-action="instagram">
        <span>📷</span> Instagram
      </button>
      <button type="button" class="share-option" data-action="copy">
        <span>🔗</span> Copy link
      </button>
    `;

    btn.parentElement.style.position = 'relative';
    btn.parentElement.appendChild(menu);

    // Position
    menu.style.display = 'flex';

    menu.addEventListener('click', async (e) => {
      const opt = e.target.closest('.share-option');
      if (!opt) return;
      const action = opt.dataset.action;

      if (action === 'native') {
        const ok = await nativeShare(data);
        if (!ok) openWhatsApp(data);
      } else if (action === 'whatsapp') {
        openWhatsApp(data);
      } else if (action === 'instagram') {
        openInstagram();
      } else if (action === 'copy') {
        try {
          await navigator.clipboard.writeText(data.url);
          opt.innerHTML = '<span>✓</span> Copied!';
          setTimeout(() => menu.remove(), 900);
          return;
        } catch {
          prompt('Copy this link:', data.url);
        }
      }
      menu.remove();
    });

    // Bei Klick außerhalb schließen
    setTimeout(() => {
      const close = (e) => {
        if (!menu.contains(e.target) && e.target !== btn) {
          menu.remove();
          document.removeEventListener('click', close);
        }
      };
      document.addEventListener('click', close);
    }, 10);
  }

  document.querySelectorAll('.btn-share').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const data = getShareData();

      // Native Teilen-Funktion bevorzugen
      if (navigator.share && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        const ok = await nativeShare(data);
        if (ok) return;
      }
      // Menü anzeigen
      showShareMenu(btn);
    });
  });
})();
