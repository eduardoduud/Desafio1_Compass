export function bindEvents() {
  const headerTop = document.querySelector(".header-top");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => {
    headerTop.classList.toggle("hide");
  });

  let scrollPosition = 0;

  const menuIcon = document.querySelector(".menu-icon");

  // Modal open/close events
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const modalClose = document.querySelector(".modal-close");

  menuIcon.addEventListener("click", () => {
    scrollPosition = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    modal.style.display = "block";
    modal.offsetHeight;
    modal.classList.add("show");
  });

  modalClose.addEventListener("click", () => {
    closeModal();
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal && !modalContent.contains(event.target)) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove("show");
    modal.addEventListener(
      "transitionend",
      () => {
        modal.style.display = "none";

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition);
      },
      { once: true }
    );
  }
}
