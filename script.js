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

  const i18n = {
    en: {
      page_title: "Mkweli Grid - Offline generation & O&M for isolated grids",
      skip: "Skip to content",
      aria_home: "Mkweli Grid home",
      aria_nav: "Primary",
      nav_features: "Features",
      nav_sites: "Sites",
      nav_how: "How it works",
      nav_download: "Download",
      nav_contact: "Contact",
      aria_lang: "Language",
      aria_menu: "Open menu",
      hero_eyebrow: "Free · Offline-first · Isolated and rural grids",
      hero_h1: "Field ops for isolated grids<br /><em>when the control room is far away.</em>",
      hero_lede:
        "<strong>Mkweli Grid</strong> is an Android toolkit for generation monitoring, maintenance work orders, and structured export on isolated and rural grids - built for sites with intermittent connectivity. Evaluation build - not yet deployed with an operator. Complements ADMS, SCADA, billing and smart meters. It does <strong>not</strong> replace control-room systems.",
      btn_dl_eval: "Download evaluation APK",
      btn_install_notes: "Install notes",
      btn_see_capabilities: "See capabilities",
      aria_highlights: "Highlights",
      stat_offline: "Offline-first",
      stat_offline_sub: "Room SQLite on device",
      stat_multi: "Multi-source",
      stat_multi_sub: "Wind · solar · thermal · BESS",
      stat_ver_sub: "Signed evaluation build",
      hero_card_sub: "Apache-2.0 · free to use & modify",
      notice_html:
        "<strong>Not an official utility product</strong> unless adopted by a grid operator. Operational models must be validated with local operations before production use. Seeded example sites follow an isolated-grid layout (thermal, wind, solar, storage).",
      feat_eyebrow: "Capabilities",
      feat_h2: "Everything a field crew needs offline",
      feat_lede:
        "Log generation, open work orders with photos, export reports, and optionally read local Modbus gateways - without waiting on the mainland WAN.",
      feat_dash_h: "Generation dashboard",
      feat_dash_p:
        "kWh by source with period filters: today, 7 days, 30 days, month, or all time. Built for Rodrigues local day (UTC+4).",
      feat_off_h: "Offline logging",
      feat_off_p:
        "Every write hits Room SQLite immediately. Correct mistakes in the field. Fully usable with no network.",
      feat_wo_h: "Maintenance work orders",
      feat_wo_p:
        "Create, filter, and move WOs through a status lifecycle. Attach camera or gallery photos on site.",
      feat_asset_h: "Asset registry",
      feat_asset_p:
        "Seeded for Pointe Monnier, Port Mathurin, Grenade, Trèfles wind, SSDG/MSDG pool, and more.",
      feat_export_h: "Share exports",
      feat_export_p:
        "CSV, JSON, and PDF via the Android share sheet for email, USB hand-off, or later aggregation.",
      feat_modbus_h: "Modbus TCP (optional)",
      feat_modbus_p:
        "Read-only holding registers from local gateways on LAN/VPN - never expose industrial protocols to the public internet.",
      sites_eyebrow: "Sample isolated-grid layout",
      sites_h2: "Built for the isolated grid",
      sites_lede:
        "Thermal, wind, solar and storage across the island - field sites often have intermittent connectivity, so offline-first is mandatory. The same toolkit is intended for other isolated and rural grids.",
      site_pm: "Thermal + BESS (~1.5 MW storage context)",
      site_port: "Thermal / operations hub",
      site_grenade: "Wind + PV farm context",
      site_trefles: "Wind generation",
      site_ssdg: "Distributed small generators",
      how_eyebrow: "How it works",
      how_h2: "From phone to structured report",
      how_1_h: "Install the field APK",
      how_1_before: "Side-load the signed evaluation APK from",
      how_1_after: "(Android 8+). Operator profile auto-fills “recorded by”.",
      how_2_h: "Log generation & work",
      how_2_p: "Capture kWh by source and open maintenance tickets with photos while offline.",
      how_3_h: "Export or sync",
      how_3_p: "Share CSV/JSON/PDF now; background sync to a future edge API when connectivity returns.",
      compare_h: "Complements, does not replace",
      compare_mok:
        "<strong>MoKouran</strong> - customer bills · this app is operator field O&amp;M",
      compare_adms:
        "<strong>ADMS / SCADA</strong> - central control · this app is offline site logging",
      compare_meters:
        "<strong>Smart meters</strong> - customer metering · this app is source-level kWh + work orders",
      compare_note:
        "Designed for isolated and rural grids, not as a control-room replacement stack. No operator has adopted it yet.",
      dl_eyebrow: "Public pilot build",
      dl_h2: "Download the signed evaluation APK",
      dl_lede:
        "Free side-load for Android 8+. Evaluation only - permanent in-app pilot banner, PILOT-marked exports, and no claim of official utility endorsement.",
      dl_version: "v0.3.3 · <code>mkweli-grid-0.3.3.apk</code> · hosted on grid.mkweli.tech",
      btn_dl_apk: "Download APK",
      dl_suffix: "downloads",
      dl_direct: "Direct APK:",
      dl_limits_h: "Pilot limitations",
      dl_lim_1: "Not an official utility product",
      dl_lim_2: "Offline-first; sync needs your edge URL",
      dl_lim_3: "Photos stay on-device in this pilot",
      dl_lim_4: "Modbus TCP is LAN / VPN only",
      dl_lim_5: "Validate with local ops before production use",
      dl_install_h: "Install",
      dl_inst_1: "Allow “Install unknown apps” for your browser or file manager",
      dl_inst_2: "Open the APK → Install",
      dl_inst_3: "Settings → set operator name → optional demo data",
      contact_eyebrow: "Pilot & partnership",
      contact_h2: "Bring the field toolkit to isolated-grid crews",
      contact_p:
        "Download the evaluation APK above, discuss a trial with operations, or explore hosting and edge-sync options. Built under Mkweli.tech by Gilbert Clement Bouic.",
      btn_hub: "mkweli.tech hub",
      footer_tag: "Offline field toolkit for isolated and rural grids. Evaluation APK.",
      footer_product: "Product",
      footer_dl_apk: "Download APK",
      footer_dl_ver: "Download v0.3.3",
      footer_network: "Mkweli network",
      footer_product_of: "A Mkweli product",
      footer_legal: "Mkweli. Not an official utility product unless adopted."
    },
    fr: {
      page_title: "Mkweli Grid - Production hors ligne et O&M pour réseaux isolés",
      skip: "Aller au contenu",
      aria_home: "Accueil Mkweli Grid",
      aria_nav: "Principal",
      nav_features: "Fonctionnalités",
      nav_sites: "Sites",
      nav_how: "Fonctionnement",
      nav_download: "Télécharger",
      nav_contact: "Contact",
      aria_lang: "Langue",
      aria_menu: "Ouvrir le menu",
      hero_eyebrow: "Gratuit · Hors ligne d’abord · Réseaux isolés et ruraux",
      hero_h1: "Opérations de terrain pour réseaux isolés<br /><em>quand la salle de contrôle est loin.</em>",
      hero_lede:
        "<strong>Mkweli Grid</strong> est une application Android pour le suivi de production, les ordres de travail et l’export structuré sur les réseaux isolés et ruraux - conçue pour les sites à connectivité intermittente. Version d’évaluation - pas encore déployée chez un opérateur. Elle complète ADMS, SCADA, facturation et compteurs. Elle ne <strong>remplace pas</strong> les systèmes de conduite.",
      btn_dl_eval: "Télécharger l’APK d’évaluation",
      btn_install_notes: "Notes d’installation",
      btn_see_capabilities: "Voir les capacités",
      aria_highlights: "Points clés",
      stat_offline: "Hors ligne d’abord",
      stat_offline_sub: "Room SQLite sur l’appareil",
      stat_multi: "Multi-sources",
      stat_multi_sub: "Éolien · solaire · thermique · BESS",
      stat_ver_sub: "Build d’évaluation signé",
      hero_card_sub: "Apache-2.0 · libre d’utilisation et de modification",
      notice_html:
        "<strong>Pas un produit officiel d’un opérateur</strong> sauf adoption par un opérateur de réseau. Les modèles opérationnels doivent être validés avec les opérations locales avant tout usage en production. Les sites d’exemple préchargés suivent un schéma de réseau isolé (thermique, éolien, solaire, stockage).",
      feat_eyebrow: "Capacités",
      feat_h2: "Tout ce dont une équipe de terrain a besoin hors ligne",
      feat_lede:
        "Saisissez la production, ouvrez des ordres de travail avec photos, exportez des rapports et, en option, lisez des passerelles Modbus locales - sans attendre le WAN du continent.",
      feat_dash_h: "Tableau de production",
      feat_dash_p:
        "kWh par source avec filtres de période : aujourd’hui, 7 jours, 30 jours, mois, ou tout. Conçu pour le jour local de Rodrigues (UTC+4).",
      feat_off_h: "Saisie hors ligne",
      feat_off_p:
        "Chaque écriture va immédiatement dans Room SQLite. Corrigez les erreurs sur le terrain. Entièrement utilisable sans réseau.",
      feat_wo_h: "Ordres de travail",
      feat_wo_p:
        "Créez, filtrez et faites avancer les OT dans un cycle de statuts. Joignez des photos appareil ou galerie sur site.",
      feat_asset_h: "Registre d’actifs",
      feat_asset_p:
        "Préchargé pour Pointe Monnier, Port Mathurin, Grenade, éolien Trèfles, parc SSDG/MSDG, et plus.",
      feat_export_h: "Partage d’exports",
      feat_export_p:
        "CSV, JSON et PDF via la feuille de partage Android, pour e-mail, remise USB, ou agrégation plus tard.",
      feat_modbus_h: "Modbus TCP (optionnel)",
      feat_modbus_p:
        "Lecture seule des registres holding depuis des passerelles locales en LAN/VPN - n’exposez jamais les protocoles industriels à l’internet public.",
      sites_eyebrow: "Exemple de schéma de réseau isolé",
      sites_h2: "Conçu pour le réseau isolé",
      sites_lede:
        "Thermique, éolien, solaire et stockage sur l’île - les sites de terrain ont souvent une connectivité intermittente, donc le hors ligne d’abord est obligatoire. Le même kit est destiné à d’autres réseaux isolés et ruraux.",
      site_pm: "Thermique + BESS (~1.5 MW, contexte stockage)",
      site_port: "Thermique / pôle opérations",
      site_grenade: "Contexte parc éolien + PV",
      site_trefles: "Production éolienne",
      site_ssdg: "Petits générateurs distribués",
      how_eyebrow: "Fonctionnement",
      how_h2: "Du téléphone au rapport structuré",
      how_1_h: "Installer l’APK de terrain",
      how_1_before: "Installez (sideload) l’APK d’évaluation signé depuis",
      how_1_after: "(Android 8+). Le profil opérateur préremplit “recorded by”.",
      how_2_h: "Saisir production et travaux",
      how_2_p: "Capturez les kWh par source et ouvrez des tickets de maintenance avec photos, hors ligne.",
      how_3_h: "Exporter ou synchroniser",
      how_3_p: "Partagez CSV/JSON/PDF maintenant ; synchro en arrière-plan vers une future API edge quand la connectivité revient.",
      compare_h: "Complète, ne remplace pas",
      compare_mok:
        "<strong>MoKouran</strong> - factures clients · cette app est l’O&amp;M terrain opérateur",
      compare_adms:
        "<strong>ADMS / SCADA</strong> - conduite centrale · cette app est la saisie hors ligne sur site",
      compare_meters:
        "<strong>Smart meters</strong> - comptage client · cette app est kWh par source + ordres de travail",
      compare_note:
        "Conçu pour les réseaux isolés et ruraux, pas comme pile de remplacement de salle de contrôle. Aucun opérateur ne l’a encore adopté.",
      dl_eyebrow: "Build pilote public",
      dl_h2: "Télécharger l’APK d’évaluation signé",
      dl_lede:
        "Sideload gratuit pour Android 8+. Évaluation uniquement - bannière pilote permanente dans l’app, exports marqués PILOT, et aucune affirmation d’approbation officielle par un opérateur.",
      dl_version: "v0.3.3 · <code>mkweli-grid-0.3.3.apk</code> · hébergé sur grid.mkweli.tech",
      btn_dl_apk: "Télécharger l’APK",
      dl_suffix: "téléchargements",
      dl_direct: "APK direct :",
      dl_limits_h: "Limites du pilote",
      dl_lim_1: "Pas un produit officiel d’un opérateur",
      dl_lim_2: "Hors ligne d’abord ; la synchro exige votre URL edge",
      dl_lim_3: "Les photos restent sur l’appareil dans ce pilote",
      dl_lim_4: "Modbus TCP en LAN / VPN uniquement",
      dl_lim_5: "Valider avec les ops locales avant tout usage en production",
      dl_install_h: "Installation",
      dl_inst_1: "Autoriser “Installer des applis inconnues” pour le navigateur ou le gestionnaire de fichiers",
      dl_inst_2: "Ouvrir l’APK → Installer",
      dl_inst_3: "Paramètres → définir le nom d’opérateur → données de démo optionnelles",
      contact_eyebrow: "Pilote et partenariat",
      contact_h2: "Amener le kit de terrain aux équipes de réseaux isolés",
      contact_p:
        "Téléchargez l’APK d’évaluation ci-dessus, discutez d’un essai avec les opérations, ou explorez l’hébergement et les options de synchro edge. Conçu sous Mkweli.tech par Gilbert Clement Bouic.",
      btn_hub: "Hub mkweli.tech",
      footer_tag: "Kit de terrain hors ligne pour réseaux isolés et ruraux. APK d’évaluation.",
      footer_product: "Produit",
      footer_dl_apk: "Télécharger l’APK",
      footer_dl_ver: "Télécharger v0.3.3",
      footer_network: "Réseau Mkweli",
      footer_product_of: "Un produit Mkweli",
      footer_legal: "Mkweli. Pas un produit officiel d’un opérateur, sauf adoption."
    },
    pt: {
      page_title: "Mkweli Grid - Produção offline e O&M para redes isoladas",
      skip: "Saltar para o conteúdo",
      aria_home: "Início Mkweli Grid",
      aria_nav: "Principal",
      nav_features: "Funcionalidades",
      nav_sites: "Sítios",
      nav_how: "Como funciona",
      nav_download: "Transferir",
      nav_contact: "Contacto",
      aria_lang: "Idioma",
      aria_menu: "Abrir menu",
      hero_eyebrow: "Gratuito · Offline primeiro · Redes isoladas e rurais",
      hero_h1: "Operações de campo para redes isoladas<br /><em>quando a sala de controlo fica longe.</em>",
      hero_lede:
        "<strong>Mkweli Grid</strong> é uma aplicação Android para monitorização da produção, ordens de trabalho e exportação estruturada em redes isoladas e rurais - feita para sítios com conectividade intermitente. Compilação de avaliação - ainda sem operador. Complementa ADMS, SCADA, faturação e contadores. <strong>Não</strong> substitui os sistemas de controlo.",
      btn_dl_eval: "Transferir APK de avaliação",
      btn_install_notes: "Notas de instalação",
      btn_see_capabilities: "Ver capacidades",
      aria_highlights: "Destaques",
      stat_offline: "Offline primeiro",
      stat_offline_sub: "Room SQLite no dispositivo",
      stat_multi: "Multi-fonte",
      stat_multi_sub: "Eólico · solar · térmico · BESS",
      stat_ver_sub: "Compilação de avaliação assinada",
      hero_card_sub: "Apache-2.0 · livre para usar e modificar",
      notice_html:
        "<strong>Não é um produto oficial de um operador</strong> salvo adoção por um operador de rede. Os modelos operacionais devem ser validados com as operações locais antes de uso em produção. Os sítios de exemplo pré-carregados seguem um esquema de rede isolada (térmico, eólico, solar, armazenamento).",
      feat_eyebrow: "Capacidades",
      feat_h2: "Tudo o que uma equipa de campo precisa offline",
      feat_lede:
        "Registe a produção, abra ordens de trabalho com fotos, exporte relatórios e, em opção, leia gateways Modbus locais - sem esperar pela WAN do continente.",
      feat_dash_h: "Painel de produção",
      feat_dash_p:
        "kWh por fonte com filtros de período: hoje, 7 dias, 30 dias, mês, ou todo o tempo. Feito para o dia local de Rodrigues (UTC+4).",
      feat_off_h: "Registo offline",
      feat_off_p:
        "Cada escrita vai imediatamente para Room SQLite. Corrija erros no campo. Totalmente utilizável sem rede.",
      feat_wo_h: "Ordens de trabalho",
      feat_wo_p:
        "Crie, filtre e avance OTs num ciclo de estados. Anexe fotos da câmara ou galeria no sítio.",
      feat_asset_h: "Registo de ativos",
      feat_asset_p:
        "Pré-carregado para Pointe Monnier, Port Mathurin, Grenade, eólico Trèfles, parque SSDG/MSDG, e mais.",
      feat_export_h: "Partilhar exportações",
      feat_export_p:
        "CSV, JSON e PDF pela folha de partilha Android, para e-mail, entrega USB, ou agregação posterior.",
      feat_modbus_h: "Modbus TCP (opcional)",
      feat_modbus_p:
        "Leitura apenas de holding registers em gateways locais na LAN/VPN - nunca exponha protocolos industriais à internet pública.",
      sites_eyebrow: "Exemplo de esquema de rede isolada",
      sites_h2: "Feito para a rede isolada",
      sites_lede:
        "Térmico, eólico, solar e armazenamento na ilha - os sítios de campo têm muitas vezes conectividade intermitente, por isso offline primeiro é obrigatório. O mesmo kit destina-se a outras redes isoladas e rurais.",
      site_pm: "Térmico + BESS (~1.5 MW, contexto de armazenamento)",
      site_port: "Térmico / polo de operações",
      site_grenade: "Contexto de parque eólico + PV",
      site_trefles: "Produção eólica",
      site_ssdg: "Pequenos geradores distribuídos",
      how_eyebrow: "Como funciona",
      how_h2: "Do telemóvel ao relatório estruturado",
      how_1_h: "Instalar o APK de campo",
      how_1_before: "Faça sideload do APK de avaliação assinado a partir de",
      how_1_after: "(Android 8+). O perfil de operador preenche “recorded by”.",
      how_2_h: "Registar produção e trabalhos",
      how_2_p: "Capture kWh por fonte e abra tickets de manutenção com fotos, offline.",
      how_3_h: "Exportar ou sincronizar",
      how_3_p: "Partilhe CSV/JSON/PDF agora; sincronização em segundo plano para uma futura API edge quando a conectividade voltar.",
      compare_h: "Complementa, não substitui",
      compare_mok:
        "<strong>MoKouran</strong> - faturas de clientes · esta app é O&amp;M de campo do operador",
      compare_adms:
        "<strong>ADMS / SCADA</strong> - controlo central · esta app é registo offline no sítio",
      compare_meters:
        "<strong>Smart meters</strong> - contagem de clientes · esta app é kWh por fonte + ordens de trabalho",
      compare_note:
        "Desenhado para redes isoladas e rurais, não como stack de substituição da sala de controlo. Nenhum operador o adotou ainda.",
      dl_eyebrow: "Compilação piloto pública",
      dl_h2: "Transferir o APK de avaliação assinado",
      dl_lede:
        "Sideload gratuito para Android 8+. Só avaliação - faixa piloto permanente na app, exportações marcadas PILOT, e nenhuma pretensão de endosso oficial de um operador.",
      dl_version: "v0.3.3 · <code>mkweli-grid-0.3.3.apk</code> · alojado em grid.mkweli.tech",
      btn_dl_apk: "Transferir APK",
      dl_suffix: "transferências",
      dl_direct: "APK direto:",
      dl_limits_h: "Limitações do piloto",
      dl_lim_1: "Não é um produto oficial de um operador",
      dl_lim_2: "Offline primeiro; a sincronização precisa do seu URL edge",
      dl_lim_3: "As fotos ficam no dispositivo neste piloto",
      dl_lim_4: "Modbus TCP só em LAN / VPN",
      dl_lim_5: "Validar com as ops locais antes de uso em produção",
      dl_install_h: "Instalação",
      dl_inst_1: "Permitir “Instalar apps desconhecidas” no navegador ou gestor de ficheiros",
      dl_inst_2: "Abrir o APK → Instalar",
      dl_inst_3: "Definições → definir nome do operador → dados de demonstração opcionais",
      contact_eyebrow: "Piloto e parceria",
      contact_h2: "Levar o kit de campo às equipas de redes isoladas",
      contact_p:
        "Transfira o APK de avaliação acima, discuta um ensaio com as operações, ou explore alojamento e opções de sincronização edge. Construído sob Mkweli.tech por Gilbert Clement Bouic.",
      btn_hub: "Hub mkweli.tech",
      footer_tag: "Kit de campo offline para redes isoladas e rurais. APK de avaliação.",
      footer_product: "Produto",
      footer_dl_apk: "Transferir APK",
      footer_dl_ver: "Transferir v0.3.3",
      footer_network: "Rede Mkweli",
      footer_product_of: "Um produto Mkweli",
      footer_legal: "Mkweli. Não é um produto oficial de um operador, salvo adoção."
    }
  };

  let currentLang = "en";
  let dlLast = 0;
  const dlHost = document.querySelector("[data-dl-counter]");

  const msg = (key) => {
    const pack = i18n[currentLang] || i18n.en;
    if (pack[key] != null) return pack[key];
    return i18n.en[key];
  };

  const localeFor = (lang) =>
    lang === "fr" ? "fr-FR" : lang === "pt" ? "pt-PT" : "en-US";

  const renderDlCount = (n) => {
    if (typeof n === "number") dlLast = n;
    if (!dlHost) return;
    dlHost.textContent =
      dlLast.toLocaleString(localeFor(currentLang)) + " " + (msg("dl_suffix") || "downloads");
  };

  (function initDownloadCounter() {
    if (!dlHost) return;
    const product = dlHost.getAttribute("data-dl-product") || "app";
    const seed = Math.max(0, parseInt(dlHost.getAttribute("data-dl-seed") || "0", 10) || 0);
    const apiBase = "https://api.counterapi.dev/v1/mkweli-tech/apk-" + product;
    renderDlCount(seed);
    fetch(apiBase + "/")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data.count === "number") renderDlCount(seed + data.count);
      })
      .catch(() => {});
    let lock = false;
    const isApkHref = (h) => /\.apk($|[?#])/i.test(h || "");
    const track = () => {
      if (lock) return;
      lock = true;
      window.setTimeout(() => {
        lock = false;
      }, 2000);
      fetch(apiBase + "/up")
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data && typeof data.count === "number") renderDlCount(seed + data.count);
          else renderDlCount(dlLast + 1);
        })
        .catch(() => {
          renderDlCount(dlLast + 1);
        });
    };
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (isApkHref(href)) track();
    });
  })();

  const applyLang = (lang) => {
    const pack = i18n[lang] || i18n.en;
    currentLang = i18n[lang] ? lang : "en";
    document.documentElement.lang = currentLang;
    if (pack.page_title) document.title = pack.page_title;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = pack[key] != null ? pack[key] : i18n.en[key];
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const val = pack[key] != null ? pack[key] : i18n.en[key];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = pack[key] != null ? pack[key] : i18n.en[key];
      if (val != null) el.setAttribute("aria-label", val);
    });
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === currentLang));
    });
    renderDlCount();
    try {
      localStorage.setItem("mkweli-grid-lang", currentLang);
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
