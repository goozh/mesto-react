import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function EditAvatarPopup(props) {

  const inputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  React.useEffect(() => {
    inputRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm name="edit-avatar" type="avatar" title="Обновить аватар" buttonCaption="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input ref={inputRef} className="popup__input popup__input_value_name" type="url" id="avatar-link" required placeholder="Ссылка на картинку" />
      <span className="popup__input-error avatar-link-error">Ошибка</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
