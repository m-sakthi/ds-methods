function reverse(str) {
  if (!str) return '';
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

module.exports = reverse;