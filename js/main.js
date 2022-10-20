// Получение случайного целого числа
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }

  return result;
}

// Проверка на длину строки
function checkMaxLength (currentString, maxLength = 140) {
  if (!(currentString.length <= maxLength)) {
    return false;
  }

  return true;
}
checkMaxLength();

// ========== Модуль 4 ==========
// Комментарии
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент ? !',
];

// Описание фотографий
const DESCRIPTION = [
  'Здесь я чувствую себя хорошо',
  'Всё круто. Очень круто',
  'Мне всё не нравится',
  'Этот комментарий оставил я...',
  'Всё сказанное здесь это правда',
  'Привет, мир!',
  'Крутая фотка!',
  'Хотел бы так же, но не могу',
  'Ставлю лайк!',
  'Вот это крутое фото...',
];

// Имена
const NAMES = [
  'Максим',
  'Сергей',
  'Константин',
  'Денис',
  'Анастасия',
  'Лада',
  'Валерия',
  'Александра',
  'Николай',
  'Никита',
];

// Создание неповторяющегося случайного числа
const getRandomUniqNumber = function(min, max) {
  const usedNumbers = [];

  return function() {
    let currentValue = getRandomInteger(min, max);
    if (usedNumbers.lenght >= (max - min + 1)) {
      return null;
    };
    while (usedNumbers.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    };
    usedNumbers.push(currentValue);
    return currentValue;
  };
};

// Получение случайного числа из массива
const getRandomArrayElement = function(array) {
  return array[getRandomInteger(0, array.length - 1)];
};

// Создание одного объекта - комментария фотографии
const generatePhotoCommentId = getRandomUniqNumber(1, 100);
const createPhotoComment = function () {
  return {
    id: generatePhotoCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
  };
};

// Массив комментариев
// Генерация массива комментариев
const comments = [];
for (let i = 1; i <= 100; i++) {
  comments.push(createPhotoComment());
};

// Создание одного объекта - опубликованной фотографии
const generatePhotoId = getRandomUniqNumber(1, 25);
const generatePhotoUrl = getRandomUniqNumber(1, 25);
const createPhotoDescription = function () {
  return {
    id: generatePhotoId(),
    url: `photos/${generatePhotoUrl()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: getRandomArrayElement(comments),
  };
};

// Массив опубликованных фотографий
// Генерация массива опубликованных фотографий
const uploadedPhotos = [];
for (let i = 1; i <= 25; i++) {
  uploadedPhotos.push(createPhotoDescription());
};
