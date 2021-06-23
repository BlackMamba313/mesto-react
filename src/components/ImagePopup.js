import React from "react";

function ImagePopup() {
  return (
      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <img src="#" alt="#" className="popup__image"/>
          <p className="popup__image-title"></p>
          <button type="button" className="popup__close popup-close"></button>
        </div>
      </div>
  );
}

export default ImagePopup;






// export default class PopupWithImage extends Popup {
//   // constructor(popup) {
//   //   super(popup);
//   //   this._popupCardImage = this._popup.querySelector('.popup__image');
//   //   this._captionImage = this._popup.querySelector('.popup__image-title');
//   // }
//   // open(title, link) {
//   //   this._captionImage.textContent = title;
//   //   this._popupCardImage.src = link;
//   //   this._popupCardImage.alt = title;
//   //   super.open();
//   // }
// }
