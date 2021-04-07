/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function DNSHandler (dns) {
  const dnsArr = dns.split('.');
  let result = [];
  if (dnsArr.length === 2) {
    result = [`.${dnsArr[dnsArr.length - 1]}`, `.${dnsArr[dnsArr.length - 1]}.${dnsArr[dnsArr.length - 2]}`];
  } else {
    result = [`.${dnsArr[dnsArr.length - 1]}`, `.${dnsArr[dnsArr.length - 1]}.${dnsArr[dnsArr.length - 2]}`, `.${dnsArr.reverse().join('.')}`];
  }
  return result;
}

function getDNSStats(domains) {
  const allDns = [];
  for (let i = 0; i < domains.length; i++) {
    allDns.push(DNSHandler(domains[i]));
  }
  const result = {};
  for (let i = 0; i < allDns.length; i++) {
    for (let j = 0; j < allDns[i].length; j++) {
      if (Object.prototype.hasOwnProperty.call(result, allDns[i][j])) {
        result[allDns[i][j]] += 1;
      } else {
        result[allDns[i][j]] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
