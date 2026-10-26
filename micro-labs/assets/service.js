/* ================================================================
   MICRO LABS — REPAIR SERVICE TEMPLATE
   Shopify: templates/product.repair-service.json +
            sections/repair-service-main.liquid (purchase panel)
            sections/repair-service-details.liquid (info blocks)
   Purchase posts to Shopify's /cart/add with line-item properties;
   checkout, orders and customers stay native to Shopify.
   ================================================================ */
(function () {
  "use strict";
  var ML = window.ML, SITE = ML.SITE, icon = ML.icon, esc = ML.esc, ph = ML.ph;
  var root = document.getElementById("service-root");

  var handle = new URLSearchParams(location.search).get("handle");
  var s = handle ? ML.SERVICES.filter(function (x) { return x.handle === handle; })[0] : ML.SERVICES[0];

  if (!s) {
    root.innerHTML = '<div class="container section"><div class="card empty-state"><div class="badge-ico">' + icon("search") + "</div><div>" +
      "<h1 style=\"font-size:2.2rem\">Repair service not found</h1><p style=\"color:var(--muted)\">This service may have been renamed or removed. Search again or ask us about your module.</p>" +
      '<div class="actions"><a class="btn btn-primary" href="index.html#find">Find My Repair</a><a class="btn btn-outline" href="index.html#contact">Ask About My Module</a></div></div></div></div>';
    document.getElementById("mobile-bar").remove();
    return;
  }

  document.title = s.title + " — Micro Labs (Prototype)";

  function block(v, label) {
    if (Array.isArray(v) && v.length) return '<ul class="bullets">' + v.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    if (v && !Array.isArray(v)) return "<p>" + esc(v) + "</p>";
    return '<span class="ph-block"><strong>[Placeholder]</strong>' + esc(label) + "</span>";
  }
  function section(id, ico, title, inner) {
    return '<section class="card info" id="' + id + '" aria-labelledby="' + id + '-h"><div class="info-head"><span class="ico">' + icon(ico) + '</span><h2 id="' + id + '-h">' + title + "</h2></div>" + inner + "</section>";
  }

  var GALLERY = [
    { t: "Module front", d: "The actual module this service covers, front view, label visible. 4:3, 2000 px wide minimum.", i: "cpu" },
    { t: "Label close-up", d: "Close-up of the part-number label so customers can compare it with theirs.", i: "hash" },
    { t: "Connector side", d: "Connector and housing, so customers can confirm the physical match.", i: "cpu" },
    { t: "What to send", d: "Exactly what goes in the box for this service (controller only, or full assembly).", i: "package" }
  ];

  var sendType = s.send && s.send.type;
  var sendHtml =
    '<div class="send-box">' +
      '<div class="send-opt ' + (sendType === "controller" ? "is-yes" : sendType ? "is-no" : "") + '"><div class="k">' + icon(sendType === "controller" ? "check" : sendType ? "ban" : "info") + "Electronic controller only</div><p>The control module separated from the hydraulic unit.</p></div>" +
      '<div class="send-opt ' + (sendType === "assembly" ? "is-yes" : sendType ? "is-no" : "") + '"><div class="k">' + icon(sendType === "assembly" ? "check" : sendType ? "ban" : "info") + "Complete assembly</div><p>Controller still attached to the hydraulic unit.</p></div>" +
    "</div>" +
    (sendType
      ? '<p style="margin-top:14px"><strong>This service requires: ' + (sendType === "controller" ? "the electronic controller only." : "the complete assembly.") + "</strong></p>"
      : '<p style="margin-top:14px">' + ph("confirm whether this service accepts the controller alone or requires the complete assembly") + "</p>") +
    block(s.send && s.send.detail, "Removal notes, what not to include (brackets, lines, fluid), and how to protect the connector.");

  var fitRows = s.fitment.map(function (f) {
    return "<tr><td>" + ML.fitmentRange(f) + "</td><td>" + esc(f.make) + "</td><td>" + esc(f.model) + "</td></tr>";
  }).join("");

  var priceText = s.price ? esc(s.price) : "Price: [Placeholder]";

  root.innerHTML =
    '<div class="container">' +
    '<nav class="breadcrumb" aria-label="Breadcrumb"><ol>' +
      '<li><a href="index.html">Home</a></li>' +
      '<li><a href="index.html#find">Find My Repair</a></li>' +
      '<li><a href="#" data-pending="ABS module repair collection page">ABS Module Repair</a></li>' +
      '<li><span aria-current="page">' + esc(s.title) + "</span></li>" +
    "</ol></nav>" +

    (s.sample ? '<div class="editor-note">' + icon("alert") + "<span><strong>Sample service — template preview.</strong> Vehicles and part numbers on this page are fictional. Every [Placeholder] must be replaced with confirmed details before this service is published.</span></div>" : "") +

    '<div class="svc-top">' +
      '<div class="gallery">' +
        '<div class="gallery-main" id="g-main">' + ML.imgPh(GALLERY[0].t, GALLERY[0].d, "", GALLERY[0].i) + "</div>" +
        '<div class="thumbs" role="group" aria-label="Photos">' + GALLERY.map(function (g, i) {
          return '<button type="button" aria-pressed="' + (i === 0) + '" data-g="' + i + '" aria-label="Show ' + esc(g.t) + ' photo">' + ML.imgPh(g.t, "", "", g.i) + "</button>";
        }).join("") + "</div>" +
      "</div>" +

      '<aside class="card buy" aria-labelledby="svc-title">' +
        '<div class="buy-tags"><span class="chip chip-service">' + icon("package") + "Mail-in repair service</span>" + (s.sample ? '<span class="chip chip-sample">Sample data</span>' : "") + "</div>" +
        '<h1 id="svc-title">' + esc(s.title) + "</h1>" +
        '<p class="type">' + esc(s.moduleType) + ' · Part numbers: <span class="mono">' + esc(s.partNumbers.join(", ")) + "</span></p>" +
        '<div class="price-row"><div class="price">' + ML.priceHtml(s) + "<small>Repair of your module. Shipping terms: " + ph("inbound / return shipping") + "</small></div></div>" +

        '<div class="mailin" role="note" aria-label="Mail-in repair service notice">' +
          '<div class="mailin-title">' + icon("alert") + "Mail-in repair service — you send us your module</div>" +
          "<ol><li>Purchase this repair service.</li><li>Ship us your original module using the instructions in your order confirmation.</li><li>We repair it and return the same module to you.</li></ol>" +
          '<p style="margin:10px 0 0;font-size:.88rem;color:var(--on-dark-muted)">Nothing ships to you until we receive and repair your module.</p>' +
        "</div>" +

        '<form id="buy-form" novalidate>' +
          '<fieldset class="fieldset field"><legend>Vehicle <span class="req" aria-hidden="true">*</span></legend>' +
            '<div class="three">' +
              '<div><label class="sr-only" for="b-year">Year</label><input class="input" id="b-year" name="year" inputmode="numeric" maxlength="4" placeholder="Year" aria-describedby="b-veh-err"></div>' +
              '<div><label class="sr-only" for="b-make">Make</label><input class="input" id="b-make" name="make" placeholder="Make" aria-describedby="b-veh-err"></div>' +
              '<div><label class="sr-only" for="b-model">Model</label><input class="input" id="b-model" name="model" placeholder="Model" aria-describedby="b-veh-err"></div>' +
            '</div><div class="err" id="b-veh-err"></div></fieldset>' +
          '<div class="field"><label for="b-pn">Module part number <span class="req" aria-hidden="true">*</span></label>' +
            '<input class="input mono" id="b-pn" name="pn" spellcheck="false" autocomplete="off" aria-describedby="b-pn-hint b-pn-err">' +
            '<span class="hint" id="b-pn-hint">Exactly as printed on your module label.</span><div class="err" id="b-pn-err"></div></div>' +
          '<div class="field"><label for="b-codes">Fault codes <span class="opt">(optional)</span></label><input class="input mono" id="b-codes" name="codes" spellcheck="false" placeholder="Separate with commas"></div>' +
          '<div class="field"><label for="b-sym">Symptoms <span class="opt">(optional)</span></label><textarea class="textarea" id="b-sym" name="symptoms" style="min-height:84px" placeholder="Warning lights, when it happens, what has been checked."></textarea></div>' +
          '<div class="field"><label class="check" for="b-ack"><input type="checkbox" id="b-ack" name="ack" aria-describedby="b-ack-err"><span>I understand this is a <strong>mail-in repair of my own module</strong>, not a replacement part. I will send my module using the instructions provided after purchase.</span></label><div class="err" id="b-ack-err"></div></div>' +
          '<button class="btn btn-primary btn-block" type="submit">Purchase Repair Service</button>' +
          '<div class="integration-note">' + icon("info") + "<span>Prototype: this button validates your entries but does not add to cart. In Shopify it adds this service to the cart with your details attached to the order.</span></div>" +
          '<div class="form-status" id="buy-status" role="status" aria-live="polite" hidden></div>' +
        "</form>" +
        '<div class="support">' + icon("headset") + '<span>Not sure this matches your module? <a href="index.html#contact">Ask before ordering</a></span></div>' +
      "</aside>" +
    "</div>" +

    '<div class="svc-body">' +
      '<nav class="toc" aria-label="On this page"><h2>On this page</h2><ul>' +
        [["compat", "Vehicles & part numbers"], ["coverage", "Symptoms & fault codes"], ["exclusions", "Exclusions"], ["send", "What to send"], ["turnaround", "Turnaround"], ["warranty", "Warranty"], ["shipping", "Shipping instructions"], ["unrepairable", "If it can't be repaired"], ["programming", "Programming & calibration"]]
          .map(function (t) { return '<li><a href="#' + t[0] + '">' + t[1] + "</a></li>"; }).join("") +
      "</ul></nav>" +

      '<div class="info-stack">' +
        section("compat", "car", "Supported vehicles &amp; part numbers",
          "<p>This service covers the module part numbers below. Vehicles are listed to help you narrow the search — <strong>the part number on your module label is what confirms eligibility.</strong></p>" +
          '<div class="sub">Module part numbers</div><ul class="pn-list">' + s.partNumbers.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
          '<div class="sub">Vehicles</div><div class="tbl-wrap"><table class="tbl"><thead><tr><th scope="col">Years</th><th scope="col">Make</th><th scope="col">Model</th></tr></thead><tbody>' + fitRows + "</tbody></table></div>" +
          '<div class="warn">' + icon("alert") + "<span>Same vehicle, different part number? Modules can change within a model year. If your label doesn't match a number above, <a href=\"index.html#contact\">ask us first</a>.</span></div>") +

        section("coverage", "list", "Covered symptoms &amp; fault codes",
          '<div class="sub">Symptoms this service addresses</div>' + block(s.symptoms, "List only the symptoms this repair is confirmed to address.") +
          '<div class="sub">Fault codes</div>' + block(s.faultCodes, "List the fault codes this service covers, with any code-specific conditions.") +
          '<div class="sub">Limitations</div>' + block(s.limitations, "State plainly that the same codes can come from wiring, sensors, tone rings, connectors or the hydraulic unit, and that this service repairs the module only.")) +

        section("exclusions", "ban", "Exclusions &amp; conditions to check first",
          '<div class="sub">Not covered</div>' + block(s.exclusions, "e.g. physical damage, water intrusion, prior repair attempts, opened housings — confirm your actual exclusions.") +
          '<div class="sub">Contact us before ordering if</div>' + block(s.assessFirst, "Conditions that require assessment before purchase.")) +

        section("send", "package", "What to send", sendHtml) +

        section("turnaround", "clock", "Turnaround",
          '<div class="split-2">' +
            '<div class="stat"><div class="k">' + icon("wrench") + "Repair turnaround</div><div class=\"v\">" + ML.val(s.turnaround || SITE.turnaround, "turnaround time") + "</div><p style=\"margin:8px 0 0;font-size:.9rem;color:var(--muted)\">Starts " + ML.val(SITE.turnaroundStart, "when turnaround starts") + ".</p></div>" +
            '<div class="stat"><div class="k">' + icon("truck") + "Shipping transit</div><div class=\"v\">Not included</div><p style=\"margin:8px 0 0;font-size:.9rem;color:var(--muted)\">Time in transit to us and back to you is separate and depends on the carrier and service you choose.</p></div>" +
          "</div>") +

        section("warranty", "shield", "Warranty",
          block(s.warranty || SITE.warrantySummary, "Verified warranty length and what it covers for this service.") +
          '<p style="margin-top:12px"><a class="link-arrow" href="#" data-pending="Warranty page">Read the full warranty terms ' + icon("arrow") + "</a></p>") +

        section("shipping", "truck", "Shipping instructions",
          '<ol class="bullets"><li>Complete your purchase. Your confirmation includes the mail-in address and packing instructions.</li><li>Pack the module as described in those instructions.</li><li>Keep your tracking number until we confirm your module has arrived.</li></ol>' +
          '<div style="margin-top:12px">' + block(null, "Packaging requirements, who pays inbound shipping, return shipping method, and insurance recommendation.") + "</div>" +
          '<p style="margin-top:12px"><a class="link-arrow" href="#" data-pending="Shipping Instructions page">Full shipping instructions ' + icon("arrow") + "</a></p>") +

        section("unrepairable", "alert", "If your module can't be repaired",
          '<div class="sub">Unrepairable modules</div>' + block(SITE.unrepairablePolicy, "What happens, what is refunded, and how the module is returned.") +
          '<div class="sub">Inspection / diagnostic fee</div>' + block(SITE.diagnosticFee, "Whether a fee applies, how much, and when it is charged.")) +

        section("programming", "cpu", "Programming &amp; calibration",
          block(s.programming, "Service-specific guidance: whether this module typically needs programming, coding, or a calibration procedure after reinstallation. Do not state that programming is never required unless confirmed for this exact service.") +
          '<div class="warn">' + icon("info") + "<span>Some vehicles may require a setup or calibration procedure after the module is reinstalled. Check your vehicle's service information or ask your repair shop.</span></div>") +

        '<div class="help-band"><div><h2>Questions about this repair?</h2><p>Send us your part number, codes and symptoms before you order.</p></div><a class="btn btn-primary" href="index.html#contact">Ask About My Module</a></div>' +
      "</div>" +
    "</div></div>";

  /* ---------- Gallery ---------- */
  var main = document.getElementById("g-main");
  root.querySelectorAll("[data-g]").forEach(function (b) {
    b.addEventListener("click", function () {
      var g = GALLERY[+b.getAttribute("data-g")];
      main.innerHTML = ML.imgPh(g.t, g.d, "", g.i);
      root.querySelectorAll("[data-g]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
    });
  });

  /* ---------- Purchase form ---------- */
  var form = document.getElementById("buy-form");
  var status = document.getElementById("buy-status");
  ML.liveClear(form);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = ML.validate(form, [
      ["year", function (v) {
        var mk = form.make.value.trim(), md = form.model.value.trim();
        if (!/^(19|20)\d{2}$/.test(v)) return "Enter the 4-digit vehicle year.";
        if (!mk || !md) return "Enter the vehicle make and model.";
        return "";
      }],
      ["pn", function (v) {
        if (!v) return "Enter the part number from your module label.";
        var n = ML.normPN(v);
        var listed = s.partNumbers.some(function (p) { return ML.normPN(p) === n; });
        return listed ? "" : "That part number isn't listed for this service. Check the label, or ask us before ordering.";
      }],
      ["ack", function (v) { return v ? "" : "Please confirm you are purchasing a mail-in repair of your own module."; }]
    ]);
    if (!ok) { status.hidden = true; return; }
    var props = {
      "Service type": "Mail-in repair (customer's module)",
      "Vehicle": form.year.value.trim() + " " + form.make.value.trim() + " " + form.model.value.trim(),
      "Module part number": form.pn.value.trim(),
      "Fault codes": form.codes.value.trim() || "—",
      "Symptoms": form.symptoms.value.trim() || "—",
      "Mail-in acknowledgment": "Yes"
    };
    status.hidden = false; status.className = "form-status info";
    status.innerHTML = "<strong>Prototype — not added to cart.</strong> In Shopify this adds the service to the cart with these order details:" +
      '<ul style="margin:8px 0 0;padding-left:18px;font-size:.88rem">' + Object.keys(props).map(function (k) { return "<li><strong>" + esc(k) + ":</strong> " + esc(props[k]) + "</li>"; }).join("") + "</ul>";
  });

  /* ---------- Mobile purchase bar ---------- */
  var bar = document.getElementById("mobile-bar");
  var barBtn = bar.querySelector("a");
  document.getElementById("mb-price").textContent = priceText;
  barBtn.addEventListener("click", function (e) {
    e.preventDefault();
    form.scrollIntoView({ block: "start" });
    document.getElementById("b-year").focus({ preventScroll: true });
  });
  if ("IntersectionObserver" in window) {
    var aside = root.querySelector(".buy");
    new IntersectionObserver(function (entries) {
      var en = entries[0];
      var hiddenPanel = !en.isIntersecting && en.boundingClientRect.top < 0;
      bar.classList.toggle("show", hiddenPanel);
      bar.setAttribute("aria-hidden", String(!hiddenPanel));
      barBtn.tabIndex = hiddenPanel ? 0 : -1;
    }).observe(aside);

    /* TOC active state */
    var links = {};
    root.querySelectorAll(".toc a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var tocIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === en.target.id); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    root.querySelectorAll(".info[id]").forEach(function (sec) { tocIO.observe(sec); });
  }
})();
