fnction MaxHeapChecker(arr) { 
    const invalidNodes = [];
  
    for (let i = 0; i < arr.length; i++ ) {
      const leftChild = arr[2*i+1];
      const rightChild = arr[2*i+2];
      if (leftChild && arr[i] < leftChild) invalidNodes.push(leftChild);
      if (rightChild && arr[i] < rightChild) invalidNodes.push(rightChild);
    }
  
    // code goes here  
    return invalidNodes.length ? invalidNodes.join(",") : "max"; 
  
  }
     
  // keep this function call here 
  console.log(MaxHeapChecker(readline()));