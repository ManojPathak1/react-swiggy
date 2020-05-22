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
}