const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuToggle && navigation) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    navigation.classList.toggle("is-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

document.querySelectorAll(".media-frame video").forEach((video) => {
  video.addEventListener("error", () => {
    video.closest(".media-frame")?.classList.add("is-unavailable");
  });
});

const portrait = document.querySelector(".portrait-image");
portrait?.addEventListener("error", () => {
  portrait.closest(".portrait-frame")?.classList.add("is-unavailable");
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
