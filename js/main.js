/* ============================================================
   Formda — etkileşim katmanı (koyu tema)
   Kart grid, kategori filtre, arama, mega-menü, SSS akordiyonu,
   tema, mobil menü, scroll animasyon, yukarı çık.
   ============================================================ */
(function () {
  "use strict";

  const D = window.SITE_DATA;
  const { CATEGORIES, POSTS, STATS, FAQ } = D;
  const hueOf = (catId) => (CATEGORIES.find((c) => c.id === catId) || {}).hue || 210;

  /* ---- SVG ikonlar ---- */
  const ICON = {
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 8-4 12-9 12z"/><path d="M4 20c2-4 5-6 9-7"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3 0 2 1 3 2 3 0-3 2-5 2-9z"/></svg>',
    activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5z"/></svg>',
  };

  /* ---- 1. Tema ---- */
  const root = document.documentElement;
  const stored = localStorage.getItem("formda-theme");
  if (stored) root.setAttribute("data-theme", stored);
  function syncThemeIcon() {
    const dark = root.getAttribute("data-theme") !== "light";
    document.querySelectorAll("[data-theme-toggle]").forEach((b) => {
      b.innerHTML = dark
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"/><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"/><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
      b.setAttribute("aria-label", dark ? "Aydınlık moda geç" : "Karanlık moda geç");
    });
  }
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-theme-toggle]")) return;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("formda-theme", next);
    syncThemeIcon();
  });
  syncThemeIcon();

  /* ---- 2. Header scroll ---- */
  const header = document.querySelector(".site-header");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
  };

  /* ---- 3. Kart şablonu (parıltılı) ---- */
  function cardHTML(p) {
    return `
      <article class="card reveal" data-cat="${p.category}" style="--hue:${hueOf(p.category)}">
        <a class="card-media" href="post.html?id=${p.id}" aria-label="${p.title}">
          <span class="card-cat">${p.categoryLabel}</span>
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </a>
        <div class="card-body">
          <h3><a href="post.html?id=${p.id}">${p.title}</a></h3>
          <p class="excerpt">${p.excerpt}</p>
          <div class="byline">
            <img src="${p.authorAvatar}" alt="${p.author}" loading="lazy">
            <span class="who">${p.author}</span><span class="sep"></span>
            <span>${p.date}</span>
          </div>
          <div class="card-foot">
            <span class="rt">${p.readTime} dk okuma</span>
            <a class="shop-btn" href="${p.shopUrl}" data-shop="${p.title}">${ICON.cart} Ürüne Git</a>
          </div>
        </div>
      </article>`;
  }

  /* ---- 4. Mega-menü ---- */
  const megaGrid = document.getElementById("megaGrid");
  if (megaGrid) {
    megaGrid.innerHTML = CATEGORIES.filter((c) => c.id !== "hepsi")
      .map(
        (c) => `
      <a class="mega-item" href="#blog" data-cat="${c.id}">
        <span class="mega-ic" style="background:linear-gradient(135deg,hsl(${c.hue},80%,55%),hsl(${c.hue + 25},80%,45%))">${ICON[c.icon] || ICON.grid}</span>
        <span><span class="mt">${c.label}</span><br><span class="md">${c.desc}</span></span>
      </a>`
      )
      .join("");
    // Mega item tıklayınca ilgili kategoriyi seç
    megaGrid.addEventListener("click", (e) => {
      const it = e.target.closest("[data-cat]");
      if (!it) return;
      selectCategory(it.dataset.cat);
    });
  }

  /* ---- 5. Güven şeridi ---- */
  const trustEl = document.getElementById("trust");
  if (trustEl && STATS) {
    trustEl.innerHTML = STATS.map((s) => `<div class="t"><div class="v">${s.value}</div><div class="l">${s.label}</div></div>`).join("");
  }

  /* ---- 6. Kategori çipleri ---- */
  const chipsWrap = document.getElementById("chips");
  if (chipsWrap) {
    chipsWrap.innerHTML = CATEGORIES.map(
      (c) => `<button class="chip${c.id === "hepsi" ? " active" : ""}" data-cat="${c.id}">${c.label}</button>`
    ).join("");
  }

  /* ---- 7. Durum + render ---- */
  const grid = document.getElementById("posts");
  const PAGE = 6;
  let state = { cat: "hepsi", q: "", shown: PAGE };

  function filtered() {
    return POSTS.filter((p) => {
      const okCat = state.cat === "hepsi" || p.category === state.cat;
      const q = state.q.trim().toLowerCase();
      const okQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
      return okCat && okQ;
    });
  }
  function render() {
    if (!grid) return;
    const list = filtered();
    const visible = list.slice(0, state.shown);
    grid.innerHTML = list.length
      ? visible.map(cardHTML).join("")
      : `<div class="empty">${ICON.empty}<p>Aramanızla eşleşen içerik bulunamadı.</p></div>`;
    const lm = document.getElementById("loadMoreWrap");
    if (lm) lm.style.display = list.length > state.shown ? "flex" : "none";
    observeReveals();
  }

  function selectCategory(catId) {
    state.cat = catId;
    state.shown = PAGE;
    if (chipsWrap) {
      chipsWrap.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.cat === catId));
    }
    render();
    document.getElementById("blog").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  chipsWrap &&
    chipsWrap.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (chip) selectCategory(chip.dataset.cat);
    });

  const searchInput = document.getElementById("search");
  let deb;
  searchInput &&
    searchInput.addEventListener("input", (e) => {
      clearTimeout(deb);
      deb = setTimeout(() => {
        state.q = e.target.value;
        state.shown = PAGE;
        render();
      }, 180);
    });

  const loadMoreBtn = document.getElementById("loadMore");
  loadMoreBtn &&
    loadMoreBtn.addEventListener("click", () => {
      state.shown += PAGE;
      render();
    });

  /* ---- 8. SSS akordiyonu ---- */
  const faqEl = document.getElementById("faq");
  if (faqEl && FAQ) {
    faqEl.innerHTML = FAQ.map(
      (f) => `
      <div class="faq-item">
        <button class="faq-q">${f.q}<span class="ic">${ICON.plus}</span></button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`
    ).join("");
    faqEl.addEventListener("click", (e) => {
      const q = e.target.closest(".faq-q");
      if (!q) return;
      const item = q.parentElement;
      const ans = item.querySelector(".faq-a");
      const isOpen = item.classList.contains("open");
      // tek açık: diğerlerini kapat
      faqEl.querySelectorAll(".faq-item.open").forEach((el) => {
        el.classList.remove("open");
        el.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  }

  /* ---- 9. E-ticaret yönlendirme (demo) ---- */
  document.addEventListener("click", (e) => {
    const s = e.target.closest("[data-shop]");
    if (!s) return;
    if ((s.getAttribute("href") || "").startsWith("#")) {
      e.preventDefault();
      toast(`"${s.dataset.shop}" mağaza sayfasına yönlendiriliyorsunuz…`);
    }
  });

  /* ---- 10. Scroll reveal ---- */
  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    io && io.disconnect();
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
  }

  /* ---- 11. Back to top ---- */
  toTop && toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---- 12. Mobil menü ---- */
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  menuToggle &&
    menuToggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
  mobileNav &&
    mobileNav.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      }
    });

  /* ---- 13. Bülten ---- */
  const nlForm = document.getElementById("nlForm");
  nlForm &&
    nlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = nlForm.querySelector("input").value.trim();
      const note = document.getElementById("nlNote");
      if (email && note) {
        note.textContent = "🎉 Teşekkürler! Aboneliğiniz onaylandı.";
        note.classList.add("nl-success");
        nlForm.reset();
      }
    });

  /* ---- 14. Toast ---- */
  let toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      Object.assign(toastEl.style, {
        position: "fixed", left: "50%", bottom: "28px", transform: "translateX(-50%) translateY(20px)",
        background: "var(--brand)", color: "#fff", padding: "13px 22px", borderRadius: "999px",
        fontWeight: "600", fontSize: ".92rem", boxShadow: "0 12px 30px rgba(61,139,255,.45)", zIndex: "200",
        opacity: "0", transition: "opacity .3s, transform .3s", maxWidth: "90vw", textAlign: "center",
      });
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(() => {
      toastEl.style.opacity = "1";
      toastEl.style.transform = "translateX(-50%) translateY(0)";
    });
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
      toastEl.style.opacity = "0";
      toastEl.style.transform = "translateX(-50%) translateY(20px)";
    }, 2600);
  }

  /* ---- Başlat ---- */
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  render();
  observeReveals();
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
