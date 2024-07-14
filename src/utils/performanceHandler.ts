export const debounce = (delay = 500) => {
  let timer;
  return (func) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

const performanceHandler = {
  debounce,
};

export default performanceHandler;
