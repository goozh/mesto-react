import React from 'react';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

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
          { props.cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onDeleteButtonClick={props.onDeleteButtonClick} />
          )) }
        </ul>
      </section>
    </main>
  );
}

export default Main;
