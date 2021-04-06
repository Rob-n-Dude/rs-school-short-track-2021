/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const res = String(n).split('');
  let min = 10;
  for (let i = 0; i < res.length; i++) {
    if (min > res[i]) {
      min = res[i];
    }
  }
  res.splice(res.indexOf(min), 1);
  return +res.join('');
}
module.exports = deleteDigit;
