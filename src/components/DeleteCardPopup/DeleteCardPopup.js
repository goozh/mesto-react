import React, { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function DeleteCardPopup(props) {

  const [buttonCaption, setButtonCaption] = React.useState('Да');

  useEffect(() => {
    setButtonCaption('Да');
  }, [props.isOpen])

  function handleDeleteCardSubmit(evt) {
    evt.preventDefault();
    setButtonCaption('Удаление...');
    props.onDeleteCardSubmit();
  }

  return (
    <PopupWithForm name="delete-card" type="dialog" title="Вы уверены?" buttonCaption={buttonCaption} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleDeleteCardSubmit} />
  );
}

export default DeleteCardPopup;
