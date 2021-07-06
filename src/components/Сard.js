import {useContext} from "react";
import deleteIcon from '../images/deleteIcon.svg';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = useContext(CurrentUserContext);
    const cardData = props.cardData;
    const isOwn = props.cardData.owner._id === currentUser._id;
    const isLiked = props.cardData.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(cardData.link);
  }

    function handleLike() {
        props.onCardLike(cardData);
    }

    function handleDeleteClick() {
        props.onDeleteClick(props.card);
    }
    const cardDeleteButtonClassName = isOwn ? "elements__delete-btn" : "elements__delete-btn_hidden";
  const cardLikeButtonClassName = isLiked ? "elements__like-btn_active" : "elements__like-btn";
  return (
    <article className="elements__card">
      <div className="elements__img-container">
        <img src={deleteIcon}
             onClick={handleDeleteClick}
             alt="Удалить"
             className={cardDeleteButtonClassName} />
        <img
          src={cardData.link}
          alt={cardData.name}
          className="elements__image popup-link"
          onClick={handleClick}
        />
      </div>
      <div className="elements__info">
        <h2 className="elements__title">{cardData.name}</h2>
        <div className="elements__likes">
          <button type="button" className={cardLikeButtonClassName}></button>
          <p className="elements__likesCounter">{cardData.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
