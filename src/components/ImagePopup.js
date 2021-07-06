function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen && 'popup_is-opened'}`}>
      <div className="popup__image-container">
        <img src={props.link} alt={props.name} className="popup__image" />
        <p className="popup__image-title">{props.name}</p>
        <button type="button" className="popup__close popup-close" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
