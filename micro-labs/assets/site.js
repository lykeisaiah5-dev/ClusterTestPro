/* ================================================================
   MICRO LABS — SHARED PROTOTYPE SCRIPT
   Header, footer, icons, search, toasts, service cards, forms.
   In Shopify these become sections/snippets rendered by Liquid;
   this file only simulates them for design review.
   ================================================================ */
(function () {
  "use strict";

  var SITE = window.ML_SITE || {};
  var SERVICES = window.ML_SERVICES || [];

  /* ---------- Icons (outline, 24px grid) ---------- */
  var P = {
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    package: '<path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.29 7 12 12l8.71-5M12 22V12"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    headset: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    list: '<path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
    scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    scope: '<path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
    sliders: '<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4"/>',
    ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>'
  };
  function icon(name, cls) {
    return '<svg class="i ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (P[name] || "") + "</svg>";
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* Visible placeholder for any business fact not yet supplied. */
  function ph(label, dark) { return '<span class="ph' + (dark ? " ph-dark" : "") + '">[Placeholder: ' + esc(label) + "]</span>"; }
  function val(v, label, dark) { return v ? esc(v) : ph(label, dark); }

  function imgPh(title, desc, cls, iconName) {
    return '<div class="img-ph ' + (cls || "") + '" role="img" aria-label="Photo placeholder: ' + esc(title + ". " + desc) + '">' +
      icon(iconName || "camera") + "<b>Photo needed · " + esc(title) + "</b><span>" + esc(desc) + "</span></div>";
  }

  /* ---------- Fitment helpers ---------- */
  function fitmentRange(f) { return f.years[0] === f.years[1] ? String(f.years[0]) : f.years[0] + "–" + f.years[1]; }
  function fitmentSummary(s) {
    if (!s.fitment || !s.fitment.length) return null;
    var first = s.fitment[0];
    var txt = fitmentRange(first) + " " + first.make + " " + first.model;
    if (s.fitment.length > 1) txt += " + " + (s.fitment.length - 1) + " more";
    return txt;
  }
  function normPN(s) { return String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); }
  function findByPN(q) {
    var n = normPN(q);
    if (n.length < 3) return [];
    return SERVICES.filter(function (s) {
      return s.partNumbers.some(function (pn) { return normPN(pn).indexOf(n) !== -1; });
    });
  }
  function findByVehicle(year, make, model) {
    year = Number(year);
    return SERVICES.filter(function (s) {
      return s.fitment.some(function (f) {
        return f.make === make && f.model === model && year >= f.years[0] && year <= f.years[1];
      });
    });
  }
  function findByText(q) {
    var t = String(q || "").toLowerCase().trim();
    if (!t) return [];
    var byPn = findByPN(q);
    var byText = SERVICES.filter(function (s) {
      var hay = (s.title + " " + s.moduleType + " " + s.fitment.map(function (f) { return f.make + " " + f.model + " " + fitmentRange(f); }).join(" ")).toLowerCase();
      return t.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
    });
    return byPn.concat(byText.filter(function (s) { return byPn.indexOf(s) === -1; }));
  }
  function serviceUrl(s) { return "service.html?handle=" + encodeURIComponent(s.handle); }
  function priceHtml(s) { return s.price ? esc(s.price) : ph("price"); }

  /* ---------- Service card (Shopify: snippets/repair-card.liquid) ---------- */
  function serviceCard(s) {
    var fit = fitmentSummary(s);
    return '<article class="card svc-card">' +
      '<div class="media">' + imgPh("Module photo", "Front of the actual module with the part-number label readable. 4:3, neutral background.", "ratio-4x3", "cpu") +
      '<span class="chip chip-service">' + icon("package") + "Mail-in repair service</span>" +
      (s.sample ? '<span class="chip chip-sample">Sample data</span>' : "") + "</div>" +
      '<div class="body"><div class="type">' + esc(s.moduleType) + "</div>" +
      '<h3><a href="' + serviceUrl(s) + '">' + esc(s.title) + "</a></h3>" +
      '<ul class="svc-meta">' +
      "<li>" + icon("car") + "<span>" + (fit ? esc(fit) : ph("verified vehicle range")) + "</span></li>" +
      "<li>" + icon("hash") + '<span class="mono">' + esc(s.partNumbers.join(", ")) + "</span></li>" +
      "</ul>" +
      '<p class="svc-elig">' + esc(s.summary) + "</p>" +
      '<div class="svc-foot"><div class="price">' + priceHtml(s) + "<small>You send your module · we return it</small></div>" +
      '<a class="btn btn-dark" href="' + serviceUrl(s) + '">View Repair Details</a></div>' +
      "</div></article>";
  }

  /* ---------- Toast ---------- */
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast"; toastEl.setAttribute("role", "status"); toastEl.setAttribute("aria-live", "polite");
      toastEl.hidden = true; document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = icon("info") + "<div>" + msg + "</div>";
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.hidden = true; }, 5200);
  }

  /* ---------- Navigation ---------- */
  var NAV = [
    { label: "Find My Repair", href: "index.html#find" },
    { label: "How It Works", href: "index.html#process" },
    { label: "Shipping Instructions", pending: "Shipping Instructions page" },
    { label: "Warranty", pending: "Warranty page (publish only verified terms)" },
    { label: "About Us", pending: "About Us page" },
    { label: "FAQ", href: "index.html#faq" },
    { label: "Contact", href: "index.html#contact" }
  ];
  function navLink(n) {
    return n.pending
      ? '<a href="#" data-pending="' + esc(n.pending) + '">' + esc(n.label) + "</a>"
      : '<a href="' + n.href + '">' + esc(n.label) + "</a>";
  }

  function renderHeader() {
    var host = document.getElementById("site-header");
    if (!host) return;
    var contactSub = SITE.phone ? esc(SITE.phone) : "Ask before you order";
    host.className = "site-header";
    host.innerHTML =
      '<div class="proto-bar"><div class="container"><strong>Design prototype</strong><span>Sample catalog data · Not a live store</span><span class="hide-sm">· Checkout, cart and forms await Shopify integration</span></div></div>' +
      '<div class="hdr-main"><div class="container">' +
        '<button class="icon-btn only-mobile" type="button" id="menu-open" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">' + icon("menu") + "</button>" +
        '<a class="wordmark" href="index.html" aria-label="Micro Labs home"><span class="wordmark-mark">' + icon("cpu") + '</span><span class="wordmark-text">Micro Labs<small>ABS Module Repair</small></span></a>' +
        searchForm("hdr-q") +
        '<div class="hdr-actions">' +
          '<a class="hdr-contact" href="index.html#contact">' + icon("headset") + '<span class="txt"><span class="lbl">Contact</span><br><span class="sub">' + contactSub + "</span></span></a>" +
          '<button class="icon-btn only-mobile" type="button" id="search-toggle" aria-label="Search" aria-expanded="false" aria-controls="mobile-search">' + icon("search") + "</button>" +
          '<a class="icon-btn only-mobile" href="index.html#contact" aria-label="Contact Micro Labs">' + icon("headset") + "</a>" +
          '<a class="icon-btn" href="#" data-pending="Cart (handled by Shopify)" aria-label="Cart, 0 items">' + icon("cart") + '<span class="cart-count" aria-hidden="true">0</span></a>' +
        "</div>" +
      "</div></div>" +
      '<div class="mobile-search" id="mobile-search"><div class="container">' + searchForm("hdr-q-m") + "</div></div>" +
      '<nav class="hdr-nav" aria-label="Primary"><div class="container"><ul>' +
        NAV.map(function (n) { return "<li>" + navLink(n) + "</li>"; }).join("") +
      '</ul><span class="area">' + icon("pin") + "Mail-in service · " + esc(SITE.serviceArea || "") + "</span></div></nav>";

    var drawer = document.createElement("div");
    drawer.innerHTML =
      '<div class="drawer-backdrop" id="drawer-bd" hidden></div>' +
      '<div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Menu" hidden>' +
        '<div class="drawer-head"><span class="wordmark"><span class="wordmark-mark">' + icon("cpu") + '</span><span class="wordmark-text">Micro Labs</span></span>' +
        '<button class="icon-btn" type="button" id="menu-close" aria-label="Close menu">' + icon("x") + "</button></div>" +
        '<nav aria-label="Mobile"><ul>' + NAV.map(function (n) { return "<li>" + navLink(n).replace("</a>", icon("chevronRight") + "</a>") + "</li>"; }).join("") + "</ul></nav>" +
        '<div class="drawer-foot">' +
          '<a class="btn btn-primary btn-block" href="index.html#contact">Ask About My Module</a>' +
          "<div>" + icon("phone", "i-sm") + " " + val(SITE.phone, "phone", true) + "</div>" +
          "<div>" + icon("mail", "i-sm") + " " + val(SITE.email, "email", true) + "</div>" +
        "</div></div>";
    document.body.appendChild(drawer);
    wireHeader();
  }

  function searchForm(id) {
    return '<form class="hdr-search" role="search" data-site-search>' +
      '<label class="sr-only" for="' + id + '">Search by module part number or vehicle</label>' +
      '<input id="' + id + '" name="q" type="search" autocomplete="off" placeholder="Search by module part number or vehicle">' +
      '<button type="submit" aria-label="Search">' + icon("search") + "</button></form>";
  }

  function wireHeader() {
    var openBtn = document.getElementById("menu-open");
    var closeBtn = document.getElementById("menu-close");
    var drawer = document.getElementById("drawer");
    var bd = document.getElementById("drawer-bd");
    function open() {
      drawer.hidden = false; bd.hidden = false; openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden"; closeBtn.focus();
    }
    function close() {
      drawer.hidden = true; bd.hidden = true; openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = ""; openBtn.focus();
    }
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    bd.addEventListener("click", close);
    drawer.addEventListener("click", function (e) { if (e.target.closest("a[href]") && !e.target.closest("[data-pending]")) close(); });
    document.addEventListener("keydown", function (e) {
      if (drawer.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        var f = drawer.querySelectorAll("a[href], button");
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    var st = document.getElementById("search-toggle");
    var ms = document.getElementById("mobile-search");
    st.addEventListener("click", function () {
      var on = !ms.classList.contains("open");
      ms.classList.toggle("open", on); st.setAttribute("aria-expanded", String(on));
      if (on) ms.querySelector("input").focus();
    });

    document.querySelectorAll("[data-site-search]").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var q = f.q.value.trim();
        if (!q) { f.q.focus(); toast("Enter a module part number (from the label) or a vehicle, e.g. year, make, model."); return; }
        var hits = findByText(q);
        if (hits.length === 1 && normPN(hits[0].partNumbers.join(" ")).indexOf(normPN(q)) !== -1 && normPN(q).length >= 6) {
          location.href = serviceUrl(hits[0]); return;
        }
        location.href = "index.html?q=" + encodeURIComponent(q) + "#find";
      });
    });
  }

  function renderFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;
    host.className = "site-footer";
    host.innerHTML =
      '<div class="container"><div class="ftr-top">' +
        "<div>" +
          '<a class="wordmark" href="index.html" aria-label="Micro Labs home"><span class="wordmark-mark">' + icon("cpu") + '</span><span class="wordmark-text">Micro Labs<small>ABS Module Repair</small></span></a>' +
          '<p style="margin:16px 0 18px;max-width:34ch">Mail-in repair of eligible ABS modules. You send your original module; we return it after the covered repair.</p>' +
          '<ul class="ftr-contact">' +
            "<li>" + icon("pin") + "<span>" + esc(SITE.serviceArea) + " · mail-in service</span></li>" +
            "<li>" + icon("phone") + "<span>" + val(SITE.phone, "phone", true) + "</span></li>" +
            "<li>" + icon("mail") + "<span>" + val(SITE.email, "email", true) + "</span></li>" +
            "<li>" + icon("clock") + "<span>" + val(SITE.hours, "business hours", true) + "</span></li>" +
          "</ul>" +
        "</div>" +
        '<div><h4>Repairs</h4><ul>' + NAV.slice(0, 5).map(function (n) { return "<li>" + navLink(n) + "</li>"; }).join("") + "</ul></div>" +
        '<div><h4>Policies</h4><ul>' +
          ["Shipping Policy", "Refund & Cancellation Policy", "Warranty Terms", "Privacy Policy", "Terms of Service"].map(function (p) {
            return '<li><a href="#" data-pending="' + p + ' (Shopify: Settings → Policies)">' + p + "</a></li>";
          }).join("") + "</ul></div>" +
        '<div><h4>Support</h4><ul>' +
          '<li><a href="index.html#faq">FAQ</a></li>' +
          '<li><a href="index.html#contact">Ask About My Module</a></li>' +
          '<li><a href="#" data-pending="Order status (Shopify customer accounts)">Order Status</a></li>' +
        "</ul></div>" +
      "</div>" +
      '<div class="ftr-bottom"><span>© ' + new Date().getFullYear() + " Micro Labs. All rights reserved.</span><span>Design prototype — content marked [Placeholder] awaits verified business details.</span></div></div>";
  }

  /* Pending (unbuilt / awaiting integration) links */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-pending]");
    if (!a) return;
    e.preventDefault();
    toast("<strong>" + esc(a.getAttribute("data-pending")) + "</strong> is not built in this prototype yet.");
  });

  /* ---------- Form validation (shared) ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function setInvalid(field, msg) {
    field.classList.add("invalid");
    var err = field.querySelector(".err");
    if (err) err.innerHTML = icon("alert") + "<span>" + esc(msg) + "</span>";
    var ctl = field.querySelector("input, textarea, select");
    if (ctl) { ctl.setAttribute("aria-invalid", "true"); }
  }
  function clearInvalid(field) {
    field.classList.remove("invalid");
    var ctl = field.querySelector("input, textarea, select");
    if (ctl) ctl.removeAttribute("aria-invalid");
  }
  /* rules: array of [inputName, testFn(value, el) -> error string | ""] */
  function validate(form, rules) {
    var firstBad = null;
    rules.forEach(function (r) {
      var el = form.elements[r[0]];
      var field = el && el.closest(".field");
      if (!field) return;
      var msg = r[1](el.type === "checkbox" ? el.checked : (el.type === "file" ? el.files : el.value.trim()), el);
      if (msg) { setInvalid(field, msg); if (!firstBad) firstBad = el; }
      else clearInvalid(field);
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }
  function liveClear(form) {
    form.addEventListener("input", function (e) { var f = e.target.closest(".field.invalid"); if (f) clearInvalid(f); });
    form.addEventListener("change", function (e) { var f = e.target.closest(".field.invalid"); if (f) clearInvalid(f); });
  }

  function wireContactForm() {
    var form = document.getElementById("inquiry-form");
    if (!form) return;
    liveClear(form);
    var status = document.getElementById("inquiry-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = validate(form, [
        ["name", function (v) { return v ? "" : "Enter your name so we know who to reply to."; }],
        ["email", function (v) { return !v ? "Enter your email address." : (EMAIL_RE.test(v) ? "" : "Check the email format, e.g. name@example.com."); }],
        ["phone", function (v) { return !v || /^[0-9+().\-\s]{7,}$/.test(v) ? "" : "Use digits only, e.g. 314 555 0100."; }],
        ["symptoms", function (v) { return v.length >= 10 ? "" : "Describe what the vehicle is doing (warning lights, when it happens) in a sentence or two."; }],
        ["label_photo", function (files) {
          if (!files || !files.length) return "";
          var f = files[0];
          if (!/^image\//.test(f.type)) return "Upload a photo file (JPG, PNG or HEIC).";
          if (f.size > 10 * 1024 * 1024) return "That photo is over 10 MB. Please upload a smaller image.";
          return "";
        }]
      ]);
      if (!ok) {
        status.hidden = false; status.className = "form-status error";
        status.textContent = "Please fix the highlighted fields.";
        return;
      }
      status.hidden = false; status.className = "form-status info";
      status.innerHTML = "<strong>Prototype only — this inquiry was not sent.</strong> In the Shopify build, text fields submit through the theme contact form; the module-label photo needs a form app that supports file uploads.";
    });
  }

  window.ML = {
    icon: icon, esc: esc, ph: ph, val: val, imgPh: imgPh, toast: toast,
    fitmentRange: fitmentRange, fitmentSummary: fitmentSummary,
    findByPN: findByPN, findByVehicle: findByVehicle, findByText: findByText, normPN: normPN,
    serviceCard: serviceCard, serviceUrl: serviceUrl, priceHtml: priceHtml,
    validate: validate, liveClear: liveClear, EMAIL_RE: EMAIL_RE,
    SITE: SITE, SERVICES: SERVICES
  };

  renderHeader();
  renderFooter();
  wireContactForm();
  document.querySelectorAll("[data-icon]").forEach(function (el) {
    el.insertAdjacentHTML("afterbegin", icon(el.getAttribute("data-icon"), el.getAttribute("data-icon-class") || ""));
  });
})();
