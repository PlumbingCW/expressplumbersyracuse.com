(function () {
  "use strict";
  var root = document.documentElement;
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");
  var lastFocus = null;

  function openDrawer() {
    if (!drawer) return;
    lastFocus = document.activeElement;
    drawer.removeAttribute("hidden");
    if (overlay) overlay.classList.add("visible");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    root.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.setAttribute("hidden", "");
    if (overlay) overlay.classList.remove("visible");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    root.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (toggle) toggle.addEventListener("click", function () {
    drawer && drawer.hasAttribute("hidden") ? openDrawer() : closeDrawer();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer && !drawer.hasAttribute("hidden")) closeDrawer();
  });
  if (drawer) drawer.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("a")) closeDrawer();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && drawer && !drawer.hasAttribute("hidden")) closeDrawer();
  });

  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.parentElement;
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
})();
