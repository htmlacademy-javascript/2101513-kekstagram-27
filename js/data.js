import { getRandomInteger, getRandomUniqNumber, getRandomArrayElement } from './util.js';

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

// Создание одного объекта - комментария фотографии
const MAX_COMMENTS = 100;
const generatePhotoCommentId = getRandomUniqNumber(1, MAX_COMMENTS);
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
for (let i = 1; i <= MAX_COMMENTS; i++) {
  comments.push(createPhotoComment());
}

// Создание одного объекта - опубликованной фотографии
const MAX_PHOTOS = 25;
const LIKES = {
  MIN_LIKES: 15,
  MAX_LIKES: 200,
};
const generatePhotoId = getRandomUniqNumber(1, MAX_PHOTOS);
const generatePhotoUrl = getRandomUniqNumber(1, MAX_PHOTOS);
const createPhotoDescription = function () {
  return {
    id: generatePhotoId(),
    url: `photos/${generatePhotoUrl()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(LIKES.MIN_LIKES, LIKES.MAX_LIKES),
    comments: getRandomArrayElement(comments),
  };
};

// Массив опубликованных фотографий
// Генерация массива опубликованных фотографий
const createUploadedPhotos = (amount) => {
  const uploadedPhotos = [];
  for (let i = 1; i <= amount; i++) {
    uploadedPhotos.push(createPhotoDescription());
  }

  return uploadedPhotos;
};

export {createUploadedPhotos};
