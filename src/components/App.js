import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import ImagePopup from './ImagePopup/ImagePopup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {api} from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup/AddPlacePopup.js';
import DeleteCardPopup from './DeleteCardPopup/DeleteCardPopup.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [cardToDelete, setCardToDelete] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((results) => {
      setCurrentUser(results);
    })
    .catch((err) => {
      console.log(`Ошибка при получении данных с сервера: ${err}`);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
    .then((results) => {
      setCards(results);
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
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(newInfo) {
    api.setUserInfo(newInfo)
      .then((updatedInfo) => {
        setCurrentUser(updatedInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка при отправке данных на сервер: ${err}`);
      });
  }

  function handleUpdateAvatar(newInfo) {
    api.setUserAvatar(newInfo)
      .then((updatedInfo) => {
        setCurrentUser(updatedInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка при отправке данных на сервер: ${err}`);
      });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(`Ошибка при отправке данных на сервер: ${err}`);
      });
  }

  // function handleCardDelete(deletedCard) {
  //   api.deleteCard(deletedCard._id)
  //     .then(() => {
  //       setCards(cards.filter((card) => card._id !== deletedCard._id));
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка при отправке данных на сервер: ${err}`);
  //     });
  // }

  function handleAddPlaceSubmit(newCard) {
    api.postCard(newCard)
      .then((updatedCard) => {
        setCards([updatedCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка добавлении карточки: ${err}`);
      });
  }

  function handleDeleteButtonClick(card) {
    setCardToDelete(card);
    setIsDeleteCardPopupOpen(true);
  }

  function handleDeleteCardSubmit() {
    api.deleteCard(cardToDelete._id)
      .then(() => {
        setCards(cards.filter((card) => card._id !== cardToDelete._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка при удалении карточки: ${err}`);
      });

  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onDeleteButtonClick={handleDeleteButtonClick} />
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit} />
            <DeleteCardPopup isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups} onDeleteCardSubmit={handleDeleteCardSubmit} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
