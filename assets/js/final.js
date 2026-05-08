/* TAB SWITCHING */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    document.querySelector(".tab-content.active")?.classList.remove("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

/* FADE BEFORE/AFTER */
document.querySelectorAll(".comparison").forEach(wrapper => {
  const inner = wrapper.querySelector(".comparison-inner");
  const toggle = wrapper.querySelector(".fade-toggle");

  toggle.addEventListener("click", () => {
    inner.classList.toggle("show-after");
    toggle.textContent = inner.classList.contains("show-after")
      ? "Show Before"
      : "Show After";
  });
});
