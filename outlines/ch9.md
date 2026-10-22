# Chapter 9: Taming Memory

**Part III: Rendering**
**Target length:** ~3,300 words
**Tone reference:** see `STYLE.md`
**Continues from:** Chapter 8 (a physically based renderer wants the whole scene at once)

---

## 1. Purpose

Chapter 8 ended with a renderer that is correct and hungry. Chapter 9 is about **feeding it**: scenes with billions of polygons on machines with a fixed amount of RAM.

The chapter's thesis: *Memory is the budget nobody can borrow against. Compute can be waited out; memory runs out, and the job dies. Most of the craft is deciding what never needs to exist in memory at all.*

If the reader remembers one sentence: *"The cheapest polygon is the one you never load."*

---

## 2. What the reader should walk away knowing

**Mental models**

- **Why path tracing is memory-hungry:** any ray can hit anything, so unlike rasterization you can't simply stream the scene past the camera. Explain in plain words, with a kitchen or warehouse analogy.
- **The farm's memory, stated once more briefly (full figures in Ch. 2):** 64 cores per node, a standard node with 512 GB of RAM (about 8 GB per core), and a **high-memory pool at 1 TB**. Later per-task figures (Ch. 19, Ch. 27) run on the high-memory pool.
- The **memory budget** per render task, and what it competes with: geometry, textures, acceleration structures, volumes, and the renderer's own working set.
- **Instancing:** one tree stored once, placed ten million times. Why it's a huge win and why it's fragile (artists edit "just one" of them).
- **Level of detail and procedural generation at render time:** make geometry when a ray needs it, discard it afterward.
- **Out-of-core techniques:** keep the working set in memory and the rest on disk, with the hit to speed. Link to caching in Ch. 7.
- **Texture handling:** tiled, mip-mapped textures where only the visible portion is read.
- **Peak versus average memory:** the task that dies is the peak one, and the peak is often in setup, not in rendering.
- **Packing the farm:** a memory-hungry task that wastes a whole node's cores. Preview of Ch. 19.

**Concrete things to see**

- A back-of-envelope showing why a naive scene doesn't fit: polygons x bytes per polygon x copies.
- A before/after of one monster shot's memory footprint after a round of fixes.
- A short ranked list of "what ate the memory" from real investigations.

**Skills for the reader to take away**

- Measure first: where does a render's memory actually go? Build the habit of a memory profile per task, before optimizing.
- Treat memory as a **contract** between the scene, the renderer and the farm.

**Deliberately out of scope**

- GPU memory details (Ch. 11 touches them for previews).
- Data-layout minutiae and allocator internals.
- Farm-level scheduling of memory (Ch. 19) and failure handling of out-of-memory kills (Ch. 20), beyond a pointer.

---

## 3. Narrative flow

### Opening hook (≈300 words)

Open on **an out-of-memory failure at 3 a.m.** A frame that rendered fine yesterday dies on a node with the same RAM as always. The scene had grown by one hedge. The hedge was, it turned out, about thirty-five million polygons, modeled by no one, produced by a procedural tool that only looked small. A single "density" slider had been nudged from 3 to 4. (illustrative)

### The comfortable belief (≈150 words)

*Buy more RAM.* A cheerful note on how often that works, until the farm has thousands of nodes and the next tier of RAM is a different class of machine.

### Why the budget is hard (≈550 words)

The collision with reality.

- Where the memory goes in a typical heavy shot: geometry, textures, acceleration structures, volumes.
- The surprising part: the **acceleration structure** (how the renderer finds what a ray hits) can rival the geometry itself.
- Why "peak" matters: building the scene can need more than rendering it.
- Link back to Ch. 2: the 99th-percentile shot sets the requirement for everyone.
- **Giant callback:** on the giant's shot (Ch. 1), the mist volume and the fur, not the creature's body, were what pushed a render past the standard 512 GB node and onto the 1 TB pool, at one point on about a third of its versions. (illustrative)

> **Visual:** stacked bar of memory by category for a typical shot and a monster shot.

### Instancing, and its quiet failure modes (≈650 words)

The big lever and its traps.

- Why a forest is one tree plus a lot of transforms.
- **Hierarchical instancing:** instances of instances, and the multiplication that follows.
- How artists break instancing without meaning to: tiny per-copy edits, unique materials, "make it real" operations that flatten everything.
- Scene description's role (Ch. 5): instancing must survive translation between tools and the renderer.
- Making instancing the *easy* path: tooling that warns when an edit would cost 4 GB.

### Making geometry only when needed (≈500 words)

- Level of detail and procedural geometry created on demand at render time.
- Displacement and subdivision that happen late, so the stored model stays small.
- Curves and hair (a preview of Ch. 14): enormous counts, generated rather than stored.
- The trade-off: lazy geometry costs CPU and makes renders harder to reproduce exactly (Ch. 6).

### Out of core: keeping the scene on disk (≈550 words)

- Keep the hot working set in RAM and page the rest.
- What "hot" means for ray tracing: rays are incoherent, so the access pattern is rude.
- Strategies: sorting rays to improve locality, caching tiles and meshes, and sharing read-only data between processes on one node.
- The I/O cost: tie this back to Ch. 7 and the node-hammering-the-file problem.
- When it's worth it, and when the answer is to simplify the scene.

> **Visual:** a spectrum from "everything in RAM" to "everything paged", with speed and risk on it.

### Memory as a contract (≈400 words)

The cultural fix.

- Per-asset and per-shot **memory budgets** with warnings long before lighting.
- Reports artists can read: "this asset costs 3 GB, here is why".
- Who owns it: asset builders, not the renderer team. Callback to the lane problem in Ch. 4 (who owns which fact about an asset; here, its weight).
- The humane version: budgets as guidance, not a wall, and a path for the shot that truly needs the monster.

### The honest footnote (≈200 words)

What still isn't solved: out-of-core renders that are correct but slow; memory estimates that are wrong in the unlucky direction; the next show that doubles the asset sizes. The budget keeps moving.

### Closing (≈200 words)

- Return to the hedge: the same procedural tool, now with a visible cost label.
- "What stuck": *an out-of-memory kill is not a crash. It's the system reporting an overdraft.*
- **Bridge:** once a frame fits and finishes, it comes out noisy. Chapter 10 is about how much noise artists will accept, and who gets to decide.

---

## 4. Key visuals

1. **Where the memory goes.** Stacked bars for normal and monster shots.
2. **Instancing multiplication.** One tree, a forest, a forest of forests, with counts.
3. **Working set diagram.** Hot and cold data, RAM and disk.
4. **Memory budget report** as an artist would see it.

---

## 5. Humor and tone opportunities

- The hedge that was thirty-five million polygons.
- "Just one more tree" as the sentence that ends budgets.
- The author's own earlier belief that RAM is cheap.

Keep the target the author's own earlier assumptions.

---

## 6. Details to get right

- Quote orders of magnitude only, flagged as approximate.
- Don't present out-of-core as a free lunch; say what it costs.
- Keep the instancing explanation accurate: one stored copy, many placements.
- No code, no allocator internals, no product names.
- Hardware figures are the book's illustrative ones (CANON); no show names or internal tool names.

---

## 7. Connections

- **Ch. 2:** the long tail and the 99th-percentile shot.
- **Ch. 2:** farm figures (nodes, cores, 512 GB standard, 1 TB high-memory pool), stated there once.
- **Ch. 4:** the lane problem, applied to who owns an asset's weight.
- **Ch. 5:** instancing in scene description.
- **Ch. 6:** reproducibility of lazy, on-demand geometry.
- **Ch. 7:** caching and I/O behind out-of-core.
- **Ch. 14-15:** hair and vegetation as the heaviest consumers.
- **Ch. 19-20:** farm packing and out-of-memory failures; Ch. 19 and Ch. 27 per-task figures use the high-memory pool.

---

## 8. Decisions taken (fiction, per CANON)

1. Best memory story: the hedge (thirty-five million polygons from one slider nudge).
2. Before/after: a monster shot from roughly 700 GB peak to roughly 380 GB after instancing fixes and late displacement (illustrative, rounded).
3. Acceleration structures: one paragraph and one visual line, no internals.
4. Memory budgets are a one-chapter device, not a recurring one.
5. The loudest resistance evaporated when the report showed "this tree costs 3 GB" next to an asset name that three teams had each spelled differently, which was the narrator's own naming rule coming home.
