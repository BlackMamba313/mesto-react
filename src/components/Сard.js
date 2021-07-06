import {useContext} from "react";
import deleteIcon from '../images/deleteIcon.svg';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = useContext(CurrentUserContext);
    const card = props.card;
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(card.link);
  }

    function handleLike() {
        props.onCardLike(card);
    }

    function handleDeleteClick() {
        props.onDeleteClick(props.card);
    }
    const cardDeleteButtonClassName = isOwn ? "elements__delete-btn" : "elements__delete-btn_hidden";
  const cardLikeButtonClassName = isLiked ? "elements__like-btn_active" : "elements__like-btn";
  return (
      <article className="elements__card">
          <div className="elements__img-container">
              <img src={deleteIcon} alt="Удалить" onClick={handleDeleteClick} className={cardDeleteButtonClassName} />
              <img
                  src={card.link}
                  alt={card.name}
                  className="elements__image popup-link"
                  onClick={handleClick}
              />
          </div>
          <div className="elements__info">
              <h2 className="elements__title">{card.name}</h2>
              <div className="elements__likes">
                  <button type="button" onClick={handleLike} className={cardLikeButtonClassName}></button>
                  <p className="elements__likesCounter">{card.likes.length}</p>
              </div>
          </div>
      </article>
  );
}

export default Card;
