// Объявляем переменные
let editButton = document.querySelector('.profile__edit-button');
let editPopup = document.querySelector('.popup');
let editPopupCloseButton = document.querySelector('.popup__close-button')

// Функция открытия или закрытия формы
function openOrClosePopup () {
  editPopup.classList.toggle('popup_opened')
}

// Открытие формы
editButton.addEventListener('click', openOrClosePopup)

// Закрытие формы
editPopupCloseButton.addEventListener('click', openOrClosePopup)
