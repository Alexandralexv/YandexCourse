function openModal(popup) {
  popup.classList.add("popup_is-opened");
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
}

function eventModal(popup, handle) {
  const popupClose = popup.querySelector(".popup__close");
  const popupForm = popup.querySelector(".popup__form");

  openModal(popup);

  popupClose.addEventListener("click", () => {
    closeModal(popup);
  });

  popupForm.addEventListener("submit", handle);
}

export { openModal, closeModal, eventModal };
