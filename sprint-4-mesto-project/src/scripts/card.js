import { openModal, closeModal } from "./modal.js";

const cardTemplate = document.querySelector("#card-template");
const placesList = document.querySelector(".places__list");

const popupTypeImage = document.querySelector(".popup_type_image");
popupTypeImage.classList.add("popup_is-animated");

function drawCard(cards) {
  placesList.innerHTML = "";
  cards.forEach((element) => {
    placesList.append(createCard(element.name, element.link));
  });
}

function createCard(name, link) {
  const cardEl = cardTemplate.content.cloneNode(true);
  const cardImage = cardEl.querySelector(".card__image");
  const cardTitle = cardEl.querySelector(".card__title");

  cardImage.alt = name;
  cardImage.src = link;
  cardTitle.textContent = name;

  const cardLikeButton = cardEl.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_is-active");
  });

  cardImage.addEventListener("click", () => {
    openModal(popupTypeImage);
    const popupCaption = popupTypeImage.querySelector(".popup__caption");
    const popupImage = popupTypeImage.querySelector(".popup__image");
    popupCaption.textContent = cardImage.alt;
    popupImage.src = cardImage.src;

    const popupClose = popupTypeImage.querySelector(".popup__close");
    popupClose.addEventListener("click", () => {
      closeModal(popupTypeImage);
    });
  });

  const cardDeleteButton = cardEl.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    // cardDeleteButton.closest("li").remove();
    const nameOfCard =
      cardDeleteButton.nextElementSibling.querySelector(
        ".card__title"
      ).textContent;

    initialCards.map((item, index) => {
      if (item.name == nameOfCard) {
        initialCards.splice(index, 1);
        drawCard(initialCards);
      }
    });
  });

  return cardEl;
}

export { drawCard };
