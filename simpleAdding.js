/*function SimpleAdding(num) { 
  let result = 0;
  for(let i=num; i>0; i--){
    result +=i
    
  }
  return result
}
   
// keep this function call here 
console.log(SimpleAdding(readline()));*/


/*Simple Adding
Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
*/
//redo this problem and get the best time complexity and space complexity

function SimpleAdding(num) {
    let result = 0;
    for(let i=num; i>0; i--){
        result +=i
        
    }
    return result
    }
    // keep this function call here
    console.log(SimpleAdding(readline()));

    // 
    function SimpleAdding(num) { 
        num=num*(num+1)/2; // how does this equation work?
        // this equation is the same as the previous one but it is more efficient
        // why is this faster? it 

        // code goes here  
        return num; 
               
      }
   
      