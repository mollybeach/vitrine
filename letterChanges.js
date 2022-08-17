/*Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Examples
Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft!
Tags*/

function letterChanges(str) { 
    let re = /[a-zA-Z]/g;
    let vowel = /[aeiou]/;
  
   function matchFunction(match){
     match.toLowerCase();
     match = String.fromCharCode(match.charCodeAt(match)+1);
     if(vowel.test(match)){
       match = match.toUpperCase();
     }
    return match 
   }
  let newStr= str.replace(re, matchFunction);
    return newStr
  }
  letterChanges("hello*3");
     
  
  
  
  