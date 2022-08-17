    /*let leftChildIndex  = (i) => 2*i+1;
    let rightChildIndex = (i) => 2 * i + 2;

function TreeConstructor(strArr) { 
    /*let leftChildIndex  = (i) => 2 * i;
    let rightChildIndex = (i) => 2 * i + 1;
    let parentIndex     = (i) => Math.floor(i / 2);*/
    //1. Parents have at Most 2 Childern Parent {parent : [child1, child2]}
    // 2. Child have at Most 1 Parents Child childern = {child : parent}
    // replace bracket
    let parentOfChild = {};
    let childernOfParent = {};
    console.log(strArr);
    let replacer = (match, p1, p2) =>{
     return p1 ? "[" : "]"
    }
    let pairs =strArr.replace(/([(])|([)])/g, replacer);
    pairs = pairs.split(",")
  // code goes here  
  console.log(pairs);
 let isTree = true;
 for(let i=0; i< pairs.length; i++){
   let parent = pairs[i][1];
   let child = pairs[i][0];

    // if parent of child already exits return false
    if(!parentOfChild[child]){ // parents does not exist 
       parentOfChild[child] = parent; // assign it 
      if(!childernOfParent[parent]){ //if there are no childern of the parent
        childernOfParent[parent] = [child]; // assign the first child
      } else if(!childernOfParent[parent]){
        childernOfParent[parent] = child;
      } else {
        console.log("Too Many Childern");
        isTrue = false;
      }
    } else {
      console.log("Too many parents")
      isTrue = false;
    }
 }
    console.log('parentOfChild : ');
    console.log(parentOfChild);
    console.log('childernOfParent : ');
    console.log(childernOfParent);
  return isTree
}
   
// keep this function call here 
console.log(TreeConstructor(readline()));