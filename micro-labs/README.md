# Micro Labs — Storefront Design Prototype

**Status: standalone visual prototype. Not a Shopify theme and not a live store.**
Catalog data is fictional sample data. Cart, checkout, contact submission and
photo upload are not connected. Anything marked `[Placeholder]` needs a verified
business fact before launch.

| File | Purpose |
| --- | --- |
| `index.html` | Homepage (hero + finder, reassurance, process, featured services, why us, repair vs replacement, reviews placeholder, FAQ, inquiry form, footer) |
| `service.html?handle=…` | Reusable repair-service template (renders any entry in `ML_SERVICES`) |
| `assets/services-data.js` | Business facts (`ML_SITE`) and sample services (`ML_SERVICES`) |
| `assets/styles.css` | Design tokens and components |
| `assets/site.js` | Header, footer, icons, search, shared validation |
| `assets/home.js`, `assets/service.js` | Page behavior |

Run locally: `python3 -m http.server` in this folder, open `http://localhost:8000`.

## Visual direction

- **Palette:** charcoal header `#1B262A`, slate `#303D42` nav and panels, off-white page
  `#F7F6F4`, white cards. Burnt orange `#E76B00` is used only for primary actions, selected
  tabs, active nav and focus rings. Charcoal text sits on orange buttons (4.8:1 contrast);
  orange used as text on light backgrounds is darkened to `#A84C00` so it meets AA.
- **Type:** Barlow Condensed 600/700 for headings, labels and buttons. Inter for body, forms
  and technical content. Part numbers and fault codes use a monospace face.
- **Shape:** 16–20px card and panel radius, 6px buttons and inputs, 1px warm-grey dividers,
  two-step soft shadows. Outline icons on a 24px grid at a 1.75 stroke.
- **Reference cues reused (no copied assets):** dark condensed header with a wide search, a
  slate nav bar, a dark panel over hero imagery with an inline finder, Year/Make/Model plus a
  separate part-number search, and a split dark-panel inquiry form.
- **Photography:** every image slot is a labeled placeholder that describes the photo it needs.
  Only real Micro Labs photos should go into them.

## Intended Shopify implementation

The recommended route is an **original Online Store 2.0 theme (option B)**, or a fork of
Shopify's free **Dawn** theme. Dawn's license allows modification. A licensed premium theme
such as Ignite also works (option A), but it can only be customized with a purchased license.
The screenshots provide no source code or license.

| Prototype piece | Shopify equivalent |
| --- | --- |
| Header, nav, footer | `sections/header.liquid`, `footer.liquid`, menus in Navigation admin |
| Hero + finder | `sections/hero-finder.liquid` (image, headings, buttons as settings) |
| Reassurance, process, why-us, repair-vs-replace, FAQ | Sections with blocks; every text is a setting |
| Reviews | Section with a "Show section" toggle, off until real reviews exist (or a reviews app) |
| Service card | `snippets/repair-card.liquid` |
| Service page | `templates/product.repair-service.json` + `sections/repair-service-main.liquid` + details section |
| Service data | Product + metafields `repair.module_type`, `repair.part_numbers` (list), `repair.send_type`, `repair.symptoms`, `repair.fault_codes`, `repair.limitations`, `repair.exclusions`, `repair.assess_first`, `repair.turnaround`, `repair.warranty`, `repair.programming` |
| Fitment | Metaobject `repair_fitment` (make, model, year_start, year_end), referenced from the product |
| Purchase form | Native product form → `/cart/add` with line-item `properties[...]` (vehicle, part number, codes, symptoms, acknowledgment) |
| Cart, checkout, orders, customers | Native Shopify. Nothing custom. |
| Policies | Settings → Policies (shipping, refund, privacy, terms) + a Warranty page |

### Needs an app or extra integration
- **Vehicle finder at scale:** a small catalog can run on metaobjects with theme JavaScript.
  Large fitment tables need a fitment/YMM app or the Search & Discovery app with filters.
- **Part-number search:** the native predictive search indexes product metafields once they
  are enabled for search. Fuzzy matching needs an app.
- **Photo upload on the inquiry form:** the native contact form does not accept files. Use a
  form app that supports uploads, such as Shopify Forms (check whether it accepts files),
  Globo, Helium or Qikify.
- **Required acknowledgment and part-number check before add-to-cart:** this is theme
  JavaScript. To enforce it at checkout as well, add a Checkout UI extension (Shopify Plus)
  or a cart validation function.
- **Reviews:** a reviews app that shows verified purchases only.

No credentials are needed or stored in frontend code.
