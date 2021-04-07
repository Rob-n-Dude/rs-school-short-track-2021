/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function sum(n) {
  let summ = 0;
  const workWith = String(n).split('');
  for (let i = 0; i < workWith.length; i++) {
    summ += +workWith[i];
  }
  return summ;
}
function getSumOfDigits(n) {
  let res = sum(n);
  while (res > 9) {
    res = sum(res);
  }
  return res;
}

module.exports = getSumOfDigits;
