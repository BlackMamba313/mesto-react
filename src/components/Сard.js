import deleteIcon from '../images/deleteIcon.svg';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="elements__card">
      <div className="elements__img-container">
        <img src={deleteIcon} alt="Удалить" className="elements__delete-btn" />
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
          <p className="elements__likesCounter">{card.likes.length}</p>
          <button type="button" className="elements__like-btn"></button>
        </div>
      </div>
    </article>
  );
}

export default Card;
