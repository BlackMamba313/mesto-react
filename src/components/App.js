import { useState, useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import ClosePopup from './ClosePopup'
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from '../utils/Api'

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setCurrentUser(user);
                setCards(cards.slice(0, 100));
            })
            .catch((err) => console.log(err));
    }, []);

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

      setSelectedCard({ name: card.name, link: card.link });
  }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api
            .likeCard(card._id, !isLiked)
            .then((newCard) => {
                const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
                setCards(newCards);
            })
            .catch((err) => console.log(err));
    }

function handleCardDelete(card) {
    api
        .deleteCard(card._id)
        .then(() => {
            const newCards = cards.filter((c) => c._id !== card._id);
            setCards(newCards);
        })
        .catch((err) => console.log(err))
        .finally(() => closeAllPopups());
}

function handleUpdateUser(user) {
    api
        .setUserInfo(user)
        .then((user) => setCurrentUser(user))
        .catch((err) => console.log(err))
        .finally(() => closeAllPopups());
}

function handleUpdateAvatar(avatar) {
    api
        .setAvatar(avatar)
        .then((avatar) => setCurrentUser(avatar))
        .catch((err) => console.log(err))
        .finally(() => closeAllPopups());
}

function handleAddPlaceSubmit(card) {
    api
        .postNewCard(card)
        .then((card) => setCards([card, ...cards]))
        .catch((err) => console.log(err))
        .finally(() => closeAllPopups());
}

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  };

  return (
    <>
        <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onDeleteClick={handleCardDelete}
      />
      <Footer />
            {isEditProfilePopupOpen ? (
                <ClosePopup>
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}

                    />
                </ClosePopup>
            ) : (
                ""
            )}
            {isAddPlacePopupOpen ? (
                <ClosePopup>
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}

                    />
                </ClosePopup>
            ) : (
                ""
            )}
            {isEditAvatarPopupOpen ? (
                <ClosePopup>
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}

                    />
                </ClosePopup>
            ) : (
                ""
            )}
            {selectedCard.link ? (
                <ClosePopup>
                    <ImagePopup
                        isOpen={selectedCard.link}
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </ClosePopup>
            ) : (
                ""
            )}
     </CurrentUserContext.Provider>
    </>
  );
}

export default App;
