// Объявляем переменные
const popupEdit = document.querySelector('.popup-edit');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseEditPopup = popupEdit.querySelector('.popup__close-button');
const profileForm = document.querySelector('.profile-form');
const nameInput = popupEdit.querySelector('.name__input');
const statusInput = popupEdit.querySelector('.status__input');
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile__status');
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
const itemLink = document.querySelector('.card-link__input');
const itemTitle = document.querySelector('.card-name__input');
const popupAdd = document.querySelector('.popup-add');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseAddPopup = popupAdd.querySelector('.popup__close-button');
const buttonSubmitAdd = popupAdd.querySelector('.form__save-button');
const formAdd = document.querySelector('.add-form');
const imagePopup = document.querySelector('.popup-image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
const fullsizeFigureImage = imagePopup.querySelector('.fullsize-figure__image');
const fullsizeFigureCaption = imagePopup.querySelector('.fullsize-figure__caption');

// Функция открытия/закрытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// Функция сохранения введенной в попап профиля информации и закрытие попапа
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    statusProfile.textContent = statusInput.value;
    closePopup(popupEdit);
}
// Открытие попапа нажатием на кнопку редактирования с заполнением инпутов
buttonEdit.addEventListener('click', function () {
    openPopup(popupEdit);
    nameInput.value = nameProfile.textContent;
    statusInput.value = statusProfile.textContent;
});

// Закрытие попапа редактирования при нажатии на крестик
buttonCloseEditPopup.addEventListener('click', function () {
    closePopup(popupEdit)
});

// Сохранение введенной информации в попап профиля
profileForm.addEventListener('submit', formSubmitHandler);

// Функция создания новой карточки
function createCard (photoLink, itemName){
    const itemElement = itemTemplate.querySelector('.item').cloneNode(true);
    const itemPhoto = itemElement.querySelector('.item__photo');
    const itemTitle = itemElement.querySelector('.item__title');
    // Лайк карточки
    itemElement.querySelector('.item__like-button').addEventListener('click', function (event) {
        event.target.classList.toggle('item__like-button_active');
    })
    // Удаление карточки
    itemElement.querySelector('.item__trash-button').addEventListener('click', function (event) {
        event.target.closest('.item').remove();
    })
    // Попап карточки
    itemPhoto.addEventListener('click', function () {
        fullsizeFigureImage.src = photoLink;
        fullsizeFigureImage.alt = itemName;
        fullsizeFigureCaption.textContent = itemName;
        openPopup(imagePopup)
    })
    itemPhoto.alt = itemName;
    itemPhoto.src = photoLink;
    itemTitle.textContent = itemName;
    return itemElement;
}

// Функция добавления новой карточки
function renderCard (newItem){
    itemContainer.prepend(newItem);
}

// Цикл добавления карточек при загрузке страницы
initialCards.forEach(function (element){
    renderCard(createCard(element.link, element.name));
})

// Открытие попапа добавления карточки
buttonAdd.addEventListener('click', function () {
    openPopup(popupAdd)
});

// Закрытие попапа добавления карточки при нажатии на крестик
buttonCloseAddPopup.addEventListener('click', function () {
    closePopup(popupAdd)
});

// Доавление новой карточки на страницу из попапа и его закрытие
formAdd.addEventListener('submit', function (evt) {
    evt.preventDefault();
    renderCard(createCard(itemLink.value, itemTitle.value));
    itemLink.value = '';
    itemTitle.value = '';
    closePopup(popupAdd);
});

// Закрытие попапа изображения
imagePopupCloseButton.addEventListener('click', function () {
    closePopup(imagePopup)
});







