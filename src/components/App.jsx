import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from "./PopupWithForm";

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    return (
        <>
            <Header/>
            <Main onEditProfile={handleEditProfileClick}
                  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
            />
            <Footer />
            <template className="card-template">
                <article className="elements__card">
                    <div className="elements__img-container">
                        <img
                            src="<%=require('./images/DeliteIcon.svg')%>"
                            alt="Удалить"
                            className="elements__delete-btn"
                        />
                        <img src="#" alt="#" className="elements__image popup-link"/>
                    </div>
                    <div className="elements__info">
                        <h2 className="elements__title"></h2>
                        <div className="elements__likes">
                            <p className="elements__likesCounter"></p>
                            <button type="button" className="elements__like-btn"></button>
                        </div>
                    </div>
                </article>
            </template>

            <PopupWithForm isOpen={isEditAvatarPopupOpen}>
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
            <PopupWithForm isOpen={isEditProfilePopupOpen}>
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
            <PopupWithForm isOpen={isAddPlacePopupOpen}>
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

            <div className="popup popup_type_image">
                <div className="popup__image-container">
                    <img src="#" alt="#" className="popup__image"/>
                    <p className="popup__image-title"></p>
                    <button type="button" className="popup__close popup-close"></button>
                </div>
            </div>
            <div className="popup popup_type_confirm">
                <div className="popup__body">
                    <button type="button" className="popup__close popup-close"></button>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button className="popup__btn-save" type="submit">Да</button>
                </div>
            </div>
        </>
    );
}

export default App;