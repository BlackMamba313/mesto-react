import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
    return (
        <div>
            <Header/>
            <Main />
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
            <div className="popup popup_type_profile">
                <div className="popup__body">
                    <form
                        className="popup__form form-editProfile"
                        noValidate
                        name="editProfile"
                        action="#"
                        method="post"
                    >
                        <button type="button" className="popup__close popup-close"></button>
                        <h2 className="popup__title">Редактировать профиль</h2>
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
                        <button className="popup__btn-save" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
            <div className="popup popup_type_add">
                <div className="popup__body">
                    <form className="popup__form form-addCard" noValidate name="addCard" action="#" method="post">
                        <button type="button" className="popup__close popup-close"></button>
                        <h2 className="popup__title">Новое место</h2>
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
                        <button className="popup__btn-save" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>

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
        </div>
    );
}

export default App;