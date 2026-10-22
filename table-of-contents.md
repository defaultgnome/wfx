# Ten Thousand Shots a Year: Building the Pipeline Behind Digital Worlds

*Table of contents (working draft). A work of fiction: the studio, narrator and numbers are illustrative.*

## Foreword: Why a film pipeline is not a software product

Deadlines are fixed by a release date, requirements change nightly, and the "users" are artists whose work gets thrown away forty times before it ships.

## Part I: The Shape of the Problem

1. **Anatomy of a shot.** The path from plate to final frame, covering departments, handoffs, and where the data lives at each stage.
2. **The scale we actually deal with.** Petabytes per show, tens of millions of core-hours, and hundreds of artists (about 500) touching the same assets. What breaks first.
3. **Build vs. buy vs. bolt-on.** Why a facility ends up writing its own renderer, and how we decided where to stop.

## Part II: Assets and Data

4. **Asset management without a single source of truth.** Versioning enormous, mostly binary, interdependent data, and why Git-style thinking only half works.
5. **Scene description wars.** Moving from proprietary scene formats to something interchangeable (USD and its relatives), including the migration we underestimated.
6. **Dependency graphs and the "what did this shot actually use?" problem.** Provenance, reproducibility, and re-rendering a shot a year and a half later.
7. **Storage, caching and the network.** When I/O, not compute, is the bottleneck, and how we stopped 5,000 render nodes from hammering the same file.

## Part III: Rendering

8. **Why we wrote our own path tracer.** Moving from rasterization-era tricks to physically based, spectral rendering, and the cost of throwing away years of artist intuition.
9. **Taming memory.** Scenes with billions of polygons, instancing strategies, and out-of-core techniques.
10. **Noise, time and artist trust.** Denoising, sampling budgets, and why "physically correct" had to be negotiated with lighters.
11. **Interactive previews.** Building a real-time GPU previewer that agrees with the final renderer, and the sources of disagreement.

## Part IV: Simulation and Procedural Systems

12. **Water, fire, destruction.** A general-purpose simulation framework versus bespoke solvers, and who owns what.
13. **Crowds and agents.** Thousands of autonomous characters, from decision-making to render-time instancing.
14. **Hair, fur, feathers, cloth, muscle and skin.** Anatomical and cloth simulation for creatures and costumes, and the tension between biological accuracy and art direction.
15. **Vegetation and environments.** Procedural worlds that artists can still direct.

## Part V: Characters and Performance

16. **From capture to character.** Motion capture and facial pipelines, retargeting, and keeping the actor's performance intact through ten transformations.
17. **Real-time on set.** Virtual production tooling, latency budgets, and where the film pipeline and game-engine tech collide.
18. **Rigs as software.** Treating rigging as engineering, with versioning, testing and performance profiling.

## Part VI: The Farm and the Cloud

19. **Scheduling a million jobs a night.** Job priorities, fairness among shows, and the politics of the queue.
20. **Failure as the normal case.** Retries, checkpointing, and diagnosing a bad frame among 100,000 good ones.
21. **Going to the cloud mid-production.** Burst rendering, data gravity, egress costs, and security demands from studios.
22. **Cost and energy accounting.** Making compute visible to the people spending it.

## Part VII: People and Process

23. **Tools artists actually use.** Why most internal tools fail, the UX lessons from watching someone work for a day, the "script nobody told us about" problem, and the review room.
24. **Plugin ecosystems and DCC sprawl.** Living with Maya, Houdini, Nuke and others, and the cost of maintaining integrations through every upgrade.
25. **Supporting a show in crunch.** On-call for the pipeline, change freezes, and how to ship a fix at 2 a.m. without breaking 500 artists.
26. **Pipeline TDs: the bridge role.** Hiring, growing and retaining people who sit between art and engineering.
27. **Research that survives contact with production.** Bringing papers and prototypes into a pipeline, and how to kill a good idea that doesn't fit.

## Part VIII: Hard-Won Lessons

28. **Five migrations that nearly went wrong.** Renderer, scene format, storage, scheduler, and a language runtime.
29. **Technical debt in a pipeline with no downtime.** Refactoring while 1,000 people are working on it.
30. **What we'd do differently.** A candid retrospective.
31. **The next five years.** Machine learning in the pipeline, neural rendering, real-time convergence, and open standards.

## Appendices

- **A.** Glossary for engineers coming from outside VFX
- **B.** Reference architecture diagrams (asset flow, render farm, review loop)
- **C.** Metrics we tracked, and the ones that turned out to be misleading
- **D.** A reading list: books, papers, talks and open-source projects (verify before print)
