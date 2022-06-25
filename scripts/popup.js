// Объявляем переменные
let editPopup = document.querySelector('.popup-edit');
let editButton = document.querySelector('.profile__edit-button');
let editPopupCloseButton = editPopup.querySelector('.popup__close-button');
let editSubmitButton = editPopup.querySelector('.form__save-button');

let addPopup = document.querySelector('.popup-add');
let addButton = document.querySelector('.profile__add-button');
let addPopupCloseButton = addPopup.querySelector('.popup__close-button');
let addSubmitButton = addPopup.querySelector('.form__save-button')

// Функция открытия или закрытия формы
function openOrCloseEditPopup() {
    editPopup.classList.toggle('popup_opened')
}

// Открытие формы редактирования профиля
editButton.addEventListener('click', openOrCloseEditPopup)

// Закрытие формы редактирования профиля
editPopupCloseButton.addEventListener('click', openOrCloseEditPopup)

// Функция открытия или закрытия формы
function openOrCloseAddPopup() {
    addPopup.classList.toggle('popup_opened')
}

//Открытие формы добавления фотографии
addButton.addEventListener('click', openOrCloseAddPopup)

// Закрытие формы добавления фотографии
addPopupCloseButton.addEventListener('click', openOrCloseAddPopup)