

function Main({onEditAvatar, onEditProfile, onAddPlace}) {

    return(
      <>
        <main>
            <section className="profile">
                <img onClick={onEditAvatar}
                    className="profile__avatar"
                    src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                    alt="Аватар"
                />
                <div className="profile__info">
                    <div className="profile__titlebox">
                        <h1 className="profile__title"></h1>
                        <button onClick={onEditProfile} type="button" className="profile__edit-btn"></button>
                    </div>
                    <p className="profile__subtitle"></p>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-btn popup-link"></button>
            </section>

            <section className="elements"></section>
        </main>

    </>
    )
}

export default Main