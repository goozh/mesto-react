import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

export default function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__remove ${isOwn ? 'element__remove_visible' : ''}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like ${isLiked ? 'element__like_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  return (
    <li className="element">
      <img src={props.card.link} alt={props.card.name} onClick={handleClick} className="element__image" />
      <button className={cardDeleteButtonClassName} name="element__remove" type="button"></button>
      <div className="element__caption">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} name="element__like" type="button"></button>
          <p className="element__like-count" >{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
