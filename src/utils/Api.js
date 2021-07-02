import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mesto.nomoreparties.co/v1/cohort-24',
    headers: {
        authorization: 'c1450c2c-a48c-4f63-ab99-b9b5f6aeb0cf',
        'Content-Type': 'application/json',
    },
})
export const getInitialCards = () => instance.get("/cards")
export const getUserInfo = () => instance.get("/users/me")
export const setUserInfo = (name, job) => instance.patch("/users/me", {name: name, about: job,})
export const setAvatar = (avatarLink) => instance.patch("/users/me/avatar", {avatar: avatarLink,})
export const postNewCard = (name, link) => instance.post("/cards", { name: name, link: link,})
export const deleteCard = (cardId) => axios.delete(`/cards/${cardId}`,)
export const likeCard = (cardId, isLiked) => instance

// export const likeCard = (cardId, isLiked) => {
//     return fetch(`${baseUrl}/cards/likes/${cardId}`, {
//       method: isLiked ? 'DELETE' : 'PUT',
//       headers: {headers},
//     }).then(checkRequestResult);
//   }




