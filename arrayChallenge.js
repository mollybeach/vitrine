/*
CoderByte Challenge: Array Challenge Medium
Have the function ArrayChallenge (strArr) take the array of characters stored in strArt, which will contain characters ranging from A to Z
in some arbitrary order, and determine what elements still remain in a virtual cache that can hold up to 5 elements with an LRU cache algorithm
implemented. For example: if starE is ["A", "B", "C", "D", "A", "E", "D", "Z"], then the following steps are taken:
(1) A does not exist in the cache, so access it and store it in the cache.
(2) B does not exist in the cache, so access it and store it in the cache as well. So far the cache contains: I'A", "B'].
(3) Same goes for C, so the cache is now: ["A", "B", "C"].
(4) Same goes for D, so the cache is now: ["A", "B", "C", "D"].
(5) Now A is accessed again, but it exists in the cache already so it is brought to the front: I"B", "C", "D", "A"J.
(6) E does not exist in the cache, so access it and store it in the cache: "B", "C", "D", "A", "E"].
(7) D is accessed again so it is brought to the front: ["B", "C", "A", "E", "D'].
(8) Z does not exist in the cache so add it to the front and remove the least recently used element: ["C", "A", "E", "D', "Z°].
Now the caching steps have been completed and your program should return the order of the cache with the elements joined into a string,
separated by a hyphen. Therefore, for the example above your program should return C-A-E-D-Z.
Once your function is working, take the final output string and intersperse it character-by-character with your ChallengeToken:   let challengeToken = 'hbpu1f5087';


Examples
Input: ["A", "B", "A", "C", "A", "B"]
Output: C-A-B
Final Output: Ch-bAp-uB1f5087
Input: ["A", "B", "C", "D", "E"]
Output: E-D-Q-Z-C
Final Output: Eh-bDp-uQ1-f25-oC87


.*/
function intersperse(str, token) {
    let newerStr = '';
    for (let i = 0; i < Math.max(newStr.length, challengeToken.length); i++) {
        if (newStr[i]) {
            newerStr += newStr[i];
        } 
        if(challengeToken[i]){
            newerStr += challengeToken[i];
        }
    }
    return newerStr;
}

// copilot solve Coderbyte challenge Array Challenge Medium
function ArrayChallenge(strArr){
    let cache = [];
    // cache size is 5
    let cacheSize = 5;
    // loop through the array of characters
    for (let i = 0; i < strArr.length; i++) {
        // if the character is not in the cache
        if (cache.indexOf(strArr[i]) === -1) {
            // add it to the cache
            cache.push(strArr[i]);
            // if the cache is greater than 5
            if (cache.length > cacheSize) {
                // remove the last element from the cache
                cache.shift();
            }
        } else {
            // if the character is in the cache
            // remove it from the cache
            cache.splice(cache.indexOf(strArr[i]), 1);
            // add it to the front of the cache
            cache.push(strArr[i]);
        }
    }
    // join the cache into a string separated by a hyphen
    return cache.join('-');

}

let solution = ArrayChallenge( ["A", "B", "C", "D", "A", "E", "D", "Z"]);
console.log(solution);


    
