import React from 'react';
import {api} from '../../utils/Api.js';
import Card from '../Card/Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialData()
    .then((results) => {
      setUserName(results[0].name);
      setUserDescription(results[0].about);
      setUserAvatar(results[0].avatar);
      setCards(results[1].reverse());
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  });


  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar profile__avatar_place_header" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} >
        </div>
        <div className="profile__info">
          <div className="profile__line-container">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" name="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button" name ="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          { cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          )) }
        </ul>
      </section>
    </main>
  );
}

export default Main;
