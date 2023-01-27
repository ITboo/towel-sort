module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  let sorted = matrix;
  let result = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i % 2 !== 0) sorted[i].reverse();
  }

  sorted.forEach(arr => result = result.concat(arr));

  return result;
}
