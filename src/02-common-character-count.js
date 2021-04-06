/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let lilArr;
  let bigArr;
  if (s1.length <= s2.length) {
    lilArr = s1.split('');
    bigArr = s2.split('');
  } else {
    lilArr = s2.split('');
    bigArr = s1.split('');
  } let number = 0;
  while (lilArr.length > 0) {
    if (bigArr.includes(lilArr[lilArr.length - 1])) {
      number += 1;
      bigArr.splice(bigArr.indexOf(lilArr[lilArr.length - 1]), 1);
    }
    lilArr.pop();
  }
  return number;
}

module.exports = getCommonCharacterCount;
