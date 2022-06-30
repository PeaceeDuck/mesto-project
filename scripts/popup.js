// 1. Попап редактирования профиля
// Переменные попапа профиля
const editPopup = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-button');
const editPopupCloseButton = editPopup.querySelector('.popup__close-button');
const editSubmitButton = editPopup.querySelector('.form__save-button');
const profileForm = document.querySelector('.profile-form')
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
editSubmitButton.addEventListener('click', openOrCloseEditPopup)



