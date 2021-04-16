import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';

function App() {
  return (
    <div className="App">
      <div className="root">
        <div className="page">
          <Header />
          <Main />
          <Footer />
          <PopupWithForm name="form" title="Редактировать профиль">
            <input className="popup__input popup__input_value_name" type="text" id="profile-name" minLength="2" maxLength="40" required placeholder = "Имя" />
            <span className="popup__input-error profile-name-error">Ошибка</span>
            <input className="popup__input popup__input_value_desc" type="text" id="profile-info" minLength="2" maxLength="200" required placeholder = "О себе" />
            <span className="popup__input-error profile-info-error">Ошибка</span>
            <button className="popup__submit-button" name="popup__submit-button" type="submit">Сохранить</button>
          </PopupWithForm>
          <PopupWithForm name="form" title="Новое место">
            <input className="popup__input popup__input_value_name" type="text" id="card-name" maxLength="30" required placeholder="Название" />
            <span className="popup__input-error card-name-error">Ошибка</span>
            <input className="popup__input popup__input_value_desc" type="url" id="card-link" required placeholder="Ссылка на картинку" />
            <span className="popup__input-error card-link-error">Ошибка</span>
            <button className="popup__submit-button" id="create-card-button" name="create-card-button" type="submit">Создать</button>
          </PopupWithForm>


          {/* <div className="popup" id="popup-add-card">
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
          </div> */}
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
