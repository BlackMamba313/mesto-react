function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_image ${isOpen}`}>
      <div className="popup__image-container">
        <img src={card.link} alt={card.name} className="popup__image" />
        <p className="popup__image-title">{card.name}</p>
        <button type="button" className="popup__close popup-close" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
