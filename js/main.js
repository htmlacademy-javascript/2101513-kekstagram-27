function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.round(Math.random() * (upper - lower + 1) + lower);

  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }

  return result;
}

function checkMaxLength (currentString, maxLength = 140) {
  if (!(currentString.length <= maxLength)){
    return NaN;
  }

  return currentString;
}

