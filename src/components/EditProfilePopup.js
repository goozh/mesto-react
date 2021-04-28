import React, { useContext, useState } from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [buttonCaption, setButtonCaption] = React.useState('Сохранить');

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  React.useEffect(() => {
    setButtonCaption('Сохранить');
  }, [props.isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик

    setButtonCaption('Сохранение...');
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="edit-profile" type="form" title="Редактировать профиль" buttonCaption={buttonCaption} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_value_name" type="text" id="profile-name" minLength="2" maxLength="40" required placeholder = "Имя" value={name} onChange={handleChangeName} />
      <span className="popup__input-error profile-name-error">Ошибка</span>
      <input className="popup__input popup__input_value_desc" type="text" id="profile-info" minLength="2" maxLength="200" required placeholder = "О себе" value={description} onChange={handleChangeDescription} />
      <span className="popup__input-error profile-info-error">Ошибка</span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
