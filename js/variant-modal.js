/* ==========================================================================
   Stilletos Decor - shared color/variant selection modal
   Opens whenever a rental item has more than one price option (e.g. color
   variants), letting the visitor pick which one to add to their quote.
   ========================================================================== */

window.STILLETOS_VARIANTS = (function () {
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function buildOptions(item) {
    const base = { label: "Standard", price: item.price };
    const colorOptions = (item.colors || []).map((c) => ({
      label: c.name,
      price: c.price || item.price,
    }));
    return [base].concat(colorOptions);
  }

  // onPick receives { label, price } for the chosen option.
  function open(item, onPick) {
    const overlay = document.getElementById("variant-modal-overlay");
    const content = document.getElementById("variant-modal-content");
    if (!overlay || !content) return;

    const options = buildOptions(item);

    content.innerHTML =
      '<h3 class="variant-modal-title">' +
      escapeHtml(item.name) +
      "</h3>" +
      '<p class="variant-modal-sub">Select a color / option to add to your quote</p>' +
      '<div class="variant-option-list">' +
      options
        .map(
          (o, i) =>
            '<button type="button" class="variant-option-btn" data-variant-index="' +
            i +
            '">' +
            '<span class="variant-option-name">' +
            escapeHtml(o.label) +
            "</span>" +
            '<span class="variant-option-price">' +
            escapeHtml(o.price) +
            "</span>" +
            "</button>"
        )
        .join("") +
      "</div>";

    content.querySelectorAll("[data-variant-index]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-variant-index"));
        const chosen = options[idx];
        close();
        if (chosen) onPick(chosen);
      });
    });

    overlay.classList.add("open");
    document.body.classList.add("variant-modal-open");
  }

  function close() {
    const overlay = document.getElementById("variant-modal-overlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.classList.remove("variant-modal-open");
  }

  function init() {
    const overlay = document.getElementById("variant-modal-overlay");
    const closeBtn = document.getElementById("variant-modal-close");

    if (closeBtn) closeBtn.addEventListener("click", close);
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) close();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  return { init, open, close };
})();
