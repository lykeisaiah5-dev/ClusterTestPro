/* ================================================================
   MICRO LABS — HOMEPAGE: featured services + finder
   Shopify: the finder reads fitment from metaobjects (or a fitment
   app) and links to product pages; results never show a service
   unless its own data lists the vehicle or part number.
   ================================================================ */
(function () {
  "use strict";
  var ML = window.ML, S = ML.SERVICES;

  /* Featured cards */
  var grid = document.getElementById("featured-grid");
  grid.innerHTML = S.filter(function (s) { return s.featured; }).map(ML.serviceCard).join("");

  /* ---------- Tabs (WAI-ARIA tabs pattern) ---------- */
  var tabs = [document.getElementById("tab-vehicle"), document.getElementById("tab-pn")];
  function selectTab(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute("aria-selected", String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { selectTab(t); });
    t.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        selectTab(tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length], true);
      }
    });
  });

  /* ---------- Year → Make → Model (supported combinations only) ---------- */
  var yearSel = document.getElementById("f-year");
  var makeSel = document.getElementById("f-make");
  var modelSel = document.getElementById("f-model");

  function fitRows() {
    var rows = [];
    S.forEach(function (s) { s.fitment.forEach(function (f) { rows.push(f); }); });
    return rows;
  }
  function uniq(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }
  function fill(sel, label, values) {
    sel.innerHTML = '<option value="">' + label + "</option>" + values.map(function (v) {
      return '<option value="' + ML.esc(v) + '">' + ML.esc(v) + "</option>";
    }).join("");
    sel.disabled = values.length === 0;
  }
  var years = [];
  fitRows().forEach(function (f) { for (var y = f.years[0]; y <= f.years[1]; y++) years.push(y); });
  fill(yearSel, "Year", uniq(years).sort(function (a, b) { return b - a; }));
  makeSel.disabled = modelSel.disabled = true;

  yearSel.addEventListener("change", function () {
    var y = Number(yearSel.value);
    var makes = uniq(fitRows().filter(function (f) { return y >= f.years[0] && y <= f.years[1]; }).map(function (f) { return f.make; })).sort();
    fill(makeSel, "Make", y ? makes : []);
    fill(modelSel, "Model", []);
    hideErr("vehicle-error");
  });
  makeSel.addEventListener("change", function () {
    var y = Number(yearSel.value), m = makeSel.value;
    var models = uniq(fitRows().filter(function (f) { return f.make === m && y >= f.years[0] && y <= f.years[1]; }).map(function (f) { return f.model; })).sort();
    fill(modelSel, "Model", m ? models : []);
    hideErr("vehicle-error");
  });
  modelSel.addEventListener("change", function () { hideErr("vehicle-error"); });

  function showErr(id, msg) { var e = document.getElementById(id); e.textContent = msg; e.hidden = false; }
  function hideErr(id) { document.getElementById(id).hidden = true; }

  document.getElementById("panel-vehicle").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!yearSel.value) { showErr("vehicle-error", "Select the vehicle year."); yearSel.focus(); return; }
    if (!makeSel.value) { showErr("vehicle-error", "Select the make."); makeSel.focus(); return; }
    if (!modelSel.value) { showErr("vehicle-error", "Select the model."); modelSel.focus(); return; }
    var label = yearSel.value + " " + makeSel.value + " " + modelSel.value;
    showResults(ML.findByVehicle(yearSel.value, makeSel.value, modelSel.value), "Repair services for " + label, "vehicle", label);
  });

  var pnInput = document.getElementById("f-pn");
  pnInput.addEventListener("input", function () { hideErr("pn-error"); });
  document.getElementById("panel-pn").addEventListener("submit", function (e) {
    e.preventDefault();
    var q = pnInput.value.trim();
    if (ML.normPN(q).length < 3) { showErr("pn-error", "Enter at least 3 characters of the part number from your module label."); pnInput.focus(); return; }
    showResults(ML.findByPN(q), "Results for part number “" + q + "”", "pn", q);
  });

  /* ---------- Results ---------- */
  var results = document.getElementById("results");
  var body = document.getElementById("results-body");
  var title = document.getElementById("results-title");

  function showResults(list, heading, mode, q) {
    results.hidden = false;
    title.textContent = heading;
    if (list.length) {
      var note = mode === "pn"
        ? "Partial matches are included. Confirm the <strong>full</strong> part number on your label matches the service before ordering."
        : "These services list your vehicle. Confirm the part number on your module label matches the service before ordering — vehicle alone may not confirm compatibility.";
      body.innerHTML =
        '<div class="callout" style="margin:0 0 24px">' + ML.icon("info") + "<p>" + note + ' <span class="chip chip-sample">Sample data</span></p></div>' +
        '<div class="svc-grid">' + list.map(ML.serviceCard).join("") + "</div>";
    } else {
      body.innerHTML =
        '<div class="card empty-state"><div class="badge-ico">' + ML.icon("search") + "</div><div>" +
        "<h3>We don't list a repair service for that yet</h3>" +
        "<p style=\"color:var(--muted);margin:0\">That doesn't always mean we can't help. Send us the part number, fault codes and symptoms and we'll tell you whether a listed service fits or if it's something we don't repair.</p>" +
        '<div class="actions"><a class="btn btn-primary" href="#contact">Can\'t Find Your Module? Ask Us</a>' +
        (mode === "pn"
          ? '<button class="btn btn-outline" type="button" data-switch="tab-vehicle">Search by vehicle</button>'
          : '<button class="btn btn-outline" type="button" data-switch="tab-pn">Search by part number</button>') +
        "</div></div></div>";
      var sw = body.querySelector("[data-switch]");
      sw.addEventListener("click", function () {
        selectTab(document.getElementById(sw.getAttribute("data-switch")), true);
        document.getElementById("find").scrollIntoView({ block: "center" });
      });
      var pnField = document.getElementById("c-pn");
      if (mode === "pn" && pnField && !pnField.value) pnField.value = q;
    }
    results.scrollIntoView({ block: "start" });
    title.focus({ preventScroll: true });
  }

  /* Header search lands here as ?q= */
  var q = new URLSearchParams(location.search).get("q");
  if (q) {
    var hits = ML.findByText(q);
    var hdr = document.getElementById("hdr-q");
    if (hdr) hdr.value = q;
    if (/\d/.test(q) && !/^\d{4}$/.test(q.trim())) { pnInput.value = q; selectTab(tabs[1]); }
    showResults(hits, "Search results for “" + q + "”", "pn", q);
  }
})();
