# Appendix D: A Reading List: Books, Papers, Talks and Open-Source Projects

**Position:** back matter
**Status:** verify before print. Every entry below is a well-known public work, given by author and title only. Years, venues, editions and links are checked at copy-edit.
**Target length:** ~2,500 words (annotations of one to three sentences each, plus intro)
**Tone reference:** see `STYLE.md` (annotations in the narrator's voice: what it is, and why it was worth the time)
**Continues from:** the "what to read next" gestures scattered through chapters. The Foreword and Ch. 1 each point here once; Ch. 31 points here for further reading. Other chapters do not repeat the pointer.

---

## 1. Purpose

Readers finishing a chapter often want the next step. Appendix D is a curated, opinionated shelf: a small number of things worth reading, organized by the part of the book they extend.

The appendix's thesis: *a reading list should be short enough to finish and honest about why each item is on it.*

If the reader remembers one thing: *start with the item marked "start here" in the category you care about.*

Disclosure line for the intro: items are listed because they helped, not because of any relationship with the creators. The narrator is fictional, so the shelf is a composite of what a pipeline engineer would plausibly have read.

---

## 2. What the reader should walk away knowing

- Where to go deeper on any Part of the book.
- What kind of source each item is (paper, talk, book, open-source project) and how much time it takes.
- Which items are foundational and which are for the curious.

**Deliberately out of scope**

- Exhaustive bibliography.
- Product reviews or vendor material.
- Anything confidential or internal.

---

## 3. Entry format

Each entry:
- **Author(s) and title.** Nothing else is stated as fact; venue and year are added at verification.
- **Type:** book, paper, talk, open-source project, documentation.
- **Why it's here:** one to three sentences in the book's voice.
- **Read it if:** one short phrase ("you are choosing a scene format").
- **Effort:** quick (under an hour), medium, or deep.
- **Chapters:** the book chapters it extends.

Within each category, order by a suggested reading sequence, not by date. Flag one **"Start here"** per category.

**Sample annotation (voice anchor):** *Kleppmann, Designing Data-Intensive Applications.* Read it if you think storage is someone else's problem. It explained, in a few chapters, why our 5,000 nodes kept hammering one file. Deep. Chapters 4, 7.

---

## 4. Categories

Entry counts in parentheses. Overall target: about 50 entries, about a quarter marked "deep".

### D.1 How the whole thing works (3)
Supports the Foreword, Ch. 1, 2.
- Catmull (with Wallace), *Creativity, Inc.* Start here. Why a studio is organized around its problems.
- Brinkmann, *The Art and Science of Digital Compositing*. The last creative lever, which this book deliberately skips.
- Brooks, *The Mythical Man-Month*. Fixed dates, shifting requirements, and why more people don't fix it.

### D.2 Build vs. buy, and decision-making (3)
Supports Ch. 3, 29, 30.
- Nygard, *Release It!* Start here. Failure patterns before you meet them at 3 a.m.
- Nygard, "Documenting Architecture Decisions". The short post behind the decision record in Ch. 3.
- Ousterhout, *A Philosophy of Software Design*. A counterweight when "just one more layer" sounds reasonable.

### D.3 Assets, scene description and provenance (4)
Supports Ch. 4, 5, 6.
- OpenUSD public documentation. Start here. The de facto scene description format; named as a public reference, not a recommendation.
- Alembic project documentation. A cache-oriented interchange format and its design thinking; named as a public open-source project, not a recommendation.
- Humble and Farley, *Continuous Delivery*. Reproducible builds are the cousin of reproducible shots.
- Fowler, *Refactoring*. Small steps on large things, the shape of the scene format migration.

### D.4 Storage, caching and I/O (4)
Supports Ch. 7, 21.
- Kleppmann, *Designing Data-Intensive Applications*. Start here. Deep.
- Ghemawat, Gobioff and Leung, "The Google File System". The hammered-file problem, discussed in a different industry.
- Dean and Barroso, "The Tail at Scale". Why the slowest read sets the schedule.
- OpenImageIO and OpenEXR public documentation. How image data is actually laid out on disk.

### D.5 Rendering and light transport (6)
Supports Ch. 8, 9, 10.
- Pharr, Jakob and Humphreys, *Physically Based Rendering: From Theory to Implementation*. Start here. Free to read online; it is the closest thing to a standard text. Deep.
- Shirley, *Ray Tracing in One Weekend* (and its sequels). The gentlest first renderer.
- Kajiya, "The Rendering Equation". The paper the whole field cites. Quick to skim, slow to absorb.
- Veach, *Robust Monte Carlo Methods for Light Transport Simulation*. Deep. Where "physically correct" gets its tools.
- Zwicker and colleagues, "Recent Advances in Adaptive Sampling and Reconstruction for Monte Carlo Rendering". A map of denoising for Ch. 10.
- Museth, "VDB: High-Resolution Sparse Volumes with Dynamic Topology". Volumes and memory, Ch. 9.

### D.6 Interactive rendering and real-time (3)
Supports Ch. 11, 17.
- Akenine-Moller, Haines and Hoffman, *Real-Time Rendering*. Start here.
- Gregory, *Game Engine Architecture*. The game-side half of the collision in Ch. 17.
- Hickey, "Simple Made Easy" (talk). Not about graphics. About keeping simple things separable, which is most of the previewer's problem.

### D.7 Simulation, crowds and procedural methods (6)
Supports Ch. 12 to 15.
- Bridson, *Fluid Simulation for Computer Graphics*. Start here.
- Stam, "Stable Fluids". The paper that made fluid simulation cheap enough for production.
- Muller and colleagues, "Position Based Dynamics". Fast, stable, and art-directable, which matters more than exact.
- Reynolds, "Flocks, Herds and Schools: A Distributed Behavioral Model". The crowd idea in a few pages.
- Baraff and Witkin, "Large Steps in Cloth Simulation". Cloth, Ch. 14.
- Prusinkiewicz and Lindenmayer, *The Algorithmic Beauty of Plants*. Procedural vegetation, Ch. 15.

### D.8 Characters, capture and rigging (3)
Supports Ch. 16, 17, 18.
- Parent, *Computer Animation: Algorithms and Techniques*. Start here.
- Lewis, Cordner and Fong, "Pose Space Deformation". Correctives, Ch. 16 and 18.
- Fowler, *Refactoring* (again, by design). A rig is code that happens to move.

### D.9 Farms, scheduling and reliability (5)
Supports Ch. 19 to 22.
- Beyer and colleagues, *Site Reliability Engineering*. Start here. General, not VFX-specific, and all the better for it.
- Verma and colleagues, "Large-Scale Cluster Management at Google with Borg". The fairness and failure problems at another scale.
- Ghodsi and colleagues, "Dominant Resource Fairness". Fair sharing when tasks need different things (Ch. 19).
- Dean and Ghemawat, "MapReduce: Simplified Data Processing on Large Clusters". Retries as a design principle (Ch. 20).
- Nygard, *Release It!* (again, for checkpoints and breakers).

### D.10 Tools, people and process (4)
Supports Ch. 23 to 27.
- Norman, *The Design of Everyday Things*. Start here. Watching someone work for a day, in book form.
- Dekker, *The Field Guide to Understanding Human Error*. For the 2 a.m. chapter.
- Forsgren, Humble and Kim, *Accelerate*. Measurement and its limits (pairs with Appendix C).
- Brooks, *The Mythical Man-Month* (again, for Ch. 26).

### D.11 Migrations, tech debt and the future (4)
Supports Ch. 28 to 31.
- Feathers, *Working Effectively with Legacy Code*. Start here. Deep.
- Fowler, "StranglerFigApplication" (essay). The migration pattern in Ch. 29.
- Mildenhall and colleagues, "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis". See Ch. 31.
- Kerbl and colleagues, "3D Gaussian Splatting for Real-Time Radiance Field Rendering". See Ch. 31.

### D.12 Open-source projects worth knowing (5, table)
Table: project, what it does in one line, chapters. Named as public open-source projects, not recommendations. Licenses are checked at verification, and no description claims what a project "revolutionized".
- OpenUSD (scene description; Ch. 5, 6).
- OpenEXR (image file format; Ch. 7, 8).
- OpenColorIO (color management; Ch. 3, 11).
- OpenVDB (sparse volumes; Ch. 9, 12).
- OpenImageIO (image I/O; Ch. 7).

### D.13 Courses and talks (1, table)
Table: title, speaker or organizer, why watch.
- "Path Tracing in Production" (SIGGRAPH course notes). Start here for Ch. 8 and 10.

---

## 5. Selection criteria

Include an item if:
1. It is **publicly available** (no internal or confidential material).
2. It would have saved the team time had they read it earlier.
3. It is readable by a developer from outside VFX, or is clearly marked as advanced.
4. It is stable enough to still be findable (official documentation or well-known venues).
5. It balances the shelf: not all papers, not all projects.

Exclude marketing or vendor-promotional pieces, and anything whose citation cannot be verified before print.

---

## 6. Key visuals

1. **Reading map:** a table with Parts on one axis and "start here / next / deep" on the other.
2. **Category tables** for D.12 and D.13.

---

## 7. Humor and tone opportunities

- Annotation lines with dry understatement ("Forty pages. Page 12 changed my mind.").
- A rueful note about reading a paper after building the wrong thing.

A light touch; annotations are for usefulness first.

---

## 8. Details to get right

- Verify every author, title, edition and link before print.
- Keep descriptions accurate and non-promotional.
- Check against chapter text so every in-chapter "see Appendix D" has a target.
- Titles and authors only here; no invented details.

---

## 9. Connections

- Mirrors the Parts of the book; each category maps to chapters listed above.
- **Appendix A** for unfamiliar terms in annotations.
- **Ch. 3** (adopt open source) and **Ch. 5** (open standards) lean on D.12.
- **Ch. 27** (research that survives contact with production) leans on D.5 to D.8 and D.11.

---

## 10. Decisions (resolved)

1. Length: about 50 entries, annotations of one to three sentences.
2. Books are in, and the TOC says "books".
3. No "what not to read first" section; one honest line on PBRT's length is enough.
4. Annotate every entry briefly; "start here" picks get a sentence more.
5. No disclosure beyond the intro line.
