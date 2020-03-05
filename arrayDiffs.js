//ARRAY DIFFERENCES

const arrDifferences = (arr1, arr2) => {
  return arr1.concat(arr2).filter(function (number) {
    if (!(arr1.includes(number) && arr2.includes(number)))
      return number;
  });
}

console.log(arrDifferences([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]))

module.exports = {
  arrDifferences
}



