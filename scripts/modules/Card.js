class Card{
    createCards(link, name, _id, ownerId, delIcon, likes, liked) {
      return `<div class="place-card">
                <div class="place-card__image" style="background-image: url(${link})">
                <button class="place-card__delete-icon ${delIcon}"></button>
                </div>
              <div class="place-card__description">
                <h3 class="place-card__name">${name}</h3>
                <div class="place-card__like-container">
                  <button class="${liked}"></button>
                  <div class="place-card__count">${likes}</div>
                </div>
              </div>
              <div class="place-card__id">${_id}</div>
              <div class="place-card__owner-id">${ownerId}</div>
              </div>`
    }
    
    likeCard(event) {
      let card = event.target.closest('.place-card');
      if (event.target.classList.contains('place-card__like-icon') && !(event.target.classList.contains('place-card__like-icon_liked'))) {
      event.target.classList.add('place-card__like-icon_liked');
      api.likeApi(card.querySelector('.place-card__id').textContent);
      card.querySelector('.place-card__count').textContent = Number(card.querySelector('.place-card__count').textContent) + 1;
      } else {
      event.target.classList.remove('place-card__like-icon_liked');
      api.dislikeApi(card.querySelector('.place-card__id').textContent);
      card.querySelector('.place-card__count').textContent = Number(card.querySelector('.place-card__count').textContent) - 1;
      }
    }

    deleteCard(event) {
      if (event.target.className != 'place-card__delete-icon place-card__delete-icon_my') {
        return
      } else if (window.confirm('Вы действительно хотите удалить эту карточку?')) {
      let card = event.target.closest('.place-card');
      api.delCard(card.querySelector('.place-card__id').textContent)
      card.remove();
      }
    }
}