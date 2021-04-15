import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <div className="root">
        <div className="page">
          <header className="header">
            <a href="#" target="_self" className="header__logo"></a>
          </header>
          <main className="main">
            <section className="profile">
              <div className="profile__avatar profile__avatar_place_header">
              </div>
              <div className="profile__info">
                <div className="profile__line-container">
                    <h1 className="profile__title">Программист</h1>
                    <button className="profile__edit-button" name="profile__edit-button" type="button"></button>
                  </div>
                <p className="profile__subtitle">Исследователь кода</p>
              </div>
              <button className="profile__add-button" name ="profile__add-button" type="button"></button>
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
          <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
          </footer>
          <div className="popup" id="popup-profile-edit">
            <div className="popup__container popup__container_type_form">
              <button className="popup__close" name="popup__close" type="button"></button>
              <h2 className="popup__title">Редактировать профиль</h2>
              <form className="popup__form" noValidate>
                <input className="popup__input popup__input_value_name" type="text" id="profile-name" minLength="2" maxLength="40" required placeholder = "Имя" />
                <span className="popup__input-error profile-name-error">Ошибка</span>
                <input className="popup__input popup__input_value_desc" type="text" id="profile-info" minLength="2" maxLength="200" required placeholder = "О себе" />
                <span className="popup__input-error profile-info-error">Ошибка</span>
                <button className="popup__submit-button" name="popup__submit-button" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup" id="popup-add-card">
            <div className="popup__container popup__container_type_form">
              <button className="popup__close" name="popup__close" type="button"></button>
              <h2 className="popup__title">Новое место</h2>
              <form className="popup__form" noValidate>
                <input className="popup__input popup__input_value_name" type="text" id="card-name" maxLength="30" required placeholder="Название" />
                <span className="popup__input-error card-name-error">Ошибка</span>
                <input className="popup__input popup__input_value_desc" type="url" id="card-link" required placeholder="Ссылка на картинку" />
                <span className="popup__input-error card-link-error">Ошибка</span>
                <button className="popup__submit-button" id="create-card-button" name="create-card-button" type="submit">Создать</button>
              </form>
            </div>
          </div>
          <div className="popup" id="popup-view">
            <div className="popup__container popup__container_type_view">
              <button className="popup__close" name="popup__close" type="button"></button>
              <img src="#" alt="увеличенное изображение" className="popup__image" />
              <h2 className="popup__image-caption"></h2>
            </div>
          </div>
          <div className="popup" id="popup-delete-card">
            <div className="popup__container popup__container_type_dialog">
              <button className="popup__close" name="popup__close" type="button"></button>
              <h2 className="popup__title popup__title_type_dialog">Вы уверены?</h2>
              <form className="popup__form" noValidate>
                <button className="popup__submit-button" id="delete-card-button" name="delete-card-button" type="submit">Да</button>
              </form>
            </div>
          </div>
          <div className="popup" id="popup-avatar-edit">
            <div className="popup__container popup__container_type_avatar">
              <button className="popup__close" name="popup__close" type="button"></button>
              <h2 className="popup__title">Обновить аватар</h2>
              <form className="popup__form" noValidate>
                <input className="popup__input popup__input_value_name" type="url" id="avatar-link" required placeholder="Ссылка на картинку" />
                <span className="popup__input-error avatar-link-error">Ошибка</span>
                <button className="popup__submit-button" id="submit-avatar-button" name="submit-avatar-button" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
