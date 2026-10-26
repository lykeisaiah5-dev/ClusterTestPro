/* ====================================================================
   SITE CONTENT — the only file you should need to edit day to day.

   1. SITE          Business details. Anything written [LIKE THIS] renders
                    as a highlighted placeholder until you replace it.
   2. POLICY        Turnaround, warranty, fees, shipping — quoted across
                    the site. Fill these from your actual policies.
   3. MODULE_TYPES  Categories used for catalog tabs and filters.
   4. SERVICES      One entry per repair service you sell. Each maps to
                    one Shopify product (see README.md for the mapping).
   5. FAQ           Site-wide questions and answers.
   6. REVIEWS       Leave empty until you have genuine customer reviews.

   SAMPLE DATA
   Every service below is marked  sample: true  and uses invented
   vehicle names and part numbers so the layout can be reviewed without
   asserting compatibility you have not confirmed. Set
   SITE.showSampleData = false before publishing: sample services and
   review placeholders are then hidden automatically.

   RULES THE PAGES ENFORCE
   - A vehicle only appears in the Year/Make/Model finder if a service
     lists it under `fitment`.
   - A part-number search only matches numbers listed in `partNumbers`.
   - Nothing on the site states a price, code, symptom, or vehicle that
     is not written in this file.
   ==================================================================== */

var SITE = {
  name:        "[BUSINESS NAME]",
  legalName:   "[LEGAL BUSINESS NAME]",
  tagline:     "Mail-in ABS module repair",
  phone:       "[PHONE]",
  email:       "[EMAIL]",
  location:    "[LOCATION]",
  serviceArea: "[SERVICE AREA — e.g., modules accepted from the continental US]",
  hours:       "[BUSINESS HOURS — e.g., Mon–Fri 8:00–5:00 Eastern]",
  shipTo:      "[BUSINESS NAME]\n[STREET ADDRESS]\n[CITY, STATE ZIP]",
  established: "[YEAR ESTABLISHED]",

  /* Hides sample services and review placeholders when false. */
  showSampleData: true,

  /* Shopify checkout. Set `domain` to your store domain, e.g.
     "your-store.myshopify.com", and give each service a Shopify
     variant ID. Purchase buttons then open Shopify's cart directly. */
  shopify: { domain: "", cartPath: "/cart" }
};

var POLICY = {
  turnaround:       "[TURNAROUND — e.g., 2–3 business days on the bench]",
  turnaroundNote:   "Turnaround is counted from the business day your module is checked in at our bench. Shipping transit in each direction is additional and depends on the carrier and service you choose.",
  warrantyTerm:     "[WARRANTY TERM — e.g., 12 months]",
  warrantySummary:  "[WARRANTY SUMMARY — what the warranty covers, what it excludes, and the remedy]",
  diagnosticFee:    "[DIAGNOSTIC / BENCH FEE]",
  unrepairable:     "[UNREPAIRABLE-MODULE POLICY — e.g., what is refunded, whether the diagnostic fee applies, and how the module is returned]",
  inboundShipping:  "[INBOUND SHIPPING — e.g., customer pays inbound shipping; prepaid label available at checkout]",
  returnShipping:   "[RETURN SHIPPING — e.g., included within the continental US via carrier X]",
  cancellation:     "[CANCELLATION POLICY — e.g., full refund before the module ships to us]",
  responseTime:     "[INQUIRY RESPONSE TIME — e.g., within one business day]",
  testing:          "[TESTING STATEMENT — describe the bench or functional testing actually performed, if any]"
};

var MODULE_TYPES = [
  { id: "abs-controller", label: "ABS control module",          short: "Control module",
    blurb: "The electronic controller only, separated from the hydraulic unit." },
  { id: "abs-assembly",   label: "ABS pump & module assembly",  short: "Pump & module assembly",
    blurb: "The controller together with the hydraulic unit and pump motor." }
];

/* What a service accepts in the box. */
var ACCEPTS = {
  "controller-only":   { label: "Controller only",             text: "Send the electronic control module only. Leave the hydraulic unit on the vehicle unless the service page says otherwise." },
  "assembly-required": { label: "Complete assembly required",  text: "Send the complete pump and module assembly. This service cannot be performed on the controller alone." },
  "either":            { label: "Controller or full assembly", text: "Either the controller alone or the complete assembly is accepted. See the service page for which one applies to your vehicle." }
};

var SERVICES = [

  /* ───────────────────────── Sample Service A ───────────────────────── */
  {
    handle:     "sample-abs-control-module-repair-a",
    sample:     true,
    featured:   true,
    title:      "ABS Control Module Repair — Sample Service A",
    moduleType: "abs-controller",
    summary:    "Repair of your original ABS control module for the vehicles and part numbers listed below. You send us the module; we return the same unit after the covered repair and applicable testing.",
    price:      "[PRICE]",
    priceNote:  "per module, repair service",
    shopify:    { productHandle: "", variantId: "" },

    partNumbers:    ["SAMPLE-PN-1001", "SAMPLE-PN-1002", "SAMPLE-PN-1003"],
    partNumberNote: "The part number is printed on the label attached to the controller housing. Match it character for character; a different suffix can mean a different board.",
    fitment: [
      { make: "Sample Make A", model: "Sample Model 1", years: [2004, 2007], notes: "" },
      { make: "Sample Make A", model: "Sample Model 2", years: [2005, 2008], notes: "[Trim or option note, if any]" }
    ],
    eligibility: "Eligible when the module part number is listed and the symptoms match the covered scope.",

    covered: {
      symptoms: [
        "[Covered symptom 1 — e.g., ABS warning lamp on with a stored code that points to the control module]",
        "[Covered symptom 2]",
        "[Covered symptom 3]"
      ],
      codes: ["[CODE]", "[CODE]", "[CODE]"],
      limitations: [
        "Codes that point to wheel-speed sensors, wiring, or the hydraulic unit are not addressed by this service.",
        "[Limitation specific to this module family]"
      ]
    },
    exclusions: [
      "Water intrusion or corrosion on the circuit board",
      "Physical damage to the connector or housing",
      "Previous repair attempts that removed or damaged components",
      "[Other exclusion]"
    ],
    assessFirst: [
      "Multiple unrelated fault codes stored at the same time",
      "Fault appeared immediately after collision or jump-start",
      "[Condition that requires a conversation before ordering]"
    ],
    send: {
      accepts: "controller-only",
      what: [
        "The ABS control module (controller) only",
        "Your order number on a note inside the box",
        "[Any additional item this service needs]"
      ],
      doNot: [
        "Do not send the hydraulic unit, brake lines, or wiring harness",
        "Do not send the module in an envelope or padded mailer"
      ]
    },
    turnaround:   "",   /* blank = use POLICY.turnaround */
    warranty:     "",   /* blank = use POLICY.warrantySummary */
    programming:  "[PROGRAMMING NOTE — state whether this module typically returns to service without programming, or whether a scan tool procedure, relearn, or calibration is expected after reinstallation]",
    unrepairable: "",   /* blank = use POLICY.unrepairable */
    images: [
      { caption: "Required photo: this module family, front view on a clean bench" },
      { caption: "Required photo: label close-up with part number legible" },
      { caption: "Required photo: connector side" },
      { caption: "Required photo: board or repair area, if you choose to show it" }
    ]
  },

  /* ───────────────────────── Sample Service B ───────────────────────── */
  {
    handle:     "sample-abs-pump-module-assembly-repair-b",
    sample:     true,
    featured:   true,
    title:      "ABS Pump & Module Assembly Repair — Sample Service B",
    moduleType: "abs-assembly",
    summary:    "Repair of your original pump and module assembly for the vehicles and part numbers listed below. This service requires the complete assembly; the controller alone cannot be processed.",
    price:      "[PRICE]",
    priceNote:  "per assembly, repair service",
    shopify:    { productHandle: "", variantId: "" },

    partNumbers:    ["SAMPLE-PN-2001", "SAMPLE-PN-2002"],
    partNumberNote: "Two labels are present on this assembly: one on the controller and one on the hydraulic block. Quote the controller label number.",
    fitment: [
      { make: "Sample Make B", model: "Sample Model 3", years: [2010, 2014], notes: "" }
    ],
    eligibility: "Eligible when the controller label number is listed. Assembly must arrive complete.",

    covered: {
      symptoms: [
        "[Covered symptom 1]",
        "[Covered symptom 2]"
      ],
      codes: ["[CODE]", "[CODE]"],
      limitations: [
        "Hydraulic faults (internal valve leakage, seized pistons) are outside the covered scope unless listed above.",
        "[Limitation specific to this assembly]"
      ]
    },
    exclusions: [
      "Cracked or stripped hydraulic block",
      "Pump motor seized due to contamination",
      "[Other exclusion]"
    ],
    assessFirst: [
      "Brake fluid contamination suspected",
      "[Condition that requires a conversation before ordering]"
    ],
    send: {
      accepts: "assembly-required",
      what: [
        "The complete pump and module assembly",
        "Brake-line ports capped or plugged to keep fluid in and debris out",
        "Your order number on a note inside the box"
      ],
      doNot: [
        "Do not disassemble the controller from the hydraulic block",
        "Do not ship with brake fluid free to leak — bag the unit and use absorbent packing"
      ]
    },
    turnaround:   "",
    warranty:     "",
    programming:  "[PROGRAMMING NOTE for this assembly — e.g., whether a brake bleed procedure or scan-tool function is expected after reinstallation]",
    unrepairable: "",
    images: [
      { caption: "Required photo: complete assembly on the bench" },
      { caption: "Required photo: controller label close-up" },
      { caption: "Required photo: hydraulic block label" },
      { caption: "Required photo: capped ports, as you want customers to ship it" }
    ]
  },

  /* ───────────────────────── Sample Service C ───────────────────────── */
  {
    handle:     "sample-abs-control-module-repair-c",
    sample:     true,
    featured:   true,
    title:      "ABS Control Module Repair — Sample Service C",
    moduleType: "abs-controller",
    summary:    "Repair of your original ABS control module for the vehicles and part numbers listed below.",
    price:      "[PRICE]",
    priceNote:  "per module, repair service",
    shopify:    { productHandle: "", variantId: "" },

    partNumbers:    ["SAMPLE-PN-3001"],
    partNumberNote: "",
    fitment: [
      { make: "Sample Make C", model: "Sample Model 4", years: [1999, 2003], notes: "" }
    ],
    eligibility: "Eligible when the module part number is listed and the symptoms match the covered scope.",

    covered: {
      symptoms: ["[Covered symptom 1]", "[Covered symptom 2]"],
      codes: ["[CODE]"],
      limitations: ["[Limitation specific to this module family]"]
    },
    exclusions: ["Water intrusion or corrosion", "Physical connector damage", "[Other exclusion]"],
    assessFirst: ["[Condition that requires a conversation before ordering]"],
    send: {
      accepts: "controller-only",
      what: ["The ABS control module (controller) only", "Your order number on a note inside the box"],
      doNot: ["Do not send the hydraulic unit"]
    },
    turnaround:   "",
    warranty:     "",
    programming:  "[PROGRAMMING NOTE]",
    unrepairable: "",
    images: [
      { caption: "Required photo: this module family, front view" },
      { caption: "Required photo: label close-up with part number legible" }
    ]
  },

  /* ───────────────────────── Sample Service D (not featured) ───────────────────────── */
  {
    handle:     "sample-abs-control-module-repair-d",
    sample:     true,
    featured:   false,
    title:      "ABS Control Module Repair — Sample Service D",
    moduleType: "abs-controller",
    summary:    "Repair of your original ABS control module for the vehicles and part numbers listed below.",
    price:      "[PRICE]",
    priceNote:  "per module, repair service",
    shopify:    { productHandle: "", variantId: "" },

    partNumbers:    ["SAMPLE-PN-4001", "SAMPLE-PN-4002"],
    partNumberNote: "",
    fitment: [
      { make: "Sample Make A", model: "Sample Model 5", years: [2012, 2016], notes: "" }
    ],
    eligibility: "Eligible when the module part number is listed and the symptoms match the covered scope.",

    covered: {
      symptoms: ["[Covered symptom 1]"],
      codes: ["[CODE]"],
      limitations: ["[Limitation specific to this module family]"]
    },
    exclusions: ["[Exclusion]"],
    assessFirst: ["[Condition that requires a conversation before ordering]"],
    send: {
      accepts: "either",
      what: ["Controller alone, or the complete assembly — see note", "Your order number on a note inside the box"],
      doNot: []
    },
    turnaround:   "",
    warranty:     "",
    programming:  "[PROGRAMMING NOTE]",
    unrepairable: "",
    images: [
      { caption: "Required photo: this module family, front view" },
      { caption: "Required photo: label close-up with part number legible" }
    ]
  }
];

/* Site-wide FAQ. Write links as [[Link text|page.html]]. */
var FAQ = [
  { q: "How do I know whether my module is eligible?",
    a: "Each repair service lists the vehicles and module part numbers it covers, plus the symptoms and fault codes within its scope. Find the part number on the label attached to your module and compare it to the service page. A vehicle match alone is not enough — the same vehicle can carry more than one module version. If your number is not listed, or your symptoms do not match the covered scope, [[send us the details|contact.html]] before ordering." },
  { q: "Am I purchasing a repair or a replacement?",
    a: "A repair. Every service on this site is a mail-in repair of the module you already own. We do not ship replacement modules from inventory. After purchase you send us your module; the same unit is returned to you after the covered repair and applicable testing." },
  { q: "What should I send?",
    a: "The service page states exactly what to send — some services accept the control module alone, others require the complete pump and module assembly. Include a note with your order number, and follow the packaging steps on the [[Shipping Instructions|shipping-instructions.html]] page." },
  { q: "When does turnaround begin?",
    a: "Turnaround starts on the business day your module is checked in at our bench, not when you place the order. Our current bench turnaround is [TURNAROUND]. Carrier transit time to us and back to you is additional." },
  { q: "What happens if the module cannot be repaired?",
    a: "Some failures are outside what a repair can address, and that is sometimes only clear after inspection. Our policy for unrepairable modules is: [UNREPAIRABLE-MODULE POLICY]. The module is returned to you unless you tell us otherwise." },
  { q: "Will programming or calibration be required?",
    a: "It depends on the vehicle and the module. Because the repaired unit is your original module, its stored configuration is normally unchanged; however, some vehicles require a scan-tool procedure, brake bleed, sensor calibration, or relearn after any ABS module is reinstalled. Each service page carries a programming note specific to that module. We do not claim that programming is never required." },
  { q: "What does the warranty cover?",
    a: "The warranty covers the repair work we performed on your module for [WARRANTY TERM]. It does not cover unrelated faults, damage in transit, installation errors, or failures caused by other vehicle components. Full terms are on the [[Warranty|warranty.html]] page." },
  { q: "How do I contact you before ordering?",
    a: "Use the inquiry form on the [[Contact|contact.html]] page with your vehicle, module part number, fault codes, and symptoms — a clear photo of the module label helps most. You can also call [PHONE] during [BUSINESS HOURS] or email [EMAIL]. We reply [INQUIRY RESPONSE TIME]." }
];

/* Genuine customer reviews only. Leave empty until you have them.
   Shape: { quote: "...", name: "First name, City", vehicle: "Year Make Model", source: "Google" } */
var REVIEWS = [];
