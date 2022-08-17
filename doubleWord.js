// This is is some text text with double double words

// find the place where there are two of the same words next to each other


// (\w+)\s+\1 <- this assigns the word to one so it refers to the same word
// however it's doing some werid stuff by selecting the is in this to match the word is in this
// so we need to add a boundary so it only matches the word is in this

// let rX = /\b(\w+)\s+\1\b/;




//It's not a "variable" - it's a placeholder that is used in the .replace() call. $n represents the nth capture group of the regular expression.

var num = "11222333";

// This regex captures the last 3 digits as capture group #2
// and all preceding digits as capture group #1
var re = /(\d+)(\d{3})/;

console.log(re.test(num));

// This replace call replaces the match of the regex (which happens
// to match everything) with the first capture group ($1) followed by
// a comma, followed by the second capture group ($2)
console.log(num.replace(re, "$1,$2"))