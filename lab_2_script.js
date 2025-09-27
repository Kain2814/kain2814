document.addEventListener("DOMContentLoaded", function () {
  // fill current year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("show");
    });
  }

  // Smooth in-page scroll for links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // close mobile nav if open
        if (nav && nav.classList.contains("show")) {
          nav.classList.remove("show");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });
});
