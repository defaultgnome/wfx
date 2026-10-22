# Foreword: Why a Film Pipeline Is Not a Software Product

**Position:** front matter, before Part I
**Target length:** ~1,300 words (the shortest piece in the book on purpose)
**Voice:** the most personal in the book. First person, warm, a little rueful. Closest to a letter from Jacob M. Miles to a developer he hasn't met yet.
**Tone reference:** see `STYLE.md`

---

## 1. Purpose

A foreword has one job: **make the right reader keep reading, and the wrong reader leave kindly.** This one has three smaller jobs.

1. **Frame the central claim before Chapter 1 begins.** A film pipeline looks like a software product and behaves like something else. Naming that difference early lets every later chapter lean on it.
2. **Set expectations about the book itself:** who it's for, what level of detail to expect (details yes, code no), and what voice to expect (candid, light, a little self-mocking).
3. **Establish trust.** Say plainly what is composite, what is simplified, and what is the narrator's opinion.

If the reader remembers one sentence, it should be: *"We build software for people whose product is something else, and the deadline doesn't move."*

---

## 2. What the reader should walk away knowing

- **Who is talking and why they're credible**, in two or three sentences: Jacob M. Miles, head of pipeline engineering; 14 years in VFX, nine of them at one studio (never named); started as a pipeline TD. No résumé recitation.
- **The thesis:** a film pipeline differs from a normal software product in five ways (see section 3). Each is paid off in a named chapter, and that chapter's opening carries a small tag saying so.
- **Who the book is for:** developers from outside VFX (web, games, infrastructure, data), plus people in VFX who want the engineering story told in plain words.
- **What the book is not:** not a tutorial, not a code cookbook, not a history of a company, not a showreel of technology. No API listings.
- **How to read it:** front to back, or by Part, since chapters stand alone with pointers across.
- **The ground rules on honesty:** this is fiction. The studio and narrator are composites, the numbers are illustrative, the stories are told for the feel of the problem and the solution. Opinions are the narrator's.

---

## 3. Narrative flow

### Opening scene (≈250 words)

Start with **a small, specific moment rather than a thesis.** Strong candidates:

- Late on a delivery night, an artist asks a pipeline engineer why "the thing" doesn't work, and the honest answer is that three of four systems involved were written by different people for different shows over nine years.
- The first time the narrator explained their job to a friend from a web company, and watched the friend's face.
- A new hire's first week, when they discover that the "release date" is a film premiere with a thousand people invited.

Aim: the reader should feel the odd pressure of the job within a few lines, before any argument.

> **Chosen scene (illustrative):** 1 a.m. on a delivery night. An artist asks why "the thing" won't publish. Three of the four systems involved were written by different people, for different shows, over nine years, and the narrator's honest answer is "let me find out who knows." Nobody on the floor is surprised.

### The thing that looks familiar (≈200 words)

Concede the resemblance. We have repos, CI, on-call, dashboards, post-mortems, standups. A developer would walk in and feel at home. Then pivot: *"It lasts about a week."*

### Five ways it isn't a software product (≈500 words)

One short paragraph each, no sub-headings in the final text (keep it flowing), but each should have a concrete example and one light joke at most across the whole section.

1. **The deadline is a date on a poster.** No "slip a sprint". The release date is booked, marketed, and contractually fixed. *Primary payoff: Ch. 19 (a fixed date meets a shared queue).*
2. **The requirements change nightly.** A film is discovered while it's made. The spec is a director's taste, and taste updates. *Primary payoff: Ch. 4 (data that must keep changing and stay consistent).*
3. **The users' product is something else.** Artists don't use the software for its own sake. The pipeline is a means, so success is invisible: when it works, nobody mentions it. *Primary payoff: Ch. 23 (tools artists actually use).*
4. **Every show is a new product.** Each film has its own look, assets, and quirks, and often its own tools. A pipeline serves a rotating cast of mini-startups. *Primary payoff: Ch. 3 (each show re-tests every build/buy decision), with a callback in Ch. 27.*
5. **Software outlives its purpose, yet is expected to vanish.** A tool built in a hurry for one scene turns out to be running nine years later. Meanwhile the work it produces is thrown away forty times before it ships. *Primary payoff: Ch. 28 (migrations), with Ch. 29 calling back to the same orphaned tool, nine years old.*

Add one sentence saying that each Part opens by echoing one of these five differences, as a through-line for the book.

Close the section with the unifying idea: *this is not an argument that film pipelines are harder than other software, only that they are shaped differently, and the shape explains the choices.*

### What this book is, and isn't (≈200 words)

- Written for developers; assumes nothing about film; assumes you can read a system diagram.
- Details, not code. The "how it works and why" at a level you could argue with, but no listings.
- A tour of problems, not a catalog of products. Further reading lives in Appendix D (books, papers, talks and open-source projects).
- Written in a candid voice. It includes what went wrong, because that's where the learning is.

### How to read it (≈150 words)

- A one-paragraph map of the eight Parts.
- Chapters stand alone; cross-references appear as small `Ch. N` tags.
- Recurring friend: **the giant**, the invented shot introduced in Chapter 1, who returns in Ch. 2 and keeps turning up through the book.
- A short legend of the page furniture (callouts, asides, scale snapshots), mentioned lightly so it doesn't read like a manual.

### Honesty note (≈100 words)

Plain, short, no legalese tone:

- This is fiction: the studio, the narrator and the stories are composites.
- Numbers are illustrative orders of magnitude.
- Opinions are the narrator's own.
- Anything technical that went wrong did so because of choices the narrator helped make.

### Closing (≈100 words)

End warm and slightly funny. A thank-you to the artists, in a sentence, for being patient with the engineers. Then an invitation: *"Come and see what's behind sixty frames."* Bridge to Chapter 1.

---

## 4. Visuals

None, or at most one small ornament. A foreword should feel quiet. If anything, a tiny typographic flourish at the end.

---

## 5. Humor and tone opportunities

Fewer than in a regular chapter: roughly two light touches in total.

- The "release date is a poster" image.
- The discovery that "temporary" tools are the longest-lived.

Keep self-directed. No jokes at the expense of directors, studios, or artists.

---

## 6. Details to get right

- Name no real company, film or person. The studio is "the studio" and is never named.
- Do not make the narrator sound heroic. The foreword's credibility comes from admitting things went wrong.
- Avoid the standard foreword clichés ("I'm honored to introduce", "this book fills a gap").
- Keep it under two pages in the rendered HTML.

---

## 7. Connections

- **Ch. 1** continues directly: the giant is waiting at the end of the foreword.
- **Ch. 23, 25, 26** (people and process) are the long-form version of points 3 and 5.
- **Ch. 28-30** (lessons) pay off the honesty promise.

---

## 8. Decisions

1. **Opening moment:** a 1 a.m. delivery night. An artist leans over and asks why "the thing" won't publish. Three of the four systems involved were written by different people for different shows, and the honest answer is a long pause. (Illustrative.)
2. **Biography:** two sentences. Jacob M. Miles, head of pipeline engineering, 14 years in VFX, nine of them at one studio (never named), started as a pipeline TD.
3. **Weight:** difference #4 (every show is a new product) gets the most room, since Ch. 3 homes it.
4. **Thanks:** by role only: artists, pipeline TDs, the on-call rotation, the people who ran the review room.
5. **The line to return to:** "Come and see what's behind sixty frames." Seeded here, answered by the giant's last appearance near the end of the book.
