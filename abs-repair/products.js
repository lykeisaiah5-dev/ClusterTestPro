/* ================================================================
   SITE CONTENT — this is the only file you need to edit.

   1. SITE         → your business info (name, phone, address...)
   2. PRODUCT_LINES → each type of module you repair.

   TO ADD A PRODUCT LINE:
     Copy one whole { ... } block inside PRODUCT_LINES (from its
     opening "{" to the closing "},"), paste it below the last one,
     and change the values. Give it a unique `id` (lowercase, no
     spaces). Set `enabled: false` to hide a line without deleting it.

   The page automatically builds, for every enabled line:
     - a card in "What we repair"
     - a tab with its symptoms, pricing, and vehicle coverage table
     - an entry in the quote form's "Module type" dropdown

   In any text, {warranty}, {turnaround}, {evalFee}, {phone}, {name}
   are replaced with the matching SITE value.
   ================================================================ */

var SITE = {
  name:       "ABS Module Repair",
  phone:      "(555) 555-5555",
  email:      "repairs@example.com",
  hours:      "Mon–Fri 9am–6pm",
  shipTo:     "Your Business Name\n123 Main St\nCity, ST 00000",
  turnaround: "1–2 business day",
  warranty:   "Lifetime",
  evalFee:    "$45"
};

var PRODUCT_LINES = [

  /* ───────────── ABS / EBCM ───────────── */
  {
    id: "abs",
    enabled: true,
    code: "ABS",                       // short badge text (2–4 letters)
    name: "ABS / EBCM Modules",
    blurb: "Anti-lock brake control modules with pump motor, relay, and circuit board failures. Original programming retained.",
    symptoms: [
      { title: "ABS / Brake / Traction lights", text: "Warning lights that stay on, or come and go with bumps, heat, or cold starts." },
      { title: "Speedometer drops out",         text: "On many trucks the ABS module supplies vehicle speed. A bad module can kill the speedometer and cruise control." },
      { title: "No communication",              text: "Scan tool can't talk to the ABS module, or you see U-codes for lost communication with the ABS/EBCM." },
      { title: "Pump runs nonstop or never",    text: "ABS pump motor won't shut off, or never runs during self-test. Often a failed relay or driver on the circuit board." },
      { title: "Intermittent faults",           text: "Cracked solder joints from heat cycling cause faults that appear and disappear." },
      { title: "Failed inspection",             text: "An ABS warning lamp is a fail item in many states. A repair gets you back on the road quickly." }
    ],
    tiers: [
      { name: "Standard Repair", price: "$129", unit: "flat rate",
        features: ["Most domestic ABS / EBCM modules", "{turnaround} turnaround", "Free return shipping", "{warranty} warranty"] },
      { name: "Rush Repair", price: "$169", unit: "flat rate", featured: true,
        features: ["Everything in Standard", "Same-day repair on arrival", "Priority return shipping", "{warranty} warranty"] },
      { name: "Import / Euro", price: "$189", unit: "starting at",
        features: ["BMW, Mercedes, VW/Audi, Toyota, Honda & more", "Pump motor & board-level repair", "Free return shipping", "{warranty} warranty"] }
    ],
    vehicles: [
      { make: "Chevrolet / GMC",                 models: "Silverado, Sierra, Tahoe, Yukon, Suburban, Avalanche, Trailblazer, Envoy", codes: "C0265, C0110, C0267, C0201" },
      { make: "Cadillac / Buick / Hummer",       models: "Escalade, Rainier, H2, H3",                                              codes: "C0265, C0110" },
      { make: "Ford / Lincoln",                  models: "F-150, F-250, Expedition, Explorer, Ranger, Navigator",                  codes: "C1095, C1185, C1233, U0121" },
      { make: "Dodge / Ram / Jeep / Chrysler",   models: "Ram 1500–3500, Durango, Dakota, Grand Cherokee, Liberty",                codes: "C1014, C2114, U0121" },
      { make: "BMW / Mini",                      models: "3-Series, 5-Series, X3, X5",                                             codes: "ABS / DSC / Brake lights" },
      { make: "Toyota / Lexus / Honda / Nissan", models: "Tacoma, Tundra, 4Runner, Accord, Pathfinder",                            codes: "Call with codes" }
    ]
  },

  /* ───────────── EXAMPLE: Instrument Cluster ─────────────
     Turned off. Edit the prices/vehicles and set enabled: true to show it. */
  {
    id: "cluster",
    enabled: false,
    code: "IPC",
    name: "Instrument Clusters",
    blurb: "Dead gauges, flickering displays, and dim backlighting. Mileage stays the same as your original cluster.",
    symptoms: [
      { title: "Gauges stuck or erratic", text: "Speedometer, tach, fuel, or temp needles that stick, sweep wrong, or drop to zero." },
      { title: "Dead or dim display",      text: "Odometer/info screen missing pixels or blank; backlighting out." },
      { title: "Cluster won't power up",   text: "Entire cluster dark or resets while driving." }
    ],
    tiers: [
      { name: "Gauge Repair", price: "$99", unit: "flat rate",
        features: ["All stepper motors replaced", "{turnaround} turnaround", "Free return shipping", "{warranty} warranty"] },
      { name: "Full Rebuild", price: "$149", unit: "flat rate", featured: true,
        features: ["Gauges + display + lighting", "Original mileage retained", "Free return shipping", "{warranty} warranty"] }
    ],
    vehicles: [
      { make: "Chevrolet / GMC", models: "Silverado, Sierra, Tahoe, Yukon (2003–2006)", codes: "Gauges / display" },
      { make: "Ford",            models: "F-150, Expedition, Mustang",                   codes: "Gauges / backlight" }
    ]
  }

];
