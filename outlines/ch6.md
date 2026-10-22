# Chapter 6: Dependency Graphs and the "What Did This Shot Actually Use?" Problem

**Part II: Assets and Data**
**Target length:** ~3,400 words
**Tone reference:** see `STYLE.md`
**Continues from:** Chapter 5 (a scene composed from many files; how do we know what a render pulled in?)

---

## 1. Purpose

Chapters 4 and 5 gave us versions and composed scenes. Chapter 6 asks the question that arrives, reliably, from a producer: **"Can you re-render that shot exactly as it was?"**

The chapter's thesis: *Reproducibility is not a feature you add later. It is a record you either kept at the time or didn't, and you can't reconstruct it from memory.*

If the reader remembers one sentence: *"The only honest answer to 'what did this shot use?' is the one you wrote down while it was happening."*

---

## 2. What the reader should walk away knowing

**Mental models**

- A shot's inputs form a **graph**: shot, assets, versions, caches, textures, scene layers, tool versions, settings.
- **Declared vs. observed dependencies:** what the artist said the scene uses vs. what the renderer actually opened. They differ more than anyone expects.
- **Provenance:** a record of how an output came to be, attached to the output.
- **Reproducibility has levels:** same inputs, same software, same hardware, same pixels. Each costs more than the last.
- **Impact analysis** (forward): "if I change this, what is affected?" and **provenance** (backward): "what produced this?" are two directions of the same graph.
- Why the software environment is also an input: tool versions, plugins, and even the farm's operating system.

**Skills for the reader to take away**

- The notion of a **render manifest** captured at execution time.
- A way to decide the **level of reproducibility** a project actually needs, and what it costs.
- The "18 months later" test as a design review question.

**Deliberately out of scope**

- Scheduler internals and retries (Ch. 19-20).
- Storage retention mechanics (Ch. 7).
- Bit-exact reproducibility of the renderer in depth (touch lightly; Ch. 8 and Ch. 10 cover what "the same image" means for a renderer).

---

## 3. Narrative flow

### Opening hook (≈300 words)

Open in **a phone call, eighteen months after delivery.** A trailer for the re-release needs the giant's shot (about version 40, 1,800 images per version, the one we know from Ch. 1) re-rendered in a new format. It comes back subtly different: a blue tint in the giant's shadow nobody can explain. A small detective story begins. This chapter owns the "old shot re-renders differently" mystery; Ch. 28's opener calls back to it with a different cause, and Ch. 21's cloud-versus-local variant is its unresolved cousin.

> **Illustrative decision:** the cause was a color-handling plugin that had auto-updated on the farm image after delivery and changed a default for shadow tint. Two weeks of detective work, a producer asking daily, and the author's own team had approved the auto-update. The manifest would have said so in one line.

### The comfortable belief (≈150 words)

"We have the scene file, so we have the shot." Light humor on how much of a shot is not in the scene file.

### The graph nobody drew (≈600 words)

- Build the graph in the reader's head, one layer at a time: shot, assets, versions, textures, caches, then the invisible layers: software, plugins, settings.
- Callback to Chapter 1's fan-out and fan-in, and to Chapter 5's references that load other files.
- Declared vs. observed, with a concrete example: the texture that the scene never mentioned but a script loaded on the fly (the theme Ch. 23 later names as the "script nobody told us about"; one line here).

> **Visual:** a shot's dependency graph, with declared edges solid and observed-but-undeclared edges dashed in red.

### Capturing what actually happened (≈750 words)

- Why we record **at render time**, not at publish time.
- What the manifest holds: resolved file versions, content fingerprints, tool and plugin versions, settings, the machine class.
- Where the information comes from: the scene resolution step, the file system's access log, the tool's own report. Honest about the gaps.
- The cost: extra storage, a little overhead per task, and an artist-facing question of when a manifest is "complete".
- Why this belongs on the output itself, as metadata, so it travels with the frame (Ch. 4 identities).

### Forward and backward (≈550 words)

- **Backward:** given a final frame, find everything that fed it.
- **Forward:** given a bad texture, find every shot that used it, and which of those are already delivered.
- The 3 a.m. query ("what did this broken asset touch?") as the real justification for the whole system.
- Scale: millions of edges, and why we stopped storing it in one place.

### Re-rendering later (≈600 words)

- What it takes to bring a shot back: restore files from archive (Ch. 7), recreate the software environment, rerun.
- Why "same software" is the hard part: operating systems age, plugins vanish, licenses expire.
- Containers and pinned environments as part of the answer, with the honest limits.
- **Levels of reproducibility** table (a ramp): what we guarantee, what we try, what we don't promise. Illustrative policy: same inputs and same software always; same hardware class for delivered shows; same pixels promised only on the same hardware class.
- Legitimate non-reproducibility: randomness, time-dependent simulation, hardware differences, and how we document it rather than hide it.

### What we left out on purpose (≈250 words)

Where we chose not to track (scratch work, previews, experiments), and why a graph that records everything is a graph nobody reads.

### Closing (≈200 words)

- "What stuck": *a pipeline's memory is a feature with a budget.*
- Giant callback, in full: the manifest for the giant's v40 would have listed the plugin version in one line, and the blue shadow would have been a five-minute question instead of two weeks. (Insistence on reproducing the shot was right; the cost came late. Ch. 30 reconciles this.)
- **Bridge to Chapter 7:** remembering everything requires keeping everything, and keeping it somewhere fast enough to use. That is a storage problem.

---

## 4. Key visuals

1. **Layered dependency graph** with declared and observed edges.
2. **Manifest anatomy:** a stylized card showing the kinds of facts recorded (no real schema).
3. **Forward and backward queries:** one graph, two arrows.
4. **Reproducibility levels:** a ramp from "same files" to "same pixels", with cost.

---

## 5. Humor and tone opportunities

- The scene file as a very short summary of a very long story.
- The texture loaded by a script that no one remembered writing.
- The detective who turns out to be the author's own team's approved plugin update.
- Reproducibility as a promise made cheerfully in a kickoff meeting.

Target: the author's early optimism.

---

## 6. Details to get right

- Distinguish **provenance** (what happened) from **versioning** (what exists); readers conflate them.
- Be honest that bit-exact results are often unrealistic across hardware.
- No schema, API or product detail. Describe what is recorded, not how.
- No real show or client identifiers in the anecdote.

---

## 7. Connections

- **Ch. 1:** fan-out/fan-in and version history; the giant, introduced there, returns here in full.
- **Ch. 4:** publishes, pins and identities feed the graph.
- **Ch. 5:** composed scenes and lazy loading hide dependencies.
- **Ch. 7:** archive and restore make re-rendering possible.
- **Ch. 10:** what "the same image" means; why images can differ legitimately.
- **Ch. 20:** diagnosing one bad frame among 100,000 frames in a sequence uses the manifest.
- **Ch. 23:** names the "script nobody told us about" theme seeded here.
- **Ch. 21:** security and audit demands from studios.
- **Ch. 28:** its opener calls back to the blue shadow, with a different cause (renderer behavior).
- **Ch. 30:** reconciles provenance: right in insistence, late in cost.

---

## 8. Decisions taken (fiction; nothing left to answer)

1. Best story: the giant's blue shadow, as above.
2. Containers and environments: one paragraph, no tool names.
3. Level achieved: stated as the illustrative policy in the levels table.
4. Opener: keep the phone call; the 3 a.m. bad-texture query is the justification later.
5. Candor about gaps: plain; the file system access log missed anything read from network caches for about a quarter of the early manifests.
