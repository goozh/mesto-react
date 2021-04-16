function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar profile__avatar_place_header" onClick={props.onEditAvatar}>
        </div>
        <div className="profile__info">
          <div className="profile__line-container">
              <h1 className="profile__title">Программист</h1>
              <button className="profile__edit-button" name="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
          <p className="profile__subtitle">Исследователь кода</p>
        </div>
        <button className="profile__add-button" name ="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          <template className="element-template" id="element-template">
            <li className="element">
              <img src="#" alt="#" className="element__image" />
              <button className="element__remove" name="element__remove" type="button"></button>
              <div className="element__caption">
                <h2 className="element__title">Наименование изображения</h2>
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
