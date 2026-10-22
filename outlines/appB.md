# Appendix B: Reference Architecture Diagrams

**Position:** back matter
**Target length:** ~1,500 words of text (captions, legends, and "how to read this") plus the diagrams themselves
**Tone reference:** see `STYLE.md`
**Continues from:** the in-chapter sketches (each chapter shows a simplified picture; this appendix shows the whole)

---

## 1. Purpose

Chapters show small pictures that make one point. Appendix B collects the **full-size reference versions** so a reader can see how the parts connect.

The appendix's thesis: *any one diagram is a lie of omission, so here are several, each honest about what it leaves out.*

The TOC names three (asset flow, render farm, review loop). The outline proposes those three as the core set, plus a few small supporting diagrams that earn their place.

All diagrams are **generic and illustrative**, not a depiction of any real facility's system. Component names are by function ("scheduler", "asset registry"), not product.

---

## 2. What the reader should walk away knowing

- How data and control flow through the pipeline, end to end.
- Where each chapter's subject sits in the whole.
- That the real system has more arrows than any diagram shows, and which arrows were left out on purpose.

**Deliberately out of scope**

- Product-specific or confidential topologies.
- Network diagrams, rack layouts, or security architecture detail (B.4 shows the security boundary only, not its detail).
- Code, API, or schema-level diagrams.

---

## 3. Entry format

Each diagram gets a **page spread** with:
1. **Title and one-sentence purpose.**
2. **The diagram.**
3. **How to read it:** legend, what boxes and arrows mean, solid vs. dashed (control vs. data).
4. **What it leaves out:** two or three bullets of honest omissions.
5. **Supports chapters:** list by number.
6. **Failure notes (optional):** one or two callouts marking where it broke in the stories (small numbered markers linked to the chapter).

Visual conventions: consistent shapes (people = rounded, storage = cylinder, compute = box), consistent colors, one-direction flow left to right, feedback loops drawn explicitly.

---

## 4. Diagram list

### B.1 Asset flow (core)
**Shows:** how an asset (character, environment, prop) is created in a DCC, published to a registry, versioned, referenced by many shots, and cached, with dependency edges and where the bytes physically live.
**Boxes (candidate):** DCC / artist workstation, publish step, asset registry (metadata), storage tiers, shot scene description, dependency records, cache layer, render.
**Supports:** Ch. 1, 4, 5, 6, 7, 14, 18.
**Omissions to state:** every special-case asset type; permissions; legacy paths.

### B.2 Render farm (core)
**Shows:** submission, scheduling, dispatch to nodes, execution, outputs, retries, and monitoring, with fairness among shows and the data path to storage.
**Boxes (candidate):** submitters (DCC and command line), queue manager and scheduler, node pools, render workers, shared storage and cache, results and logging, monitoring and alerts, cost accounting feed.
**Supports:** Ch. 2, 7, 8, 9, 19, 20, 22, and 21 for the cloud variant.
**Omissions to state:** license servers, network fabric, the human who restarts the thing.

### B.3 Review loop (core)
**Shows:** the cycle from render output to dailies, notes, retake, and a new version, with the people (artists, leads, supervisors) and the handoffs, including the "feedback flows backward" arrows from Ch. 1.
**Boxes (candidate):** render or comp output, review media generation, review session, notes capture, task tracking, new version request, delivery.
**Supports:** Ch. 1, 10, 11, 23 ("The review room", the prose home of this diagram), 25.
**Omissions to state:** informal review, hallway notes, the email that overrides the tracker.

### B.4 Cloud burst topology (supporting)
**Shows:** on-premises farm, burst cloud pool, data sync and cache, egress path, and the security boundary, as a variant of B.2.
**Supports:** Ch. 21, 22, 7.
**Omissions:** provider-specific services; exact network design.

### B.5 Scene description composition (supporting)
**Shows:** layered scene description in simplified form: base asset layers, shot layers, overrides, and the resolved scene a renderer sees.
**Supports:** Ch. 5, 6, 9.
**Omissions:** the full composition rules; performance machinery.

### B.6 Simulation and cache pipeline (supporting)
**Shows:** a simulation setup, solver run, cache write, cache read downstream, with versioning and invalidation.
**Supports:** Ch. 12, 13, 14, 15, 7.
**Omissions:** per-solver internals.

### B.7 Pipeline across the whole show (optional "big picture")
**Shows:** B.1 to B.3 overlaid on the nine-stage shot journey (the stage strip in Ch. 1's key visuals), with all arrows grayed except the one the reader selects.
**Supports:** whole book; best used as a reading map.
**Decision:** include, as the reading map on the closing spread. It is a sketch with one arrow family lit at a time, so legibility is manageable.

**Decisions (fiction, resolved):** all of B.4 to B.7 are in. Component names stay generic as listed above, and every diagram is generic by construction, so nothing needs clearance.

---

## 5. Selection criteria

A diagram earns a place if:
1. It spans three or more chapters.
2. It clarifies something prose cannot (parallel flows, feedback loops).
3. It can be drawn generically without revealing confidential design.

Not included: anything that would only repeat an in-chapter sketch.

---

## 6. Key visuals

The diagrams themselves, plus:
1. **A legend page** shared by all diagrams (shapes, line styles, colors).
2. **A chapter-to-diagram index table:** rows are chapters, columns are B.1-B.7, cells mark which diagram supports which chapter.

---

## 7. Humor and tone opportunities

- Captions with dry understatement ("This diagram contains roughly 60 percent of the arrows").
- A "what we left out" list that is a little too honest. Keep it rare, and aim it at the author's own systems.

---

## 8. Details to get right

- Consistent names across diagrams and with Appendix A.
- Every arrow type explained in the legend.
- Redraw, don't copy, any in-chapter sketches so the two stay consistent; check against final chapter text.
- Accessibility: do not rely on color alone; include text labels and alt text.

---

## 9. Connections

- **Appendix A:** labels use glossary terms.
- **Appendix C:** metrics in C can be placed on the diagrams (where each metric is measured). Optional overlay.
- **Ch. 1-2, 4-7, 19-22:** primary users of B.1-B.4.

---

## 10. Decisions (resolved)

1. Three core diagrams plus B.4 to B.7 as supporting.
2. Failure markers: yes, small numbered markers linking to the chapter stories (for example the giant's blue shadow, Ch. 6).
3. Clean technical style, with a dry caption voice.
4. Metric overlay (Appendix C) on B.2 only, as an optional second plate.
