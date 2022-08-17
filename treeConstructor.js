function TreeConstructor(strArr) { 
    /*let leftChildIndex  = (i) => 2 * i;
    let rightChildIndex = (i) => 2 * i + 1;
    let parentIndex     = (i) => Math.floor(i / 2);*/
    
    //1. Parents have at Most 2 Childern 
    // childernOfParent =  {parent : [child1, child2]}
    // 2. Child have at Most 1 Parents Child childern = {child : parent}
    // parentOfChild = {child: parent}
    let parentOfChild = {};
    let childernOfParent = {};
    let pairs =strArr.toString().replace(/(["()])/g, "");
    pairs = pairs.split(",")
  // code goes here  
 for(let i=0; i< pairs.length; i++){
   let parent = pairs[i+1];
   let child = pairs[i];
    // child can only have one parent
    if(!parentOfChild[child]){ // parents does not exist 
       parentOfChild[child] = parent; // assign it 
      if(!childernOfParent[parent]){ //if there are no childern of the parent
        childernOfParent[parent] = [child]; // assign the first child
      } else if(!childernOfParent[parent][2]){
        childernOfParent[parent][2] = child;
      } else {
        return false
      }
    } else {
     return false
    }
    i++;
 }
  return true
}
   
// keep this function call here 
console.log(TreeConstructor(readline()));