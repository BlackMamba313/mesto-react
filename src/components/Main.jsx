import { useState, useEffect } from 'react';
import api from '../utils/Api';
import { avatar } from '../utils/constants';
import Card from './Сard';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('Capitan Flint');
  const [userDescription, setUserDescription] = useState('Marinero');
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
      setUserName(userData.name);
      setUserAvatar(userData.avatar);
      setUserDescription(userData.about);
    })
      .catch((err) => {console.log(err)})

    api.getInitialCards()
      .then((cardList) => {
      setCards(cardList);
    })
      .catch((err) => {console.log(err)})
  }, []);

  return (
    <>
      <main>
        <section className="profile">
          <img onClick={onEditAvatar} className="profile__avatar" src={userAvatar} alt="Аватар" />
          <div className="profile__info">
            <div className="profile__titlebox">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit-btn"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            onClick={onAddPlace}
            type="button"
            className="profile__add-btn popup-link"
          ></button>
        </section>

        <section className="elements">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
