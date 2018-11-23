Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(callback(this[i]));
  }
  return mapped;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].myMap((num) => (num * 2)));

Array.prototype.myReduce = function(callback, initialValue) {
  const arr = this;
  let acc = initialValue;

  if (initialValue === undefined) {
    acc = arr.shift();
  } else {
    acc = initialValue;
  }

  arr.myEach((el) => acc = callback(acc, el));

  return acc;
};

const reducecb = (total, item) => total + item;

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].myReduce(reducecb));
console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].myReduce(reducecb, 10));
