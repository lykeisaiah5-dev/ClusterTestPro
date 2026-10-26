# ABS Module Repair — website

A static, Shopify-ready design for a mail-in ABS module repair business. Every page
reads its business details, policies, and repair services from one data file, so the
site never states a vehicle, part number, price, or policy you have not written down.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero + vehicle/part-number finder, reassurance row, 4-step process, featured services, why us, repair vs. replacement, reviews, FAQ, inquiry form |
| `catalog.html` | Find My Repair: vehicle + part-number search, module-type tabs, filter rail (drawer on mobile), sort, active-filter chips, empty states, "Can't find your module?" |
| `service.html?s=<handle>` | Reusable repair-service template (one URL per service) |
| `how-it-works.html` | Process, compatibility checklist, turnaround vs. transit |
| `shipping-instructions.html` | Packaging, what to include, ship-to address |
| `warranty.html` | Warranty terms template |
| `about.html`, `faq.html`, `contact.html` | About, full FAQ, inquiry form with label-photo upload |
| `policies.html` | Shipping, refund/cancellation, privacy, terms templates |
| `thanks.html` | Form confirmation |
| `assets/services.js` | **All content.** The only file you edit day to day |
| `assets/site.js` | Shared logic: header/footer, finder, search, filters, drawers |
| `assets/site.css` | Design system |

## Editing content — `assets/services.js`

1. **`SITE`** — name, phone, email, location, hours, ship-to address, Shopify domain.
2. **`POLICY`** — turnaround, warranty, diagnostic fee, unrepairable-module policy, shipping, cancellation, response time, testing statement.
3. **`MODULE_TYPES`** — categories for catalog tabs and filters.
4. **`SERVICES`** — one object per repair service. Copy an existing block, give it a unique `handle`, and fill every field. Key fields:
   - `partNumbers` — exact label numbers. Part-number search matches **only** these.
   - `fitment` — `{ make, model, years: [from, to] }`. The Year → Make → Model finder offers **only** these combinations.
   - `covered.symptoms`, `covered.codes`, `covered.limitations`, `exclusions`, `assessFirst`
   - `send.accepts` — `"controller-only"`, `"assembly-required"`, or `"either"`
   - `programming` — a note specific to this module. Required; do not leave generic.
   - `turnaround`, `warranty`, `unrepairable` — leave `""` to use the `POLICY` value.
   - `images` — one caption per photo you need; shown as labelled placeholders until real photos are wired in.
5. **`FAQ`** — write links as `[[Link text|page.html]]`.
6. **`REVIEWS`** — genuine reviews only. While empty, the review section shows labelled placeholders in preview and is hidden on publish.

**Placeholders.** Any text written `[LIKE THIS]` renders as a highlighted token so nothing unconfirmed can be mistaken for a real claim. Tokens such as `[PHONE]`, `[TURNAROUND]`, `[WARRANTY TERM]` are filled automatically once the matching `SITE` / `POLICY` value is set. Run `grep -rn "\[[A-Z]" abs-repair/*.html abs-repair/assets/services.js` to list what remains.

## Before publishing

- [ ] Replace the four sample services with confirmed services, then set `SITE.showSampleData = false`. This hides sample services, their URLs, and review placeholders automatically.
- [ ] Fill every `SITE` and `POLICY` value.
- [ ] Replace placeholders in `warranty.html`, `policies.html`, `about.html`, `how-it-works.html`, `shipping-instructions.html` with your actual terms, and have the policies reviewed.
- [ ] Replace every "Photo needed" block with a real photograph of your own modules, bench, and equipment (see list below). Do not use stock photos that imply they show your facility.
- [ ] Connect checkout (below).

### Photographs needed

Hero: module on the bench with label readable and inspection equipment in frame (landscape, ≥1600×1200). Process steps: label close-up, packed box, bench inspection, repaired module with paperwork. Why us: workbench with inspection equipment. Contact: label being photographed. About: bench wide shot, equipment in use, close-up, and a real team photo. Per service: front view, label close-up, connector side, and — for assemblies — capped brake-line ports.

## Checkout (Shopify)

Set `SITE.shopify.domain` (e.g. `your-store.myshopify.com`) and each service's `shopify.variantId`. The purchase buttons then open Shopify's cart with that service added (`/cart/<variantId>:1`), and the header cart icon links to `/cart`. Until both are set, the buttons explain that checkout is not connected instead of failing silently.

## Moving the design onto a Shopify theme

The data model is shaped to map 1:1 onto Shopify objects:

| This site | Shopify |
|---|---|
| A `SERVICES` entry | A product (type "Repair Service", **shipping not required** — it is a service, not inventory). Inventory tracking off. |
| `handle`, `title`, `summary`, `price` | Product handle, title, description, variant price |
| `moduleType` | Product type or tag; drives collection filters |
| `partNumbers`, `fitment`, `covered`, `exclusions`, `assessFirst`, `send`, `programming`, `turnaround`, `warranty`, `unrepairable` | Product metafields (`repair.part_numbers` list, `repair.fitment` JSON, `repair.covered_symptoms` list, etc.) |
| `POLICY` | Shop metafields, or theme settings |
| `service.html` | `templates/product.repair-service.json` with sections for the mail-in notice, fitment table, scope, what-to-send, turnaround split, and the purchase panel |
| `catalog.html` | Collection template with Search & Discovery filters on the metafields above |
| Vehicle finder | A section that reads the fitment metafields of the collection's products (or a fitment app) — keep the rule that only listed combinations are offered |
| Policies | Shopify Settings → Policies (shipping, refund, privacy, terms) |
| Inquiry form | Shopify `contact` form, or a form app that supports file upload for the label photo |

Shopify's checkout labels physical products as "shipping"; marking the service product as not requiring shipping keeps checkout from implying a module will be sent from stock.

## Forms

The forms use Netlify Forms (`data-netlify="true"`) and post to `thanks.html`. The JS-rendered question form on the service page has a static hidden twin so Netlify detects it at build time. On another host, point each form's `action` at your form handler.

## Local preview

```
cd abs-repair && python3 -m http.server 8000
```

Then open <http://localhost:8000/>. No build step.
