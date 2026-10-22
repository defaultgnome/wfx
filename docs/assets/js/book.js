/* Ten Thousand Shots a Year: tiny, dependency-free enhancements.
   Everything here is optional; the chapters read fine without JavaScript. */
(function () {
  "use strict";

  var B = window.BOOK;
  var body = document.body;
  var root = body.getAttribute("data-root") || "";
  var current = body.getAttribute("data-slug") || "";

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  function href(ch) { return root + "chapters/" + ch.slug + ".html"; }
  function label(ch) { return ch.n != null ? String(ch.n) : (ch.short || ch.label); }

  /* ---------- Theme toggle ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Table of contents (home page) ---------- */
  var toc = document.getElementById("toc");
  if (toc) {
    B.parts.forEach(function (part) {
      var section = el("section", { "class": "toc-part" });
      if (part.title) section.appendChild(el("h2", { text: part.title }));
      var list = el("ol", { "class": "toc-list" });
      part.chapters.forEach(function (ch) {
        var num = el("span", { "class": "toc-num", text: label(ch) });
        var title = el("span", { "class": "toc-title", text: ch.title });
        var li;
        if (ch.ready) {
          li = el("li", { "class": "toc-item ready" }, [
            el("a", { href: href(ch) }, [num, title, el("span", { "class": "toc-tag", text: "Read" })])
          ]);
        } else {
          li = el("li", { "class": "toc-item soon" }, [
            el("span", { "class": "toc-row" }, [num, title, el("span", { "class": "toc-tag", text: "Soon" })])
          ]);
        }
        list.appendChild(li);
      });
      section.appendChild(list);
      toc.appendChild(section);
    });
  }

  /* ---------- Flat chapter list (drawer + pager) ---------- */
  var flat = [];
  B.parts.forEach(function (p) { p.chapters.forEach(function (c) { flat.push(c); }); });

  /* ---------- Drawer ---------- */
  var drawer = document.getElementById("drawer");
  var drawerBtn = document.getElementById("drawer-toggle");
  if (drawer && drawerBtn) {
    B.parts.forEach(function (part) {
      if (part.title) drawer.querySelector(".drawer-body").appendChild(el("h3", { text: part.title }));
      var ul = el("ul", {});
      part.chapters.forEach(function (ch) {
        var text = label(ch) + (ch.n != null ? ".  " : "  ") + ch.title;
        var li = el("li", {});
        if (ch.ready) {
          var a = el("a", { href: href(ch), text: text });
          if (ch.slug === current) a.setAttribute("aria-current", "page");
          li.appendChild(a);
        } else {
          li.appendChild(el("span", { "class": "off", text: text }));
        }
        ul.appendChild(li);
      });
      drawer.querySelector(".drawer-body").appendChild(ul);
    });
    var setDrawer = function (open) {
      drawer.hidden = !open;
      drawerBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.documentElement.classList.toggle("drawer-open", open);
    };
    drawerBtn.addEventListener("click", function () { setDrawer(drawer.hidden); });
    drawer.addEventListener("click", function (e) {
      if (e.target === drawer || e.target.closest("[data-close]") || e.target.closest("a")) setDrawer(false);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !drawer.hidden) setDrawer(false); });
  }

  /* ---------- Previous / next ---------- */
  var pager = document.getElementById("pager");
  if (pager && current) {
    var i = flat.findIndex(function (c) { return c.slug === current; });
    var prev = i > 0 ? flat[i - 1] : null;
    var next = i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
    function card(ch, dir) {
      var kind = dir === "prev" ? "Previous" : "Next";
      var head = (ch.n != null ? "Chapter " + ch.n : ch.label === "Foreword" ? "Foreword" : "Appendix " + ch.label);
      var inner = [
        el("span", { "class": "pager-kind", text: ch.ready ? kind : kind + " · coming soon" }),
        el("span", { "class": "pager-head", text: head }),
        el("span", { "class": "pager-title", text: ch.title })
      ];
      if (ch.ready) return el("a", { "class": "pager-card " + dir, href: href(ch) }, inner);
      return el("div", { "class": "pager-card off " + dir }, inner);
    }
    if (prev) pager.appendChild(card(prev, "prev")); else pager.appendChild(el("span", {}));
    if (next) pager.appendChild(card(next, "next"));
  }

  /* ---------- Reading progress ---------- */
  var bar = document.getElementById("progress");
  var article = document.querySelector("article.prose");
  if (bar && article) {
    var ticking = false;
    var update = function () {
      var rect = article.getBoundingClientRect();
      var total = rect.height - window.innerHeight * 0.6;
      var done = Math.min(Math.max(-rect.top + 80, 0), total);
      bar.style.transform = "scaleX(" + (total > 0 ? done / total : 0) + ")";
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---------- Reading time ---------- */
  var rt = document.getElementById("reading-time");
  if (rt && article) {
    var words = (article.innerText || "").trim().split(/\s+/).length;
    rt.textContent = Math.max(1, Math.round(words / 230)) + " min read";
  }

  /* ---------- "On this page" rail ---------- */
  var rail = document.getElementById("rail-list");
  if (rail && article) {
    var heads = article.querySelectorAll("h2[id]");
    if (!heads.length) { var rr = rail.closest(".rail"); if (rr) rr.hidden = true; }
    var links = [];
    heads.forEach(function (h) {
      var a = el("a", { href: "#" + h.id, text: h.getAttribute("data-short") || h.textContent });
      rail.appendChild(el("li", {}, [a]));
      links.push({ h: h, a: a });
    });
    if ("IntersectionObserver" in window && links.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (l) { l.a.classList.toggle("on", l.h === en.target); });
          }
        });
      }, { rootMargin: "-20% 0px -70% 0px" });
      links.forEach(function (l) { io.observe(l.h); });
    }
  }

  /* ---------- Size pips in tables ---------- */
  document.querySelectorAll(".pips[data-n]").forEach(function (p) {
    var n = parseInt(p.getAttribute("data-n"), 10) || 0;
    for (var k = 0; k < 4; k++) p.appendChild(el("i", { "class": k < n ? "on" : "" }));
  });
})();
