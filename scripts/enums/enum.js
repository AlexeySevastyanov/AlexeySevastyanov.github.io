const addButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-edit__button');
const popup = document.querySelector('.popup')
const nameAdd = document.forms.new.elements.name;
const linkAdd = document.forms.new.elements.link;
const addCard = document.querySelector('.popup__button');
const popupUser = document.querySelector('.popup-user');
const close = document.querySelector('.popup__close');
const closeUser = document.querySelector('.popup-user__close');
const likeButton = document.querySelector('.places-list');
const delButton = document.querySelector('.places-list');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');
const userPhoto = document.querySelector('.user-info__photo');
const saveUser = document.querySelector('.popup-user__button');
const bigImg = document.querySelector('.places-list');
const popupImg = document.querySelector('.popup-img');
const popupImgBack = document.querySelector('.popup-img__img');
const closeImg = document.querySelector('.popup-img__close');
const userNameEdit = document.forms.user.elements.name;
const userJobEdit = document.forms.user.elements.job;
const userNameErr = document.querySelector('.popup-user__name-err');
const userJobErr = document.querySelector('.popup-user__job-err');
let placeNameErr = document.querySelector('.popup__place-err');
let placeLinkErr = document.querySelector('.popup__link-err');
const likeBut = document.querySelector('.place-card__like-container');
const avaEdit = document.forms.ava.elements.link;
const popupAva = document.querySelector('.popup-ava');
const saveAva = document.querySelector('.popup-ava__button');
const closeAva = document.querySelector('.popup-ava__close');
let avaLinkErr = document.querySelector('.popup-ava__link-err');
const ava = document.querySelector('.user-info__photo');
const validMessage = {
  empty: 'Это обязательное поле',
  range: 'Должно быть от 2 до 30 символов',
  invalidLink: 'Здесь должна быть ссылка',
  correct: '',
};
const container = document.querySelector('.places-list');
const obj = new Card();
const myId = '820003df2dd4f984cb4c1364'