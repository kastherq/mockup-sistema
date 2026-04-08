const navItems = Array.from(document.querySelectorAll(".nav-item"));
const screens = Array.from(document.querySelectorAll(".screen"));
const nextScreenButton = document.getElementById("nextScreen");
const modalBackdrop = document.getElementById("modalBackdrop");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

let activeIndex = 0;

function setActiveScreen(index) {
  activeIndex = index;

  navItems.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === index);
  });

  screens.forEach((screen, screenIndex) => {
    screen.classList.toggle("active", screenIndex === index);
  });
}

navItems.forEach((item, index) => {
  item.addEventListener("click", () => setActiveScreen(index));
});

nextScreenButton.addEventListener("click", () => {
  const nextIndex = (activeIndex + 1) % screens.length;
  setActiveScreen(nextIndex);
});

openModalButton.addEventListener("click", () => {
  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
});

closeModalButton.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modalBackdrop.classList.remove("open");
  modalBackdrop.setAttribute("aria-hidden", "true");
}
