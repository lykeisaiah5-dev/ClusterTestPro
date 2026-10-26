/* ====================================================================
   Shared page logic. Content lives in services.js — you should not
   need to edit this file to change text, prices, or vehicles.
   ==================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Navigation
     ------------------------------------------------------------------ */
  var NAV = [
    { label: 'Find My Repair',        href: 'catalog.html' },
    { label: 'How It Works',          href: 'how-it-works.html' },
    { label: 'Shipping Instructions', href: 'shipping-instructions.html' },
    { label: 'Warranty',              href: 'warranty.html' },
    { label: 'About Us',              href: 'about.html' },
    { label: 'FAQ',                   href: 'faq.html' },
    { label: 'Contact',               href: 'contact.html' }
  ];

  /* ------------------------------------------------------------------
     Outline icon set (24px grid, 1.75 stroke)
     ------------------------------------------------------------------ */
  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    tag: '<path d="M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.7 8.7a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
    barcode: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M17 7v10"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    'x-circle': '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
  };

  function icon(name, cls) {
    return '<svg class="i' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (ICONS[name] || ICONS.info) + '</svg>';
  }

  /* ------------------------------------------------------------------
     Text helpers
     ------------------------------------------------------------------ */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* Escape, then turn [[Label|href]] into links and [PLACEHOLDER] into
     highlighted editable tokens. Tokens are also filled from SITE/POLICY
     when a matching key exists. */
  var TOKEN_MAP = {
    'PHONE': function () { return SITE.phone; },
    'EMAIL': function () { return SITE.email; },
    'BUSINESS NAME': function () { return SITE.name; },
    'BUSINESS HOURS': function () { return SITE.hours; },
    'LOCATION': function () { return SITE.location; },
    'TURNAROUND': function () { return POLICY.turnaround; },
    'WARRANTY TERM': function () { return POLICY.warrantyTerm; },
    'DIAGNOSTIC / BENCH FEE': function () { return POLICY.diagnosticFee; },
    'UNREPAIRABLE-MODULE POLICY': function () { return POLICY.unrepairable; },
    'INQUIRY RESPONSE TIME': function () { return POLICY.responseTime; }
  };
  function isToken(v) { return /^\[[^\[\]]+\]$/.test(String(v || '').trim()); }
  function t(s) {
    var out = esc(s);
    out = out.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, function (m, label, href) {
      return '<a href="' + href + '">' + label + '</a>';
    });
    out = out.replace(/\[([^\[\]]+)\]/g, function (m, inner) {
      var key = inner.split('—')[0].trim();
      var fn = TOKEN_MAP[key];
      if (fn) {
        var v = fn();
        if (v && !isToken(v)) return esc(v);
        if (v) inner = String(v).slice(1, -1);
      }
      return '<mark class="ph">[' + inner + ']</mark>';
    });
    return out;
  }

  function qs(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
  }
  function pageFile() {
    var p = location.pathname.split('/').pop();
    return p || 'index.html';
  }
  function telHref() {
    var digits = String(SITE.phone).replace(/[^0-9+]/g, '');
    return digits.length >= 7 ? 'tel:' + digits : 'contact.html';
  }
  function mailHref() {
    return /@/.test(SITE.email) ? 'mailto:' + SITE.email : 'contact.html';
  }

  /* ------------------------------------------------------------------
     Data access
     ------------------------------------------------------------------ */
  function visibleServices() {
    return SERVICES.filter(function (s) { return SITE.showSampleData || !s.sample; });
  }
  function serviceByHandle(h) {
    return visibleServices().filter(function (s) { return s.handle === h; })[0] || null;
  }
  function moduleType(id) {
    return MODULE_TYPES.filter(function (m) { return m.id === id; })[0] || { id: id, label: id, short: id };
  }
  function normalizePN(s) { return String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); }
  function yearsOf(f) { return { from: f.years[0], to: f.years[1] || f.years[0] }; }
  function yearRange(f) { var y = yearsOf(f); return y.from === y.to ? String(y.from) : y.from + '–' + y.to; }
  function fitmentSummary(svc) {
    if (!svc.fitment || !svc.fitment.length) return null;
    var parts = svc.fitment.map(function (f) { return f.make + ' ' + f.model + ' (' + yearRange(f) + ')'; });
    if (parts.length <= 2) return parts.join('; ');
    return parts.slice(0, 2).join('; ') + ' +' + (parts.length - 2) + ' more';
  }
  function fitsVehicle(svc, year, make, model) {
    return (svc.fitment || []).some(function (f) {
      var y = yearsOf(f);
      if (make && f.make !== make) return false;
      if (model && f.model !== model) return false;
      if (year && (year < y.from || year > y.to)) return false;
      return true;
    });
  }

  /* Search / filter. Returns [{svc, reasons:[]}] */
  function matchServices(c) {
    c = c || {};
    var pn = normalizePN(c.pn || '');
    var q = (c.q || '').trim().toLowerCase();
    var year = parseInt(c.year, 10) || 0;
    return visibleServices().map(function (svc) {
      var reasons = [];
      if (c.type && svc.moduleType !== c.type) return null;
      if (c.accepts && svc.send.accepts !== c.accepts) return null;
      if (c.make || c.model || year) {
        if (!fitsVehicle(svc, year, c.make, c.model)) return null;
        reasons.push('Listed for ' + [year || '', c.make || '', c.model || ''].join(' ').trim());
      }
      if (pn) {
        var hit = (svc.partNumbers || []).some(function (p) { return normalizePN(p) === pn; });
        var partial = !hit && pn.length >= 4 && (svc.partNumbers || []).some(function (p) { return normalizePN(p).indexOf(pn) !== -1; });
        if (!hit && !partial) return null;
        reasons.push(hit ? 'Part number match' : 'Partial part-number match — verify');
      }
      if (q) {
        var hay = [svc.title, svc.summary, moduleType(svc.moduleType).label]
          .concat((svc.partNumbers || []))
          .concat((svc.fitment || []).map(function (f) { return f.make + ' ' + f.model + ' ' + yearRange(f); }))
          .join(' ').toLowerCase();
        var qn = normalizePN(q);
        var pnHit = qn.length >= 4 && (svc.partNumbers || []).some(function (p) { return normalizePN(p).indexOf(qn) !== -1; });
        if (hay.indexOf(q) === -1 && !pnHit) return null;
        if (pnHit) reasons.push('Part number match');
      }
      return { svc: svc, reasons: reasons };
    }).filter(Boolean);
  }

  /* ------------------------------------------------------------------
     Shopify hooks
     ------------------------------------------------------------------ */
  function shopBase() {
    var d = (SITE.shopify && SITE.shopify.domain || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
    return d ? 'https://' + d : '';
  }
  function buyUrl(svc) {
    var base = shopBase();
    var vid = svc && svc.shopify && svc.shopify.variantId;
    return base && vid ? base + '/cart/' + encodeURIComponent(vid) + ':1' : '';
  }
  function cartUrl() {
    var base = shopBase();
    return base ? base + (SITE.shopify.cartPath || '/cart') : '';
  }

  /* ------------------------------------------------------------------
     Renderers
     ------------------------------------------------------------------ */
  function phImg(caption, cls, tag) {
    return '<div class="ph-img ' + (cls || '') + '" role="img" aria-label="' + esc(caption) + '">' +
      '<span class="ph-tag">' + esc(tag || 'Photo needed') + '</span>' + icon('camera') +
      '<span class="ph-cap">' + esc(caption) + '</span></div>';
  }
  function priceHTML(svc, label) {
    return '<div class="price"><small>' + esc(label || 'Repair service') + '</small>' + t(svc.price) + '</div>';
  }
  function serviceCard(svc, reasons) {
    var mt = moduleType(svc.moduleType);
    var fit = fitmentSummary(svc);
    var img = svc.images && svc.images[0] ? svc.images[0].caption : 'Required photo: module on bench';
    return '<article class="svc">' +
      '<div class="svc-media">' +
        '<div class="chips"><span class="chip chip-slate">' + icon('package') + 'Mail-in repair service</span>' +
          (svc.sample ? '<span class="chip chip-sample">Sample data</span>' : '') +
          (reasons || []).map(function (r) { return '<span class="chip chip-ok">' + icon('check') + esc(r) + '</span>'; }).join('') +
        '</div>' + phImg(img, 'ratio-4x3') +
      '</div>' +
      '<div class="svc-body">' +
        '<div class="svc-type">' + esc(mt.label) + ' · ' + esc(ACCEPTS[svc.send.accepts].label) + '</div>' +
        '<h3><a href="service.html?s=' + encodeURIComponent(svc.handle) + '">' + esc(svc.title) + '</a></h3>' +
        '<div class="svc-fit">' + icon('car') + '<span>' + (fit ? '<b>Listed vehicles:</b> ' + t(fit) : '<b>Vehicle list pending.</b> Verify by module part number.') + '</span></div>' +
        (svc.partNumbers && svc.partNumbers.length ? '<div class="svc-pn">Part numbers: ' + svc.partNumbers.slice(0, 3).map(function (p) { return '<code>' + esc(p) + '</code>'; }).join(' ') + (svc.partNumbers.length > 3 ? ' +' + (svc.partNumbers.length - 3) : '') + '</div>' : '') +
        '<p class="svc-elig">' + t(svc.eligibility) + '</p>' +
        '<div class="svc-foot">' + priceHTML(svc) +
          '<a class="btn btn-dark btn-sm" href="service.html?s=' + encodeURIComponent(svc.handle) + '">View Repair Details' + icon('arrow-right') + '</a>' +
        '</div>' +
      '</div></article>';
  }

  function renderHeader() {
    var host = document.getElementById('site-header');
    if (!host) return;
    var cur = pageFile();
    var cart = cartUrl();
    host.innerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<div class="wrap hdr-row">' +
        '<button class="icon-btn hdr-menu" type="button" aria-label="Open menu" aria-controls="menu-drawer" aria-expanded="false" data-open="menu-drawer">' + icon('menu') + '</button>' +
        '<a class="brand" href="index.html" aria-label="' + esc(SITE.name) + ' home">' +
          '<span class="brand-mark">' + icon('cpu') + '</span>' +
          '<span class="brand-text"><span class="brand-name">' + t(SITE.name) + '</span><span class="brand-tag">' + esc(SITE.tagline) + '</span></span>' +
        '</a>' +
        '<form class="hdr-search" role="search" action="catalog.html" method="get">' +
          '<label class="sr-only" for="hdr-q">Search by module part number or vehicle</label>' +
          '<input id="hdr-q" type="search" name="q" placeholder="Search by module part number or vehicle" autocomplete="off" value="' + esc(qs('q')) + '">' +
          '<button type="submit" aria-label="Search">' + icon('search') + '<span>Search</span></button>' +
        '</form>' +
        '<a class="hdr-contact" href="' + telHref() + '" aria-label="Call us">' + icon('phone') + '<span><small>Questions? Call</small><b>' + t(SITE.phone) + '</b></span></a>' +
        '<a class="icon-btn hdr-cart" href="' + (cart || '#') + '" aria-label="Cart"' + (cart ? '' : ' data-cart-stub') + '>' + icon('cart') + '<span class="count" aria-hidden="true">0</span></a>' +
      '</div>' +
      '<nav class="hdr-nav" aria-label="Primary"><div class="wrap"><ul>' +
        NAV.map(function (n) { return '<li><a href="' + n.href + '"' + (n.href === cur ? ' aria-current="page"' : '') + '>' + n.label + '</a></li>'; }).join('') +
        '<li class="push"><a href="' + mailHref() + '">' + t(SITE.email) + '</a></li>' +
      '</ul></div></nav>';

    var drawer = document.createElement('div');
    drawer.innerHTML =
      '<div class="drawer-backdrop" data-close></div>' +
      '<aside class="drawer" id="menu-drawer" aria-label="Menu" aria-hidden="true">' +
        '<div class="drawer-head"><h3>Menu</h3><button class="icon-btn" type="button" aria-label="Close menu" data-close>' + icon('x') + '</button></div>' +
        '<div class="drawer-body"><ul class="drawer-nav">' +
          NAV.map(function (n) { return '<li><a href="' + n.href + '"' + (n.href === cur ? ' aria-current="page"' : '') + '>' + n.label + icon('chevron-right') + '</a></li>'; }).join('') +
        '</ul></div>' +
        '<div class="drawer-contact">' +
          '<a href="' + telHref() + '">' + icon('phone') + '<span>' + t(SITE.phone) + '</span></a>' +
          '<a href="' + mailHref() + '">' + icon('mail') + '<span>' + t(SITE.email) + '</span></a>' +
          '<a href="contact.html">' + icon('message') + '<span>Ask about my module</span></a>' +
        '</div>' +
      '</aside>';
    while (drawer.firstChild) document.body.appendChild(drawer.firstChild);
  }

  function renderFooter() {
    var host = document.getElementById('site-footer');
    if (!host) return;
    host.innerHTML =
      '<div class="wrap"><div class="foot-grid">' +
        '<div class="foot-brand">' +
          '<a class="brand" href="index.html"><span class="brand-mark">' + icon('cpu') + '</span><span class="brand-text"><span class="brand-name">' + t(SITE.name) + '</span><span class="brand-tag">' + esc(SITE.tagline) + '</span></span></a>' +
          '<p>Mail-in repair of ABS control modules for the vehicles and part numbers listed in our catalog. You send us your module; the same unit comes back after the covered repair and applicable testing.</p>' +
          '<p class="small">Not affiliated with any vehicle manufacturer. Vehicle and module names are used for identification only.</p>' +
        '</div>' +
        '<div><h4>Contact</h4><ul class="foot-contact">' +
          '<li>' + icon('phone') + '<a href="' + telHref() + '">' + t(SITE.phone) + '</a></li>' +
          '<li>' + icon('mail') + '<a href="' + mailHref() + '">' + t(SITE.email) + '</a></li>' +
          '<li>' + icon('pin') + '<span>' + t(SITE.location) + '</span></li>' +
          '<li>' + icon('clock') + '<span>' + t(SITE.hours) + '</span></li>' +
        '</ul></div>' +
        '<div><h4>Navigate</h4><ul>' + NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.label + '</a></li>'; }).join('') + '</ul></div>' +
        '<div><h4>Policies</h4><ul>' +
          '<li><a href="policies.html#shipping-policy">Shipping policy</a></li>' +
          '<li><a href="policies.html#refund-policy">Refund &amp; cancellation policy</a></li>' +
          '<li><a href="warranty.html">Warranty terms</a></li>' +
          '<li><a href="policies.html#privacy-policy">Privacy policy</a></li>' +
          '<li><a href="policies.html#terms-of-service">Terms of service</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' ' + t(SITE.legalName) + '. All rights reserved.</span><span>Repair services are performed on customer-supplied modules. No replacement modules are sold from inventory.</span></div>' +
      '</div>';
  }

  /* data-site / data-policy fills for static markup */
  function fillTokens() {
    document.querySelectorAll('[data-site]').forEach(function (el) {
      var v = SITE[el.getAttribute('data-site')];
      if (v != null) el.innerHTML = t(v).replace(/\n/g, '<br>');
    });
    document.querySelectorAll('[data-policy]').forEach(function (el) {
      var v = POLICY[el.getAttribute('data-policy')];
      if (v != null) el.innerHTML = t(v);
    });
    document.querySelectorAll('[data-href]').forEach(function (el) {
      var k = el.getAttribute('data-href');
      if (k === 'tel') el.href = telHref();
      if (k === 'mailto') el.href = mailHref();
    });
    document.querySelectorAll('[data-icon]').forEach(function (el) {
      el.outerHTML = icon(el.getAttribute('data-icon'), el.getAttribute('class'));
    });
    document.querySelectorAll('[data-ph-img]').forEach(function (el) {
      el.outerHTML = phImg(el.getAttribute('data-ph-img'), el.getAttribute('class'), el.getAttribute('data-tag'));
    });
    document.querySelectorAll('[data-t]').forEach(function (el) {
      el.innerHTML = t(el.textContent);
    });
    if (document.title.indexOf('[BUSINESS NAME]') !== -1 && !isToken(SITE.name)) {
      document.title = document.title.replace('[BUSINESS NAME]', SITE.name);
    }
  }

  /* ------------------------------------------------------------------
     Drawers (menu, filters)
     ------------------------------------------------------------------ */
  function openDrawer(id) {
    var d = document.getElementById(id); if (!d) return;
    d.classList.add('open'); d.setAttribute('aria-hidden', 'false');
    document.querySelectorAll('.drawer-backdrop').forEach(function (b) { b.classList.add('open'); });
    document.body.style.overflow = 'hidden';
    var f = d.querySelector('button,a,input,select'); if (f) f.focus();
  }
  function closeDrawers() {
    document.querySelectorAll('.drawer.open').forEach(function (d) { d.classList.remove('open'); d.setAttribute('aria-hidden', 'true'); });
    document.querySelectorAll('.drawer-backdrop').forEach(function (b) { b.classList.remove('open'); });
    document.querySelectorAll('[data-open]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    document.body.style.overflow = '';
  }
  document.addEventListener('click', function (e) {
    var o = e.target.closest('[data-open]');
    if (o) { e.preventDefault(); openDrawer(o.getAttribute('data-open')); o.setAttribute('aria-expanded', 'true'); return; }
    if (e.target.closest('[data-close]')) { closeDrawers(); return; }
    var stub = e.target.closest('[data-cart-stub]');
    if (stub) { e.preventDefault(); toast('Checkout is not connected yet. Set SITE.shopify.domain in assets/services.js to open your Shopify cart here.'); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawers(); });

  function toast(msg) {
    var el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div'); el.id = 'toast'; el.setAttribute('role', 'status');
      el.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#1B262A;color:#fff;padding:12px 16px;border-radius:8px;font-size:.92rem;max-width:min(92vw,520px);z-index:900;box-shadow:0 10px 30px rgba(0,0,0,.25)';
      document.body.appendChild(el);
    }
    el.textContent = msg; el.style.display = 'block';
    clearTimeout(el._t); el._t = setTimeout(function () { el.style.display = 'none'; }, 5000);
  }

  /* ------------------------------------------------------------------
     Vehicle / part-number finder. Only combinations present in the
     service data are offered.
     ------------------------------------------------------------------ */
  function fitmentIndex() {
    var combos = [];
    visibleServices().forEach(function (svc) {
      (svc.fitment || []).forEach(function (f) {
        var y = yearsOf(f);
        for (var yr = y.from; yr <= y.to; yr++) combos.push({ year: yr, make: f.make, model: f.model });
      });
    });
    return combos;
  }
  function uniq(arr) { return arr.filter(function (v, i, a) { return a.indexOf(v) === i; }); }
  function initFinder(root) {
    if (!root) return;
    var combos = fitmentIndex();
    var ySel = root.querySelector('[name=year]'), mSel = root.querySelector('[name=make]'), dSel = root.querySelector('[name=model]');
    if (!ySel) return;
    function fill(sel, label, values, keep) {
      var prev = sel.value;
      sel.innerHTML = '<option value="">' + label + '</option>' + values.map(function (v) { return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join('');
      sel.disabled = values.length === 0;
      if (keep && values.indexOf(prev) !== -1) sel.value = prev;
    }
    var years = uniq(combos.map(function (c) { return c.year; })).sort(function (a, b) { return b - a; });
    fill(ySel, 'Year', years.map(String));
    fill(mSel, 'Make', []); fill(dSel, 'Model', []);
    if (!years.length) {
      root.querySelectorAll('select').forEach(function (s) { s.disabled = true; });
      var sub = root.querySelector('button[type=submit]'); if (sub) sub.disabled = true;
      var note = root.querySelector('.finder-empty'); if (note) note.hidden = false;
    }
    ySel.addEventListener('change', function () {
      var yr = parseInt(ySel.value, 10);
      fill(mSel, 'Make', uniq(combos.filter(function (c) { return c.year === yr; }).map(function (c) { return c.make; })).sort(), true);
      mSel.dispatchEvent(new Event('change'));
    });
    mSel.addEventListener('change', function () {
      var yr = parseInt(ySel.value, 10);
      fill(dSel, 'Model', uniq(combos.filter(function (c) { return c.year === yr && c.make === mSel.value; }).map(function (c) { return c.model; })).sort(), true);
    });
    /* Preselect from query string (catalog page) */
    if (qs('year')) { ySel.value = qs('year'); ySel.dispatchEvent(new Event('change')); }
    if (qs('make')) { mSel.value = qs('make'); mSel.dispatchEvent(new Event('change')); }
    if (qs('model')) { dSel.value = qs('model'); }
  }
  function initFinderTabs(root) {
    if (!root) return;
    var tabs = root.querySelectorAll('[role=tab]'), panels = root.querySelectorAll('[role=tabpanel]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (x) { x.setAttribute('aria-selected', x === tab); });
        panels.forEach(function (p) { p.hidden = p.id !== tab.getAttribute('aria-controls'); });
      });
    });
  }

  /* ------------------------------------------------------------------
     FAQ + reviews
     ------------------------------------------------------------------ */
  function renderFAQ(host, items) {
    if (!host) return;
    host.innerHTML = (items || FAQ).map(function (f, i) {
      return '<details' + (i === 0 ? ' open' : '') + '><summary>' + esc(f.q) + icon('chevron-down') + '</summary><div class="faq-body"><p>' + t(f.a) + '</p></div></details>';
    }).join('');
  }
  function renderReviews(section) {
    if (!section) return;
    var host = section.querySelector('.reviews');
    var real = REVIEWS && REVIEWS.length;
    if (!real && !SITE.showSampleData) { section.hidden = true; return; }
    var items = real ? REVIEWS : [1, 2, 3].map(function (n) {
      return { placeholder: true, quote: '[Genuine customer review ' + n + ' — paste the customer\'s own words. Do not write reviews on their behalf.]', name: '[Customer first name, City]', vehicle: '[Year Make Model]', source: '[Source — e.g., Google]' };
    });
    var stars = ''; for (var i = 0; i < 5; i++) stars += icon('star');
    host.innerHTML = items.map(function (r) {
      return '<article class="review">' +
        (r.placeholder ? '<span class="chip chip-sample" style="margin-bottom:12px">Review placeholder — hidden when published</span>' : '') +
        '<div class="stars" aria-label="5 star rating">' + stars + '</div>' +
        '<blockquote>' + t(r.quote) + '</blockquote>' +
        '<cite>' + t(r.name) + (r.vehicle ? ' · ' + t(r.vehicle) : '') + (r.source ? ' · via ' + t(r.source) : '') + '</cite>' +
      '</article>';
    }).join('');
    var note = section.querySelector('.reviews-note');
    if (note) note.hidden = !!real;
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function boot() {
    renderHeader();
    renderFooter();
    fillTokens();
    document.querySelectorAll('.finder').forEach(function (f) { initFinderTabs(f); initFinder(f.querySelector('form.finder-vehicle')); });
    renderFAQ(document.getElementById('faq-list'));
    renderReviews(document.getElementById('reviews'));
    document.querySelectorAll('[data-featured]').forEach(function (host) {
      var list = visibleServices().filter(function (s) { return s.featured; }).slice(0, 3);
      host.innerHTML = list.length ? list.map(function (s) { return serviceCard(s); }).join('') :
        '<div class="empty" style="grid-column:1/-1"><div class="icon-tile">' + icon('package') + '</div><h3>Repair services are being added</h3><p>No services are published yet. Send us your module details and we will tell you whether a repair service is available.</p><a class="btn btn-primary" href="contact.html">Ask About My Module</a></div>';
    });
    document.querySelectorAll('[data-sample-note]').forEach(function (el) {
      el.hidden = !(SITE.showSampleData && visibleServices().some(function (s) { return s.sample; }));
    });
    if (window.PAGE_INIT) window.PAGE_INIT();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

  /* Expose for page scripts */
  window.ABS = {
    icon: icon, esc: esc, t: t, qs: qs, phImg: phImg, toast: toast,
    visibleServices: visibleServices, serviceByHandle: serviceByHandle, moduleType: moduleType,
    matchServices: matchServices, serviceCard: serviceCard, priceHTML: priceHTML,
    fitmentSummary: fitmentSummary, yearRange: yearRange, normalizePN: normalizePN,
    buyUrl: buyUrl, cartUrl: cartUrl, telHref: telHref, mailHref: mailHref,
    openDrawer: openDrawer, closeDrawers: closeDrawers, initFinder: initFinder, initFinderTabs: initFinderTabs,
    renderFAQ: renderFAQ, ACCEPTS: ACCEPTS, MODULE_TYPES: MODULE_TYPES, POLICY: POLICY, SITE: SITE
  };
})();
