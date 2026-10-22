# Appendix C: Metrics We Tracked, and the Ones That Turned Out to Be Misleading

**Position:** back matter
**Target length:** ~3,000 words
**Tone reference:** see `STYLE.md` (this is the most opinionated appendix, so keep the candor; lists are fine here)
**Continues from:** Ch. 2 (scale axes), Ch. 20 (failure), Ch. 22 (cost visibility), Ch. 30 (retrospective). Ch. 20, 25 and 30 each carry a one-line pointer to this appendix (Ch. 30 in its "what we got right" section or advice callout).

---

## 1. Purpose

A pipeline team lives by its dashboards, and some dashboards lie politely. Appendix C collects the numbers we watched, why we watched them, and which ones sent us in the wrong direction.

The appendix's thesis: *a metric is a question you stopped asking.* Most misleading metrics were good questions that outlived their context.

If the reader remembers one sentence: *"Optimize the metric and you will get the metric."*

---

## 2. What the reader should walk away knowing

- A starter set of metrics worth tracking in a pipeline, by area.
- For each, **why it matters** and **what it hides**.
- A short list of metrics that **actively misled** us, with the mechanism of the mistake.
- A habit: pair every metric with a **counter-metric** and a **decision it informs**.

**Deliberately out of scope**

- Real numbers (the book is fiction; every figure is illustrative and the appendix says so once, up front).
- Tooling for dashboards.
- Statistics tutorial.

---

## 3. Entry format

Each metric entry:
- **Name** and one-line definition.
- **Why we tracked it** (the decision it was meant to inform).
- **What it told us / what it hid.**
- **Verdict:** Kept, Kept with a counter-metric, or Misleading.
- **Chapter:** where the story lives.

Misleading metrics get an extended entry: **the number, the temptation, what actually happened, what we replaced it with.**

---

## 4. Structure

### Introduction (~200 words)
Hook: a short callback to the green dashboard on the night everything was on fire (the story is owned by Ch. 7). The "metric as question" idea, and the entry format.

### C.1 Metrics we tracked and kept (grouped by area)

**Throughput and farm (Ch. 2, 19, 20)**
- Tasks per night (about a million; volume, not health). Counter: failure rate.
- Queue wait time by show and priority. Why: fairness (Ch. 19).
- Farm utilization. Hides: busy is not useful (see C.2).
- Task failure rate and retry rate. Why: failure as normal (Ch. 20). Counter: time-to-diagnose.
- Mean time to a bad frame diagnosed. Story in Ch. 20; counter to failure rate above.

**Cost and energy (Ch. 21, 22)**
- Core-hours per frame (per shot and per show). Verdict: kept with a counter-metric (retake count), see Ch. 22.
- Cost per delivered shot. Verdict: kept with a counter-metric (retake count), see Ch. 22.
- Cloud egress and burst spend (Ch. 21).
- Energy per frame (Ch. 22), where measurable.

**Data and storage (Ch. 4, 6, 7)**
- Storage growth rate, per show.
- Cache hit ratio alongside stall time, and file-open rates (Ch. 7). Hit ratio alone is C.2 #5.
- Percentage of published assets with complete dependency records (Ch. 6).
- Time to re-render a shot from archive (Ch. 6).

**Render quality and artist experience (Ch. 8-11, 23)**
- Time to first pixel in the interactive previewer (Ch. 11).
- Render time vs. noise target (Ch. 10).
- Previewer-vs-final disagreement rate (Ch. 11).
- Artist-reported "time to see my change" (Ch. 23).

**Production flow (Ch. 1, 25)**
- Versions per shot to approval. Kept for churn, misleading for productivity (see C.2 #7).
- Retake rate by cause.
- Time from note to new version in review (Ch. 23, "The review room").

**People and support (Ch. 25, 26)**
- Support tickets by category and time-to-first-response.
- Pages per on-call week, and the share that were actionable (Ch. 25 holds the story).
- Change-freeze exceptions (Ch. 25).
- Open pipeline TD positions and time-to-fill (Ch. 26).

**Decision (fiction, resolved):** we tracked all of the above by the end, though several started as a spreadsheet one engineer updated on Fridays. Illustrative ranges only: queue wait for a high-priority task under ten minutes, a failure rate near one in a thousand tasks, retries a few percent of tasks, storage growth in the low hundreds of terabytes a month per show. None are real figures.

### C.2 Metrics that turned out to be misleading

Eight get the extended entry (the number, the temptation, what happened, the replacement). The rule: the story lives in the chapter, and this appendix holds the short card unless the metric has no chapter home. All figures are illustrative.

1. **Farm utilization.** The one I championed. We set a target of 90 percent and hit 94. It hid wasted retries, wrong results and small tasks starved by big ones. Replacement: useful core-hours as a share of total. (Ch. 19, 20) *Utilization was excellent. The frames were not.*
2. **Average render time per frame.** One tidy number; the long tail sets the schedule. Replacement: percentiles plus the top-N heaviest shots. (Ch. 2, 9)
3. **Uptime of the pipeline.** I also argued for this one. 99.9 percent sounded great; the 0.1 percent landed in crunch. Replacement: availability weighted by show phase. Story pointer in Ch. 25. (Ch. 25)
4. **Ticket count and close rate.** Fewer tickets looked like happier artists; they had stopped filing and built workarounds. Replacement: time-to-resolution plus sampled interviews. (Ch. 23)
5. **Cache hit ratio in isolation.** High looked good; it was high on the wrong files. Replacement: stall time attributed to I/O. (Ch. 7)
6. **Per-render cost display.** Showing artists the cost of each test render made them stop testing, so problems surfaced later and cost more. Replacement: cost shown per shot and per week, never per click. (Ch. 22)
7. **Versions per shot as productivity.** More versions can mean healthy iteration or a confused brief. Companion to the kept C.1 entry (churn, not productivity). (Ch. 1)
8. **Migration "percent complete".** The progress bar hit 90 percent while the last tenth of shots carried the weird cases. (Ch. 28)

Two-line pointers only (the chapter tells the story): **cost per core-hour** (cheap compute versus cost per useful frame, Ch. 21, 22), **render noise measured numerically** (lower error did not mean artist trust, Ch. 10), **lines of code or tools shipped** (replacement: tools retired, Ch. 3, 29).

### C.3 A short rule set for choosing metrics (~250 words)
- Every metric names the decision it informs.
- Pair it with a counter-metric.
- Prefer percentiles to averages.
- Measure from the artist's side as well as the machine's.
- Put an expiry date on dashboards.

### C.4 A one-page starter dashboard (~150 words)
Describe, not draw, a minimal dashboard: eight to ten metrics, one row each, with the question and the counter-metric.

---

## 5. Selection criteria

**Included in C.1** if it informed a real decision, or if a reader building a pipeline would want it from day one.
**Included in C.2** only if it was *believed* before it misled, and if the mechanism of the mistake teaches something general.
Exclude metrics that depend on confidential figures or on particular customers.

---

## 6. Key visuals

1. **Metric table** with columns: metric, area, why, hides, verdict, chapter.
2. **Misleading-metric card** (illustrated format) for each entry in C.2.
3. **Percentile-vs-average sketch:** a long-tailed distribution with mean and 99th percentile marked.
4. **Starter dashboard sketch** (wireframe only).
5. Optional: metric overlay on the farm diagram in Appendix B.2.

---

## 7. Humor and tone opportunities

- The dashboard that was green during an outage.
- Goodhart's law told as a personal story (the author's team did it to themselves).
- Dry one-liners at the end of entries ("Utilization was excellent. The frames were not.").

Keep the target the author's own past self.

---

## 8. Details to get right

- Numbers are illustrative; say so once in the introduction.
- Define each metric precisely enough that a reader could compute it.
- Keep the verdicts consistent with the chapter stories (reconcile after the chapter outlines settle).
- Avoid pretending that every misleading metric was caught early.

---

## 9. Connections

- **Ch. 2:** scale axes, tails, peaks.
- **Ch. 19-22:** farm and cost metrics.
- **Ch. 23, 25, 26:** people and support metrics.
- **Ch. 28-30:** migrations and retrospective.
- **Appendix A:** metric terms; **Appendix B:** where measured.

---

## 10. Decisions (resolved)

1. Championed and regretted: farm utilization and pipeline uptime (the narrator's own).
2. Ranges: illustrative only, as in C.1.
3. No recurring metric box in chapters; one-line pointers in Ch. 20, 25 and 30 suffice.
4. C.2 is ordered by how embarrassing it was, most first.
