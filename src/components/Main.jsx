import {popups} from "../utils/constants";

function Main() {
    const handleEditAvatarClick = () => {
        document.querySelector('.popup_type_avatar').classList.add('popup_is-opened');
    }

    const handleEditProfileClick = () => {
        document.querySelector('.popup_type_profile').classList.add('popup_is-opened');
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add').classList.add('popup_is-opened');
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
                        <button onClick={handleEditProfileClick} type="button" className="profile__edit-btn"></button>
                    </div>
                    <p className="profile__subtitle"></p>
                </div>
                <button onClick={handleAddPlaceClick} type="button" className="profile__add-btn popup-link"></button>
            </section>

            <section className="elements"></section>
        </main>

    </>
    )
}

export default Main