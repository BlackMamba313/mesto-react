import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen ? 'popup_is-opened' : ''}
      >
        <input
          className="popup__input popup__input_avatarLink"
          name="avatarLink"
          id="avatarLink"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="popup__error" id="avatarLink-error"></span>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen ? 'popup_is-opened' : ''}
      >
        <input
          className="popup__input popup__input_name"
          name="name"
          id="name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          required
          type="text"
        />
        <span className="popup__error" id="name-error"></span>
        <input
          className="popup__input popup__input_text"
          name="job"
          id="job"
          minLength="2"
          maxLength="200"
          placeholder="Вид деятельности"
          required
          type="text"
        />
        <span className="popup__error" id="job-error"></span>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen ? 'popup_is-opened' : ''}>
        <input
          className="popup__input popup__input_title"
          name="title"
          id="title"
          required
          minLength="2"
          type="text"
          maxLength="30"
          placeholder="Название"
        />
        <span className="popup__error" id="title-error"></span>
        <input
          className="popup__input popup__input_url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="popup__error" id="link-error"></span>
      </PopupWithForm>
      <ImagePopup
        isOpen={selectedCard == '' ? '' : 'popup_is-opened'}
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <div className="popup popup_type_confirm">
        <div className="popup__body">
          <button type="button" className="popup__close popup-close"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__btn-save" type="submit">
            Да
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
