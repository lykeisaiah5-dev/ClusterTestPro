/* ================================================================
   MICRO LABS — PROTOTYPE CONTENT
   ----------------------------------------------------------------
   ML_SITE      Business facts. `null` = not supplied yet; the page
                renders a visible [Placeholder] instead of guessing.
   ML_SERVICES  SAMPLE DATA ONLY. Makes, models, years and part
                numbers below are fictional and exist only to show
                how the finder, cards and service template behave.
                They are NOT compatibility claims.

   Shopify mapping (see README.md):
     each service  -> a Shopify product (template: product.repair-service)
     each field    -> a product metafield in namespace `repair`
     fitment       -> metaobject `repair_fitment` (or a fitment app)
   ================================================================ */

window.ML_SITE = {
  name: "Micro Labs",
  serviceArea: "St. Louis",
  phone: null,            // e.g. "(314) 000-0000"
  email: null,            // e.g. "repairs@yourdomain.com"
  hours: null,            // e.g. "Mon–Fri, 9 a.m.–5 p.m. CT"
  returnAddress: null,    // mail-in address shown after purchase
  turnaround: null,       // e.g. "X business days after check-in"
  turnaroundStart: null,  // e.g. "when your module is received and checked in"
  warrantySummary: null,  // only verified terms
  diagnosticFee: null,    // policy for modules that cannot be repaired
  unrepairablePolicy: null
};

window.ML_SERVICES = [
  {
    handle: "sample-service-a",
    sample: true,
    featured: true,
    title: "ABS Control Module Repair — Sample Service A",
    moduleType: "ABS control module",
    price: null,
    summary: "Sample eligibility: listed part numbers only. Controller sent on its own.",
    fitment: [
      { make: "Sample Make A", model: "Sample Model 1", years: [2014, 2017] },
      { make: "Sample Make A", model: "Sample Model 2", years: [2015, 2017] }
    ],
    partNumbers: ["SAMPLE-A100", "SAMPLE-A101"],
    send: { type: "controller", detail: null },
    symptoms: null,
    faultCodes: null,
    limitations: null,
    exclusions: null,
    assessFirst: null,
    turnaround: null,
    warranty: null,
    programming: null
  },
  {
    handle: "sample-service-b",
    sample: true,
    featured: true,
    title: "ABS Module Repair — Sample Service B",
    moduleType: "ABS module with hydraulic unit",
    price: null,
    summary: "Sample eligibility: complete assembly required for this service.",
    fitment: [
      { make: "Sample Make B", model: "Sample Model 3", years: [2011, 2013] }
    ],
    partNumbers: ["SAMPLE-B200"],
    send: { type: "assembly", detail: null },
    symptoms: null,
    faultCodes: null,
    limitations: null,
    exclusions: null,
    assessFirst: null,
    turnaround: null,
    warranty: null,
    programming: null
  },
  {
    handle: "sample-service-c",
    sample: true,
    featured: true,
    title: "ABS Control Module Repair — Sample Service C",
    moduleType: "ABS control module",
    price: null,
    summary: "Sample eligibility: listed part numbers only. Contact us if your label differs.",
    fitment: [
      { make: "Sample Make C", model: "Sample Model 4", years: [2016, 2019] }
    ],
    partNumbers: ["SAMPLE-C300", "SAMPLE-C301", "SAMPLE-C305"],
    send: { type: "controller", detail: null },
    symptoms: null,
    faultCodes: null,
    limitations: null,
    exclusions: null,
    assessFirst: null,
    turnaround: null,
    warranty: null,
    programming: null
  },
  {
    handle: "sample-service-d",
    sample: true,
    featured: false,
    title: "ABS Control Module Repair — Sample Service D",
    moduleType: "ABS control module",
    price: null,
    summary: "Sample eligibility: listed part numbers only.",
    fitment: [
      { make: "Sample Make A", model: "Sample Model 5", years: [2018, 2020] }
    ],
    partNumbers: ["SAMPLE-A400"],
    send: { type: null, detail: null },
    symptoms: null,
    faultCodes: null,
    limitations: null,
    exclusions: null,
    assessFirst: null,
    turnaround: null,
    warranty: null,
    programming: null
  }
];
