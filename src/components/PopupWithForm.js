function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className={`popup__container popup__container_type_${props.type}`}>
        <button className="popup__close" name="popup__close" type="button" onClick={props.onClose}></button>
        <h2 className={`popup__title popup__title_type_${props.type}`}>{props.title}</h2>
        <form className="popup__form" name={props.name} onSubmit={props.onSubmit} noValidate>
          {props.children}
          <button className="popup__submit-button" name="popup__submit-button" type="submit">{props.buttonCaption}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
