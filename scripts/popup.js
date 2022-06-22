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

// Находим форму в DOM
const formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = // Воспользуйтесь инструментом .querySelector()
const jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
  function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
  }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
