function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }

  return result;
}

function checkMaxLength (currentString, maxLength = 140) {
  return currentString.length <= maxLength;
}
