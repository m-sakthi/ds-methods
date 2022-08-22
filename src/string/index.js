// String class method implemntation

// split is used to split a string 
const split = function(separator) {
  var result = [];
  var word = '';
  var counter = 0;
  var str = this;

  for(var i = 0; i < str.length; i++) {
    if (separator === '') {
      result.push(str[i]);
    } else if (str[i] === separator) {
      counter++;
      word = '';
    } else {
      word += str[i];
      result[counter] = word;
    }
  }

  return result;
};

// replace a single/multiple character(s) of a string
const replace = function(condition, replacement) {
  var str = this;
  var word = '';

  if (!condition || !replacement) return this;

  // Looping through each charater for the given string
  for(var i = 0; i < str.length; i++) {
    // if a character matches the given replacement
    if(str[i] === condition || str[i].match(condition)) word += replacement;
    else word += str[i];
  }

  return word;
};

exports.default = function() {
  // All methods should be using '_' (underscore) as first character so as not to collide with original methods
  String.prototype._split = split;
  String.prototype._replace = replace;
}