import {useState} from "react";
import api from "../utils/Api";
import {avatar} from '../utils/constants'

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
    const [userName, setUserName] = useState('Capitan Flint')
    const [userDescription, setUserDescription] = useState('Marinero')
    const [userAvatar, setUserAvatar] = useState(avatar)



    return(
      <>
        <main>
            <section className="profile">
                <img onClick={onEditAvatar}
                    className="profile__avatar"
                     src={userAvatar}
                    alt="Аватар"
                />
                <div className="profile__info">
                    <div className="profile__titlebox">
                        <h1 className="profile__title">{userName}</h1>
                        <button onClick={onEditProfile} type="button" className="profile__edit-btn"></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-btn popup-link"></button>
            </section>

            <section className="elements"></section>
        </main>
    </>
    )
}

export default Main