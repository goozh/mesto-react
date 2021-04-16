function PopupWithForm(props) {
  return (
    <div className="popup" id="popup-profile-edit">
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button className="popup__close" name="popup__close" type="button"></button>
        <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
        </form>
      </div>
  </div>
  );
}

export default PopupWithForm;


