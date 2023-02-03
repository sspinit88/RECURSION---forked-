// Реализовать рекурсивынй подсчет элементов в списке

const count = (list) => {
  if (!list.length) {
    return 0;
  }

  list.shift();

  return 1 + count(list);
};

console.log(count([7, 6, 10, 1, 8]));
