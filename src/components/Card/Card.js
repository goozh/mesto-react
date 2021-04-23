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
    `element__like ${isOwn ? 'element__like_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element" onClick={handleClick}>
      <img src={props.card.link} alt={props.card.name} className="element__image" />
      <button className="element__remove" name="element__remove" type="button"></button>
      <div className="element__caption">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" name="element__like" type="button"></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
