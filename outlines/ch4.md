# Chapter 4: Asset Management Without a Single Source of Truth

**Part II: Assets and Data**
**Target length:** ~3,400 words
**Tone reference:** see `STYLE.md`
**Continues from:** Chapter 3 (you've decided what to own; now, what do you do with the data it produces?)
**Foreword difference echoed in this Part opening:** #2, "The requirements change nightly" (data that must keep changing and stay consistent; the primary payoff is here too). Tag it in the opening paragraph of this chapter.

---

## 1. Purpose

Part II opens here. Chapter 1 introduced the shared asset that ripples through hundreds of shots; Chapter 2 gave us the counts (about 500 artists, eight shows in flight, and the giant's forty versions). Chapter 4 asks the oldest question in the pipeline: **how do you keep track of things?**

The chapter's thesis: *Versioning huge, mostly binary, interdependent data is not source control with bigger disks. There is no single source of truth, and the job is to make that survivable.*

If the reader remembers one sentence: *"In a pipeline, 'latest' is an opinion, not a fact."*

---

## 2. What the reader should walk away knowing

**Mental models**

- What an **asset** is in pipeline terms (a character, a prop, an environment, a texture set), and that it is really a bundle of many files made by many departments.
- Why Git-style thinking **half works**: immutable versions and history are right; merging, branching and full-clone are wrong for 40 GB binary files nobody can diff.
- **Publish vs. work-in-progress:** artists save constantly; only a deliberate publish creates something others may depend on.
- **Immutable versions:** a published version never changes; fixes make a new one.
- **Pinning vs. floating** (shots lock to a version, or follow "latest"), and the tension between stability and getting fixes.
- Why there is **no single source of truth**: the production tracker, the file system, the asset database, and the artist's own folder all hold part of the answer, and they disagree.
- Naming and addressing: the difference between a path and an identity.
- **The lane problem** (named section below): every fact about an asset has exactly one owner, and the trouble starts when two teams each believe it is theirs.

**Skills for the reader to take away**

- A habit of asking, for any data type, "who may depend on this, and what happens when it changes?"
- A simple vocabulary for **states** an asset version can be in (work, published, approved, final, retired).

**Deliberately out of scope**

- The file formats themselves (Ch. 5).
- Tracing what a specific frame used (Ch. 6).
- Storage hardware and caching (Ch. 7).
- Product comparisons of asset managers (Ch. 3 covers how to decide).

---

## 3. Narrative flow

### Opening hook (≈300 words)

Open with **a small disaster of overwritten data.** A foliage texture "fixed" on a Friday evening quietly changes the look of 296 shots by Monday, and nobody can say who touched it. Keep it rueful and concrete: 296 shots, about 18,000 frames re-rendered over a weekend, and a lighting supervisor who spent Monday morning comparing screenshots. Tag Foreword difference #5 here: the work gets thrown away forty times, so the one thing that must not vanish is the record of which version was which.

Then the question underneath: *which version were we all looking at?*

> **Illustrative decision:** the Friday texture fix (296 shots, about 18,000 frames, one lost Monday). The culprit was an artist who correctly published a better texture over the old name, with nobody warned. Self-directed: the author's own team had set that rule.

### The comfortable belief (≈150 words)

"We'll just use source control." Light humor on how well this works for text files, and how a repository holding 200 TB feels about it (the giant's forest alone is a few hundred gigabytes).

### What makes asset data different (≈600 words)

- Size, binary-ness, and nothing to diff or merge.
- Interdependence: a character references a model, a rig, textures and a groom, each with its own version.
- Many authors, in many tools, none of which know about each other (Ch. 24).
- Fan-out and fan-in, back-referencing Chapter 1.

> **Visual:** a character asset as a tree of sub-assets, each with version numbers, showing one change fanning out to many shots.

### What Git got right, and what it didn't (≈550 words)

Fair treatment, no sneering. Keep: immutable history, content addressing, cheap labels. Drop: merging, distributed full copies, line-based diffs. Show the compromise: **lock-and-publish** instead of merge, and why artists find that natural.

### Versions, publishes and pins (≈700 words)

The core mechanism, explained plainly.

- Work files vs. published versions, and why the gate is deliberate.
- Version numbers and **labels** ("approved", "latest good") that move while versions don't.
- Pinning by default for shots in production; floating for early look-dev.
- The "just this once" override, and why every pipeline grows one.

> **Visual:** a timeline of one asset: dozens of work saves, five publishes, two approvals, and three shots pinned to different versions.

### Many sources of truth (≈550 words)

- The tracker says approved; the disk says otherwise; the artist says "I fixed that yesterday."
- Reconciliation, and which source wins by design for which question.
- Why we stopped trying to build one database to rule them all, and settled on **clear ownership of each fact.**
- Foreshadow Chapter 6, where the dependency record gets its own treatment.

### The lane problem (≈400 words)

A short, named section. Ch. 9 and Ch. 11 cite it by this name.

- **Definition:** *the lane problem is who owns which fact about an asset.* The tracker owns approval status. The file system owns what bytes exist. The asset database owns versions and labels. The artist owns intent ("I fixed that yesterday"). Each owner stays in its lane; trouble comes when a fact is answered from the wrong lane.
- A second beat, the one the later chapters need: **asset builders own an asset's weight and behavior** (poly count, memory, how it deforms), not the downstream team that inherits it. The team that finds a 40 GB tree in a shot is rarely the team that built it, and the fix belongs in the builder's lane.
- Illustrative scene: a prop approved in the tracker, present on disk, and labeled "latest good" in the asset database, yet three artists were each using a different copy. Nothing was wrong in any single lane. The mismatch lived between them.
- The design rule we adopted: one owner per fact, an explicit handoff when a fact crosses a lane, and a disagreement is a bug report against the lane that answered, not a debate.
- Honest cost: lanes need a referee, and for about a month the referee was the author.

> **Visual:** the who-owns-which-fact matrix (see Key visuals, item 4), with lanes as columns.

### Cost of keeping everything (≈350 words)

Retention honestly: you cannot keep every work save forever. What we keep, what we archive, what we delete, and the one time deletion bit us. Light pointer to Chapter 7 for storage tiers.

> **Illustrative decision:** keep every published version indefinitely; keep work saves for six weeks, then thin to one per day; archive approved versions of finished shows to cold storage. The deletion that went wrong: a cleanup of "old scratch" removed a lighter's unpublished override for the giant's hero shot a week before delivery. It was recovered from a render node's local cache, by luck, and the author wrote the six-week rule that afternoon.

### Closing (≈200 words)

- "What stuck": *name the thing, freeze the thing, and let people point at it.*
- **Bridge to Chapter 5:** versions tell us *which* files. But what's inside them, and can two tools agree on what a scene even is?

---

## 4. Key visuals

1. **Asset as a tree** of sub-assets with versions and a fan-out arrow to shots.
2. **Asset timeline:** work saves, publishes, labels and pins.
3. **Git vs. pipeline comparison**, three columns: kept, adapted, dropped.
4. **Who owns which fact (the lane matrix):** a small matrix of the tracker, the file system, the asset database and the artist.

---

## 5. Humor and tone opportunities

- The Friday-evening texture fix.
- Source control meeting a 40 GB file ("it did its best").
- "Latest" as the most dangerous word in the facility.
- One callback only to Ch. 1's "final_final_v2": the folder that grew a new suffix on every Friday. Do not retell the joke.

Target of the joke: the author's own naming habits.

---

## 6. Details to get right

- Don't claim Git cannot be used at all; large-file extensions exist and some teams use them. Say where they fit.
- Keep numbers plausible: asset sizes from megabytes to tens of gigabytes.
- No product names beyond generic categories.
- No internal system names or schema details.

---

## 7. Connections

- **Ch. 1:** fan-out of shared assets and the idea of versions and retakes.
- **Ch. 2:** object counts and about 500 artists on the same assets.
- **Ch. 3:** the decision record is a good device for choosing an asset system.
- **Ch. 5:** formats and composition of what is versioned.
- **Ch. 9 and Ch. 11:** cite the lane problem by name.
- **Ch. 6:** provenance builds on the publish record.
- **Ch. 7:** retention and tiering.
- **Ch. 18:** rigs as versioned software.
- **Ch. 28:** the storage and scene-format migrations, where version identity mattered most.

---

## 8. Decisions taken (fiction; nothing left to answer)

1. Story: the Friday texture fix, as above.
2. Lock-and-publish culture: credited mostly to artists' own habits (they already "claimed" files by shouting across the room); the tooling only wrote it down.
3. Version states: one small state diagram (work, published, approved, final, retired), kept simple.
4. Retention candor: plain, one deletion, no drama.
5. "No single source of truth" is the mid-chapter reveal; the title carries the payoff.
