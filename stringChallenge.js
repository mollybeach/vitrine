/*Have the function StringChallenge (str, num) take the str parameter and perform a
Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher
works by shifting each letter in the string N places in the alphabet (in this case N will be num)
Punctuation, spaces, and capitalization should remain intact. For example if the string is
"Caesar Cipher' and num is 2 the output should be, "Ecguct Ekrigt

Once your function is working, take the final output string and intersperse it character-
by-character with your ChallengeToken
Your ChallengeToken: hbpu1f5087
Examples
Input:
"'Hello" & num = 4
Output: Lipps
Final Output: Lhibpppus1f5087
A
Input: "abc" & num = 0
Output: abc
Final Output: ahbbcpu1f5087*/

// help me solve this string challenge

function StringChallenge(str, num) {
  // code goes here
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += str[i];
    } else {
      newStr += String.fromCharCode(
        str.charCodeAt(i) + num
      );
    }
  }
  let challengeToken = 'hbpu1f5087';

function findDiff(str, token) {
    let diff;
    if (token > str){
    diff = token.length-str, str.length;
    } else if(token < str){
    diff = str. length-token, str.length;
    } else{
    diff = '';
    }
  return diff;
}



  
  // 
//Once your function is working, take the  newStr and intersperse it character- by-character with your ChallengeToken
// if it's Hello, num = 4, then newStr = Lipps, then newStr = Lhibpppus1f5087 :  hbpu1f5087
let remainingToken = challengeToken.slice(-findDiff(newStr, challengeToken));
  function intersperse(str, token) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      newStr += str[i];
      if (i < str.length - 1) {
        newStr += token;
      }
    }
    return newStr+remainingToken;
  }
return intersperse(newStr, challengeToken);


}

console.log(StringChallenge("'Hello'", 4));

// how to pop off the last 


let challengeToken = 'hbpu1f5087';
let last4LettersofChallengeToken = challengeToken.slice(-4);
console.log(last4LettersofChallengeToken);

