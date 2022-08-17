/*
Binary Search Tree LCA
Have the function BinarySearchTreeLCA(strArr) take the array of strings stored in strArr, which will contain 3 elements: the first element will be a binary search tree with all unique values in a preorder traversal array, the second and third elements will be two different values, and your goal is to find the lowest common ancestor of these two values. For example: if strArr is ["[10, 5, 1, 7, 40, 50]", "1", "7"] then this tree looks like the following:



For the input above, your program should return 5 because that is the value of the node that is the LCA of the two nodes with values 1 and 7. You can assume the two nodes you are searching for in the tree will exist somewhere in the tree.
Examples
Input: ["[10, 5, 1, 7, 40, 50]", "5", "10"]
Output: 10
Input: ["[3, 2, 1, 12, 4, 5, 13]", "5", "13"]
Output: 12
*/


function BinarySearchTreeLCA(strArr) { 
  let lca = 0;
  let babyOne = parseInt(strArr[1]);
  let babyTwo = parseInt(strArr[2]);
  let family = ((strArr[0].replace(/[\[\]]*/g, "")).split(",")).map((element => parseInt(element)));
  console.log(family);
  let rootNode = family[0] ;
  if(rootNode === babyOne | rootNode != babyTwo) {
    lca = rootNode
  }; 
  let youngest = Math.min(babyOne, babyTwo);
  console.log('youngest :' , youngest )
  let parentIndex = Math.floor((family.indexOf(youngest))/2);
   console.log('parentIndex:' ,  parentIndex);
  lca = family[parentIndex];

  




  //  let numGen = Math.log2(strArr.length);
  //console.log(numGen)
    // code goes here  
    return lca
  
  }
    // console.log( BinarySearchTreeLCA( ["1", "2", "2", "3", "#", "#", "3"]) )
  // keep this function call here 
console.log( BinarySearchTreeLCA( ["[10, 5, 1, 7, 40, 50]", "1", "7"] ));
//5
console.log( BinarySearchTreeLCA(  ["[10, 5, 1, 7, 40, 50]", "5", "10"]));
// 10
console.log( BinarySearchTreeLCA( ["[3, 2, 1, 12, 4, 5, 13]", "5", "13"]));
//12 
