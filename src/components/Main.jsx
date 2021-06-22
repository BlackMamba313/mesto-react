import {popups} from "../utils/constants";

function Main() {
    const handleEditAvatarClick = () => {
        document.querySelector('.popup_type_avatar').classList.add('popup_is-opened');
    }

    function handleEditProfileClick() {

    }
    function handleAddPlaceClick() {

    }

    return(
      <>
        <main>
            <section className="profile">
                <img onClick={handleEditAvatarClick}
                    className="profile__avatar"
                    src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                    alt="Аватар"
                />
                <div className="profile__info">
                    <div className="profile__titlebox">
                        <h1 className="profile__title"></h1>
                        <button onClick={handleEditProfileClick()} type="button" className="profile__edit-btn"></button>
                    </div>
                    <p className="profile__subtitle"></p>
                </div>
                <button onClick={handleAddPlaceClick()} type="button" className="profile__add-btn popup-link"></button>
            </section>

            <section className="elements"></section>
        </main>
        <div className="popup popup_type_avatar">
          <div className="popup__body">
            <form
                name="newAvatar"
                noValidate
                className="popup__form form-newAvatar"
                action="#"
                method="post"
            >
                <button type="button" className="popup__close popup-close"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <input
                    className="popup__input popup__input_avatarLink"
                    name="avatarLink"
                    id="avatarLink"
                    placeholder="Ссылка на картинку"
                    type="url"
                    required
                />
                <span className="popup__error" id="avatarLink-error"></span>
                <button className="popup__btn-save" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
    </>
    )
}

export default Main