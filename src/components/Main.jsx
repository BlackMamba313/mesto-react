import { useContext  } from 'react';
import Card from "./Сard";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onDeleteClick }) {

  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    return (
        <section className="loading">
          <span className="profile__preloader"></span>
        </section>
    );
  }

  console.log(currentUser)
  return (
    <>
      <main>
        <section className="profile">
          <img onClick={onEditAvatar} className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
          <div className="profile__info">
            <div className="profile__titlebox">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit-btn"></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button
            onClick={onAddPlace}
            type="button"
            className="profile__add-btn popup-link"
          ></button>
        </section>

        <section className="elements">
          {cards.map((item, index) => (
            <Card cardData={item}
                  key={index}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onDeleteClick={onDeleteClick} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
