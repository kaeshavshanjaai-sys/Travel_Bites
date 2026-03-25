/* =====================================================
   WORLDTOURER ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Premium Engine v3
   Orange Arrow Cursor Ãƒâ€šÃ‚Â· Page Transitions Ãƒâ€šÃ‚Â· Booking
   ===================================================== */
(function () {
  'use strict';

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 1. ORANGE ARROW CURSOR ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const cursorEl = document.getElementById('cursorArrow');
  if (cursorEl) {
    // Only on desktop pointer devices
    if (window.matchMedia('(pointer: fine)').matches) {
      document.body.style.cursor = 'none';
      document.documentElement.style.cursor = 'none';

      let mx = -100, my = -100, cx = -100, cy = -100;
      let hovering = false, clicking = false;

      // Position at top-left (0,0 offset) - cursor tip is top-left of SVG
      cursorEl.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        width: 32px;
        height: 36px;
        pointer-events: none;
        z-index: 2147483647;
        transform: translate(-100px, -100px);
        transition: width 0.2s ease, height 0.2s ease;
        will-change: transform;
      `;

      document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
      }, { passive: true });

      function animateCursor() {
        cx += (mx - cx) * 0.22;
        cy += (my - cy) * 0.22;
        const scale = clicking ? 0.85 : hovering ? 1.2 : 1;
        cursorEl.style.transform = `translate(${cx}px, ${cy}px) scale(${scale})`;
        requestAnimationFrame(animateCursor);
      }
      requestAnimationFrame(animateCursor);

      // Hover effect on interactive elements
      const tags = ['a', 'button', 'input', 'select', 'textarea', 'label', '[role="button"]'];
      const hoverSel = tags.join(',') + ', .dest-card, .filter-btn, .testimonial-btn, .social-link, .review-card, .highlight-card, .booking-card, .contact-info-card';
      document.querySelectorAll(hoverSel).forEach(el => {
        el.style.cursor = 'none';
        el.addEventListener('mouseenter', () => { hovering = true; cursorEl.querySelector('svg').style.filter = 'drop-shadow(0 0 12px rgba(255,107,53,0.9))'; });
        el.addEventListener('mouseleave', () => { hovering = false; cursorEl.querySelector('svg').style.filter = 'drop-shadow(0 2px 8px rgba(255,107,53,0.5))'; });
      });

      document.addEventListener('mousedown', () => { clicking = true; });
      document.addEventListener('mouseup',   () => { clicking = false; });
    }
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 2. SCROLL PROGRESS BAR ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    progressBar.style.cssText = 'position:absolute;left:0;top:0;height:3px;width:0%;background:linear-gradient(90deg,#ff6b35,#ffd93d);z-index:100;transition:width 0.1s linear;box-shadow:0 0 8px rgba(255,107,53,0.6);';
    window.addEventListener('scroll', () => {
      const pct = (window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 3. NAVBAR ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }, { passive: true });
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 4. MOBILE HAMBURGER ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(l => {
      l.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 5. PAGE TRANSITIONS ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Cinematic Wipe ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const overlay = document.getElementById('pageTransition');
  if (overlay) {
    // Setup: two-layer wipe (brand panel + dark follow panel)
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 99999; pointer-events: none;
      display: flex; flex-direction: column;
    `;
    overlay.innerHTML = `
      <div id="ptPanel1" style="
        position:absolute;inset:0;
        background:linear-gradient(135deg,#ff6b35 0%,#ffd93d 50%,#ff8c42 100%);
        transform:translateX(-102%); transition:transform 0.55s cubic-bezier(0.76,0,0.24,1);
        z-index:2;
      "></div>
      <div id="ptPanel2" style="
        position:absolute;inset:0;
        background:#0d0d14;
        transform:translateX(-102%); transition:transform 0.55s cubic-bezier(0.76,0,0.24,1) 0.05s;
        z-index:1;
      "></div>
      <div id="ptLogo" style="
        position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
        z-index:3; opacity:0; transition:opacity 0.2s ease;
        font-family:'Outfit',sans-serif; font-weight:800; font-size:1.6rem; color:#0d0d14;
        display:flex; align-items:center; gap:12px; white-space:nowrap;
      ">
        <img src="images/logo.png" style="height:36px;border-radius:6px;" onerror="this.style.display='none'">
        World<span style="color:rgba(13,13,20,0.6)">Tourer</span>
      </div>`;

    const p1 = document.getElementById('ptPanel1');
    const p2 = document.getElementById('ptPanel2');
    const logo = document.getElementById('ptLogo');

    // PAGE ENTER: sweep panels OUT (leftÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢right exit) to reveal new page
    function revealPage() {
      overlay.style.pointerEvents = 'none';
      // panels start covering (translateX 0), sweep out to right
      p1.style.transition = 'transform 0.5s cubic-bezier(0.76,0,0.24,1) 0.05s';
      p2.style.transition = 'transform 0.5s cubic-bezier(0.76,0,0.24,1)';
      p1.style.transform = 'translateX(102%)';
      p2.style.transform = 'translateX(102%)';
      logo.style.opacity = '0';
    }

    // PAGE EXIT: sweep panels IN (rightÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢left entry) covering the page
    function coverPage(callback) {
      overlay.style.pointerEvents = 'all';
      p1.style.transition = 'transform 0.5s cubic-bezier(0.76,0,0.24,1)';
      p2.style.transition = 'transform 0.5s cubic-bezier(0.76,0,0.24,1) 0.05s';
      p1.style.transform = 'translateX(0%)';
      p2.style.transform = 'translateX(0%)';
      // Show logo briefly
      setTimeout(() => { logo.style.opacity = '1'; }, 300);
      setTimeout(callback, 520);
    }

    // Start: panels cover, then sweep out to reveal
    p1.style.transform = 'translateX(0%)';
    p2.style.transform = 'translateX(0%)';
    logo.style.opacity = '1';
    // Small delay then reveal
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setTimeout(revealPage, 80);
    }));

    // Intercept all internal links
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') ||
          href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('javascript')) return;
      link.addEventListener('click', e => {
        e.preventDefault();
        coverPage(() => { window.location.href = href; });
      });
    });
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 6. STAGGERED SCROLL REVEAL ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  if (typeof IntersectionObserver !== 'undefined') {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = [...(el.parentElement?.children || [])].filter(c => c.classList.contains('animate-on-scroll'));
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(idx * 80, 400) + 'ms';
        el.classList.add('animated');
        el.classList.add('is-visible'); // also fire blur-fade CSS system
        obs.unobserve(el);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 7. 3D CARD TILT ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  document.querySelectorAll('.dest-card, .highlight-card, .value-card, .team-card, .review-card').forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
      const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
      card.style.transform = `translateY(-8px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
      card.style.boxShadow = `${-dx * 8}px ${-dy * 8}px 40px rgba(255,107,53,0.18), 0 20px 60px rgba(0,0,0,0.4)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.boxShadow = ''; });
  });

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 8. ANIMATED COUNTERS ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      obs.unobserve(el);
      const target = +el.getAttribute('data-target');
      let cur = 0, inc = target / 90;
      const t = setInterval(() => {
        cur = Math.min(cur + inc, target);
        el.textContent = target >= 1000 ? Math.floor(cur).toLocaleString() : Math.floor(cur);
        if (cur >= target) clearInterval(t);
      }, 18);
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 9. TYPING HERO TEXT ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const typingEl = document.getElementById('typingText');
  if (typingEl) {
    const phrases = ['Explore The World', 'Find Your Adventure', 'Discover Paradise', 'Journey Beyond'];
    let pi = 0, ci = 0, del = false;
    function typeLoop() {
      const p = phrases[pi];
      if (!del) { typingEl.textContent = p.slice(0, ++ci); if (ci === p.length) { del = true; setTimeout(typeLoop, 2000); return; } }
      else { typingEl.textContent = p.slice(0, --ci); if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; } }
      setTimeout(typeLoop, del ? 50 : 85);
    }
    setTimeout(typeLoop, 600);
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 10. HERO PARTICLES ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const pc = document.getElementById('heroParticles');
  if (pc) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `left:${Math.random()*100}%;animation-delay:${Math.random()*8}s;animation-duration:${7+Math.random()*6}s;width:${2+Math.random()*3}px;height:${2+Math.random()*3}px;opacity:${0.15+Math.random()*0.4};`;
      pc.appendChild(p);
    }
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 11. TESTIMONIAL CAROUSEL ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const track = document.querySelector('.testimonial-track');
  if (track) {
    const cards = [...track.querySelectorAll('.testimonial-card')];
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dotsEl  = document.querySelector('.testimonial-dots');
    let cur = 0, dots = [];
    if (dotsEl) {
      cards.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', `Review ${i + 1}`);
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d); dots.push(d);
      });
    }
    function goTo(idx) {
      cur = (idx + cards.length) % cards.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === cur));
    }
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(cur - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(cur + 1));
    setInterval(() => goTo(cur + 1), 5000);
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 12. DESTINATION FILTER ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      document.querySelectorAll('.dest-card[data-category]').forEach(card => {
        const show = cat === 'all' || card.getAttribute('data-category') === cat;
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = show ? '1' : '0.15';
        card.style.transform = show ? '' : 'scale(0.95)';
        card.style.pointerEvents = show ? '' : 'none';
      });
    });
  });

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 13. NEWSLETTER FORM ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const nf = document.getElementById('newsletterForm');
  if (nf) {
    nf.addEventListener('submit', e => {
      e.preventDefault();
      const btn = nf.querySelector('button[type="submit"]');
      if (btn) { btn.textContent = 'Subscribed!'; btn.style.background = 'linear-gradient(135deg,#4ecdc4,#44a8ff)'; }
    });
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 14. CONTACT FORM ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const cf = document.getElementById('contactForm');
  if (cf) {
    cf.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
      cf.querySelectorAll('[required]').forEach(input => {
        const grp = input.closest('.form-group');
        const err = grp?.querySelector('.form-error');
        if (!input.value.trim()) {
          valid = false; input.style.borderColor = '#ff6b35';
          if (err) err.style.display = 'block';
        } else {
          input.style.borderColor = ''; if (err) err.style.display = 'none';
        }
      });
      if (!valid) return;
      const btn = cf.querySelector('button[type="submit"]');
      if (btn) {
        btn.innerHTML = `Message Sent! <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
        btn.style.background = 'linear-gradient(135deg,#4ecdc4,#44a8ff)';
        cf.reset();
      }
    });
    cf.querySelectorAll('[required]').forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
        const err = input.closest('.form-group')?.querySelector('.form-error');
        if (err) err.style.display = 'none';
      });
    });
  }

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 15. BOOKING MULTI-STEP FORM ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    const steps     = [...bookingForm.querySelectorAll('.form-step')];
    const progSteps = [...document.querySelectorAll('.progress-step')];
    const progLines = [...document.querySelectorAll('.progress-line')];
    let currentStep = 0;

    // Initialize: show only step 0
    steps.forEach((s, i) => { s.style.display = i === 0 ? 'block' : 'none'; });

    function showStep(idx) {
      if (idx < 0 || idx >= steps.length) return;
      steps[currentStep].style.display = 'none';
      currentStep = idx;
      steps[currentStep].style.display = 'block';
      steps[currentStep].style.animation = 'stepFadeIn 0.4s cubic-bezier(0.22,1,0.36,1) both';

      progSteps.forEach((ps, i) => {
        ps.classList.toggle('active', i <= idx);
        ps.classList.toggle('completed', i < idx);
        const circle = ps.querySelector('.progress-circle');
        if (!circle) return;
        if (i < idx) {
          circle.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`;
        } else {
          circle.textContent = i + 1;
        }
      });
      progLines.forEach((pl, i) => pl.classList.toggle('active', i < idx));
      document.querySelector('.booking-card')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function validateStep(idx) {
      let ok = true;
      steps[idx].querySelectorAll('[required]').forEach(input => {
        // Walk up to nearest .form-group (handles nested .phone-input-group wrapper)
        const grp = input.closest('.form-group');
        const err = grp ? grp.querySelector('.form-error') : null;
        const val = input.value ? input.value.trim() : '';
        if (!val) {
          ok = false;
          input.style.borderColor = '#ff6b35';
          input.style.boxShadow = '0 0 0 3px rgba(255,107,53,0.2)';
          if (err) err.style.display = 'block';
        } else {
          input.style.borderColor = '';
          input.style.boxShadow = '';
          if (err) err.style.display = 'none';
        }
      });
      // Phone special case: also check phone number length
      const phoneInput = steps[idx].querySelector('#phone');
      if (phoneInput && phoneInput.value.trim().length < 5) {
        ok = false;
        phoneInput.style.borderColor = '#ff6b35';
        phoneInput.style.boxShadow = '0 0 0 3px rgba(255,107,53,0.2)';
        const grp = phoneInput.closest('.form-group');
        const err = grp ? grp.querySelector('.form-error') : null;
        if (err) err.style.display = 'block';
      }
      return ok;
    }

    bookingForm.querySelectorAll('.btn-next').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!validateStep(currentStep)) return;
        // If going to step 3 (confirm), populate summary
        if (currentStep === 1) populateSummary();
        showStep(currentStep + 1);
      });
    });

    bookingForm.querySelectorAll('.btn-prev').forEach(btn => {
      btn.addEventListener('click', () => showStep(currentStep - 1));
    });

    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      const terms = document.getElementById('terms');
      const termsErr = document.getElementById('termsError');
      if (terms && !terms.checked) {
        if (termsErr) termsErr.style.display = 'block';
        return;
      }
      if (termsErr) termsErr.style.display = 'none';

      const bookingCard = bookingForm.closest('.booking-card');
      if (bookingCard) {
        // Save to localStorage before showing success
        saveBooking();
        const destEl = document.getElementById('destination');
        const destText = destEl?.options[destEl?.selectedIndex]?.text || '-';
                bookingCard.innerHTML = `
          <div class="booking-success">
            <div class="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h2>Booking Confirmed!</h2>
            <p>Your dream trip request has been received. Our travel experts will contact you within 24 hours to finalize your itinerary.</p>
            <div class="success-details">
              <div class="success-detail">
                <span class="detail-label">Destination</span>
                <span class="detail-value">${destText.split('ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â')[0].trim()}</span>
              </div>
              <div class="success-detail">
                <span class="detail-label">Travelers</span>
                <span class="detail-value">${document.getElementById('travelers')?.value || 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â'}</span>
              </div>
              <div class="success-detail">
                <span class="detail-label">Package</span>
                <span class="detail-value">${document.getElementById('package')?.value || 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â'}</span>
              </div>
            </div>
            <a href="index.html" class="btn btn-primary" style="margin-top:32px;">Back to Home <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>`;
      }
    });

    function populateSummary() {
      const fn  = document.getElementById('firstName')?.value || '';
      const ln  = document.getElementById('lastName')?.value || '';
      const em  = document.getElementById('email')?.value || '';
      const cc  = document.getElementById('countryCode')?.value || '';
      const ph  = document.getElementById('phone')?.value || '';
      const de  = document.getElementById('destination');
      const dst = de?.options[de?.selectedIndex]?.text?.split('ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â')[0]?.trim() || 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â';
      const ci  = document.getElementById('checkIn')?.value || '';
      const co  = document.getElementById('checkOut')?.value || '';
      const pkg = document.getElementById('package')?.value || 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â';
      const trv = document.getElementById('travelers')?.value || 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â';

      const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â'; };
      set('sumName',    (fn + ' ' + ln).trim());
      set('sumEmail',   em);
      set('sumPhone',   cc + ' ' + ph);
      set('sumDest',    dst);
      set('sumDates',   ci && co ? `${ci} ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ ${co}` : 'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â');
      set('sumPackage', `${pkg} Ãƒâ€šÃ‚Â· ${trv}`);
    }

    function saveBooking() {
      const de  = document.getElementById('destination');
      const record = {
        id:          Date.now(),
        bookedAt:    new Date().toISOString(),
        firstName:   document.getElementById('firstName')?.value || '',
        lastName:    document.getElementById('lastName')?.value  || '',
        email:       document.getElementById('email')?.value     || '',
        countryCode: document.getElementById('countryCode')?.value || '',
        phone:       document.getElementById('phone')?.value     || '',
        destination: de?.options[de?.selectedIndex]?.text?.split('ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â')[0]?.trim() || '',
        checkIn:     document.getElementById('checkIn')?.value   || '',
        checkOut:    document.getElementById('checkOut')?.value  || '',
        travelers:   document.getElementById('travelers')?.value || '',
        package:     document.getElementById('package')?.value   || '',
        requests:    document.getElementById('requests')?.value  || '',
        status:      'Confirmed'
      };
      try {
        const existing = JSON.parse(localStorage.getItem('wt_bookings') || '[]');
        existing.push(record);
        localStorage.setItem('wt_bookings', JSON.stringify(existing));
            } catch(e) { /* storage unavailable */ }
      // Cross-device sync: write to Firebase if available
      try {
        if (window.__fbReady && window.__fbDb) {
          fetch('', { method: 'HEAD' }); // trigger — actual FB write is in HTML module
        }
        // Dispatch custom event so admin dashboard can pick up
        window.dispatchEvent(new CustomEvent('wt_new_booking', { detail: record }));
      } catch(e) {}
    }

    // Live input clearing
    bookingForm.querySelectorAll('[required]').forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
        const err = input.closest('.form-group')?.querySelector('.form-error');
        if (err) err.style.display = 'none';
      });
    });

    // Phone: numbers only ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â strip non-digits as user types
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        const pos = phoneInput.selectionStart;
        const cleaned = phoneInput.value.replace(/[^0-9]/g, '');
        if (phoneInput.value !== cleaned) {
          phoneInput.value = cleaned;
          phoneInput.setSelectionRange(pos - 1, pos - 1);
        }
        // Clear error state when user types valid digits
        if (cleaned.length >= 5) {
          phoneInput.style.borderColor = '';
          phoneInput.style.boxShadow = '';
          const err = phoneInput.closest('.form-group')?.querySelector('.form-error');
          if (err) err.style.display = 'none';
        }
      });
      phoneInput.addEventListener('keydown', e => {
        // Allow: backspace, delete, tab, escape, enter, arrows, home, end
        const allowed = ['Backspace','Delete','Tab','Escape','Enter','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
        if (allowed.includes(e.key)) return;
        // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        if ((e.ctrlKey || e.metaKey) && ['a','c','v','x'].includes(e.key.toLowerCase())) return;
        // Block anything that isn't a digit
        if (!/^[0-9]$/.test(e.key)) e.preventDefault();
      });
    }
  }

})();

(function() {
  'use strict';
  
  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 8. MAGNETIC BUTTONS (Physics-based hover) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const magneticEls = document.querySelectorAll('.btn-primary, .btn-outline, .social-link');
  magneticEls.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // move element towards mouse slightly
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      el.style.transition = 'transform 0.1s ease';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0px, 0px)';
      el.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    });
  });

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 9. PARALLAX HERO BACKGROUND ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const pageHeroes = document.querySelectorAll('.page-hero, .hero');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    pageHeroes.forEach(hero => {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (scrollY < heroBottom) {
        // Slow scrolling background and text fade/move
        hero.style.backgroundPositionY = `${scrollY * 0.35}px`;
        const content = hero.querySelector('.container');
        if (content) {
            content.style.transform = `translateY(${scrollY * 0.15}px)`;
            content.style.opacity = Math.max(0, 1 - scrollY / (hero.offsetHeight * 0.8));
        }
      }
    });
  }, { passive: true });

  /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 10. ADVANCED TEXT REVEAL PARSER ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
  const headings = document.querySelectorAll('.section-title, .hero-title, h1');
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        textObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  headings.forEach(h => {
    if (!h.closest('.navbar')) {
        h.classList.add('ultra-reveal-text');
        textObserver.observe(h);
    }
  });


  /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ BUTTON RIPPLE Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      const rect = btn.getBoundingClientRect();
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top  = (e.clientY - rect.top)  + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ IMAGE FADE-IN ON LOAD Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
  document.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
      img.addEventListener('load', () => {
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = '1';
      });
    }
  });
})();