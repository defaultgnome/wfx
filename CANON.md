# CANON: single source of truth for *Ten Thousand Shots a Year*

The book is **fiction**: a composite studio, a composite narrator, illustrative numbers. Nobody will ever fill in "real" answers. What matters is the **feel, the problem, the solution and the story**, not factual accuracy. Where an outline says "Author input needed", resolve it with a concrete invented detail from this file or in the same spirit. Never leave a blocking question open.

If an outline disagrees with this file, this file wins.

## 1. Narrator and studio

- Narrator: **Jacob M. Miles**, fictional. Head of pipeline engineering; started as a pipeline TD. **14 years in VFX, 9 at "the studio"** (never named). Has also done on-call, hiring, metrics-setting and research sponsorship, which covers ch22, ch25, ch26 and ch27.
- The studio: roughly **1,000 staff**, about **500 artists** across **two sites** (about 300 and 200). Feature films and streaming series, about **8 shows in flight** at once.
- A **show** = one film or series being worked on. Use "film" only for the audience-facing product. Define "show" once, in Ch. 1.
- Annual output: about **10,000 shots a year** (the title figure). Say it in the Ch. 1 scale snapshot and tie it to Ch. 2's "shows in flight" arithmetic. A show has roughly 800 to 2,000 shots.
- **The pipeline is nine years old.** Everything that ages with it is "nine years" (the orphaned tool in the Foreword, Ch. 3 and Ch. 29 is the same tool, nine years old; converters in Ch. 5 have a "nine-year" lifespan, not ten). Never use "a decade", "eleven years" or a calendar year such as 2013 for facility history. Use "years ago" or "three shows ago".

## 2. Numbers (illustrative, reuse exactly)

- **The giant** (recurring example shot): a 2.5-second shot of a giant creature walking through a misty forest. 24 fps, so **60 frames**. Introduce it by name in Ch. 1. Final shot is about **version 40** ("forty times", as in the Foreword). Each version re-renders 60 frames across about 30 layers/passes, so about **1,800 images per version** and about **72,000 images over its life**. Ch. 2 arithmetic must match this, not "eighty versions".
- The giant returns as a one-line callback in at least one chapter of each Part II to VIII, where it fits naturally (for example Ch. 6 provenance, Ch. 9 memory, Ch. 12 sim, Ch. 20 failure, Ch. 28 migrations).
- Shot journey: **nine stages**, "about a dozen departments". Not "ten".
- Farm: **about 5,000 nodes**, **64 cores per node**, so about 320,000 cores. Standard node RAM **512 GB**; a **high-memory pool at 1 TB**. State this once in Ch. 2 (cores/RAM again briefly in Ch. 9). Per-task memory figures elsewhere (200 GB in Ch. 19, 300 GB in Ch. 27) must say they run on the high-memory pool.
- Core-hours: a **few hundred million a year** facility-wide; **tens of millions** for one big show.
- Volume: **a million tasks a night** (STYLE anchor). A **job** is a request containing about **240 tasks**, so about **4,000 jobs a night**. Use "tasks" in bodies and appendices; "jobs" only in the Ch. 19 title and its definition. Ch. 29 must say a million tasks.
- Failure: **1 in 1,000 tasks fails**, so about a thousand failures before breakfast.
- Ch. 20 bad-frame scene: one bad frame among **100,000 frames in a sequence** (matches title). Ch. 12 and Ch. 20 share the checkpoint anecdote: **a 40-hour simulation dies at hour 39**.
- Headcount: ~1,000 staff, ~500 artists, two sites. Replace "200 artists on the east coast", "hundreds of artists" etc. with figures consistent with this.
- Avoid number tics. Vary placeholder values: do not reuse forty/eleven for everything. Keep **forty** only for the giant's versions and the 40-hour sim.

## 3. Terminology

- **Task** (unit of work) vs **job** (request, ~240 tasks). **Show**, **shot**, **plate**, **DCC**, **TD**, **farm** are defined once, in Ch. 1's vocabulary (add TD and farm there). App A's first-use column must match where each term is really first used or defined.
- "USD" is allowed by name (public, de facto, and in the TOC) with a neutrality note. No other vendor or product pitch. Remove "tractor-style scheduler"; say "a queue-based scheduler". Maya, Houdini and Nuke are named only where the TOC names them.
- Disambiguate **cache** (storage cache in Ch. 7, sim cache in Ch. 12) and **volume** (volumetric data Ch. 9/12, capture volume Ch. 16, the stage Ch. 17).
- **Ch. 4 owns "the lane problem"**: who owns which fact about an asset. Add a short named section on it in Ch. 4. Ch. 9 and Ch. 11 cite it.
- **Spelling: US English everywhere** (color, behavior, organization, license, normalize). Add to STYLE.md.
- Calibration line, exact: *"The farm, to its credit, was extremely efficient at being wrong."* Fix STYLE section 5 and Ch. 20 to match section 10.

## 4. Ownership decisions

- **Cloth and clothing**: owned by **Ch. 14** (add "cloth" to its TOC blurb and title block). Ch. 12 and Ch. 13 point to Ch. 14 and Ch. 14 must deliver it.
- **Review, dailies and the review room**: owned by **Ch. 23** (a named section: "The review room"). Ch. 2's fifth "what broke first" item points to Ch. 23. App B diagram B.3 (review loop) lists Ch. 23 as support. Ch. 1, Ch. 2 and App C references to review point to Ch. 23.
- **Foreword's five differences**: tag each Part's opening in its first chapter with the difference it pays off. Difference **#4 ("every show is a new product")** is homed in **Ch. 3** (each show re-tests every build/buy decision) with a callback in **Ch. 27**.
- **Orphaned-tool anecdote**: same tool in Foreword, Ch. 3, Ch. 29. Ch. 29 calls back to Ch. 3. Ch. 24 and Ch. 26 echo it only in one sentence.
- **Running gags, one owner each**: "very expensive space heater" owned by Ch. 20 (Ch. 22 may use it once, cut from Ch. 9). "Green dashboard while everything is on fire" owned by Ch. 7 (others are callbacks). "final_final_v2" owned by Ch. 1 (Ch. 4 one callback). "The educational way" used once in the whole book. "Ladder" metaphor kept only for Ch. 3's exit-cost ladder and Ch. 27's research ladder; elsewhere use scale, table or ramp.
- **Migrations (Part VIII)**: chronology: scene format (Ch. 5) started first; the renderer (Ch. 8) followed, partly overlapping; then storage, then scheduler, then runtime. Ch. 28 lists them in TOC order as case files but states the real chronology once. Ch. 28 retells Ch. 5 and Ch. 8 in **one short paragraph each, as callbacks**; its new material is the playbook and the storage, scheduler and runtime cases. Setups required elsewhere:
  - **Ch. 7**: foreshadow the storage migration in its honest footnote or close.
  - **Ch. 19**: the scheduler in the chapter is the *old* one whose fairness rules lived unwritten in code; writing the fairness policy down is what the later replacement forced. Add a foreshadow of Ch. 28.
  - **Ch. 24**: foreshadow the language-runtime upgrade (generic: "a scripting-language runtime upgrade") as the integration-maintenance tax made concrete.
  - Ch. 6 is the origin of the "old shot re-renders differently" mystery (blue shadow from a plugin update). Ch. 28's opener calls back to it with a different cause (renderer behavior). Ch. 21's cloud-vs-local variant is labeled the unresolved cousin.
- **Ch. 31 (next five years)**: explicitly opinion and speculation, framed as such. Keep ML deferrals only where an earlier chapter plants one (name them in a short table in Ch. 31 with source chapter). Drop the "colour/review formats" and "accelerators" claims unless you also add a planting line in an earlier chapter (preferred: one line in Ch. 10 for accelerators, one in Ch. 23 for review formats). Ch. 31 closes with a short "what stuck" reflection and does not over-promise.
- **Ch. 30** reconciles: decision records were written too late; provenance (Ch. 6) was right in insistence and late in cost.
- **Ch. 8**: a handful of people on the renderer team, no "four". The Ch. 3 decision record shown in Ch. 8 is reconstructed after the fact.
- **Ch. 16**: enumerate exactly **ten** steps once and reuse the same list wherever it appears.
- **Ch. 15**: "tens of millions of leaves", not billions.
- **Ch. 19 / Ch. 20 hooks**: Ch. 19 opens on the 9:40 message, mentions volume in passing. Ch. 20 owns the "number that ruined my optimism" reveal.

## 5. How to handle "Author input needed" and open questions

- Replace each callout with an **illustrative decision**: one concrete invented anecdote, number or scene, written as the narrator would tell it, tagged *(illustrative)* only if helpful. Keep callout boxes only where they now carry the chosen detail; otherwise fold into the body.
- Delete the lists of open author questions or answer each one in one line.
- Invented outcomes ("the save") are fine, they are the story. Keep them plausible, humble and self-directed per STYLE.md. No heroic framing.
- No real company, film, product, person or facility names. USD, Maya, Houdini, Nuke and generic industry words are the exceptions above.
- No code or API detail (remove the fragment at Ch. 24 around line 74).

## 6. Structure fixes

- Ch. 1 header gets "Continues from: Foreword".
- Ch. 31 gets a "what stuck" close.
- Length targets: stay within STYLE.md's 2,500 to 4,000 words. Ch. 23 target rises to cover the review room (about 3,800); Ch. 8 and Ch. 18 trimmed to at most 3,800.
- Ch. 23 arithmetic: fix the "a person-year" claim to match its inputs (about eleven person-years).
- Closings: Ch. 1 to 19 and 28 to 31 use "What stuck"; Ch. 20 to 27 use "What I'd tell my past self". Ch. 22 aligns to "past self". State this as a deliberate Part split.
- Fix forward/backward reference errors from `scratchpad/review/xref.md`: Ch. 21 and Ch. 22 must not claim to call back to later chapters (they foreshadow Ch. 23 or cite Ch. 5/6 where the theme first appears).

## 7. Appendices

- **App A**: cut to about 90 entries using the selection rule (term used in 2 or more chapters or foundational). Correct first-use chapters per the outlines. Remove unused terms and product names. Fix the false-friends table to star all ten terms.
- **App B**: add the Ch. 23 support for the review loop; use "nine stages" in B.7 and add the stage strip to Ch. 1's key visuals (or retarget B.7).
- **App C**: C.1 "versions per shot" kept for churn, misleading for productivity, cross-referenced to C.2.
- **App D**: TOC gets "books". Entries must be **real, well-known works the writer is highly confident exist** (for example PBRT, OpenEXR/OpenColorIO/OpenVDB/USD public docs, major published rendering and simulation papers and talks). Give author and title only, no invented details. Mark the appendix "verify before print". Word target about 2,500. Ch. 1 or the Foreword points to Appendix D at least once.

## 8. Addendum after fresh review

- **Five differences mapping.** The Foreword lists the *primary* payoff chapter for each: #1 Ch. 19, #2 Ch. 4, #3 Ch. 23, #4 Ch. 3, #5 Ch. 28. Part-opening tags (first chapter of each Part) carry exactly one tag each and may be an echo. Final tags: Part I (Ch. 1) = #4 (forward to Ch. 3); Part II (Ch. 4) = #2; Part III (Ch. 8) = #3; Part IV (Ch. 12) = #4; Part V (Ch. 16) = #5; Part VI (Ch. 19) = #1; Part VII (Ch. 23) = #3; Part VIII (Ch. 28) = #5. Remove or reword any other tag lines so none contradicts this. The Foreword gets one added sentence saying Part openings echo the five differences as a through-line.
- **Migration numbers (single set).** Scene format (Ch. 5, Ch. 28): overlap planned **six months**, actual **fourteen**. Renderer (Ch. 8, Ch. 28): overlap planned **four months**, actual **nine**. Storage, scheduler and runtime figures live in Ch. 28 only and must not clash with any earlier mention.
- **Ch. 31 ML claims.** Add one planting line each: learned/neural rendering as "watched, not adopted" in Ch. 8; neural previews as a question in Ch. 11; search and tagging of review media in Ch. 23. Add table rows in Ch. 31 for them. Drop the upscaling claim. Appendix D NeRF/Gaussian entries note "see Ch. 31" only.
- **Giant in Part V**: one callback each in Ch. 16 (capture of its walk cycle), Ch. 18 (its rig).
- **"The educational way"**: placed once, in Ch. 12 or Ch. 16 (whichever already has it), and removed from the other.
- Ch. 25 must contain the stage, rig and renderer-freeze examples that Ch. 10, 17 and 18 promise. Ch. 30 cites Ch. 11 and points to App C. Ch. 28 must not cite Ch. 5 content that Ch. 5 does not contain (add it to Ch. 5 or drop it).
- OpenCue and any other product/project name in App D: keep only if it is a real, well-known open-source project and note neutrality; otherwise generic.
