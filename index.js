(function () {
  'use strict';

  /* ── helpers ─────────────────────────────────────────── */
  const $ = id => document.getElementById(id);
  const esc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  /* ── Produto ─────────────────────────────────────────── */
  $('nav-logo').innerHTML = CONFIG.productName.slice(0,-3) + '<span>' + CONFIG.productName.slice(-3) + '</span>';
  $('footer-name').textContent  = CONFIG.productName;
  $('footer-disclaimer').textContent = CONFIG.footerText;

  /* ── Hero ────────────────────────────────────────────── */
  $('hero-sub').textContent = CONFIG.subtagline;

  // Stats
  const statsEl = $('hero-stats');
  CONFIG.stats.forEach(s => {
    statsEl.innerHTML += `
      <div>
        <span class="hero-stat-num">${esc(s.num)}</span>
        <span class="hero-stat-label">${esc(s.label)}</span>
      </div>`;
  });

  // Mock numbers
  const balls = [
    {n:'7',c:'r'},{n:'23',c:'r'},{n:'0',c:'g'},{n:'14',c:'r'},
    {n:'32',c:'hl'},{n:'5',c:'r'},{n:'20',c:'b'},{n:'11',c:'b'}
  ];
  const mockNum = $('mock-numbers');
  balls.forEach(b => {
    mockNum.innerHTML += `<div class="m-ball m-ball-${b.c}">${b.n}</div>`;
  });

  // Mock strategies
  $('mock-strats').innerHTML = `
    <div class="m-strat"><span class="m-strat-name">15 + 9 Vizinhos</span>
      <div class="m-strat-stats"><span class="ms-ga">GA 2</span><span class="ms-g0">G0 5</span><span class="ms-loss">❌ 1</span><span class="ms-wr">83%</span></div>
    </div>
    <div class="m-strat"><span class="m-strat-name">Pares</span>
      <div class="m-strat-stats"><span class="ms-ga">GA 1</span><span class="ms-g0">G0 3</span><span class="ms-loss">❌ 2</span><span class="ms-wr">60%</span></div>
    </div>`;

  /* ── Plans ───────────────────────────────────────────── */
  const grid = $('plans-grid');
  CONFIG.plans.forEach(plan => {
    const featClass = plan.featured ? 'plan-card plan-featured' : 'plan-card';
    const badge = plan.featured && plan.badgeLabel
      ? `<div class="plan-badge-popular">${esc(plan.badgeLabel)}</div>` : '';
    const features = plan.features.map(f =>
      `<li class="${f.ok ? '' : 'unavail'}">${esc(f.text)}</li>`
    ).join('');
    const ctaClass = plan.featured ? 'btn btn-primary' : 'btn btn-ghost';
    grid.innerHTML += `
      <div class="${featClass}">
        ${badge}
        <div class="plan-name">${esc(plan.name)}</div>
        <div class="plan-price">
          <span class="plan-price-val">${esc(plan.price)}</span>
          <span class="plan-price-per">${esc(plan.per)}</span>
        </div>
        <p class="plan-desc">${esc(plan.desc)}</p>
        <ul class="plan-features">${features}</ul>
        <a href="#comprar" class="${ctaClass}" style="width:100%;justify-content:center">${esc(plan.ctaLabel)}</a>
      </div>`;
  });

  /* ── Payment / Buy ───────────────────────────────────── */
  $('pix-name').textContent   = CONFIG.pixName;
  $('pix-key-display').textContent = CONFIG.pixKey;
  $('btn-download').href = CONFIG.downloadUrl;
  $('btn-download').onclick = CONFIG.downloadUrl === '#' ? (e => { e.preventDefault(); alert('Link de download ainda não configurado. Atualize CONFIG.downloadUrl.'); }) : null;

  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMsg)}`;
  $('btn-whatsapp').href       = waUrl;
  $('buy-whatsapp-btn').href   = waUrl;

  /* ── FAQ ─────────────────────────────────────────────── */
  const faqList = $('faq-list');
  CONFIG.faq.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'faq-item';
    div.innerHTML = `
      <button class="faq-q" aria-expanded="false" data-idx="${i}">
        <span>${esc(item.q)}</span>
        <span class="faq-q-icon">+</span>
      </button>
      <div class="faq-a">${esc(item.a)}</div>`;
    div.querySelector('.faq-q').addEventListener('click', function () {
      const isOpen = div.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) div.classList.add('open');
      this.setAttribute('aria-expanded', !isOpen);
    });
    faqList.appendChild(div);
  });

  /* ── Copy PIX ────────────────────────────────────────── */
  window.copyPix = function () {
    navigator.clipboard.writeText(CONFIG.pixKey).then(() => {
      const btn = $('btn-copy-pix');
      btn.textContent = 'Copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
    }).catch(() => {
      prompt('Copie a chave PIX:', CONFIG.pixKey);
    });
  };

  /* ── Install modal ───────────────────────────────────── */
  window.openInstallModal = function () {
    $('install-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeInstallModal = function (e) {
    if (e && e.target !== $('install-modal')) return;
    $('install-modal').classList.remove('open');
    document.body.style.overflow = '';
  };

  /* ── Smooth nav active ───────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        navLinks.forEach(l => {
          l.style.color = l.getAttribute('href') === '#' + en.target.id
            ? 'var(--accent2)' : '';
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));

})();