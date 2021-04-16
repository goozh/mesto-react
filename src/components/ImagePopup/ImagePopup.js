function ImagePopup() {
  return (
    <div className="popup" id="popup-view">
      <div className="popup__container popup__container_type_view">
        <button className="popup__close" name="popup__close" type="button"></button>
        <img src="#" alt="увеличенное изображение" className="popup__image" />
        <h2 className="popup__image-caption">Описание изображения</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
