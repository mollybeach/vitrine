// first answer
function LongestWord(sen) { 
    // 
    let rEx = /\w+/g;
    let findWords = sen.match(rEx);
    // code goes here  
    let longestWord = '';
    for(let i=0; i< findWords.length; i++){
     if(findWords[i].length > longestWord.length){
       longestWord = findWords[i];
     }
    }
    return longestWord
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));


  // second answer

  function LongestWord(sen) { 
    let rEx = /\w+/g;
    let findWords = sen.match(rEx);
    // code goes here  

    let longestWord =  findWords.sort(function(firstElement, secondElement) {
      return secondElement.length-firstElement.length; 
    })
    
    return longestWord[0]
  
  }
     // third way using reduce
  // keep this function call here 
  console.log(LongestWord(readline()));


  function LongestWord(sen) { 
    let rEx = /\w+/g;
    let findWords = sen.match(rEx);
    let longestWord = findWords.reduce(function(longest, currentWord) {
    if(currentWord.length > longest.length)
       return currentWord;
    else
       return longest;
  }, "");
 
  return longestWord[0]
  
}

  // keep this function call here 
  console.log(LongestWord(readline()));
 
