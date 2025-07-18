  function toggleCard(el) {
    const card = el.closest(".cardtype2-card");
    const isActive = card.getAttribute("data-active") === "true";
    card.setAttribute("data-active", !isActive);
  }