

function symmetricTree(strArr) { 
  let numGen = Math.log2(strArr.length+1); //find  number of generations 
  if(numGen-Math.floor(numGen) !=0){ // if generations is not a power of 2 
    console.log(false)
    console.log( "generations is not a power of 2 ");
    return false                      // it's not a tree 
  }
  while(numGen > 1){ // while reaching parent node 
    console.log(Math.pow(2, numGen))
    let lastGen = strArr.slice(Math.pow(2, numGen-1)-1, Math.pow(2, numGen)-1);
   console.log(lastGen)
    let half = lastGen.length/2; 
    let dadSide = (lastGen.slice(0, half)).toString();
    let momSide = ((lastGen.slice(half)).reverse()).toString();
    console.log(dadSide);
    console.log(momSide);
 //   console.log(dadSide===momSide)
 //   console.log(momSide.reverse())
   /* if(dadSide!=momSide){
      console.log(false);
            console.log( "dads side does not equal mom side ");
      return false 
    }*/
    console.log(dadSide===momSide)
    numGen--;
 }

  
  // if totalChildern is odd return false
  console.log(true);
  return true
}



symmetricTree(["1", "2", "2", "3", "#", "#", "3"]);
