//Copilot please help me with this code. I am not sure how to solve these problems
// in this format:
/* 
QUESTION:   
ANSWER:
EXPLAINATION:
EDGE CASES:
TIME COMPLEXITY:
SPACE COMPLEXITY:
*/

//QUESTION Q1:
/*
Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
//ANSWER Q1:
function twoSum(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hash[complement] !== undefined) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
}
console.log(twoSum([2, 7, 11, 15], 9));

//EXPLAINATION Q1: 
/*
The twoSum function takes in an array of integers and an integer target.
It returns an array of two integers that add up to the target.

The hash object is used to store the values of the array.
The for loop iterates through the array and checks if the complement of the current value is in the hash object.
If it is, it returns the indices of the two values.

The hash object is used to store the values of the array.
The for loop iterates through the array and checks if the current value is in the hash object.
If it is, it returns the indices of the two values.

*/
//EDGE CASES Q1:
/*
If the array is empty or null, or if the array contains only one value.
*/
//TIME COMPLEXITY Q1:
/*
O(n)
*/
//SPACE COMPLEXITY Q1:
/*
O(n)
*/
/*
QUESTION Q2:
Binary Tree Inorder Traversal
Easy
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1] */
//ANSWER Q2:
function inorderTraversal(root) {
    let result = [];
    let stack = [];
    let current = root;
    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}
//EXPLAINATION Q2:
/*
The inorderTraversal function takes in a root node.
It returns an array of the values of the nodes in the tree inorder.

The stack is used to store the nodes of the tree.
The current node is set to the root node.
The while loop runs while the current node is not null or the stack is not empty.
The while loop pushes the current node to the stack and sets the current node to the left child of the current node.
The while loop continues until the current node is null.
The while loop pops the current node from the stack and pushes the value of the current node to the result array.
The current node is set to the right child of the current node.
The while loop continues until the current node is null and the stack is empty.

*/
//EDGE CASES Q2:
/*
If the root node is null.
*/
//TIME COMPLEXITY Q2:
/*
O(n)
*/
//SPACE COMPLEXITY Q2:
/*
O(n) //constant space
*/
/*
QUESTION Q3:
Binary Tree Level Order Traversal
Medium
Given the root of a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/
//ANSWER Q3:
function levelOrder(root) {
    let result = [];
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let level = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(level);
    }
    return result;
}
//EXPLAINATION Q3:
/*
The levelOrder function takes in a root node.
It returns an array of arrays of the values of the nodes in the tree level by level.

The queue is used to store the nodes of the tree.
The queue is initialized with the root node.
The while loop runs while the queue is not empty.
The level array is initialized.
The len variable is initialized and set to the length of the queue.
The for loop iterates through the queue and pushes the value of the current node to the level array.
The for loop pops the current node from the queue.
The if statement checks if the left child of the current node is not null.
The if statement pushes the left child of the current node to the queue.
The if statement checks if the right child of the current node is not null.
The if statement pushes the right child of the current node to the queue.
The level array is pushed to the result array.
The while loop continues until the queue is empty.

*/
//EDGE CASES Q3:
/*
If the root node is null.
*/
//TIME COMPLEXITY Q3:
/*
O(n) - linear time
*/
//SPACE COMPLEXITY Q3:
/*
O(n) - linear space
*/
/*
QUESTION Q4:
Binary Tree Zigzag Level Order Traversal
Medium
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/
//ANSWER Q4:
function zigzagLevelOrder(root) {
    let result = [];
    let queue = [];
    queue.push(root);
    let leftToRight = true;
    while (queue.length > 0) {
        let level = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (leftToRight) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(level);
        leftToRight = !leftToRight;
    }
    return result;
}
//EXPLAINATION Q4:
/*
The zigzagLevelOrder function takes in a root node.
It returns an array of arrays of the values of the nodes in the tree zigzag level by level.

The queue is used to store the nodes of the tree.
The queue is initialized with the root node.
The leftToRight variable is initialized and set to true.
The while loop runs while the queue is not empty.
The level array is initialized.
The len variable is initialized and set to the length of the queue.
The for loop iterates through the queue and pushes the value of the current node to the level array.
The for loop pops the current node from the queue.
The if statement checks if the left child of the current node is not null.
The if statement pushes the left child of the current node to the queue.
The if statement checks if the right child of the current node is not null.
The if statement pushes the right child of the current node to the queue.
The if statement checks if the leftToRight variable is true.
The if statement pushes the value of the current node to the level array.
The if statement checks if the leftToRight variable is false.
The if statement pushes the value of the current node to the level array.
The level array is pushed to the result array.
The while loop continues until the queue is empty.

*/
//EDGE CASES Q4:
/*
If the root node is null.
*/
//TIME COMPLEXITY Q4:
/*
O(n) - linear time
*/
//SPACE COMPLEXITY Q4:
/*
O(n) - linear space
*/
//QUESTION Q5:
/*
Given the root of imagine 










