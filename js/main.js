/* ============================================================
   Ferah — etkileşim katmanı
   Arama, kategori filtreleme, dark mode, mobil menü,
   scroll animasyonları, "yukarı çık", bülten formu.
   ============================================================ */
(function () {
  "use strict";

  const { CATEGORIES, POSTS } = window.FERAH_DATA;

  /* ---- Küçük SVG ikon kütüphanesi (satır içi) ---- */
  const ICON = {
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',
    empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
  };

  /* ---- 1. Tema (dark mode) ---- */
  const root = document.documentElement;
  const stored = localStorage.getItem("ferah-theme");
  if (stored) root.setAttribute("data-theme", stored);
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) root.setAttribute("data-theme", "dark");

  function syncThemeIcon() {
    const dark = root.getAttribute("data-theme") === "dark";
    document.querySelectorAll("[data-theme-toggle]").forEach((b) => {
      b.innerHTML = dark
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"/><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"/><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
      b.setAttribute("aria-label", dark ? "Aydınlık moda geç" : "Karanlık moda geç");
    });
  }
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-theme-toggle]");
    if (!t) return;
    const dark = root.getAttribute("data-theme") === "dark";
    const next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("ferah-theme", next);
    syncThemeIcon();
  });
  syncThemeIcon();

  /* ---- 2. Header scroll durumu ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
    toTop.classList.toggle("show", window.scrollY > 500);
  };

  /* ---- 3. Blog kartı şablonu ---- */
  function cardHTML(p) {
    const discount = p.oldPrice
      ? Math.round((1 - Number(p.price) / Number(p.oldPrice)) * 100)
      : 0;
    return `
      <article class="card reveal" data-cat="${p.category}">
        <a class="card-media" href="post.html?id=${p.id}" aria-label="${p.title}">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <span class="card-cat">${p.categoryLabel}</span>
          ${discount ? `<span class="discount-badge">%${discount} indirim</span>` : ""}
        </a>
        <div class="card-body">
          <div class="card-meta">
            <span>${p.date}</span><span class="sep"></span>
            <span>${p.readTime} dk okuma</span>
          </div>
          <h3><a href="post.html?id=${p.id}">${p.title}</a></h3>
          <p class="excerpt">${p.excerpt}</p>
          <div class="card-author">
            <img src="${p.authorAvatar}" alt="${p.author}" loading="lazy">
            <span class="an">${p.author}</span>
          </div>
          <div class="card-foot">
            <div class="price">
              <span class="now">${p.price}</span>
              ${p.oldPrice ? `<span class="old">${p.oldPrice} ₺</span>` : ""}
            </div>
            <a class="shop-btn" href="${p.shopUrl}" data-shop="${p.title}">
              ${ICON.cart} Ürüne Git
            </a>
          </div>
        </div>
      </article>`;
  }

  /* ---- 4. Kategori çipleri ---- */
  const chipsWrap = document.getElementById("chips");
  if (chipsWrap) {
    chipsWrap.innerHTML = CATEGORIES.map(
      (c) => `<button class="chip${c.id === "hepsi" ? " active" : ""}" data-cat="${c.id}">${c.label}</button>`
    ).join("");
  }

  /* ---- 5. Durum + render ---- */
  const grid = document.getElementById("posts");
  const PAGE = 6;
  let state = { cat: "hepsi", q: "", shown: PAGE };

  function filtered() {
    return POSTS.filter((p) => {
      const okCat = state.cat === "hepsi" || p.category === state.cat;
      const q = state.q.trim().toLowerCase();
      const okQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return okCat && okQ;
    });
  }

  function render() {
    if (!grid) return;
    const list = filtered();
    const visible = list.slice(0, state.shown);
    if (!list.length) {
      grid.innerHTML = `<div class="empty">${ICON.empty}<p>Aramanızla eşleşen içerik bulunamadı.</p></div>`;
    } else {
      grid.innerHTML = visible.map(cardHTML).join("");
    }
    // "Daha fazla" butonu
    const lm = document.getElementById("loadMoreWrap");
    if (lm) lm.style.display = list.length > state.shown ? "flex" : "none";
    observeReveals();
  }

  // Kategori seçimi
  chipsWrap &&
    chipsWrap.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      chipsWrap.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.cat = chip.dataset.cat;
      state.shown = PAGE;
      render();
    });

  // Arama (debounce)
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

  // Daha fazla yükle
  const loadMoreBtn = document.getElementById("loadMore");
  loadMoreBtn &&
    loadMoreBtn.addEventListener("click", () => {
      state.shown += PAGE;
      render();
    });

  // E-ticaret yönlendirme (demo bildirimi)
  document.addEventListener("click", (e) => {
    const s = e.target.closest("[data-shop]");
    if (!s) return;
    if (s.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      toast(`"${s.dataset.shop}" ürün sayfasına yönlendiriliyorsunuz…`);
    }
  });

  /* ---- 6. Scroll reveal ---- */
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

  /* ---- 7. Back to top ---- */
  const toTop = document.getElementById("toTop");
  toTop &&
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---- 8. Mobil menü ---- */
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

  /* ---- 9. Bülten formu ---- */
  const nlForm = document.getElementById("nlForm");
  nlForm &&
    nlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = nlForm.querySelector("input").value.trim();
      const note = document.getElementById("nlNote");
      if (email) {
        note.textContent = "🎉 Teşekkürler! Aboneliğiniz onaylandı.";
        note.classList.add("nl-success");
        nlForm.reset();
      }
    });

  /* ---- 10. Basit toast ---- */
  let toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      Object.assign(toastEl.style, {
        position: "fixed", left: "50%", bottom: "28px", transform: "translateX(-50%) translateY(20px)",
        background: "var(--text)", color: "var(--bg)", padding: "13px 22px", borderRadius: "999px",
        fontWeight: "600", fontSize: ".92rem", boxShadow: "var(--shadow-lg)", zIndex: "200",
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
  // Yıl bilgisi
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
