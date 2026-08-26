# Sianatak — Exact Kimi Design Adaptation

This revision intentionally returns to the original Kimi/Opulence visual structure.

## Design preservation rule
The original Kimi sections are reused directly:
- HeroSection
- VideoShowcaseSection
- FeaturedSection
- CollectionGridSection
- BrandStatementSection
- InstagramCTASection

No replacement Works carousel, masonry gallery, custom service split, custom about blocks, or custom contact cards are used.

`CollectionGridSection` is the original THE COLLECTION component, with its original:
- max-width 1200px
- 7vw horizontal padding
- 3-column desktop layout
- square images
- GSAP column parallax
- original spacing and typography scale

Only CTA elements in four original sections were changed from non-functional `<button>` elements to visually identical `<a>` links so navigation/phone actions work. Their classes and sizing were left unchanged.

## Content adaptation
Arabic Sianatak content replaces the demo product copy. Services, works, company story and contact details remain in the same site and are presented using repeated original Kimi components when more content is needed.

## Works images
The supplied company project photos are used inside the original CollectionGridSection. A newly supplied unique aluminum/window image was added as `work-14.jpg`; duplicate uploads were not added twice.

## Fonts / RTL
The site is Arabic-first and RTL. The original dimensions/color palette remain, while Arabic-capable Noto Serif Arabic / Noto Sans Arabic fonts are used as equivalents for the original display/body typography.

## Run
```bash
npm install
npm run dev
```

## Validation performed
All TS/TSX source files were syntax-parsed successfully with TypeScript transpilation diagnostics (0 syntax errors). A full npm build could not be completed in the sandbox because the package registry dependency install timed out / was unavailable.

## Media pass — client request
- Each page keeps only one opening video: the Hero. The immediately following original `VideoShowcaseSection` remains in the same position/layout but is text-only, so none of its copy is lost.
- Client project photos are reserved for Home `Works Preview` and the `Our Works` page only.
- Other sections use the newly supplied glass/aluminum and HVAC images.
- Unrelated demo media (ocean, forest, leather/materials, vase video) was removed from the exported project.
- The original glass-craftsmanship video (`still-life-showcase.mp4`) was intentionally kept because it is relevant.
- The original gear videos (`metal-parts-hero.mp4`, `metal-parts-showcase.mp4`) were intentionally kept as technical/mechanical visual support.
- The two newly supplied glass/architecture videos are included as `glass-city.mp4` and `glass-facade.mp4`.
- Videos were re-encoded with H.264 + fast-start for lighter web delivery while retaining 1280×720 output.
