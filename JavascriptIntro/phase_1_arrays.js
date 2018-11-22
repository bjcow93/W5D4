Array.prototype.uniq = function() {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (newArray.indexOf(this[i]) === -1) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());



Array.prototype.twoSum = function() {
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
    let num1 = this[i];

    for (let j = i + 1; j < this.length; j++) {
      let num2 = this[j];
      if (num1 + num2 === 0) {
        pairs.push([i,j]);
      }
    }
  }
return pairs;
};

console.log([-1, 0, 2, -2, 1].twoSum());



Array.prototype.transpose = function() {
  let columns = [];

  for (let i = 0; i < this[0].length; i++) {
    columns.push([]);
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j][i] = this[i][j];
    }
  }

  return columns;
};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
