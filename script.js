(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.style.boxShadow =
      window.scrollY > 8 ? "0 8px 30px rgba(0,0,0,0.35)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    ".feature-card, .site-card, .compare-panel, .contact-panel, .steps li"
  );
  if (reduceMotion) {
    targets.forEach((el) => el.classList.add("visible"));
  } else {
    targets.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => io.observe(el));
  }

  // Small shared download counter (seed + remote increments)
  (function initDownloadCounter() {
    const host = document.querySelector("[data-dl-counter]");
    if (!host) return;
    const product = host.getAttribute("data-dl-product") || "app";
    const seed = Math.max(0, parseInt(host.getAttribute("data-dl-seed") || "0", 10) || 0);
    const apiBase = "https://api.counterapi.dev/v1/mkweli-tech/apk-" + product;
    const format = (n) => n.toLocaleString("en-US");
    let last = seed;
    const render = (n) => {
      last = n;
      host.textContent = format(n) + " downloads";
    };
    render(seed);
    fetch(apiBase + "/")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data.count === "number") render(seed + data.count);
      })
      .catch(() => {});
    let lock = false;
    const track = () => {
      if (lock) return;
      lock = true;
      window.setTimeout(() => {
        lock = false;
      }, 2000);
      fetch(apiBase + "/up")
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data && typeof data.count === "number") render(seed + data.count);
          else render(last + 1);
        })
        .catch(() => {
          render(last + 1);
        });
    };
    const isApkHref = (h) => /\.apk($|[?#])/i.test(h || "");
    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (!isApkHref(href)) {
        a.removeAttribute("data-dl-link");
        return;
      }
      a.setAttribute("data-dl-link", "");
      a.addEventListener("click", track);
    });
  })();

  const i18n = {
    en: {
      hero_h1: "Field ops for isolated grids<br /><em>when the control room is far away.</em>",
      hero_lede:
        "<strong>Mkweli Grid</strong> is an Android toolkit for generation monitoring, maintenance work orders, and structured export on isolated and rural grids — built for sites with intermittent connectivity. Evaluation build — not yet deployed with an operator. Complements ADMS, SCADA, billing and smart meters. It does <strong>not</strong> replace control-room systems."
    },
    fr: {
      hero_h1: "Opérations de terrain pour réseaux isolés<br /><em>quand la salle de contrôle est loin.</em>",
      hero_lede:
        "<strong>Mkweli Grid</strong> est une application Android pour le suivi de production, les ordres de travail et l’export structuré sur les réseaux isolés et ruraux — conçue pour les sites à connectivité intermittente. Version d’évaluation — pas encore déployée chez un opérateur. Elle complète ADMS, SCADA, facturation et compteurs. Elle ne <strong>remplace pas</strong> les systèmes de conduite."
    },
    pt: {
      hero_h1: "Operações de campo para redes isoladas<br /><em>quando a sala de controlo fica longe.</em>",
      hero_lede:
        "<strong>Mkweli Grid</strong> é uma aplicação Android para monitorização da produção, ordens de trabalho e exportação estruturada em redes isoladas e rurais — feita para sítios com conectividade intermitente. Compilação de avaliação — ainda sem operador. Complementa ADMS, SCADA, faturação e contadores. <strong>Não</strong> substitui os sistemas de controlo."
    }
  };

  const applyLang = (lang) => {
    const pack = i18n[lang] || i18n.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (pack[key]) el.innerHTML = pack[key];
    });
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });
    try {
      localStorage.setItem("mkweli-grid-lang", lang);
    } catch (_) {}
  };

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });
  const saved = (() => {
    try {
      return localStorage.getItem("mkweli-grid-lang");
    } catch (_) {
      return null;
    }
  })();
  if (saved && i18n[saved]) applyLang(saved);
})();
