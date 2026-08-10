/* ============================================================
   VydaDulce — interacciones
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Recipe filter ---------- */
  const filters = document.querySelectorAll(".filter");
  const recipes = document.querySelectorAll(".recipe");

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;
      recipes.forEach((recipe) => {
        const match = category === "all" || recipe.dataset.category === category;
        recipe.classList.toggle("hidden", !match);
      });
    });
  });

  /* ---------- Formulario de contacto (demo) ---------- */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  if (form && note) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      note.hidden = false;
      form.reset();
      setTimeout(() => { note.hidden = true; }, 6000);
    });
  }

  /* ---------- Año en el pie de página ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
