export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};
export const avatar = "https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"

export const forms = {
  add: document.querySelector('.form-addCard'),
  profile: document.querySelector('.form-editProfile'),
  avatar: document.querySelector('.form-newAvatar'),
};

export const buttons = {
  add: document.querySelector('.profile__add-btn'),
  profile: document.querySelector('.profile__edit-btn'),
  avatar: document.querySelector('.profile__avatar'),
};

export const popups = {
  add: document.querySelector('.popup_type_add'),
  image: document.querySelector('.popup_type_image'),
  profile: document.querySelector('.popup_type_profile'),
  avatar: document.querySelector('.popup_type_avatar'),
  confirm: document.querySelector('.popup_type_confirm'),
};
export const profileConfig = {
  name: document.querySelector('.profile__title'),
  job: document.querySelector('.profile__subtitle'),
  avatar: document.querySelector('.profile__avatar'),
};
export const cardSection = document.querySelector('.elements');
export const inputs = {
  name: document.querySelector('.popup__input_name'),
  job: document.querySelector('.popup__input_text'),
};
