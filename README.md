# Ten Thousand Shots a Year

A static, dependency-free HTML book. No build step, no framework.

```
docs/
  index.html              cover + table of contents
  chapters/ch1.html       one file per chapter
  assets/css/book.css     all styling (light + dark)
  assets/js/chapters.js   book metadata: TOC, prev/next, drawer
  assets/js/book.js       small enhancements (progress bar, theme, on-this-page)
  .nojekyll               tells GitHub Pages to serve files as-is
outlines/                 chapter outlines
STYLE.md                  voice and tone reference
table-of-contents.md      the original TOC
```

## Preview locally

```bash
cd docs
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**. Branch: `main`, folder: `/docs`. Save.
4. After a minute the book is live at `https://<user>.github.io/<repo>/`.

All links are relative, so it works under a repo sub-path with no configuration.

## Add a chapter

1. Copy `docs/chapters/ch1.html` to `docs/chapters/ch2.html`.
2. Update the `<title>`, the `data-slug`, the header block (eyebrow, number, title, dek) and the content.
3. In `docs/assets/js/chapters.js`, set `ready: true` on that chapter.

The home page, Contents drawer and previous/next links update automatically.

## Building blocks

| Element | Markup |
| --- | --- |
| Opening line | `<p class="lede">…</p>` |
| Section heading | `<h2 id="slug" data-short="Short name">…</h2>` (feeds the "On this page" rail) |
| Defined term (first use) | `<dfn>plate</dfn>` |
| Pointer to another chapter | `<span class="xref">Ch. 6</span>` |
| Callouts | `<div class="callout">`, `.callout.aside`, `.callout.stuck` with a `.callout-label` |
| Pull quote | `<p class="pullquote">…</p>` |
| Figure | `<figure class="fig wide"><div class="fig-box"><svg>…</svg></div><figcaption><b>Figure 1.1</b>…</figcaption></figure>` |
| Stat box | `<aside class="scale">…</aside>` |

Fonts (Fraunces, Newsreader, Inter, JetBrains Mono) load from Google Fonts. Set the author name in `docs/assets/js/chapters.js`.
