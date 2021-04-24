import React from 'react';
import {api} from '../../utils/Api.js';
import Card from '../Card/Card.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

function Main(props) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);


  React.useEffect(() => {
    api.getInitialData()
    .then((results) => {
      setCards(results[1].reverse());
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar profile__avatar_place_header" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }} >
        </div>
        <div className="profile__info">
          <div className="profile__line-container">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button className="profile__edit-button" name="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" name ="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          { cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} />
          )) }
        </ul>
      </section>
    </main>
  );
}

export default Main;
