function ImagePopup(props) {
  return (
    <div className={`popup ${props.card && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_view">
        <button className="popup__close" name="popup__close" type="button" onClick={props.onClose}></button>
        <img src={props.card ? props.card.link : '#'} alt={props.card ? props.card.name : 'увеличенное изображение'} className="popup__image" />
        <h2 className="popup__image-caption">{props.card ? props.card.name : 'наименование изображения'}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
