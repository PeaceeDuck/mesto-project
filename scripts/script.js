// Объявляем переменные
const editPopup = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-button');
const editPopupCloseButton = editPopup.querySelector('.popup__close-button');
const editSubmitButton = editPopup.querySelector('.form__save-button');
const profileForm = document.querySelector('.profile-form');
let nameInput = editPopup.querySelector('.name__input');
let statusInput = editPopup.querySelector('.status__input');
let nameProfile = document.querySelector('.profile__name');
let statusProfile = document.querySelector('.profile__status');
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
const itemContainer = document.querySelector('.items');
const itemTemplate = document.querySelector('#item').content;
const addPopup = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-button');
const addPopupCloseButton = addPopup.querySelector('.popup__close-button');
const addSubmitButton = addPopup.querySelector('.form__save-button');
const addForm = document.querySelector('.add-form');
const imagePopup = document.querySelector('.popup-image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

// Функция открытия/закрытия попапа
function openOrClosePopup(popup) {
    popup.classList.toggle('popup_opened');
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
// Открытие попапа нажатием на кнопку редактирования
editButton.addEventListener('click', function () {
    openOrClosePopup(editPopup)
});

// Заполнение информации при нажатие на кнопку редактирования
editButton.addEventListener('click', editInputFill);

// Закрытие попапа редактирования при нажатии на крестик
editPopupCloseButton.addEventListener('click', function () {
    openOrClosePopup(editPopup)
});

// Сохранение введенной информации в попап профиля
profileForm.addEventListener('submit', formSubmitHandler);

//Закрытие попапа редактирования профиля при нажатии кнопки подтверждение
editSubmitButton.addEventListener('click', function () {
    openOrClosePopup(editPopup)
});

// Функция добвления новой карточки
function addNewCard (photoLink, itemName){
    const itemElement = itemTemplate.querySelector('.item').cloneNode(true);
    const itemPhoto = itemElement.querySelector('.item__photo');
    // Лайк карточки
    itemElement.querySelector('.item__like-button').addEventListener('click', function (event) {
        event.target.classList.toggle('item__like-button_active');
    })
    // Удаление карточки
    itemElement.querySelector('.item__trash-button').addEventListener('click', function (event) {
        event.target.parentElement.remove();
    })
    // Попап карточки
    itemPhoto.addEventListener('click', function () {
        const fullsizeFigureImage = imagePopup.querySelector('.fullsize-figure__image');
        fullsizeFigureImage.src = photoLink;
        fullsizeFigureImage.alt = itemName;
        imagePopup.querySelector('.fullsize-figure__caption').textContent = itemName;
        openOrClosePopup(imagePopup)
    })
    itemPhoto.value = photoLink;
    itemPhoto.src = photoLink;
    itemElement.querySelector('.item__title').textContent = itemName;
    itemContainer.prepend(itemElement);
}

// Цикл добавления карточек при загрузке страницы
initialCards.forEach(function (element){
    addNewCard (element.link, element.name)
})

// Открытие попапа добавления карточки
addButton.addEventListener('click', function () {
    openOrClosePopup(addPopup)
});

// Закрытие попапа добавления карточки при нажатии на крестик
addPopupCloseButton.addEventListener('click', function () {
    openOrClosePopup(addPopup)
});

// Доавление новой карточки на страницу из попапа
addForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const link = document.querySelector('.card-link__input');
    const title = document.querySelector('.card-name__input');
    addNewCard(link.value, title.value);
    link.value = '';
    title.value = '';
});

// Закрытие попапа добавления карточки при нажатии на кнопку подтверждения
addSubmitButton.addEventListener('click', function () {
    openOrClosePopup(addPopup)
});


// Закрытие попапа изображения
imagePopupCloseButton.addEventListener('click', function () {
    openOrClosePopup(imagePopup)
});







