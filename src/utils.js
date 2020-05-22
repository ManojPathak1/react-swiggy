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