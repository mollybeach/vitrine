function LetterChanges(str) { 
    let re = /[a-zA-Z]/g;
    let vowel = /[aeiou]/;
  
   function matchFunction(match, index, string){
    console.log('hi')
     console.log(index);
        console.log(string);
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
   
// keep this function call here 
console.log(LetterChanges('absj2131'));

/*
function LetterCapitalize(str) {
    return str.replace(/bw/g, ch => ch.toUpperCase());
  }
     */