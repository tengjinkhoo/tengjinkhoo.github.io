const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const projectDialog = document.querySelector("#project-dialog");
const projectDialogClose = document.querySelector(".dialog-close");
const scrollProgressBar = document.querySelector("#scroll-progress-bar");

const projectDetails = {
  "esg-platform": {
    context: "SUTD x ESGpedia Capstone",
    title: "Sustainability Intelligence Platform",
    summary:
      "Industry-linked platform to automate ESG extraction, improve data quality, and support benchmarking for Southeast Asia disclosures.",
    challenge:
      "Client teams needed a scalable way to handle fragmented ESG disclosures across formats and frameworks, while preserving data quality for benchmarking.",
    action:
      "Served as the business analyst bridge between ESGpedia stakeholders and the technical team, with primary focus on prompt engineering: translated client requirements into implementation priorities, researched and tested multiple prompting strategies to improve extraction reliability, and supported metric-level data cleaning, analysis, and validation workflows.",
    impact:
      "Interim capstone results showed materially faster and more reliable processing, including extraction turnaround reduced from about ~2 hours to ~3 minutes per company, alongside improved company-information completeness (88.3% to 96.9%) with structured validation against ESGpedia ground truth.",
    tools: "Business Analysis, Prompt Engineering, Data Validation, Data Cleaning, SQL",
    stats: [
      { label: "Role", value: "Business analyst + prompt engineering" },
      { label: "Status", value: "In progress" },
      { label: "Validation scope", value: "237 SGX companies" },
      { label: "Turnaround", value: "~2 hours to ~3 min/company" },
    ],
    highlights: [
      "Translated ESGpedia's business requirements into concrete extraction, quality, and delivery priorities for the team.",
      "Researched and refined prompting approaches (explicit reasoning, example-guided prompts, domain-specific rules, and negative prompting) to improve extraction reliability.",
      "Supported metric-level post-processing, including missing-value handling, unit standardization, and data-cleaning quality checks.",
      "Ran validation support against ground-truth references, helping separate true extraction errors from scope/methodology differences.",
      "Contributed to anomaly and quality workflows that improved confidence in benchmark-ready ESG data outputs.",
    ],
    snippets: [
      {
        src: "assets/projects/esg-platform/esg_problem_statement.png",
        alt: "Problem statement slide for sustainability intelligence platform",
        title: "Client Problem Framing",
        insight:
          "Defined a scalable extraction and benchmarking problem across Southeast Asia disclosures, with explicit accuracy and coverage goals.",
      },
      {
        src: "assets/projects/esg-platform/esg_data_post_processing.png",
        alt: "Data post-processing pipeline showing cleaning and unit standardization logic",
        title: "Data Cleaning & Standardization Flow",
        insight:
          "Shows the cleaning rules and unit-conversion steps used to make extracted ESG metrics consistent and analysis-ready.",
      },
      {
        src: "assets/projects/esg-platform/esg_validation_ground_truth.png",
        alt: "Validation slide comparing extracted values against ESGpedia ground truth",
        title: "Ground-Truth Validation",
        insight:
          "Compared extracted metrics against ESGpedia references and traced discrepancies to source scope, methodology, or extraction issues.",
      },
      {
        src: "assets/projects/esg-platform/esg_extraction_performance_trend.png",
        alt: "Report chart showing F1 score improvement across extraction iterations",
        title: "Extraction Performance Trend",
        insight:
          "Interim report trend indicates iterative gains in extraction quality while maintaining scalable processing performance.",
      },
      {
        src: "assets/projects/esg-platform/esg_dashboard_visualisation.png",
        alt: "Dashboard visualisation tool slide showing company benchmarking interface",
        title: "Team Dashboard for Benchmarking Decisions",
        insight:
          "Dashboard implementation was delivered as part of the full team solution, enabling company search, plausibility checks, and benchmarking views for stakeholder review.",
        layout: "wide",
      },
    ],
  },
  "asean-automation": {
    context: "TUV SUD",
    title: "ASEAN Workforce Analytics Automation",
    summary: "Regional HR reporting automation across six ASEAN markets.",
    challenge:
      "Manual reporting workflows delayed insights and created inconsistencies between country teams.",
    action:
      "Redesigned workflows and automated recurring reporting logic in Power BI, including shared KPI definitions.",
    impact:
      "Cut reporting turnaround from hours to minutes and improved leadership visibility on attrition and hiring trends.",
    tools: "Power BI, DAX, Excel, Stakeholder Workshops",
    stats: [
      { label: "Scope", value: "6 ASEAN markets" },
      { label: "Role", value: "Analytics intern" },
      { label: "Output", value: "Automated reporting" },
      { label: "Benefit", value: "Hours to minutes" },
    ],
    highlights: [
      "Aligned country teams on common KPI definitions to improve reporting consistency.",
      "Automated recurring dashboard updates to reduce manual effort for regional teams.",
      "Improved visibility of attrition and hiring trends for leadership planning.",
    ],
  },
  "evac-sim": {
    context: "SUTD | Simulation Modelling & Analysis",
    title: "Mall Evacuation Simulation Optimization",
    summary:
      "4-month school project focused on optimizing mall evacuation strategy through scenario-based Simio experiments.",
    challenge:
      "Identify evacuation configurations that reduce exit time while preserving reliability and practical resilience during mall emergencies.",
    action:
      "Owned the Simio simulation workflow end to end: implemented model changes, ran repeated scenario tests, tuned system parameters, and compared output statistics across door-capacity combinations and exit-routing setups.",
    impact:
      "Established a data-backed configuration strategy: baseline 1-door/1-capacity averaged 209.00s, while the best 2-door/2-capacity setup reached 92.67s (about 56% faster) with acceptable confidence intervals.",
    tools: "Simio, Experimental Design, Statistical Analysis, Scenario Testing",
    stats: [
      { label: "Duration", value: "4 months" },
      { label: "Role", value: "Main Simio model owner" },
      { label: "Replication design", value: "100 runs per scenario" },
      { label: "Best tested setup", value: "2 doors, capacity 2 each" },
    ],
    highlights: [
      "Built and iterated the evacuation model layout, door controls, and routing behavior directly in Simio.",
      "Ran multi-scenario tests across door activation and capacity settings to quantify evacuation-time tradeoffs.",
      "Validated performance with sensitivity checks, half-width confidence analysis, and pairwise comparisons.",
      "Translated simulation outputs into a practical recommendation balancing speed, robustness, and real-world operability.",
    ],
    snippets: [
      {
        src: "assets/projects/evac-sim/evac-3d-layout.png",
        alt: "3D Simio mall layout used for evacuation simulation",
        title: "3D Simulation Environment",
        insight:
          "Modelled the mall environment and movement flows to test evacuation behavior under controlled emergency conditions.",
      },
      {
        src: "assets/projects/evac-sim/evac-setup-full.png",
        alt: "Simio model layout with dashboard metrics and configurable controls",
        title: "Live Dashboard & Configurable Controls",
        insight:
          "Tracked evacuation progress and timing while enabling scenario tuning for door activation, capacity, and queue behavior.",
      },
      {
        src: "assets/projects/evac-sim/evac-experiments.png",
        alt: "Simio experiment table showing multiple scenario runs and collected timings",
        title: "Scenario Batch Runs",
        insight:
          "Executed repeated experiments across configurations to compare average evacuation durations under consistent conditions.",
      },
      {
        src: "assets/projects/evac-sim/evac-capacity-analysis.png",
        alt: "Capacity sensitivity chart showing evacuation time changes as door capacity increases",
        title: "Capacity Sensitivity Analysis",
        insight:
          "Showed the largest gain when moving capacity from 1 to 2, with diminishing improvements beyond that point.",
      },
      {
        src: "assets/projects/evac-sim/evac-two-door-results.png",
        alt: "Results table comparing two-door evacuation scenarios with confidence intervals",
        title: "Two-Door Reliability Comparison",
        insight:
          "Compared speed and variability across two-door setups; 2-door, 2-capacity delivered the strongest overall balance.",
      },
      {
        src: "assets/projects/evac-sim/evac-configurables-panel.png",
        alt: "Configurable controls panel for mall capacity, reaction delay, and door settings",
        title: "Scenario Configurables Panel",
        insight:
          "Interactive controls used to test how capacity and reaction-delay changes affect evacuation timing outcomes.",
      },
      {
        src: "assets/projects/evac-sim/evac-routing-logic.png",
        alt: "Process flow diagram for dynamic exit assignment based on load and door availability",
        title: "Dynamic Exit Routing Logic",
        insight:
          "Implemented load-aware routing so evacuees were directed to available exits with lower queue pressure in real time.",
        layout: "wide",
      },
      {
        type: "video",
        src: "assets/projects/evac-sim/mall-evac-demo.mp4",
        poster: "assets/projects/evac-sim/evac-hero.png",
        alt: "Demonstration of the evacuation simulation model",
        title: "Simulation Demo Video",
        insight:
          "Recorded run-through of the model behavior and interface during an evacuation scenario.",
        layout: "wide",
      },
    ],
  },
  "who-am-i-keepsake": {
    context: "SUTD x Assisi Hospice | Human-Centered Design Project",
    title: "Who Am I Physical Card Game",
    summary:
      "4-month school project centered on designing a physical card game that helps caregivers and families start meaningful palliative-care conversations.",
    challenge:
      "Existing tools were often too clinical or too open-ended for sensitive settings, making it hard to guide reflection while keeping patients emotionally comfortable.",
    action:
      "Worked as a key client-facing bridge with Assisi Hospice to clarify needs and convert them into concrete card requirements (themes, tone, portability, and gameplay comfort), while also supporting the companion digital keepsake workstream.",
    impact:
      "Delivered a tested physical deck concept with 30 playable cards plus an instruction card, organized across four themes and refined through prototype feedback on readability, prompt length, and card-box handling.",
    tools:
      "Stakeholder Requirement Gathering, Content Structuring, Usability Testing, Human-Centered Design",
    stats: [
      { label: "Duration", value: "4 months" },
      { label: "Role", value: "Client liaison + product support" },
      { label: "Card set", value: "30 playable + 1 instruction" },
      { label: "Prompt design", value: "4 themed categories" },
    ],
    highlights: [
      "Translated hospice stakeholder conversations into practical card-game requirements for real care settings.",
      "Helped shape card structure with four reflection themes, supportive prompt style, and low-friction action-card mechanics.",
      "Supported iterative physical prototype refinements, including prompt wording length, readability, and box usability.",
      "Captured and synthesized Assisi Hospice feedback showing strong acceptance of question quality, game safety, and adaptability in real sessions.",
      "Contributed to the companion digital keepsake flow as a secondary extension to preserve selected patient stories.",
    ],
    snippets: [
      {
        src: "assets/projects/keepsake/WhoAmICardGame.png",
        alt: "Fanned Who Am I cards previewing question and action card concept",
        title: "Fanned Deck Preview",
        insight:
          "The main deck visual used in presentations to communicate the card-game concept at a glance.",
        layout: "wide",
      },
      {
        src: "assets/projects/keepsake/whoami-sample-cards-grid.png",
        alt: "Grid of sample Who Am I question cards across four thematic categories",
        title: "Sample Question Cards (4 Themes)",
        insight:
          "Sample prompts from the exact printed deck, covering life story, emotional and sensory, existential, and relational closure themes.",
        layout: "wide",
      },
      {
        src: "assets/projects/keepsake/whoami-action-cards-strip.png",
        alt: "Action cards used in the Who Am I physical deck",
        title: "Action Cards",
        insight:
          "Reverse, Pass, and Colour-Change cards give patients more control over pace and topic comfort during conversations.",
        layout: "wide",
      },
      {
        src: "assets/projects/keepsake/whoami-instructions.png",
        alt: "Instruction card explaining how action cards are used in the Who Am I game",
        title: "Instruction Card",
        insight:
          "The instruction card sets clear rules so facilitators and caregivers can run sessions consistently with low onboarding friction.",
        layout: "wide",
      },
      {
        src: "assets/projects/keepsake/whoami-card-cover.png",
        alt: "Front cover card from the exact-size printed Who Am I deck",
        title: "Printed Deck Cover (Exact Size)",
        insight:
          "Direct screenshot from the print-ready card deck PDF used for physical production.",
        layout: "wide",
      },
      {
        src: "assets/projects/keepsake/AH Feedback Bubble.png",
        alt: "Feedback from Assisi Hospice on game safety, depth, adaptability, and inclusiveness",
        title: "Assisi Hospice Feedback",
        insight:
          "Partner feedback highlighted that the game felt safe, meaningful, adaptable for different patients, and effective at bridging conversations across generations.",
        layout: "wide",
      },
      {
        src: "assets/projects/keepsake/keepsake_updated_dashboard.png",
        alt: "Updated digital keepsake dashboard interface",
        title: "Companion Digital Keepsake (Supporting)",
        insight:
          "A secondary digital component was included to preserve selected stories, while the physical card game remained the main focus.",
        layout: "wide",
      },
    ],
  },
  "rainy-retreat": {
    context: "SUTD | Year 1 Design Project",
    title: "Rainy Retreat Interactive Light Installation",
    summary:
      "4-month interdisciplinary project combining interaction design, physical prototyping, and embedded hardware control.",
    challenge:
      "Design a public-space light installation that encourages social interaction while remaining practical to prototype and energy-conscious.",
    action:
      "Owned the main Arduino hardware codebase: implemented LED timing, color behavior, trigger logic, and hardware test routines for cloud-shaped pressure tiles and umbrella lights; worked alongside a teammate who handled Unity code for the virtual prototype; also applied Kirchhoff's voltage and current laws to evaluate current draw and justify lower-power operating choices.",
    impact:
      "Delivered a working interactive prototype with responsive light behavior, documented control architecture, and physics-backed energy analysis to support a sustainability-focused design rationale.",
    tools: "Arduino (C/C++), Circuit Design, Fusion 360, Unity, Physics Modelling",
    stats: [
      { label: "Duration", value: "4 months" },
      { label: "Role", value: "Main Arduino hardware coder" },
      { label: "System", value: "Pressure tiles + RGB umbrellas" },
      { label: "Hardware", value: "2 Arduino Uno boards" },
    ],
    highlights: [
      "Owned core Arduino coding for multi-row button inputs, paired RGB LEDs, and LED strip behavior with interval-based color transitions.",
      "Built and tested trigger-response behavior so stepped cloud tiles activated nearby umbrella lighting in real time.",
      "Integrated hardware control behavior with a separate Unity virtual model stream handled by a teammate.",
      "Applied Kirchhoff's Voltage and Current Laws to estimate per-branch current and compare color-channel energy dissipation over time.",
      "Consolidated physical build results, hardware tests, and live demo evidence into a coherent engineering narrative.",
    ],
    snippets: [
      {
        src: "assets/projects/rainy-retreat/rainy-hero.png",
        alt: "Rainy Retreat physical prototype with interactive light path and umbrella structures",
        title: "Physical Prototype Overview",
        insight:
          "Built a rain-themed interaction zone where cloud pressure tiles trigger umbrella lighting to create shared, playful moments.",
      },
      {
        src: "assets/projects/rainy-retreat/rainy-software-control.png",
        alt: "Arduino breadboard test setup and software control notes for Rainy Retreat lighting logic",
        title: "Lighting Control & Hardware Test",
        insight:
          "Set up and validated Arduino control flow for button inputs, LED timing behavior, and color-state transitions.",
      },
      {
        src: "assets/projects/rainy-retreat/rainy-kirchhoff-full.png",
        alt: "2D integration board showing circuit explanation and Kirchhoff-based data collection for LED energy analysis",
        title: "Physics Validation (Kirchhoff Analysis)",
        insight:
          "Used KVL and KCL reasoning to quantify current paths and support lower-energy lighting decisions in the final design.",
        layout: "wide",
      },
      {
        type: "video",
        src: "assets/projects/rainy-retreat/rainy-retreat-demo.mp4",
        poster: "assets/projects/rainy-retreat/rainy-video-poster.png",
        alt: "Live demonstration of Rainy Retreat interactive light response",
        title: "Live Interaction Demo",
        insight:
          "Shows real-time interaction: stepping on cloud tiles drives visible lighting feedback across the installation.",
        layout: "wide",
      },
    ],
  },
  "slb-forecasting": {
    context: "SLB | Lead Data Analyst",
    title: "SLB Demand Forecasting & Planning",
    summary:
      "4-month client project to move demand planning from experience-based estimation to data-driven forecasting.",
    challenge:
      "SLB Singapore needed a more reliable way to forecast demand for finished goods and components under volatile market conditions and long lead times.",
    action:
      "Led data cleaning, product grouping, and model validation using SQL, Python, and Excel; compared Linear Regression, Holt-Winters, and Gaussian Process Regression before implementing Holt-Winters in a Power BI dashboard.",
    impact:
      "Enabled forecast-based planning with clearer inventory signals and confidence checks, with about 70%-79% of product families landing within the 95% prediction interval in Jan-Feb 2024 back-tests.",
    tools: "SQL, Python, Excel, Power BI, R, MATLAB",
    stats: [
      { label: "Duration", value: "4 months" },
      { label: "Role", value: "Lead data analyst" },
      { label: "Data scope", value: "19,536 products" },
      { label: "Models tested", value: "3 techniques" },
    ],
    highlights: [
      "Grouped 19,536 products into 83 known families and tracked unknown families for transparency.",
      "Built model comparisons using MAE, SSE, and overfitting checks to select the best forecasting method.",
      "Delivered forecast views by geography, USL, OPG, ING, location code, ABC class, family, and product number.",
      "Packaged final outputs into a client-ready Power BI dashboard, technical report, and project poster.",
    ],
    snippets: [
      {
        src: "assets/projects/slb/slb_visual_models_final.png",
        alt: "SLB model comparison matrix covering Linear Regression, Holt-Winters, and Gaussian Process Regression",
        title: "Technique Selection Matrix",
        insight:
          "Compared forecast accuracy and reliability across three methods; Holt-Winters was chosen for the best balance on SLB time-series demand data.",
        caption:
          "Technique Selection Matrix: Holt-Winters delivered the most reliable forecast behavior across tested product families.",
      },
      {
        src: "assets/projects/slb/slb_visual_dashboard_final3.png",
        alt: "Full SLB forecasting dashboard with filters, family-level test chart, and future consumption breakdown",
        title: "Forecasting Dashboard (Full View)",
        insight:
          "Operational filters let planners drill from portfolio-level demand trends into family and product-level forecasts for review and action.",
        caption:
          "Forecasting Dashboard (Full View): Product and family drilldowns support day-to-day planning decisions.",
      },
      {
        src: "assets/projects/slb/slb_visual_poster.png",
        alt: "Full SLB project poster summarizing problem statement, methodology, dashboard design, and conclusions",
        title: "Project Poster (End-to-End Story)",
        insight:
          "Consolidates problem framing, data cleaning assumptions, model comparison, validation outcomes, and final client recommendations in one artifact.",
        caption:
          "Project Poster (End-to-End Story): One-page narrative from business problem to validated forecasting solution.",
        layout: "wide",
      },
    ],
  },
};

document.body.classList.add("js");

const updateScrollProgress = () => {
  if (!scrollProgressBar) {
    return;
  }
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight <= 0 ? 0 : (scrollTop / scrollHeight) * 100;
  scrollProgressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
};

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      const targetId = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === targetId);
      });
    });
  },
  { rootMargin: "-35% 0px -50% 0px", threshold: 0.1 }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const impactSection = document.querySelector("#impact");
const metricNumbers = Array.from(document.querySelectorAll(".metric-number"));
const highlightNumbers = Array.from(document.querySelectorAll(".highlight-number"));

const formatMetric = (value, prefix, suffix) => `${prefix}${value}${suffix}`;

const animateCounter = (element, durationMs = 1000) => {
  const target = Number(element.dataset.target || 0);
  const prefix = element.dataset.prefix || "";
  const suffix = element.dataset.suffix || "";
  const start = performance.now();

  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / durationMs, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    element.textContent = formatMetric(current, prefix, suffix);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

if (highlightNumbers.length > 0) {
  window.requestAnimationFrame(() => {
    highlightNumbers.forEach((metric) => animateCounter(metric, 1100));
  });
}

if (impactSection) {
  const impactObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        metricNumbers.forEach((metric) => animateCounter(metric));
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  impactObserver.observe(impactSection);
}

const projectCards = Array.from(document.querySelectorAll(".project"));
const projectTriggerButtons = Array.from(document.querySelectorAll(".project-trigger"));
const dialogContext = document.querySelector("#dialog-context");
const dialogTitle = document.querySelector("#dialog-title");
const dialogSummary = document.querySelector("#dialog-summary");
const dialogChallenge = document.querySelector("#dialog-challenge");
const dialogAction = document.querySelector("#dialog-action");
const dialogImpact = document.querySelector("#dialog-impact");
const dialogTools = document.querySelector("#dialog-tools");
const dialogStats = document.querySelector("#dialog-stats");
const dialogList = document.querySelector("#dialog-list");
const dialogGallery = document.querySelector("#dialog-gallery");
const snippetLightbox = document.querySelector("#snippet-lightbox");
const snippetLightboxImage = document.querySelector("#snippet-lightbox-image");
const snippetLightboxCaption = document.querySelector("#snippet-lightbox-caption");
const snippetLightboxClose = document.querySelector("#snippet-lightbox-close");

const resetSnippetLightbox = () => {
  if (!snippetLightboxImage) {
    return;
  }
  snippetLightboxImage.src = "";
  snippetLightboxImage.alt = "";
  if (snippetLightboxCaption) {
    snippetLightboxCaption.textContent = "";
  }
};

const openSnippetLightbox = (snippet) => {
  if (!snippetLightbox || !snippetLightboxImage) {
    return;
  }
  snippetLightboxImage.src = snippet.src || "";
  snippetLightboxImage.alt = snippet.alt || "Expanded project snippet";
  if (snippetLightboxCaption) {
    snippetLightboxCaption.textContent =
      snippet.caption || snippet.insight || snippet.title || "";
  }
  if (typeof snippetLightbox.showModal === "function") {
    snippetLightbox.showModal();
  } else {
    snippetLightbox.setAttribute("open", "true");
  }
};

const closeSnippetLightbox = () => {
  if (!snippetLightbox) {
    return;
  }
  if (typeof snippetLightbox.close === "function" && snippetLightbox.open) {
    snippetLightbox.close();
  } else {
    snippetLightbox.removeAttribute("open");
    resetSnippetLightbox();
  }
};

const renderDialogStats = (stats) => {
  if (!dialogStats) {
    return;
  }
  dialogStats.innerHTML = "";
  if (!Array.isArray(stats) || stats.length === 0) {
    dialogStats.hidden = true;
    return;
  }

  stats.forEach((entry) => {
    if (!entry?.label || !entry?.value) {
      return;
    }
    const statItem = document.createElement("article");
    statItem.className = "dialog-stat";

    const label = document.createElement("p");
    label.className = "dialog-stat-label";
    label.textContent = entry.label;

    const value = document.createElement("p");
    value.className = "dialog-stat-value";
    value.textContent = entry.value;

    statItem.append(label, value);
    dialogStats.appendChild(statItem);
  });

  dialogStats.hidden = dialogStats.childElementCount === 0;
};

const renderDialogHighlights = (highlights) => {
  if (!dialogList) {
    return;
  }
  dialogList.innerHTML = "";
  if (!Array.isArray(highlights) || highlights.length === 0) {
    dialogList.hidden = true;
    return;
  }

  highlights.forEach((point) => {
    if (!point) {
      return;
    }
    const item = document.createElement("li");
    item.textContent = point;
    dialogList.appendChild(item);
  });

  dialogList.hidden = dialogList.childElementCount === 0;
};

const renderDialogGallery = (snippets) => {
  if (!dialogGallery) {
    return;
  }
  dialogGallery.innerHTML = "";
  if (!Array.isArray(snippets) || snippets.length === 0) {
    dialogGallery.hidden = true;
    return;
  }

  snippets.forEach((snippet) => {
    if (!snippet?.src) {
      return;
    }

    const figure = document.createElement("figure");
    figure.className = "dialog-media";
    if (snippet.layout === "wide") {
      figure.classList.add("is-wide");
    }

    const isEmbed = snippet.type === "embed";
    const isVideo = snippet.type === "video";
    if (isEmbed) {
      figure.classList.add("has-embed");
      const iframe = document.createElement("iframe");
      iframe.src = snippet.src;
      iframe.loading = "lazy";
      iframe.setAttribute(
        "title",
        snippet.alt || snippet.title || "Embedded project media"
      );
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.allowFullscreen = true;
      figure.appendChild(iframe);
    } else if (isVideo) {
      figure.classList.add("has-video");
      const video = document.createElement("video");
      video.src = snippet.src;
      video.controls = true;
      video.preload = "metadata";
      video.playsInline = true;
      if (snippet.poster) {
        video.poster = snippet.poster;
      }
      video.setAttribute(
        "aria-label",
        snippet.alt || snippet.title || "Project demo video"
      );
      figure.appendChild(video);
    } else {
      const link = document.createElement("button");
      link.className = "dialog-media-link";
      link.type = "button";
      link.setAttribute(
        "aria-label",
        snippet.title
          ? `Expand ${snippet.title}`
          : snippet.alt || "Expand project snippet"
      );
      link.addEventListener("click", () => openSnippetLightbox(snippet));

      const image = document.createElement("img");
      image.src = snippet.src;
      image.alt = snippet.alt || "Project snippet";
      image.loading = "lazy";

      link.appendChild(image);
      figure.appendChild(link);
    }

    if (snippet.title || snippet.insight || snippet.caption) {
      const caption = document.createElement("figcaption");
      if (snippet.title) {
        const title = document.createElement("p");
        title.className = "dialog-media-title";
        title.textContent = snippet.title;
        caption.appendChild(title);
      }
      const note = document.createElement("p");
      note.className = "dialog-media-note";
      note.textContent = snippet.insight || snippet.caption || "";
      caption.appendChild(note);
      figure.appendChild(caption);
    }

    dialogGallery.appendChild(figure);
  });

  dialogGallery.hidden = dialogGallery.childElementCount === 0;
};

const openProjectDialog = (projectId) => {
  const detail = projectDetails[projectId];
  if (!detail || !projectDialog) {
    return;
  }

  if (dialogContext) dialogContext.textContent = detail.context;
  if (dialogTitle) dialogTitle.textContent = detail.title;
  if (dialogSummary) dialogSummary.textContent = detail.summary;
  if (dialogChallenge) dialogChallenge.textContent = detail.challenge;
  if (dialogAction) dialogAction.textContent = detail.action;
  if (dialogImpact) dialogImpact.textContent = detail.impact;
  if (dialogTools) dialogTools.textContent = detail.tools;
  renderDialogStats(detail.stats);
  renderDialogHighlights(detail.highlights);
  renderDialogGallery(detail.snippets);

  if (typeof projectDialog.showModal === "function") {
    projectDialog.showModal();
  } else {
    projectDialog.setAttribute("open", "true");
  }
};

const closeProjectDialog = () => {
  if (!projectDialog) {
    return;
  }
  if (typeof projectDialog.close === "function") {
    projectDialog.close();
  } else {
    projectDialog.removeAttribute("open");
  }
};

projectTriggerButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const parent = button.closest(".project");
    if (!parent?.dataset.project) {
      return;
    }
    openProjectDialog(parent.dataset.project);
  });
});

if (projectDialogClose) {
  projectDialogClose.addEventListener("click", closeProjectDialog);
}

if (projectDialog) {
  projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) {
      closeProjectDialog();
    }
  });
}

if (snippetLightboxClose) {
  snippetLightboxClose.addEventListener("click", (event) => {
    event.stopPropagation();
    closeSnippetLightbox();
  });
}

if (snippetLightbox) {
  snippetLightbox.addEventListener("close", resetSnippetLightbox);
  snippetLightbox.addEventListener("click", (event) => {
    if (event.target === snippetLightbox) {
      closeSnippetLightbox();
    }
  });
  snippetLightbox.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeSnippetLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && snippetLightbox && snippetLightbox.open) {
    closeSnippetLightbox();
  }
});

projectCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest(".project-trigger")) {
      return;
    }
    if (!card.dataset.project) {
      return;
    }
    openProjectDialog(card.dataset.project);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    if (!card.dataset.project) {
      return;
    }
    openProjectDialog(card.dataset.project);
  });

  card.addEventListener("mousemove", (event) => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = -y * 4;
    const rotateY = x * 4;
    card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(
      2
    )}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

const copyButtons = Array.from(document.querySelectorAll("[data-copy-text]"));
const copyStatus = document.querySelector("#copy-status");

if (copyButtons.length > 0 && copyStatus) {
  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const textToCopy = button.dataset.copyText || "";
      const label = button.dataset.copyLabel || "Value";
      if (!textToCopy) {
        return;
      }
      try {
        await navigator.clipboard.writeText(textToCopy);
        copyStatus.textContent = `${label} copied: ${textToCopy}`;
      } catch (_) {
        copyStatus.textContent = `Could not copy ${label.toLowerCase()} automatically. ${label}: ${textToCopy}`;
      }
    });
  });
}

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
