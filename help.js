

{/* 


copilot explain all of the tree algorithms and how to use them: 
1. Inorder traversal: Left, Root, Right:
Example:
    4
    / \
    2   5
    / \
    1   3
Inorder traversal: 1, 2, 3, 4, 5

Example of an Inorder Problem:

    4
    / \
    2   5
    / \
    1   3

    1. Traverse the left subtree by recursively calling inorder(left subtree)
    2. Visit the root
    3. Traverse the right subtree by recursively calling inorder(right subtree)
    4. Inorder(root)
    5. Inorder(left subtree)
    6. Inorder(right subtree)

    function inorder(node) {
        if (node == null) {
            return;
        }
        inorder(node.left);
        console.log(node.data);
        inorder(node.right);
    }
}
2. Preorder traversal: Root, Left, Right:
Example:

    4
    / \
    2   5
    / \
    1   3
Preorder traversal: 4, 2, 1, 3, 5

    function preorder(node) {
        if (node == null) {
            return;
        }
        console.log(node.data);
        preorder(node.left);
        preorder(node.right);
    }
}
3. Postorder traversal: Left, Right, Root:
Example:

    4
    / \
    2   5
    / \
    1   3
Postorder traversal: 1, 3, 2, 5, 4

    function postorder(node) {
        if (node == null) {
            return;
        }
        postorder(node.left);
        postorder(node.right);
        console.log(node.data);
    }
}


2. Preorder traversal: Root, Left, Right
3. Postorder traversal: Left, Right, Root


What are all the Sorting Algorithms?
    1. Bubble Sort:

    function bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
} 


 Big O Notation Complexity:
    1. Linear: O(n):
    2. Quadratic: O(n^2)
    3. Logarithmic: O(log n)
    4. Constant: O(1)
    5. Exponential: O(2^n)
    6. Polynomial: O(n^2)
    7. Factorial: O(n!)
    8. Binary Search: O(log n)
    9. Interpolation Search: O(log n)
    10. Jump Search: O(log n)
    11. Binary Search Tree: O(log n)
    12. Splay Tree: O(log n)
    13. Binary Heap: O(log n)
    14. Red-Black Tree: O(log n)
    15. AVL Tree: O(log n)
    16. Hash Table: O(1)
    17. Binary Tree: O(n)
  Explanation:
    1. The bubble sort algorithm is a simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
    2. The algorithm is O(n^2) which is not good for large data sets.
    3. The algorithm is stable which means that the relative order of elements with the same value is maintained.
    4. The algorithm is adaptive which means that it can scale to very large data sets.
    5. The algorithm is divide and conquer which means that it can be broken down into subproblems that are solved recursively.
    6. The algorithm is in-place which means that it can be done in-place, i.e., without using any additional memory.
    7. The algorithm is online which means that it can be applied on a stream of data, i.e., without requiring the entire data set to be stored in memory.
    8. The algorithm is fast which means that it can be implemented quickly.

    what makes a bubble sort a bubble sort: 

    2. Insertion Sort:
    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let j = i;
            while (j > 0 && arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
        }
        return arr;
    }
}

        Explanation:
            A. The insertion sort algorithm is a simple sorting algorithm that works by repeatedly inserting an element into the sorted sequence.
            B. The algorithm is O(n^2) which is not good for large data sets.
 
    3. Selection Sort:
    function selectionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        return arr;
    }
}
        Explanation:
            A. The selection sort algorithm is a simple sorting algorithm that works by repeatedly finding the minimum element and inserting it into the sorted sequence.
            B. The algorithm is O(n^2) which is not good for large data sets.
    4. Merge Sort:
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }
}
        Explanation:
            A. The merge sort algorithm is a divide and conquer algorithm that works by recursively breaking down the array into smaller subproblems until the subproblems are small enough to be solved using the insertion sort algorithm.
            B. The algorithm is O(n log n) which is good for large data sets.

   5. Quick Sort:
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        let pivot = arr[0];
        let left = [];
        let right = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
}
        Explanation:
            A. The quick sort algorithm is a divide and conquer algorithm that works by recursively breaking down the array into smaller subproblems until the subproblems are small enough to be solved using the insertion sort algorithm.
            B. The algorithm is O(n log n) which is good for large data sets.
    6. Heap Sort:
    function heapSort(arr) {
        for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
            heapify(arr, arr.length, i); //what is heapify? : is this a javascript built in function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/heapify
        }
        for (let i = arr.length - 1; i > 0; i--) {
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
        }
        return arr;
    }
}
        Explanation:
            A. The heap sort algorithm is a divide and conquer algorithm that works by recursively breaking down the array into smaller subproblems until the subproblems are small enough to be solved using the insertion sort algorithm.
    7. Counting Sort:
    8. Bucket Sort:
    9. Radix Sort:
    10. Shell Sort:
    11. Timer Sort:
    12. Tree Sort:
    13. Bucket Sort:
 

*/}
