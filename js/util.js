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

export {getRandomInteger};