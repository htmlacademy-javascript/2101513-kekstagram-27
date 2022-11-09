const getRandomInteger = function(min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }

  return result;
};

// Проверка на длину строки
const checkMaxLength = function(currentString, maxLength = 140) {
  if (!(currentString.length <= maxLength)) {
    return false;
  }

  return true;
};

// Создание неповторяющегося случайного числа
const getRandomUniqNumber = function(min, max) {
  const usedNumbers = [];

  return function() {
    let currentValue = getRandomInteger(min, max);
    if (usedNumbers.lenght >= (max - min + 1)) {
      return null;
    }
    while (usedNumbers.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    usedNumbers.push(currentValue);
    return currentValue;
  };
};

// Получение случайного числа из массива
const getRandomArrayElement = function(array) {
  return array[getRandomInteger(0, array.length - 1)];
};

export {getRandomInteger, getRandomUniqNumber, getRandomArrayElement};
