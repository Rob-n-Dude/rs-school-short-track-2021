/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex (array, value) {
  let begin = array[0];
  let fin = array[array.length - 1];
  let result = 0;
  if (array[Math.floor(array.length / 2) === value]) return Math.floor(array.length / 2);
  for (let i = 0; i < Math.ceil(array.length / 2); i++) {
    begin = array[i];
    fin = array[array.length - 1 - i];
    if (begin === value) {
      result = i;
      break;
    }
    if (fin === value) {
      result = array.length - 1 - i;
      break;
    }
  }
  return result;
}

module.exports = findIndex;
