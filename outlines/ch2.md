# Chapter 2: The Scale We Actually Deal With

**Part I: The Shape of the Problem**
**Target length:** ~3,200 words
**Tone reference:** see `STYLE.md`
**Continues from:** Chapter 1 (the giant shot, the scale snapshot sidebar)

---

## 1. Purpose

Chapter 1 gave the reader a map. Chapter 2 gives it **dimensions**. The reader should leave with a feel for how big the problem is, which kinds of "big" matter, and, most importantly, **what breaks first**.

The chapter's thesis: *scale is not one number. It is several, on different axes, and each axis breaks a different part of the system. The things that break first are usually not the ones you'd guess.*

If the reader remembers one sentence: *"Bytes are rarely what hurt you first."*

---

## 2. What the reader should walk away knowing

**Mental models**

- Scale has at least **four axes**: data volume (bytes), **object count** (files, tasks, versions), compute (core-hours), and **people** (humans and their attention). Each has its own failure modes.
- **Averages lie; peaks rule.** Production load is wildly uneven, and the final weeks before delivery produce a multiple of normal load. Systems are sized for the crunch, and tested far too rarely against it.
- **The long tail matters.** Most shots are ordinary; a few are monsters (huge crowds, heavy simulations, enormous scenes). The 99th percentile shot sets your infrastructure limits.
- **Count things, not just weigh them.** Millions of small files can hurt more than a few huge ones.
- **Rate of change** is a scale axis too. It isn't only how much data there is, but how fast it's being created, modified, and read.
- A short vocabulary of back-of-envelope thinking: orders of magnitude, "per frame budgets", and why we reason on a log scale.

**Concrete things to see**

- A back-of-envelope calculation that multiplies the giant up to a whole film.
- A ranked list of "what broke first" across several areas, each with a short story.
- A feel for how load varies across a show's lifetime.

**Deliberately out of scope**

- Detailed storage or scheduler solutions. Those belong to Chapters 7 and 19; here they only get named as the places the pain will land.
- Exact industry-wide numbers. Orders of magnitude only, flagged as approximate.

---

## 3. Narrative flow

### Opening hook (≈300 words)

Return to the giant, and **do the arithmetic out loud.**

Sixty frames (2.5 seconds at 24 fps). Each frame renders as about 30 layers, so about 1,800 images per version. About 40 versions over the shot's life. That is around **72,000 images**, for two and a half seconds (60 x 30 x 40). Now multiply by the shots in a show (roughly 800 to 2,000), then by the 8 shows in flight, and the studio's ten thousand shots a year if each were a giant. The sum lands in the hundreds of millions of images. Let the number get silly, then show the reader the real consequence: not "that's a lot of terabytes" but "that's a lot of *files*," and the file system had opinions about that.

Aim: a surprise that the reader can verify with a calculator. Friendly, slightly alarming.

> **Note:** all figures are illustrative orders of magnitude, flagged as such in the text. Real shots vary from far lighter to far heavier than the giant.

### The comfortable belief (≈150 words)

"Scale means big drives." The reader (and the young narrator) believed scaling is a problem you solve by buying more of the same. Light humor on the procurement fantasy.

### Four kinds of big (≈900 words)

The core section. One sub-heading per axis, each with: what it means in this world, a concrete number or scene, and the failure mode it produces.

1. **Bytes.** Petabytes per show; what is big and what is merely large. Where the bulk lives (simulation caches and renders, as Chapter 1's table showed).
   *Failure mode:* running out is obvious; the sneaky version is the cost of keeping everything "just in case."
2. **Objects.** Files, versions, tasks, database rows. Hundreds of millions of files; directories with a hundred thousand entries.
   *Failure mode:* metadata operations (listing, stat-ing, opening) cost more than reading the data. A tool that politely "just checks the folder" can bring storage to its knees.
3. **Compute.** The farm, stated once here: about **5,000 nodes** at **64 cores** each, so about **320,000 cores**. Standard nodes have **512 GB** of RAM; a **high-memory pool** has **1 TB** (other chapters' big per-task memory figures run there). Facility-wide that is a few hundred million core-hours a year; one big show uses tens of millions. A busy night runs **a million tasks** (about 4,000 jobs of about 240 tasks each; Ch. 19 defines the difference). Frames take hours each; the farm is a shared utility with a constant queue.
   *Failure mode:* not "too slow" but "too contended," as shows fight for the same machines.
4. **People.** About 500 artists across two sites, a few dozen pipeline engineers, and one review room (Ch. 23). Human attention is a hard cap: you can't watch more shots in dailies than the day has hours.
   *Failure mode:* the bottleneck migrates from machines to people, and no amount of hardware fixes it.

End the section with a short comparison table or graphic: axis, typical size, what hurts first, which chapter handles it.

### Peaks, not averages (≈450 words)

- **The shape of a show.** Long ramp-up, a quiet middle, then a crunch where output climbs steeply toward delivery. Show the curve.
- Why "average load" is a useless number: a farm that is fine for ten months and drowning for six weeks.
- The cost of provisioning for the peak (idle hardware), and the temptation to size for the average (misery in the crunch). Foreshadow cloud bursting (Ch. 21).
- **Everything happens at once.** Multiple shows overlap, and artists work in the same few hours of the day, so load has a daily rhythm on top of the show rhythm.

> **Visual:** a stylized load curve over a show's life, with the "crunch" shaded, plus a daily rhythm mini-chart.

### What breaks first (≈900 words)

A ranked "hit list" of failures, told as brief stories. Each one: what happened, why it was surprising, and which chapter fixes it. Aim for five items, roughly in the order they tend to appear as scale grows:

1. **File counts and directory sizes.** A tool that lists a directory takes minutes, and then everyone's tools slow down together.
2. **A "hot" file.** Thousands of render tasks read the same texture or scene file at once, and the storage serves them in a queue. (→ Ch. 7)
3. **Licenses and tokens.** Commercial tools that need a license per running process; the farm cannot start work that has no license to run. A non-technical limit that behaves like a technical one.
4. **The scheduler's own database.** The system that tracks millions of tasks becomes a bottleneck for the very work it manages. (→ Ch. 19)
5. **The review room.** A perfectly healthy farm produces more shots than humans can look at. Throughput of decisions caps throughput of work. (→ Ch. 23, which owns the review room.)

Weave in one blunt self-deprecating confession: the narrator guessed the wrong bottleneck.

> **Chosen story (illustrative):** a texture folder grew to about 200,000 entries. A tool that politely "just checked the folder" on every launch slowed storage for the whole floor for most of an afternoon. The narrator's first move was to order faster disks. The problem was the number of files, not their size; the fix was a directory layout rule and a lecture to himself.

### Thinking about scale (≈400 words)

The practical takeaway, three light rules of thumb. Present as habits, not commandments.

- **Budget per frame, per file, per second.** Divide big numbers into small ones you can reason about.
- **Count the objects, not just the bytes.** Ask "how many?" before "how big?"
- **Design for ten times, be suspicious of a hundred.** A design that handles 10x usually has headroom; 100x usually needs a different design.

A short callout: **"Questions to ask before building anything."**

### Closing (≈150 words)

- Return to the giant, now "multiplied by a thousand", and the unglamorous truth that most of the engineering is about counting.
- One-line reflection ("what stuck").
- Bridge to Chapter 3: *given a problem this size, who builds the tools, and what do you buy?*

---

## 4. Key visuals

1. **The giant's arithmetic.** A staircase or waterfall: 60 frames → × 30 layers → × 40 versions → × shots → × shows. Each step a bar on a log scale, ending in a number that looks silly.
2. **Four axes.** A compact graphic or table: bytes, objects, compute, people, with "what hurts first."
3. **Load curve over a show's life.** Ramp, plateau, crunch; optional daily rhythm inset.
4. **What breaks first.** A simple scale from "small scale" to "film scale" showing where each failure appears.

---

## 5. Humor and tone opportunities

- The procurement fantasy: "just buy more disks."
- The directory that takes four minutes to list: "it wasn't broken, it was thinking."
- The farm that is perfectly healthy while the artists wait on the farm.
- The narrator guessing the wrong bottleneck, with a straight face.

Keep jokes light and aimed at the narrator or the systems.

---

## 6. Details to get right

- Label every figure as approximate, and prefer ranges.
- Avoid describing a specific storage or scheduler product.
- Be careful with claims about licenses: describe the general phenomenon, not a vendor's terms.
- Keep arithmetic transparent. Readers will check it: 60 x 30 x 40 = 72,000; 5,000 x 64 = 320,000.

---

## 7. Connections

- **Ch. 1:** reuses the giant and the "scale snapshot" sidebar; this chapter replaces its hand-waving with reasoning.
- **Ch. 4-7:** object counts and hot files lead directly into assets, dependencies, and storage.
- **Ch. 19-21:** scheduler limits and cloud bursting follow from the "peaks" section.
- **Ch. 22:** cost and energy accounting picks up the "just in case" theme.

---

## 8. Decisions

1. **Orders of magnitude used:** see the farm numbers in section 3 (illustrative, labeled approximate).
2. **Outage story:** the folder-listing slowdown in "what broke first" item 1 (illustrative).
3. **Longest story:** the "hot file" or the folder listing; the folder listing gets the longest telling.
4. **People as an axis:** yes, it carries extra weight as the bridge to Part VII.
5. **Load curve:** stylized and generic, not based on any real show.
