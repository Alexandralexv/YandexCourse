import "./styles/index.css";
import { initialCards } from "./scripts/cards.js";
import { drawCard } from "./scripts/card.js";
import { closeModal, eventModal } from "./scripts/modal.js";
import setEventListeners from "./scripts/validate.js";

const editPopup = document.querySelector(".popup_type_edit");
const NewCardPopup = document.querySelector(".popup_type_new-card");
editPopup.classList.add("popup_is-animated");
NewCardPopup.classList.add("popup_is-animated");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const popupInputIypeName = document.querySelector(".popup__input_type_name");
const popupInputTypeDescription = document.querySelector(
  ".popup__input_type_description"
);
const popupInputIypeCardName = document.querySelector(
  ".popup__input_type_card-name"
);
const popupInputTypeUrl = document.querySelector(".popup__input_type_url");

drawCard(initialCards); // отрисовка карточек

// Редактирование профиля
const EditProfileButton = document.querySelector(".profile__edit-button");
EditProfileButton.addEventListener("click", () => {
  setEventListeners(editPopup, editPopup.querySelector(".popup__form")); // Валидация
  fillingProfileEditing(); // Начальное заполнение input'ов при появление поля редактирования профиля
  eventModal(editPopup, handleProfileFormSubmit); // открытие и отслеживание действий
});

// Добавление нового места
const AddNewPlaceButton = document.querySelector(".profile__add-button");
AddNewPlaceButton.addEventListener("click", () => {
  popupInputIypeCardName.value = "";
  popupInputTypeUrl.value = "";
  NewCardPopup.querySelector(".popup__button").disabled = true;

  setEventListeners(NewCardPopup, NewCardPopup.querySelector(".popup__form"));
  eventModal(NewCardPopup, handleCardsFormSubmit);
});

function fillingProfileEditing() {
  popupInputIypeName.value = profileTitle.textContent;
  popupInputTypeDescription.value = profileDescription.textContent;
}

function handleProfileFormSubmit(event) {
  // Обработка формы профиля
  event.preventDefault();
  profileTitle.textContent = popupInputIypeName.value;
  profileDescription.textContent = popupInputTypeDescription.value;
  closeModal(editPopup);
}

function handleCardsFormSubmit(event) {
  // Обработка формы карточки
  event.preventDefault();
  initialCards.unshift({
    name: popupInputIypeCardName.value,
    link: popupInputTypeUrl.value,
  });
  drawCard(initialCards);
  closeModal(NewCardPopup);
}
