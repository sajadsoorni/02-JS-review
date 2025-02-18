const arr = [2, 3, 0];

const basket = arr?.[1] ?? 'Out of list';
basket;

//------------------------------------------------

const data = { Sara: 1, Amir: 4, Eli: 2, a: 21, wiki: 3 };

const sortWordCount = Object.entries(data)
  .sort(([, valueA], [, valueB]) => valueB - valueA)
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
console.log(sortWordCount);
