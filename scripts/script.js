// 1. Попап редактирования профиля
// Переменные попапа профиля
const editPopup = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-button');
const editPopupCloseButton = editPopup.querySelector('.popup__close-button');
const editSubmitButton = editPopup.querySelector('.form__save-button');
const profileForm = document.querySelector('.profile-form');
let nameInput = editPopup.querySelector('.name__input');
let statusInput = editPopup.querySelector('.status__input');
let nameProfile = document.querySelector('.profile__name');
let statusProfile = document.querySelector('.profile__status');
// Функция открытия/закрытия попапа профиля
function openOrCloseEditPopup() {
    editPopup.classList.toggle('popup_opened');
}
// Функция заполнения инпутов информацией из карточки
function editInputFill() {
    nameInput.value = nameProfile.textContent;
    statusInput.value = statusProfile.textContent;
}
// Функция сохранения введенной в попап профиля информации
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    statusProfile.textContent = statusInput.value;
}
// Слушатели событий
editButton.addEventListener('click', openOrCloseEditPopup);
editButton.addEventListener('click', editInputFill);
editPopupCloseButton.addEventListener('click', openOrCloseEditPopup);
profileForm.addEventListener('submit', formSubmitHandler);
editSubmitButton.addEventListener('click', openOrCloseEditPopup);

// 2. Добавление карточек скриптом
// Объявляем переменную с карточками
const initialCards = [
    {
        name: 'Chevrolet Impala',
        link: './images/photos/impala.jpg'
    },
    {
        name: 'Oldsmobile 442',
        link: './images/photos/oldsmobile.jpg'
    },
    {
        name: 'Ford Mustang',
        link: './images/photos/mustang.jpg'
    },
    {
        name: 'Dodge Challenger',
        link: './images/photos/challenger.jpg'
    },
    {
        name: 'Chevrolet Camaro SS',
        link: './images/photos/camaro.jpg'
    },
    {
        name: 'Pontiac Firebird',
        link: './images/photos/pontiac.jpg'
    }
];
const initialCardsLength = initialCards.length;
const itemSection = document.querySelector('.items');
 for (let i = 0; i < initialCardsLength; i++) {
    itemSection.insertAdjacentHTML('afterbegin', `<article class="item">
      <button aria-label="Удалить" class="item__trash-button" type="button"></button>
      <img alt="${initialCards[i].name}" class="item__photo" src="${initialCards[i].link}"/>
      <div class="item__info">
        <h2 class="item__title">${initialCards[i].name}</h2>
        <button aria-label="Нравится" class="item__like-button" type="button"></button>
      </div>
    </article>`)
 };

