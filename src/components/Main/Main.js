function Main() {

  function handleEditAvatarClick() {
    document.querySelector('#popup-avatar-edit').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('#popup-profile-edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('#popup-add-card').classList.add('popup_opened');
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar profile__avatar_place_header" onClick={handleEditAvatarClick}>
        </div>
        <div className="profile__info">
          <div className="profile__line-container">
              <h1 className="profile__title">Программист</h1>
              <button className="profile__edit-button" name="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
            </div>
          <p className="profile__subtitle">Исследователь кода</p>
        </div>
        <button className="profile__add-button" name ="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          <template className="element-template" id="element-template">
            <li className="element">
              <img src="#" alt="#" className="element__image" />
              <button className="element__remove" name="element__remove" type="button"></button>
              <div className="element__caption">
                <h2 className="element__title"></h2>
                <div className="element__like-container">
                  <button className="element__like" name="element__like" type="button"></button>
                  <p className="element__like-count"></p>
                </div>

              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}

export default Main;
