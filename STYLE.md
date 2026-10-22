# Style Guide: *Ten Thousand Shots a Year*

A reference for the voice of the book.

**This book is fiction.** The studio, the narrator (Jacob M. Miles) and the stories are composites; the numbers are illustrative. What matters is the feel, the problem, the solution and the story, not factual accuracy. `CANON.md` is the single source of truth for names, numbers and terminology, and wins over any outline.

**Spelling: US English everywhere** (color, behavior, organization, license, normalize).

The goal: **transparent prose, a light tone, some humor, and the joy of reading something written by a person who has actually been through it.**

The reader is a developer. They are smart, busy, and curious about how a VFX pipeline really works. They don't need code; they do need details. Write as if explaining over coffee to a sharp colleague from a different industry.

---

## 1. Voice in one line

A seasoned pipeline engineer (the fictional Jacob M. Miles) telling the story of what broke, why, and what finally worked, with a straight face and a twinkle.

## 2. Core principles

1. **Transparent prose.** The reader should see through the writing to the idea. No fog, no jargon for its own sake, no "leveraging synergies". If a sentence could be said more simply, say it more simply.
2. **Light, never flippant.** Humor sits beside the explanation, never in place of it. The joke should never be the reason the paragraph exists.
3. **Honest about failure.** The book is about problems and solutions. Admit mistakes plainly ("We got that one wrong, and it cost us a weekend"). Candor is the main source of both credibility and charm.
4. **Concrete over abstract.** Prefer a number, a scene, or a specific thing that broke over a general claim. "A thousand failures before breakfast" beats "a high failure rate".
5. **Details yes, code no.** Explain architecture, trade-offs, scale, and reasoning. Leave out snippets and API names unless a name is the point.

## 3. Point of view and person

- **First person** ("I", "we"). The narrator was there.
- Use "we" for team decisions and shared mistakes; use "I" for personal beliefs, surprises, and confessions.
- Address the reader as "you" sparingly, mostly to invite them into a scenario ("Imagine you have 5,000 nodes...").

## 4. Structure of a section

A reliable rhythm that works well:

1. **Hook.** A surprising number, a blunt statement, or a small scene.
2. **The comfortable belief.** What we assumed at first.
3. **The collision with reality.** What actually happened, told as a short story.
4. **The reframe.** The shift in thinking that unlocked the solution.
5. **The solution, in enough detail to be useful.** What we built or changed, and why it works.
6. **The honest footnote.** What still isn't solved, or what it cost.

Not every section needs all six, but most should have a hook and a reframe.

## 5. Humor

**Do:**
- Use dry understatement ("The farm, to its credit, was extremely efficient at being wrong").
- Use gentle personification of systems ("a node decides to become a very expensive space heater").
- Make the narrator the target of the joke, not artists, colleagues, or vendors.
- Place the funny line at the end of a paragraph, after the point has landed.
- Keep it to roughly one good joke per page. Let it breathe.

**Don't:**
- Pile up jokes, puns, or pop-culture references.
- Joke at the expense of a person or team.
- Use sarcasm that obscures the lesson.
- Use emojis, exclamation marks as punchlines, or "LOL" energy.

## 6. Sentence-level habits

- **Vary the rhythm.** Mix longer explanatory sentences with short ones that land a point. ("This is a lovely belief.")
- **Plain words.** "Use" not "utilize". "Because" not "due to the fact that".
- **Active voice** by default.
- **Short paragraphs.** Three to six sentences is typical. White space is a kindness.
- **Contractions are welcome.** "It's", "we'd", "don't". It keeps the voice human.
- **One idea per paragraph.**
- Use italics for gentle emphasis, rarely. Avoid bold in running prose.
- Avoid stacked parentheticals and long em-dash chains.

## 7. Explaining technical ideas

- **Lead with the problem**, then the mechanism. The reader should want the solution before they see it.
- **Use analogies from everyday life** (weather, traffic, kitchens, airports) to ground an abstract system, then return to the real thing quickly.
- **Define VFX terms on first use**, in a clause, not a footnote. Readers come from web, backend, games, and infrastructure.
- **Name the trade-off.** Every solution cost something. Say what.
- **Show scale.** Counts, durations, and sizes make the problem real.
- **Prefer "why" to "what".** The reader can look up the what.

## 8. What to avoid

- Marketing language and corporate buzzwords.
- Heroic framing. The tone is "we fumbled our way to this", never "we brilliantly solved this".
- Name-dropping tools or products without explaining why they mattered.
- Long lists in the middle of narrative chapters. Save lists for appendices and summaries.
- Real names. No real companies, films, products, people or facilities (the exceptions are generic industry words and the few tools CANON allows, such as USD, Maya, Houdini and Nuke).
- Implausible numbers. Illustrative figures are fine, but keep them plausible, consistent with CANON, and varied (don't reuse the same placeholder everywhere).

## 9. Chapter shape

- **Opening:** one to three paragraphs that pull the reader in before any definitions.
- **Body:** three to five sections, each with a clear takeaway.
- **Closing:** a short "What I'd tell my past self" or "What stuck" paragraph. One or two sentences of reflection, ideally with a light touch.
- **Length:** roughly 2,500 to 4,000 words per chapter.

## 10. Calibration sample

From *Chapter 20: Failure as the Normal Case*:

> Let me start with a number that ruined my optimism: on a busy night, our farm runs somewhere north of a million tasks. If one in a thousand fails, that's a thousand failures before breakfast. And one in a thousand is a *good* day.

What makes it work: a concrete number, a first-person admission, a short punchy line to close, and no unnecessary decoration.

> None of these are bugs, exactly. They're weather.

What makes it work: a short sentence that reframes the entire problem with one image.

> The farm, to its credit, was extremely efficient at being wrong.

What makes it work: dry understatement, the system as the punchline rather than a person, placed at the end of the paragraph.

---

## Quick checklist before publishing a section

- [ ] Does it open with something specific and interesting?
- [ ] Could a developer from another industry follow it?
- [ ] Is there at least one concrete number or scene?
- [ ] Is the humor light, self-directed, and placed after the point?
- [ ] Did I admit what went wrong or what it cost?
- [ ] Is the reframe (the "aha") clear?
- [ ] Are there any buzzwords I can replace with plain words?
- [ ] Is there any code or API detail that can be cut?
