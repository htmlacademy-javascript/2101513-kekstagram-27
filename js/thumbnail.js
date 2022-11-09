import { createUploadedPhotos } from './data.js';

// Блок фотографий
const picturesList = document.querySelector('.pictures');
// Шаблон изображения
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// Массив загруженных фотографий
const usersPhoto = createUploadedPhotos(25);
// Фрагмент созданных фото
const similarPicturesList = document.createDocumentFragment();

usersPhoto.forEach((photo) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.message.length;
  similarPicturesList.append(picture);
});

picturesList.append(similarPicturesList);

