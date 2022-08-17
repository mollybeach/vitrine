/*Binary Tree LCA
Have the function BinaryTreeLCA(strArr) take the array of strings stored in strArr, which will contain 3 elements: the first element will be a binary tree with all unique values in a format similar to how a binary heap is implemented with NULL nodes at any level represented with a #, the second and third elements will be two different values, and your goal is to find the lowest common ancestor of these two values.

For example: if strArr is ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"] then this tree looks like the following:
For the input above, your program should return 5 because that is the value of the node that is the LCA of the two nodes with values 6 and 4. You can assume the two nodes you are searching for in the tree will exist somewhere in the tree.
Examples
Input: ["[5, 2, 6, 1, #, 8, #]", "2", "6"]
Output: 5
Input: ["[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"]
Output: 12
*/


function BinaryTreeLCA(strArr) { 
    // code goes here  
    let recentCommonAncestor = -1;
    let family = JSON.parse(strArr[0].replace(/#/g, "null")); // convert string to array 
    let lineage1 = [family.indexOf(parseInt(strArr[1]))]; // start path of 1
    let lineage2 = [family.indexOf(parseInt(strArr[2]))]; // start path of 2 
    while ((lineage1[0]!==0 ||  lineage2[0]!==0) && recentCommonAncestor === -1){ //while end of family line not reached
      let ancestorOf1 = Math.floor((lineage1[0]-1)/2); //get next ancestor of 1 
      let ancestorOf2 = Math.floor((lineage2[0]-1)/2);  // get next ancestor of 2 
        lineage1.unshift(ancestorOf1); //add ancestor of 1
        lineage2.indexOf(ancestorOf1) != -1 ? recentCommonAncestor = family[lineage1[0]] : ''; // if common ancestor found assign LCA
        lineage2.unshift(ancestorOf2); //add ancestor of 2
        lineage1.indexOf(ancestorOf2) != -1 ? recentCommonAncestor = family[lineage2[0]] : ''; // if a common ancestor found assign LCA
    }
    return recentCommonAncestor
  }
  // keep this function call here 
  console.log(BinaryTreeLCA(readline()));
       