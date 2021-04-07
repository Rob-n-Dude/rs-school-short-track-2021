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
function findIndex(array, value) {
  let start = 0;
  let fin = array.length - 1;
  let pos = -1;
  let found = false;
  let mid;
  while (found === false && start <= fin) {
    mid = Math.floor((start + fin) / 2);
    if (array[mid] === value) {
      pos = mid;
      found = true;
    } else if (array[mid] > value) {
      fin = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return pos;
}

module.exports = findIndex;
