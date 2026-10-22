# Chapter 3: Build vs. Buy vs. Bolt-On

**Part I: The Shape of the Problem**
**Target length:** ~3,200 words
**Tone reference:** see `STYLE.md`
**Continues from:** Chapter 2 (a problem of this size, and what to do about it)

---

## 1. Purpose

Part I ends here. Chapters 1 and 2 showed what a pipeline is and how big it gets. Chapter 3 asks the first *decision* question of the book: **where do you write your own software, and where don't you?**

This chapter also **homes Foreword difference #4, "every show is a new product"**: each show re-tests every build/buy decision (see below). Ch. 27 calls back to it.

The chapter's thesis: *"Build or buy" is the wrong question. There are at least four options, the right one changes over time, and the cost that matters most is the cost of getting out.*

If the reader remembers one sentence: *"Every choice is a lease with a hidden exit fee."*

It also sets up Part II: having decided what to own, the next question is what you do with the data it produces.

---

## 2. What the reader should walk away knowing

**A way of deciding**

- The four options: **buy** a product, **adopt** open source, **bolt on** (extend or wrap something that exists), **build** your own.
- A short set of criteria that actually decides: how central it is to your creative output, how fast the need changes, where scale breaks existing tools, how many other systems it must talk to, who else can maintain it, and what it costs to leave.
- The idea of **exit cost** (or reversibility) as the most underrated factor.
- Why the answer changes over time: what you rightly built in year one may be rightly retired in year six.
- The hidden costs of building: documentation, on-call, onboarding, upgrades, and the bus factor.

**What this world looks like**

- Artists use commercial tools for most content creation, and that is not controversial.
- Some pieces nearly always end up custom because the data model, the scale, or the look demand it. The renderer is the famous example (Chapter 8 tells that story in full).
- Open standards and shared libraries have quietly become part of the pipeline, and that shift is worth noticing. Mention a few categories (image formats, scene description, color management, volume data) without a product-pitch tone.
- **The bolt-on trap:** the wrapper that begins as a ten-line script and grows into an unofficial platform nobody owns.

**Skills for the reader to take away**

- A lightweight **decision record**: what we chose, what we rejected, what would make us change our minds.
- A habit of asking "what happens at year three?"

**Deliberately out of scope**

- Detailed product comparisons or vendor opinions.
- Procurement and legal details.
- The renderer decision in depth (Ch. 8).

---

## 3. Narrative flow

### Opening hook (≈300 words)

Open in **a meeting**, tagged with the Foreword's difference #4 (every show is a new product). Someone, usually the smartest person present, asks: *"Why don't we just use X?"* Everyone nods. A pause. The narrator knows from scars that the correct answer is "we might, and also we might regret it," but that's an unsatisfying thing to say in a meeting.

Then briefly tell the story of the **tool nobody remembers deciding to build.** It began as a convenience script, grew, and **nine years later** it runs half the facility, written by someone who left. This is the same orphaned tool as in the Foreword; Ch. 29 calls back to it, and Ch. 24 and Ch. 26 echo it in one sentence each. Light and rueful.

> **Chosen story (illustrative):** the tool was a ten-line script that renamed delivery files for one show. Three shows ago, someone gave it a config file; now it also checks colors, notifies the review room and writes the delivery manifest. Nobody remembers deciding to build it, and its author left years ago. The meeting's "why don't we just use X?" was about replacing it, and the honest answer was "we might, and the exit fee is a delivery month."

### The comfortable belief (≈150 words)

"Build vs buy" as a two-door choice. Buy if it exists; build if it doesn't. Light humor on how tidy that sounded in a planning document.

### Four doors, not two (≈700 words)

Lay out the four options with a concrete example of each, in neutral terms.

- **Buy:** a commercial product with a vendor. *Gives you:* speed, support, a roadmap you don't pay for. *Costs you:* control, price changes, the vendor's priorities, the vendor's bugs on your schedule.
- **Adopt:** open source. *Gives you:* transparency, community, freedom to fix. *Costs you:* you become a maintainer, whether you meant to or not.
- **Bolt on:** extend or wrap what you have. *Gives you:* the fastest start and the least disruption. *Costs you:* a pile of glue code that outlives its reason.
- **Build:** write it yourself. *Gives you:* exactly what you need, and the ability to evolve it. *Costs you:* everything else, for years.

Include a small comparison table: option, speed to start, control, long-term cost, typical regret.

### What actually decides (≈650 words)

The criteria section. Each criterion gets two or three sentences and a one-line test question.

1. **Is it core to what makes the work look the way it does?** (Test: if a competitor had the same tool, would they produce the same images?)
2. **How fast does the need change?** Stable needs suit products; shifting ones suit things you control.
3. **Where does scale break the off-the-shelf option?** (Test: ask for the vendor's largest customer and compare to yours.) Back-reference Chapter 2 (the farm and its numbers).
4. **How many other systems must it talk to?** Integration cost is the quiet killer.
5. **Who else can maintain it?** The bus factor, and the hiring market.
6. **What does it cost to leave?** Data formats, lock-in, and how painful a future migration is. Foreshadow Chapter 28.

> **Visual:** a decision flow or a 2×2 (core to the look vs. rate of change) placing typical pipeline components in each quadrant, with explicit "it depends" territory.

### Every show re-tests the answer (≈250 words, difference #4)

A new show arrives with its own look, its own tools and its own deadline, and each one quietly re-opens the decisions made for the last. A buy that was fine for a quiet show strains on a heavy one; a bolt-on that served one show becomes the next show's "standard". A short scene: the same question asked at the start of two shows gets two different right answers. Point forward to Ch. 27.

### Build as a long relationship (≈550 words)

Why building is more expensive than it looks, with a few concrete items:

- Documentation and onboarding for a tool only your team knows.
- On-call for software that artists depend on at 2 a.m.
- Upgrades when the world around it changes (new operating systems, new versions of the tools it plugs into).
- The people: one brilliant developer, and the day they leave.

Then the other side, so we're fair: why building can be right. Control over a critical path, a design that fits your data, the ability to fix things on your timetable. And a light note about how pride gets in the way of both decisions.

### The bolt-on trap (≈450 words)

A short, vivid section on the most common path in practice. The script that became a service that became a platform.

- Signs you are holding an accidental product: it has users who file requests, a name nobody chose, and no owner.
- Why bolt-ons are often the right first move, and why they need a **review date**.
- A practical habit: **promote, retire, or rewrite** at a fixed interval.

### Deciding in writing (≈350 words)

Introduce a very small **decision record** and show one filled in for a plausible case (illustrative): *"Wrap the open-source image library or write our own reader?"* Context: a new show with unusual image formats. Options: adopt, bolt on, build. Decision: adopt, with a thin wrapper. What would change our mind: a second show needing behavior upstream refuses to take. Review date: after the first delivery. A callout box carries the template: *Context, options considered, decision, what would change our mind, review date.* Keep it light: this is a habit, not bureaucracy.

### Closing (≈200 words)

- Return to the meeting from the opening, and show how the answer would sound now.
- A short "what stuck" reflection: *the decision you make is rarely the decision you live with.*
- **Bridge to Part II:** you've decided what to own. Now, what do you do with the data it all produces? Chapter 4 begins with the oldest problem in the pipeline: keeping track of things.

---

## 4. Key visuals

1. **Four doors.** Four simple icons or boxes with "gives you / costs you" lines.
2. **Core-ness vs. rate of change 2×2.** Pipeline components placed in quadrants. Include a legend that this is a starting point, not a verdict.
3. **Exit cost ladder.** How painful it is to leave each option, from "swap a plugin" to "re-platform a studio."
4. **Decision record template** as a styled callout.

---

## 5. Humor and tone opportunities

- The tidy two-door diagram from the planning document.
- "The smartest person in the room says: why don't we just use X?"
- The script with no owner that has more users than the official tool.
- Pride as a technical constraint: "not invented here" and its quieter sibling "invented here, therefore sacred."

Keep the target the narrator's own past decisions.

---

## 6. Details to get right

- Stay vendor-neutral. Name categories, not products, except where something is public and the point.
- Don't paint building as noble or buying as lazy. Fairness is the credibility.
- Any statement about open-source projects or standards should be generic and accurate, not promotional.
- Make the "exit cost" idea concrete with at least one example of an expensive migration (the orphaned tool's delivery month above; Ch. 28 has the full cases).

---

## 7. Connections

- **Appendix D:** see D.x for further reading on build-versus-buy and decision records.
- **Ch. 2:** the "where does scale break off-the-shelf tools?" criterion comes straight from it.
- **Ch. 5:** open standards (scene description) are the main example of "adopt".
- **Ch. 8:** the renderer is the deep dive on "build".
- **Ch. 23-24:** the tools-for-artists chapters revisit bolt-ons and plugin sprawl.
- **Ch. 27:** callback to difference #4, every show re-testing the decision.
- **Ch. 29:** the orphaned tool returns, nine years old.
- **Ch. 28:** migrations are the bill for earlier decisions.

---

## 8. Decisions

1. **Best stories:** "we shouldn't have built that" is the orphaned tool (opening). "We should have built that" is a small provenance recorder the team kept deferring (Ch. 6 picks it up).
2. **The surprise component:** the team assumed it would buy a review-and-notes tool and ended up bolting one on, which became the orphaned tool's cousin.
3. **Open source:** a mixed blessing and an ally; you become a maintainer whether you meant to or not.
4. **Decision record:** yes, a recurring device; Ch. 8 shows one reconstructed after the fact, Ch. 28 and Ch. 30 return to it.
5. **Ending:** reflective, with a one-line punch into Part II.
