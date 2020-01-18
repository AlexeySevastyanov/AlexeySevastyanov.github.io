window.onload = setTimeout(() => {
  document.querySelector('.loader').classList.add('loader_invisible');
},2000)
window.onload = setTimeout(() => {
  document.querySelector('.root').classList.add('root_visible');
  document.querySelector('.loader').classList.add('loader_loaded');
},3999)

const api = new Api({
  baseUrl: 'http://95.216.175.5/cohort6',
  headers: {
    authorization: '560fe82b-61ef-419a-85da-f4b88a5a01cd',
    'Content-Type': 'application/json'
  }
});

(function(){
api.getProfile()
  .then((result) => {
    userName.textContent = result.name;
    userJob.textContent = result.about;
    userPhoto.style.backgroundImage = `url(${result.avatar})`;
  })

api.getCards()
  .then((result) => {
  let initialCards = result;
    initialCards.forEach((element) => {
    const initialcard = new CardList({
        link: element.link,
        name: element.name,
        _id: element._id,
        ownerId: element.owner._id,
        delIcon: element.owner._id === myId ? 'place-card__delete-icon_my' : '',
        likes: element.likes.length,
        liked: element.likes.filter(function(findMyLike) {
          return findMyLike._id === myId
        }).length === 0 ? 'place-card__like-icon' : 'place-card__like-icon place-card__like-icon_liked'
      })
    initialcard.addCard()
  })
})
})();

const userPopup = new Popup({
  element: popupUser,
})

const placePopup = new Popup({
  element: popup,
})

const imgPopup = new Popup({
  element: popupImg,
})

const avaPopup = new Popup({
  element: popupAva,
})

function createCard() {
  event.preventDefault();
  api.postCard()
  .then((result) => {
      const add = new CardList({
      link: result.link,
      name: result.name,
      _id: result._id,
      ownerId: result.owner._id,
      delIcon: result.owner._id === myId ? 'place-card__delete-icon_my' : '',
      likes: result.likes.length,
      liked: 'place-card__like-icon',
      });
      add.addCard();
  })
  placePopup.close();
  document.forms.new.reset();
  addCard.classList.remove('button_black');
  addCard.setAttribute('disabled', 'disabled')
}

const like = new Card({});
const del = new Card({});

function addAva() {
  avaPopup.open()
  saveAva.classList.add('button_black');
  saveAva.removeAttribute('disabled');
}

function editAva() {
  event.preventDefault();
  api.editAvatar()
    .then((result) => {
      ava.style.backgroundImage = `url(${result.avatar})`;
    })
  avaPopup.close()
  document.forms.ava.reset();
}

function closeAvaBut() {
  avaPopup.close()
  document.forms.ava.reset();
}

function addUserBut() {
  userPopup.open()
  userNameEdit.value = userName.textContent;
  userJobEdit.value = userJob.textContent;
  saveUser.classList.add('button_black');
  saveUser.removeAttribute('disabled');
}

function editUser() {
  event.preventDefault();
  api.editProfile()
    .then((result) => {
      userName.textContent = result.name;
      userJob.textContent = result.about;
    })
  userPopup.close()
}

function addBut() {
  placePopup.open()
}

function closeBut() {
  placePopup.close()
  document.forms.new.reset();
  placeNameErr.textContent = '';
  placeLinkErr.textContent = '';
  addCard.classList.remove('button_black');
  addCard.setAttribute('disabled', 'disabled')
}

function closeUserBut() {
  userPopup.close()
  document.forms.new.reset();
  userNameErr.textContent = '';
  userJobErr.textContent = '';
}

function openImg(event) {
  if (event.target.classList.contains('place-card__delete-icon')) { return }
  else if (event.target.classList.contains('place-card__like-icon')) { return }
  let card = event.target.closest('.place-card__image');
  popupImgBack.setAttribute('src', `${card.style.backgroundImage.substring(5, (card.style.backgroundImage.length - 2))}`);
  imgPopup.open()
  closeImg.setAttribute('src', './images/close.svg');
}

function closeImgBut() {
  popupImgBack.removeAttribute('src');
  closeImg.removeAttribute('src');
  imgPopup.close()
}

close.addEventListener('click', closeBut);
addButton.addEventListener('click', addBut);
likeButton.addEventListener('click', event => {return like.likeCard(event)});
addCard.addEventListener('click', createCard);
delButton.addEventListener('click', event => {return del.deleteCard(event)});
closeUser.addEventListener('click', closeUserBut);
editButton.addEventListener('click', addUserBut);
saveUser.addEventListener('click', editUser);
bigImg.addEventListener('click', openImg);
closeImg.addEventListener('click', closeImgBut);
ava.addEventListener('click', addAva);
saveAva.addEventListener('click', editAva);
closeAva.addEventListener('click', closeAvaBut);
