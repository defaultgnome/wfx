# Chapter 7: Storage, Caching and the Network

**Part II: Assets and Data**
**Target length:** ~3,500 words
**Tone reference:** see `STYLE.md`
**Continues from:** Chapter 6 (remembering everything means keeping everything, somewhere fast enough to use)

---

## 1. Purpose

Part II ends here. Chapters 4-6 were about knowing what the data is. Chapter 7 is about **where it lives and how it moves**, and about the day we learned that the farm's bottleneck was not compute.

The chapter's thesis: *At scale, a render farm is a very large machine for reading files. Storage design is mostly about not letting everyone ask for the same thing at once.*

If the reader remembers one sentence: *"We bought more CPUs and got a faster way to wait."*

---

## 2. What the reader should walk away knowing

**Mental models**

- **Throughput vs. latency vs. metadata operations:** three different ways storage can be the slow part, and why the third surprises people.
- The **read-heavy, write-bursty** shape of render workloads.
- The **hot file problem** (from Ch. 2): thousands of tasks asking for the same texture, scene file or cache at the same moment.
- **Tiers:** fast and expensive, large and cheap, archive and slow; and the movement between them.
- **Caching at several levels:** on the node, on the rack, near the storage, and in the tools themselves. Each one trades freshness for speed.
- Why **immutable, versioned data** (Ch. 4) makes caching safe: a published version never changes, so a copy never goes stale.
- The network as a shared resource: oversubscription, and why the top-of-rack switch has opinions.

**Skills for the reader to take away**

- A way to ask "is this I/O-bound?" before buying hardware.
- A habit of **staging**: move the data once, then read it locally many times.
- Reading a storage graph for the pattern, not the peak.

**Deliberately out of scope**

- Vendor storage comparisons.
- Scheduler internals (Ch. 19) and cloud transfer economics (Ch. 21), both only pointed to.
- Memory-side techniques inside the renderer (Ch. 9).

---

## 3. Narrative flow

### Opening hook (≈300 words)

Open with **the morning the dashboards were green and nothing finished.** This chapter owns the book's "green dashboard while everything is on fire" gag; every later use is a callback. CPUs sat at 15% across 5,000 nodes while the storage array's graphs looked like a flat line at the ceiling. Everyone was busy; no one was working.

> **Illustrative decision (numbers are placeholders):** the first symptom was an artist asking why a 20-minute task had run for three hours. The number that gave it away: about 20,000 tasks asked for the same foliage texture set within ninety seconds, roughly 2 million metadata requests a minute, none of them for actual data.

### The comfortable belief (≈150 words)

"Storage is a big disk. Compute is the expensive part." Light humor on the budget meeting where this was true.

### Where the time actually goes (≈600 words)

- A render task's life, told from the file system's point of view: open the scene, find the textures, read the caches, write the frame.
- Why many small files and many small requests hurt more than a few big ones.
- Metadata: the cost of merely *asking* whether a file exists, multiplied by thousands of nodes.
- **Analogy:** a library where every patron wants the same book at the same moment, and the librarian also has to answer the phone.

> **Visual:** a farm-to-storage funnel showing thousands of nodes narrowing into a handful of storage servers.

### Five thousand nodes, one texture (≈700 words)

The core story, with numbers.

- How a scene with a popular asset caused the same file to be requested thousands of times within seconds.
- The failed first fixes: faster disks, more links, a bigger array.
- The reframe: *fetch once per node, or once per rack, not once per task.*
- What we built (illustrative): local node caches, a staging step that pre-warms data before tasks start, and read-through caches near the farm. Described in capabilities, not product names.
- Giant callback, one line: the misty forest's shared foliage set was the hot file in the opening incident, requested by every task of every layer.
- How scheduling cooperates: placing tasks that need the same data together (pointer to Ch. 19).

### Tiers and the long tail (≈550 words)

- What lives on fast storage, what moves to bulk, what is archived, and who decides.
- Retention in light of Ch. 4 and Ch. 6: restoring a shot 18 months later means thawing its manifest's files, in a predictable time.
- The cost of "just keep it on fast disk" at petabyte scale (callback to Ch. 2 numbers).
- Cleaning up: scratch space, orphaned caches, and the ritual of asking who owns 400 TB.

### The network is part of the machine (≈500 words)

- Oversubscription in plain terms, with an airport analogy.
- Artists' desktops, the two sites (about 300 and 200 artists) and the render farm all compete for the same pipes.
- One paragraph on remote artists and virtual workstations: they use the same pipes and the same caches, and a slow link shows up as a complaint about the tool.
- One sentence on security: access control and content protection apply on-premises too; the cloud chapter (Ch. 21) is where they get loud.
- Why a big copy at 10 a.m. can make review sessions stutter.
- Traffic priorities and why we separated interactive and batch where we could.

### Caches that lie (≈400 words)

Disambiguation up front: this chapter's **cache** is a storage cache; the simulation cache is Ch. 12's.

- The hazard side of caching: stale data, partial writes, and the cache that preserved an old version everyone swore was gone.
- How immutable versions and fingerprints keep us honest (Ch. 4, 6).
- What we monitor: hit rate alongside stall time, queue depths and the slowest percentile, not averages.

### The honest footnote (≈100 words)

The caching layer worked for years, then quietly turned out to encode the old storage system's habits (how it answered metadata requests, how it aged data). When the storage underneath was eventually replaced, those habits became requirements nobody had written down. That is one of the five migrations in Ch. 28; plant it here in two sentences and move on.

### Closing (≈200 words)

- "What stuck": *measure what the machines are waiting for, not how busy they look.*
- Close the arc of Part II: we can name assets (Ch. 4), describe scenes (Ch. 5), remember what was used (Ch. 6), and now keep it all within reach.
- One-line foreshadow: replacing the storage under all this is a story for Ch. 28.
- **Bridge to Part III:** all that data exists to be turned into pixels. Chapter 8 asks why we ended up writing our own way to do that.

---

## 4. Key visuals

1. **Funnel:** farm nodes to storage, with the choke point marked.
2. **Cache layers:** node, rack, near-storage, with hit-rate estimates.
3. **Tier diagram:** fast, bulk, archive, with typical age and access patterns.
4. **Before/after graph:** CPU utilization and storage queue depth, flat vs. healthy.

---

## 5. Humor and tone opportunities

- Green dashboards over an empty output folder.
- The CPU purchase that mostly bought a faster way to wait.
- Nodes "politely" requesting the same file in the same millisecond.
- The 400 TB folder whose owner is, after investigation, the author.
- Callback only, never retold: the green dashboard is this chapter's gag.

Target: the author's own purchasing and tuning assumptions.

---

## 6. Details to get right

- Keep numbers plausible and rounded; avoid hardware model names and exact capacities of real facilities.
- Explain metadata costs carefully; this is the most misunderstood part.
- Don't oversell caches; name their failure modes.
- No product names; describe the mechanism and the trade-off.

---

## 7. Connections

- **Ch. 1:** data types and their sizes.
- **Ch. 2:** the "hot file" and "what breaks first" threads, resolved here.
- **Ch. 4:** immutable versions make caching safe; retention policy.
- **Ch. 6:** restores for re-rendering.
- **Ch. 9:** out-of-core techniques inside the renderer.
- **Ch. 19:** data-aware scheduling.
- **Ch. 21:** data gravity and egress in the cloud.
- **Ch. 22:** making storage cost visible.
- **Ch. 28:** the storage migration (foreshadowed in the honest footnote and the close).

---

## 8. Decisions taken (fiction; nothing left to answer)

1. Incident: the hot texture set, with the numbers above (placeholders).
2. Metadata explanation: library-and-phone analogy, one page, no jargon beyond "metadata".
3. Caching technologies: described as capabilities only.
4. Money: leave cost figures to Ch. 22.
5. Part II ends on the reflective close plus the one-line Ch. 28 plant, then the bridge to Part III.
