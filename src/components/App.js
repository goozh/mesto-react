import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import ImagePopup from './ImagePopup/ImagePopup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    api.getInitialData()
    .then((results) => {
      setCurrentUser(results[0]);
      setCards(results[1])
    })
    .catch((err) => {
      console.log(`Ошибка при получении данных с сервера: ${err}`);
    });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
            <Footer />
            <PopupWithForm name="edit-profile" type="form" title="Редактировать профиль" buttonCaption="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
              <input className="popup__input popup__input_value_name" type="text" id="profile-name" minLength="2" maxLength="40" required placeholder = "Имя" />
              <span className="popup__input-error profile-name-error">Ошибка</span>
              <input className="popup__input popup__input_value_desc" type="text" id="profile-info" minLength="2" maxLength="200" required placeholder = "О себе" />
              <span className="popup__input-error profile-info-error">Ошибка</span>
            </PopupWithForm>
            <PopupWithForm name="add-card" type="form" title="Новое место" buttonCaption="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
              <input className="popup__input popup__input_value_name" type="text" id="card-name" maxLength="30" required placeholder="Название" />
              <span className="popup__input-error card-name-error">Ошибка</span>
              <input className="popup__input popup__input_value_desc" type="url" id="card-link" required placeholder="Ссылка на картинку" />
              <span className="popup__input-error card-link-error">Ошибка</span>
            </PopupWithForm>
            <PopupWithForm name="edit-avatar" type="avatar" title="Обновить аватар" buttonCaption="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
              <input className="popup__input popup__input_value_name" type="url" id="avatar-link" required placeholder="Ссылка на картинку" />
              <span className="popup__input-error avatar-link-error">Ошибка</span>
            </PopupWithForm>
            <PopupWithForm name="delete-card" type="dialog" title="Обновить аватар" buttonCaption="Да" />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
