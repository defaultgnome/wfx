/* ------------------------------------------------------------------
   Book metadata. This is the single source of truth for the table of
   contents, the chapter drawer, and the previous/next links.

   To publish a chapter:
     1. create chapters/<slug>.html (copy chapters/ch1.html as a template)
     2. set ready: true on its entry below
   ------------------------------------------------------------------ */
window.BOOK = {
  title: "Ten Thousand Shots a Year",
  subtitle: "Building the pipeline behind digital worlds",
  author: "Jacob M. Miles",
  tagline: "A tech lead's account of the 3D pipeline, the problems it caused, and the fixes that worked. For developers. Details yes, code no.",
  parts: [
    {
      title: null,
      chapters: [
        { label: "Foreword", short: "i", title: "Why a film pipeline is not a software product", slug: "foreword", ready: true }
      ]
    },
    {
      title: "Part I · The Shape of the Problem",
      chapters: [
        { n: 1, title: "Anatomy of a shot", slug: "ch1", ready: true },
        { n: 2, title: "The scale we actually deal with", slug: "ch2", ready: true },
        { n: 3, title: "Build vs. buy vs. bolt-on", slug: "ch3", ready: true }
      ]
    },
    {
      title: "Part II · Assets and Data",
      chapters: [
        { n: 4, title: "Asset management without a single source of truth", slug: "ch4", ready: true },
        { n: 5, title: "Scene description wars", slug: "ch5", ready: true },
        { n: 6, title: "Dependency graphs and the “what did this shot actually use?” problem", slug: "ch6", ready: true },
        { n: 7, title: "Storage, caching and the network", slug: "ch7", ready: true }
      ]
    },
    {
      title: "Part III · Rendering",
      chapters: [
        { n: 8, title: "Why we wrote our own path tracer", slug: "ch8", ready: true },
        { n: 9, title: "Taming memory", slug: "ch9", ready: true },
        { n: 10, title: "Noise, time and artist trust", slug: "ch10", ready: true },
        { n: 11, title: "Interactive previews", slug: "ch11", ready: true }
      ]
    },
    {
      title: "Part IV · Simulation and Procedural Systems",
      chapters: [
        { n: 12, title: "Water, fire, destruction", slug: "ch12", ready: true },
        { n: 13, title: "Crowds and agents", slug: "ch13", ready: true },
        { n: 14, title: "Hair, fur, feathers, muscle and skin", slug: "ch14", ready: true },
        { n: 15, title: "Vegetation and environments", slug: "ch15", ready: true }
      ]
    },
    {
      title: "Part V · Characters and Performance",
      chapters: [
        { n: 16, title: "From capture to character", slug: "ch16", ready: true },
        { n: 17, title: "Real-time on set", slug: "ch17", ready: true },
        { n: 18, title: "Rigs as software", slug: "ch18", ready: true }
      ]
    },
    {
      title: "Part VI · The Farm and the Cloud",
      chapters: [
        { n: 19, title: "Scheduling a million jobs a night", slug: "ch19", ready: true },
        { n: 20, title: "Failure as the normal case", slug: "ch20", ready: true },
        { n: 21, title: "Going to the cloud mid-production", slug: "ch21", ready: true },
        { n: 22, title: "Cost and energy accounting", slug: "ch22", ready: true }
      ]
    },
    {
      title: "Part VII · People and Process",
      chapters: [
        { n: 23, title: "Tools artists actually use", slug: "ch23", ready: true },
        { n: 24, title: "Plugin ecosystems and DCC sprawl", slug: "ch24", ready: true },
        { n: 25, title: "Supporting a show in crunch", slug: "ch25", ready: true },
        { n: 26, title: "Pipeline TDs: the bridge role", slug: "ch26", ready: true },
        { n: 27, title: "Research that survives contact with production", slug: "ch27", ready: true }
      ]
    },
    {
      title: "Part VIII · Hard-Won Lessons",
      chapters: [
        { n: 28, title: "Five migrations that nearly went wrong", slug: "ch28", ready: true },
        { n: 29, title: "Technical debt in a pipeline with no downtime", slug: "ch29", ready: true },
        { n: 30, title: "What we’d do differently", slug: "ch30", ready: true },
        { n: 31, title: "The next five years", slug: "ch31", ready: true }
      ]
    },
    {
      title: "Appendices",
      chapters: [
        { label: "A", title: "Glossary for engineers coming from outside VFX", slug: "appendix-a" },
        { label: "B", title: "Reference architecture diagrams", slug: "appendix-b" },
        { label: "C", title: "Metrics we tracked, and the ones that misled us", slug: "appendix-c" },
        { label: "D", title: "A reading list", slug: "appendix-d" }
      ]
    }
  ]
};
