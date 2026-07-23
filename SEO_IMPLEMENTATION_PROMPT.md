# Full SEO Implementation Prompt — shivmines.in (Shiv Mines and Minerals)

> Paste this whole file to Claude Code as the task. Implement **phase by phase, in order**. Do not skip the acceptance criteria. After each phase, run the verification commands and report results before moving on.

## Project context (read first)
- Stack: **Vite + React 18 + react-router-dom + react-helmet-async + Tailwind + framer-motion**. TypeScript.
- Hosting: **Vercel**. Root `vercel.json` rewrites everything (except `/api`) to `/index.html` (SPA fallback).
- Content is **static and hardcoded**: product data in `frontend/src/pages/ProductDetail.tsx` and `frontend/src/pages/Products.tsx`. Pages: Home, About, Products, ProductDetail (6 slugs), Contact, NotFound.
- Business: B2B silica sand mining company in Karauli, Rajasthan, India since 2006. Products: construction, industrial, foundry, glass, frac, custom-specification sand. Serves domestic + export.
- **The core problem:** it is a client-side-rendered SPA. Production `<body>` is an empty `<div id="root">`. Raw HTML (JS off) on every route returns the homepage title, **0 `<h1>`, 0 body text, 0 product content**. Non-JS crawlers (Bing, social previews, ChatGPT/Perplexity/Claude/Gemini bots, first-wave Googlebot) see nothing.

## Global rules
- Do **not** invent facts, certifications, review counts, client names, or stats. If a real value is unknown, leave a clearly-marked `TODO(owner): confirm real value` and do not fabricate schema data.
- All new copy must be genuinely useful, specific, and human — no keyword stuffing, no thin AI filler.
- Every page must have exactly **one `<h1>`**, a logical H2/H3 hierarchy, and unique title + meta description.
- Validate all JSON-LD before shipping (Google Rich Results Test / schema validator).
- Keep commits small and phase-scoped with clear messages.

---

## PHASE 1 — Rendering: make content exist in the HTML (P0, biggest impact)

**Problem:** CSR SPA → content invisible to non-JS crawlers and first-wave Googlebot.

**Task:** Convert the site to **static pre-rendering (SSG)** so every route ships fully-formed HTML (title, meta, canonical, H1, body copy, all JSON-LD) in the initial response.

- Add and configure **`vite-react-ssg`** (preferred, minimal refactor for this Vite+react-router app). Alternative if it fights the setup: `vite-plugin-prerender` / a puppeteer prerender step in the Vercel build.
- Pre-render **all routes**: `/`, `/about`, `/products`, `/contact`, and every product slug: `construction-sand`, `industrial-sand`, `foundry-sand`, `glass-sand`, `frac-sand`, `custom-specification`.
- Ensure `react-helmet-async` head tags are emitted into the static HTML at build (vite-react-ssg supports this via its head collection).
- Keep client hydration working (interactivity, carousel, WhatsApp button).

**Acceptance criteria**
- `curl -s https://<deploy-url>/products/glass-sand` (no JS) contains: the glass-sand `<title>`, its meta description, `<h1>Glass Sand</h1>` (or the H1 text), the product body copy, and the Product + BreadcrumbList JSON-LD.
- `curl -s https://<deploy-url>/` raw HTML contains a visible `<h1>` and the homepage body copy.
- Verify: `curl -sL <url>/products/glass-sand | grep -c "Fe2O3"` returns ≥1.

---

## PHASE 2 — Fix soft-404s (P1)

**Problem:** Every unknown path (e.g. `/llms.txt`, `/random`) returns **HTTP 200** with the SPA shell → soft-404, wasted crawl budget, junk indexation.

**Task**
- After SSG, unknown routes must return a **real 404 status** (or be served a prerendered 404 page carrying `<meta name="robots" content="noindex">` in the static HTML).
- On Vercel, adjust `vercel.json` so genuine static files (`/sitemap.xml`, `/robots.txt`, `/llms.txt`, images) are served directly and never fall through to `index.html`. Only real app routes get the SPA/SSG fallback.

**Acceptance criteria**
- `curl -o /dev/null -w "%{http_code}" https://<url>/this-does-not-exist` → `404`.
- `/llms.txt`, `/robots.txt`, `/sitemap.xml` each return their real file (not the HTML shell).

---

## PHASE 3 — Core Web Vitals: image + performance (P0)

**Problem:** `frontend/public/images/1.png` (10MB), `2.png` (9MB), `3.png` (9.2MB) are all `<link rel="preload" fetchpriority="high">` in `index.html` → ~28MB on first paint → failing LCP.

**Task**
- Convert all hero + product images to **WebP (and AVIF where supported)**, resize hero images to ≤1920px wide, target **<200KB each**. Keep the originals out of the shipped bundle.
- In `index.html`, **preload only the first hero slide**; lazy-load slides 2 and 3 (`loading="lazy"` on non-LCP images; the carousel should not eager-load all three).
- Add explicit `width`/`height` (or aspect-ratio CSS) to all `<img>` to prevent CLS.
- Serve responsive images (`srcset`/`sizes`) for the hero and product images.
- Audit framer-motion usage: keep it, but ensure it is not blocking LCP; defer non-critical animation.
- Confirm Vercel is serving with compression (gzip/brotli) and long-cache headers on hashed assets.

**Acceptance criteria**
- PageSpeed Insights (mobile, field or lab): **LCP < 2.5s, CLS < 0.1, INP < 200ms**.
- Total hero image weight < 600KB combined.

---

## PHASE 4 — Structured data: fix violations + build a connected graph (P0/P1)

**Problems:** fake `aggregateRating` (LocalBusiness 4.9/127; every Product 4.8/47) with no on-page reviews = policy violation; `offers.price:"0"` invalid; Organization `logo:"/vite.svg"` is a 404.

**Task**
- **Remove every `aggregateRating`** from `Home.tsx` and `ProductDetail.tsx` **unless** real, verifiable reviews are displayed on the page. (If real reviews exist, add visible review content + `Review` items and keep an honest aggregate. Otherwise delete it.)
- **Offers:** remove the `offers` block (B2B quote model) OR replace `price:"0"` with a real `priceSpecification`/price range. No fake `0`.
- **Logo:** create a real logo file (≥112×112 PNG/SVG at `/logo.png`) and reference it consistently in the inline `index.html` JSON-LD **and** `Home.tsx` (currently they disagree: `favicon.svg` vs `vite.svg`).
- Build a **connected schema graph** using `@id` references (skill-recommended):
  - `Organization` (with real `sameAs` — verify each social URL exists first; remove dead ones), `logo`, `contactPoint`, `address`.
  - `WebSite` + `SearchAction`.
  - `LocalBusiness`/`Mine` for the Karauli operation with `geo`, `openingHours`, `areaServed` (no fake ratings).
  - Per product: `Product` + `BreadcrumbList` (already present — keep, fix offers).
  - Add `FAQPage` **only** where a matching visible FAQ exists on the page (see Phase 6).
- Validate every block with Google's Rich Results Test.

**Acceptance criteria**
- Rich Results Test: **0 errors**, no "self-serving review" or invalid-price warnings.
- `curl` of each product page raw HTML contains valid Product + BreadcrumbList JSON-LD.
- Logo URL returns 200.

---

## PHASE 5 — Internal linking, orphans, hreflang, sitemap (P1)

**Task**
- **Orphans:** `frac-sand` and `custom-specification` are in the sitemap but missing from the `Products.tsx` grid. Add all **6** products to the grid so every product is internally linked.
- **Breadcrumbs (visible UI):** add a visible breadcrumb nav (Home › Products › [Product]) on product pages, matching the BreadcrumbList schema.
- **Contextual internal links:** from each product page, link to 2–3 related products and to the relevant new guide/blog posts (Phase 6). From homepage sections, deep-link to product pages with descriptive anchors ("glass-grade silica sand", not "read more").
- **Hreflang:** currently `hi` + `x-default` point to the English URL with no Hindi page. Either (a) **remove the `hi` hreflang** until real Hindi pages exist, or (b) build real `/hi/` localized routes and wire reciprocal, canonical hreflang. Do NOT declare a Hindi alternate that serves English.
- **Sitemap: one source of truth.** You have both a hand-written `frontend/public/sitemap.xml` and `vite-plugin-sitemap`. Pick one. If keeping the plugin, add all static routes (`/`, `/about`, `/products`, `/contact`) + all 6 product slugs and delete the hand-written file. Ensure `<lastmod>` reflects real change dates. Reference it in `robots.txt`.

**Acceptance criteria**
- Every product reachable from `/products` in ≤1 click; no orphan pages.
- Sitemap lists exactly the canonical, indexable URLs; no duplicates; validates.
- hreflang set is reciprocal and points only to real indexable pages.

---

## PHASE 6 — Content depth, AEO & topical authority (drives new rankings)

**Problem:** The whole site is 6 product pages + about/contact. That caps impressions (~1.8K/3mo) and wins nothing informational or in AI Overviews.

**Task — On-page AEO on existing pages**
- On each product page and the homepage, add a **front-loaded answer snippet**: a self-contained 1–3 sentence direct answer under an H1/first H2 that makes sense lifted out of context. Example (glass sand): *"Glass-grade silica sand is a high-purity quartz sand (≥99.5% SiO₂, Fe₂O₃ below 0.02%) used to manufacture clear container, flat, and specialty glass. Shiv Mines and Minerals produces it at its Karauli, Rajasthan mines."*
- Add a real, **visible FAQ section** (question-shaped H2/H3 + concise answers) to the homepage and each product page, then attach matching `FAQPage` schema. Base questions on real buyer queries (purity, grades, MOQ, packaging, lead time, delivery, export, price basis).
- Use descriptive, question-matching headings and short scannable passages/lists (AI models extract these cleanly).

**Task — New content hub (topical authority via hub-and-spoke)**
- Add a **`/guides` or `/blog` section** (static MDX/markdown pages, pre-rendered). Create an initial cluster of genuinely useful, specific articles, e.g.:
  - "Silica Sand Grades Explained: Construction vs Industrial vs Foundry vs Glass vs Frac"
  - "Glass-Grade vs Foundry-Grade Silica Sand: Key Differences"
  - "What Is AFS Grain Fineness Number and Why It Matters for Foundry Sand"
  - "Silica Sand Specifications Buyers Should Check (SiO₂, Fe₂O₃, PSD, pH, LOI)"
  - "Silica Sand in India: Sources, Uses, and How to Choose a Supplier"
  - "How Silica Sand Is Mined, Washed, and Graded" (link to your operations)
- Each article: answer-first opener, question H2s, a comparison table, quotable sourced stats, and internal links **into the money (product/contact) pages**. Add `Article`/`BlogPosting` schema with a real author/`Person` entity and `datePublished`.
- Interlink: guides → products → contact (link equity flows to money pages).

**Task — quotable, sourced claims**
- Substantiate "2,000 tonnes/day", "45+ countries", "since 2006", purity figures with real backing (a certifications/lab-report/capacity page). Mark any unverified figure `TODO(owner): confirm` — do not fabricate.

**Acceptance criteria**
- Homepage + each product page has a visible answer snippet and a real FAQ with matching schema.
- ≥5 pre-rendered guide articles live, each interlinked to relevant products.
- No thin/duplicate pages; each new page has a unique intent and title.

---

## PHASE 7 — GEO / AI-crawler layer (AI Overviews + LLM citations)

**Task**
- Create a **real `/llms.txt`** (served as a static file, not the SPA shell) listing the brand description and the most authoritative URLs (home, products hub, each product, key guides) with one-line descriptions.
- In `robots.txt`, explicitly **Allow** AI crawlers: `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot` (or intentionally decide policy). Keep `Disallow: /api/`. Keep the sitemap reference.
- Ensure clean rendering (Phase 1) so RAG/AI crawlers can parse pages.

**Acceptance criteria**
- `curl https://<url>/llms.txt` returns the real llms.txt content (200, not HTML shell).
- `robots.txt` explicitly addresses AI user-agents and references the sitemap.

---

## PHASE 8 — E-E-A-T & trust (needed for a YMYL-adjacent B2B supplier)

**Task**
- Expand the **About page**: real company history (2006), mining lease details, capacity, process, team/leadership, certifications, quality lab, safety/environmental compliance. Add an `Organization` + `Person` (founder/leadership) entity where real.
- Add a **trust cluster**: certifications/quality page, real client industries served, export markets, contact with full NAP, map embed. Link every silo to it.
- Add real **social proof** only if genuine: client logos, case studies, testimonials with attribution, photos of the mine/plant (you already have real site images — use them with descriptive alt + filenames).
- Establish a consistent **author/byline** on guides.

**Acceptance criteria**
- About + trust pages are substantive and specific (not boilerplate).
- NAP (name, address, phone) is identical across site, schema, and footer.

---

## PHASE 9 — Titles/meta for CTR, and metadata hygiene

**Task**
- Rewrite titles/descriptions to be compelling and unique per page (you rank ~6.6 but CTR 3.4% is low). Keep the primary keyword near the front, add a differentiator/benefit, stay within pixel limits.
- Drop the unverifiable "#1" superlative from schema `name` fields (keep marketing language in copy if you like, but not in structured entity names).
- Remove or trim the giant `meta keywords` tag (ignored by search engines; edges toward stuffing).
- Ensure OG/Twitter tags are per-page (they become per-page automatically once SSG renders helmet output).

**Acceptance criteria**
- Every route has a unique, human, keyword-relevant title + meta description present in raw HTML.

---

## PHASE 10 — Analytics, measurement & QA

**Task**
- Install **GA4** (via `@vercel/analytics` or gtag) + **event tracking** on WhatsApp button, "Request a Quote", phone/email clicks, and product views.
- Keep **Google Search Console** verified (tag already present). Submit the final sitemap. Set up the **Bing Webmaster Tools** + **IndexNow** for fast indexing.
- Add a QA gate: run **Lighthouse** (Performance/SEO/Best-Practices/Accessibility ≥ 90) and **Rich Results Test** on representative pages; fix regressions.

**Acceptance criteria**
- GA4 fires page_view + the custom CTA events (verify in DebugView).
- Lighthouse SEO = 100; Performance ≥ 90 mobile; Accessibility ≥ 95.
- Sitemap submitted in GSC + Bing; IndexNow key deployed.

---

## OFF-SITE work (cannot be done in code — owner action, required to actually reach #1)
These are ~60% of ranking and are **not** implementable by Claude Code:
1. **Google Business Profile** — create/claim/verify for Karauli location, add categories (Mining company / Sand & gravel supplier), photos, services, posts, and collect **real reviews**.
2. **Local + industry citations** — consistent NAP on IndiaMART, TradeIndia, Justdial, Sulekha, ExportersIndia, relevant B2B directories.
3. **Backlinks / digital PR** — supplier listings, trade associations, industry publications, B2B marketplaces, guest articles. This is the main lever to outrank established competitors for "silica mines / silica sand supplier".
4. **Reviews** — gather genuine client reviews (then, and only then, add review schema).

---

## Final acceptance (definition of "10/10 on-site")
- [ ] Every route pre-rendered; raw HTML contains full content + per-page meta + JSON-LD.
- [ ] Real 404 status for unknown paths.
- [ ] LCP < 2.5s / CLS < 0.1 / INP < 200ms on mobile; hero images < 600KB total.
- [ ] Zero structured-data errors; no fabricated ratings/prices; logo valid.
- [ ] No orphan pages; one clean sitemap; correct reciprocal hreflang (or hi removed).
- [ ] Visible answer snippets + real FAQs (with schema) on home + product pages.
- [ ] ≥5 interlinked guide articles building topical authority.
- [ ] Real llms.txt + AI-crawler policy in robots.txt.
- [ ] Substantive About/trust/E-E-A-T content; consistent NAP.
- [ ] Unique compelling titles/meta on every page.
- [ ] GA4 + events live; Lighthouse SEO 100, Perf ≥ 90; sitemap submitted (GSC + Bing + IndexNow).
- [ ] No fabricated facts anywhere; all `TODO(owner)` items listed for the owner.
