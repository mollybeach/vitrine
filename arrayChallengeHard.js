/*
CoderByte Challenge: Array Challenge Hard
*Have the function ArrayChallenge (arr) take the arr parameter being passed which will be an array of non-negative
integers and circularly rotate the array starting from the Nth element where N is equal to the first integer in the array. For
example: if arr is [2, 3, 4, 1, 6, 10) then your program should rotate the array starting from the 2nd position because the
first element in the array is 2. The final array will therefore be [4, 1, 6, 10, 2, 3], and your program should return the new
array as a string, so for this example your program would return 4161023. The first element in the array will always be an
integer greater than or equal to 0 and less than the size of the array.
Once your function is working, take the final output string and intersperse it character-by-character with your
ChallengeToken.
Your ChallengeToken:hbpu1f5087

Examples
Input:
Input: [3,2,1,6]
Output: 6321
Final Output: 6h3b2p1u1f508

Input: [4,3,4,3,1,2]
Output: 124343
Final Output: 1h2b4p3u413f5087
*/

function ArrayChallenge(arr){
    //code goes here
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[arr[i]]);
    }
    let newStr = '';
    for (let i = 0; i < newArr.length; i++) {
        newStr += newArr[i];
    }
    let challengeToken = 'hbpu1f5087';
    let newerStr = '';
    for (let i = 0; i < Math.max(newStr.length, challengeToken.length); i++) {
        if (newStr[i]) {
            newerStr += challengeToken[i];
        } 
        if(challengeToken[i]){
            newerStr += challengeToken[i];
        }
    }
    return newerStr;
    }
    // keep this function call here
    console.log(ArrayChallenge([3,2,1,6]));

/*
    arr is [2, 3, 4, 1, 6, 10) then your program should rotate the array starting from the 2nd position because the
        first element in the array is 2. The final array will therefore be [4, 1, 6, 10, 2, 3]
        // how to rotate the array?
        // 1. create a new array with the length of the original array
        // 2. for each element in the original array, push the element at the index of the element to the new array
        // 3. return the new array
  how 

    if 4 then rotate the array starting from the 4th position because the first element in the array is 2. The final array will therefore be [4, 1, 6, 10, 2, 3]

    for each element in the original array, push the element at the index of the element to the new array

    ex: [2, 3, 4, 1, 6, 10]
    newArr = [2, 3, 4, 1, 6, 10]
 
     let moveBy = arr[0];
        let newArr = [];
        
        // how to find the new 0 position with the length of the array? and the moveBy?
        // 1. find the new 0 position with the length of the array? and the moveBy?

        fn findNewZero(arr, moveBy) {
            let newZero = moveBy;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === 0) {
                    newZero = i;
                }



*/


// if you have 5 items how to move each item by 3 positions?
// 1. create a new array with the length of the original array
// 2. for each element in the original array, push the element at the index of the element to the new array
// 3. return the new array
//
// ex: [2, 3, 4, 1, 6, 10]
// newArr = [2, 3, 4, 1, 6, 10]


     let arr = [2, 3, 4, 1, 6, 10];
    let moveBy = arr[0];
       let newArr = [];  
       for (let i = 0; i < arr.length; i++) {
           newArr.push(arr[(i + moveBy) % arr.length]);
       }
      console.log(newArr);

      // make string  from array js method : join()

        let newStr = arr.join('');
