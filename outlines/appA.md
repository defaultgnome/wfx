# Appendix A: Glossary for Engineers Coming from Outside VFX

**Position:** back matter
**Target length:** ~3,000 words (about 90 entries at 25-45 words each, plus a short intro)
**Tone reference:** see `STYLE.md` (lists belong here; keep the voice light but let the entries be short and exact)
**Continues from:** the inline definitions in every chapter (each term is defined in a clause on first use; this appendix is the place to look it up again)

---

## 1. Purpose

Chapters define VFX terms in passing, once. A reader who jumps to Chapter 19 without reading Chapter 1 needs somewhere to land. Appendix A is that place.

The appendix's thesis: *VFX borrows words from film, games, and software, and changes the meaning of half of them.* A "cache" is not a cache, a "plate" is not a plate, and "final" is rarely final.

If the reader remembers one thing: *when in doubt, look it up here, and assume the word means something slightly different from what you think.*

---

## 2. What the reader should walk away knowing

- The vocabulary needed to follow any chapter, in plain words, written for a backend, web, games, or infrastructure developer.
- Which common words are **false friends** (same word, different meaning) and what the VFX meaning is.
- Where in the book each term is first used and explained in depth.

**Deliberately out of scope**

- Product names and vendor-specific terms. One exception: "USD" is allowed by name (public, de facto, and named in the TOC), with a one-line neutrality note. Maya, Houdini and Nuke appear only where the TOC names them.
- Exhaustive film-production terms with no engineering impact (grip, gaffer, and similar).
- Code or API names.

---

## 3. Entry format

One entry = **term**, optional short alias or spelling, a **one-to-three sentence definition** in plain language, a **"Not to be confused with"** line only for false friends, and **"First used: Ch. N"** (plus "See also" for up to two chapters with the deep treatment).

Rules:
- Define by what it does or why it matters, not by synonym.
- Lead with the engineer's nearest analogy when one exists ("like a build artifact, except...").
- Cross-reference other glossary terms in italics, sparingly.
- Alphabetical within each theme group; a full alphabetical index at the end points to the theme group.

**Decisions (fiction, resolved):** US spelling throughout (color, behavior, organization). "Plate" is defined once, in Ch. 1, as the raw footage a shot starts from. In-house slang is limited to three translated items: "the giant" (the recurring example shot from Ch. 1), "final_final_v2" (Ch. 1), and "space heater" (a node that burns power and produces nothing, Ch. 20). Everything else is industry-common usage.

---

## 4. Structure

### Introduction (~150 words)
How to use the glossary, the false-friends flag, and a one-line promise that no term here requires a film degree.

### Entries, grouped by theme

Format below: term (first-use chapter; "see" names the deep treatment). False friends marked with *; all ten stars appear in the false-friends table (cache, version, final, layer, plate, solve, node, farm, volume, bake). Cut rule applied: about 90 entries, each used in two or more chapters or foundational. Terms no chapter uses (for example playblast, genlock, LED volume, backfill, poison frame, blackhole node, PUE, file handle storm, bounding box, reference vs. payload, prim, texture streaming, representation, lineage, asset library) are dropped.

**4.1 The shot and its life (Part I), 18 entries**
animation curve (1, see 16), asset (1), cache* (1, see 7 and 12), compositing (1), crunch (2, see 25), DCC (1), decision record (3, see 8, 28 and 30), dailies / review (1, see 23), delivery (1), final* (1), plate* (1), render layer / AOV (1), retake (1), rig (1, see 16 and 18), sequence (1), shot (1), show (1), version* (1).

**4.2 Assets and data (Part II), 13 entries**
manifest (6, see 20), composition (5), data gravity (21, reused in 28), dependency graph (6), interchange format (5), layer (scene layer)* (5), lane problem (4, see 9 and 11), provenance (6), publish (4), reproducibility / re-render (6), scene graph (5), variant (5), USD (5; a public scene-description format, named because it is the de facto word, not as a recommendation).

**4.3 Rendering (Part III), 18 entries**
bake* (8, see 11), color management (3, see 11), denoiser (10), instancing (9), interactive preview / viewport (11), level of detail (9, see 13), light path (8), look development (11), noise (10), out-of-core (9), path tracing (8), physically based rendering (8), rasterization (8), renderer (3, see 8), sample / samples per pixel (10), spectral rendering (8), tile / bucket (9), volume* (9).

**4.4 Simulation and procedural systems (Part IV), 12 entries**
agent (13), art-directable (14), cache (sim)* (12), checkpoint (12, see 20), crowd (13), fluid / pyro / destruction (12), groom (14), procedural (15), scatter (15), seed / determinism (12), skinning (13, see 18), solver (12).

**4.5 Characters and performance (Part V), 7 entries**
blend shape (16), latency budget (17), mocap (13, see 16), retargeting (16), solve (mocap)* (16), virtual production (17), deformation (16).

**4.6 Farm and cloud (Part VI), 14 entries**
burst (21), chargeback (22), core-hour (2), egress (21), farm* (1, see 19), idempotent task (20), job (19; a request of about 240 tasks), node* (2), priority / fairness (19), queue manager (19; a queue-based scheduler), retry (20), task (1; the unit of work), preemption (19), pool (19).

**4.7 People and process (Parts VII and VIII), 8 entries**
change freeze (10, see 25), blast radius (25), migration (5, see 28), on-call (3, see 25), pipeline TD (26), producer (6), supervisor (4, as "lighting supervisor"), TD / technical director (1, see 26).

Count check: 18 + 13 + 18 + 12 + 7 + 14 + 8 = 90 entries.

**4.8 Short "Who's who" box (~120 words)**
Plain-language list of the roles in a shot's life (supervisor, producer, lead, artist, coordinator, pipeline TD). Decision: the box lives here; Ch. 1 stays on stages, not job titles, and Ch. 26 covers the TD role in depth.

### Alphabetical index (~100 words)
Term to theme group and page.

---

## 5. Selection criteria for entries

Include a term if at least one is true:
1. It is used in two or more chapters.
2. A reader from outside VFX would plausibly guess its meaning wrong (false friend).
3. Its absence would stop a reader mid-paragraph.

Exclude if it is defined adequately inline and used once, if it is purely a product name, or if it carries confidential or facility-specific meaning.

Target mix: ~60 percent VFX or graphics terms, ~25 percent pipeline and farm terms, ~15 percent role or process terms.

---

## 6. Key visuals

1. **False-friends table:** term, the engineer's assumption, the VFX meaning. Ten rows, all starred terms (cache, version, final, layer, plate, solve, node, farm, volume, bake).
2. **Mini map of a shot's journey** (the nine-stage strip from Ch. 1) reprinted small, with glossary terms attached to the stages.

---

## 7. Humor and tone opportunities

- A single sly line in the intro about "final" never meaning final.
- A false-friends definition or two with dry understatement. Keep it to about one joke per page; the glossary is a reference, not a stand-up set.

---

## 8. Details to get right

- Definitions must be accurate at an engineer's level and consistent with how the chapters use the term. After the chapter outlines settle, **sweep** them for terms and reconcile.
- Keep "first used" chapters aligned with the TOC numbering; update if chapters move.
- Avoid facility-specific usage; prefer the industry-common meaning, with a note where usage varies.

---

## 9. Connections

- **Ch. 1:** source of the core vocabulary (show, shot, plate, DCC, TD, farm); the glossary extends its inline list.
- **Ch. 2, 19-22:** farm and scale terms.
- **Ch. 5-6:** scene description and provenance terms.
- **Ch. 8-11:** rendering terms.
- **Ch. 23:** the review room (dailies, review).
- **Ch. 26:** roles.
- **Appendix B** diagrams use these terms in labels; keep labels aligned.

---

## 10. Decisions (resolved)

1. False friends are starred in the entries and collected in the table; no other visual flag.
2. The who's who box lives in this appendix only.
3. In-house slang: three items, listed in section 3.
4. Themed grouping with a short alphabetical index at the end.
