// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
/////////////////////////////////////////////////////////

import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  btn: document.querySelector('button'),
};
//////  Инпуты
refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onEmailValue);
refs.message.addEventListener('input', throttle(onMessageValue, 500));
refs.btn.addEventListener('click', onBtnClick);

//////
//////            post@gmail.com
/////////// IMPLEMENTATION

const STORAGE_KAY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('input', saveSubmitForm); /// вывести в функцию !!!!!

onSaveTextfreal(); /// вызов функции  фиксирования в localStorage

/* function saveSubmitForm(evt) {
  formData[evt.target.name] = evt.target.value;
  //   console.log('formData', formData);
}
function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset(); // очищает форму
  localStorage.removeItem(STORAGE_KAY);
}

function onEmailValue(evt) {}

function onMessageValue(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KAY, message);
}

function onBtnClick(evt) {
  console.log('SubmitForm:', formData);
  console.log('Отправляем форму ');
}

function onSaveTextfreal() {
  const saveData = localStorage.getItem(STORAGE_KAY);
  console.log('saveData', saveData);

  if (saveData) {
    console.log('saveData:', saveData);
    refs.message.value = saveData;
  }
} */
///////////////TEST FORM SAVE ALL

function saveSubmitForm(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log('formData', formData);
  const foo = JSON.stringify(formData);
  console.log('stringify:', foo);
  localStorage.setItem(STORAGE_KAY, foo);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset(); // очищает форму
  localStorage.removeItem(STORAGE_KAY);
}

function onEmailValue(evt) {
  const email = evt.target.value;
  console.log('email', email);
  //   localStorage.setItem(STORAGE_KAY, email);
}

function onMessageValue(evt) {
  const message = evt.value;
  console.log('message', message);
  //   localStorage.setItem(STORAGE_KAY, message);
}

function onSaveTextfreal() {
  const saveData = localStorage.getItem(STORAGE_KAY);

  const getSaveData = JSON.parse(saveData);

  if (saveData) {
    console.log('saveData:', saveData);
    refs.email.value = getSaveData.email;

    refs.message.value = getSaveData.message;
  }
}

function onBtnClick(evt) {
  console.log('SaveSubmitForm:', formData);
  console.log('Отправляем форму ');
}

// !!!!! НУЖНО УБРАТЬ АНДЕФАЙНД КОГДА ОДНО ПОЛЕ ПУСТОЕ
