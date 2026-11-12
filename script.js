(() => {
  'use strict';

  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('icon-sun');
  const moonIcon = document.getElementById('icon-moon');

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    } else {
      root.removeAttribute('data-theme');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    }
  }

  const savedTheme = localStorage.getItem('radid_theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme);
  } else {
    applyTheme('dark');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      localStorage.setItem('radid_theme', next);
      applyTheme(next);
    });
  }

  // Mobile Menu Drawer
  const menuBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Live Dhaka Local Time (Asia/Dhaka, UTC+6)
  const localTimeEl = document.getElementById('dhaka-time');
  function updateDhakaTime() {
    if (!localTimeEl) return;
    try {
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(new Date());
      localTimeEl.textContent = `${formatted} (UTC+6)`;
    } catch {
      localTimeEl.textContent = 'UTC+6 (Asia/Dhaka)';
    }
  }
  updateDhakaTime();
  setInterval(updateDhakaTime, 30000);

  // Copy Profile URL Button
  const copyUrlBtn = document.getElementById('copy-url-btn');
  const copyFeedback = document.getElementById('copy-feedback');
  if (copyUrlBtn) {
    copyUrlBtn.addEventListener('click', async () => {
      const url = 'https://radid.cyou/';
      try {
        await navigator.clipboard.writeText(url);
        if (copyFeedback) copyFeedback.textContent = 'Copied https://radid.cyou/ to clipboard.';
      } catch {
        if (copyFeedback) copyFeedback.textContent = 'Profile URL: https://radid.cyou/';
      }
      setTimeout(() => {
        if (copyFeedback) copyFeedback.textContent = '';
      }, 3500);
    });
  }

  // Telegram Quick Message Composer
  const inquiryForm = document.getElementById('telegram-inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('visitor-name')?.value || '').trim();
      const topic = (document.getElementById('inquiry-topic')?.value || 'General Inquiry').trim();
      const message = (document.getElementById('visitor-message')?.value || '').trim();

      const lines = [
        `Hi Deen Yeasin Radid (${topic})`,
        name ? `From: ${name}` : '',
        message ? `Message: ${message}` : '',
        'Sent via radid.cyou',
      ].filter(Boolean);

      const tgUrl = `https://t.me/radidy?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(tgUrl, '_blank', 'noopener,noreferrer');
    });
  }
})();
