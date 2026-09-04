(() => {
  const header = document.querySelector("[data-site-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const navTriggers = [...document.querySelectorAll("[data-nav-trigger]")];

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  const closeDesktopMenus = (exception) => {
    navTriggers.forEach((trigger) => {
      if (trigger === exception) return;
      trigger.setAttribute("aria-expanded", "false");
      trigger.closest(".nav-item")?.classList.remove("is-open");
    });
  };

  navTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
      closeDesktopMenus(trigger);
      trigger.setAttribute("aria-expanded", String(shouldOpen));
      trigger.closest(".nav-item")?.classList.toggle("is-open", shouldOpen);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-item--has-menu")) closeDesktopMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeDesktopMenus();
    if (mobileMenu && !mobileMenu.hidden) menuToggle?.click();
  });

  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    if (mobileMenu) mobileMenu.hidden = !open;
    header?.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("menu-open", open);
    if (open) window.setTimeout(() => mobileMenu?.querySelector("a, summary, button")?.focus(), 30);
    else menuToggle.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || !mobileMenu || mobileMenu.hidden) return;
    const focusable = [...mobileMenu.querySelectorAll("a[href], summary, button, input, textarea")].filter((element) => !element.hasAttribute("disabled"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle?.getAttribute("aria-expanded") === "true") menuToggle.click();
    });
  });

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (motionAllowed && "IntersectionObserver" in window) {
    const revealTargets = [...document.querySelectorAll("[data-reveal]")];
    document.body.classList.add("reveal-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.06 });
    revealTargets.forEach((target) => observer.observe(target));
  }

  const message = document.querySelector("#message");
  const characterCount = document.querySelector("[data-character-count]");
  if (message && characterCount) {
    const updateCount = () => { characterCount.textContent = String(message.value.length); };
    message.addEventListener("input", updateCount);
    updateCount();
  }

  const contactForm = document.querySelector("[data-contact-form]");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const values = new FormData(contactForm);
    const subject = encodeURIComponent(`Consultation request from ${values.get("name")}`);
    const body = encodeURIComponent(`Name: ${values.get("name")}\nEmail: ${values.get("email")}\nPhone: ${values.get("phone")}\n\nHow may we assist?\n${values.get("message")}`);
    const status = contactForm.querySelector("[data-form-status]");
    if (status) {
      status.hidden = false;
      status.textContent = "Your email application is opening with this message addressed to Assist@TheHomeWatchAgency.com. This demo does not transmit or store your information.";
    }
    window.location.href = `mailto:Assist@TheHomeWatchAgency.com?subject=${subject}&body=${body}`;
  });
})();
