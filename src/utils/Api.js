class Api {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', this._options)
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', this._options)
      .then(this._checkResponse);
  }

  patchUserInfo({name, about}) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({ name, about })
    })
      .then(this._checkResponse);
  }

  postCard({name, link}) {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({ name, link })
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(this._baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._options.headers
    })
      .then(this._checkResponse);
  }

  putLike(cardId) {
    return fetch(this._baseUrl + '/cards/likes/' + cardId, {
      method: 'PUT',
      headers: this._options.headers
    })
      .then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(this._baseUrl + '/cards/likes/' + cardId, {
      method: 'DELETE',
      headers: this._options.headers
    })
      .then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (!isLiked) {
      return this.deleteLike(cardId);
    } else {
      return this.putLike(cardId);
    }
  }

  patchAvatar(url) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({ avatar: url })
    })
      .then(this._checkResponse);
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

}

export const api = new Api('https://mesto.nomoreparties.co/v1/cohort-21', {
  headers: {
    authorization: '18efd0cc-5a90-47e0-a265-11c194742f4a',
    'Content-Type': 'application/json',
  },
});
