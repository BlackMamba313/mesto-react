function PopupWithForm({ title, name , children, isOpen, onClose }) {


  return (
      <div className={`popup popup_type_${name} ${isOpen}`}>
        <div className="popup__body">
          <form
              className="popup__form form-editProfile"
              noValidate
              name={name}
              action="#"
              method="post"
          >
            <button type="button"
                    onClick={onClose}
                    className="popup__close popup-close"/>
            <h2 className="popup__title">{title}</h2>
              {children}
            <button className="popup__btn-save" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm

