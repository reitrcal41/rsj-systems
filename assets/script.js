// RSJ Systems — shared site behaviour
document.addEventListener('DOMContentLoaded', function () {
  var openBtn = document.querySelector('.nav-toggle');
  var closeBtn = document.querySelector('.mobile-nav-close');
  var panel = document.querySelector('.mobile-nav');

  if (openBtn && panel) {
    openBtn.addEventListener('click', function () {
      panel.classList.add('open');
    });
  }
  if (closeBtn && panel) {
    closeBtn.addEventListener('click', function () {
      panel.classList.remove('open');
    });
  }
  if (panel) {
    panel.addEventListener('click', function (e) {
      if (e.target === panel) panel.classList.remove('open');
    });
  }

  // Reveal-on-scroll for cards and sections
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Mark current nav link as active based on file name
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-nav-panel a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
