export const flatten = (...a) => {
  const result = [];
  const flat = arr => {
    arr.forEach(el => {
      if (Array.isArray(el)) flat(el);
      else result.push(el);
    });
  }
  flat(a);
  return result;
};

export const clip = (arr, size) => {
  const newArr = [];
  size = Math.min(arr.length, size);
  for (let i = 0; i < size; i++) newArr.push(arr[i]);
  return newArr;
};

export const debounce = (cb, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb.apply(null, args);
    }, delay);
  }
};

export const findLast = (arr, cb) => {
  let searchedElement;
  for (const e of arr) if (cb(e)) searchedElement = e;
  return searchedElement;
};