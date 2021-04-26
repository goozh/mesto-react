import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlaceSubmit({ name, link })
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm name="add-card" type="form" title="Новое место" buttonCaption="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_value_name" type="text" id="card-name" maxLength="30" required placeholder="Название" value={name} onChange={handleChangeName} />
      <span className="popup__input-error card-name-error">Ошибка</span>
      <input className="popup__input popup__input_value_desc" type="url" id="card-link" required placeholder="Ссылка на картинку" value={link} onChange={handleChangeLink} />
      <span className="popup__input-error card-link-error">Ошибка</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
