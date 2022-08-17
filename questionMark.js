/*Questions Marks
Have the function QuestionsMarks(str) take the str string parameter, 
which will contain single digit numbers, letters, 
and question marks, and check if there are exactly 3 question marks 
between every pair of two numbers that add up to 10. If so, then your program should return the string true, 
otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, 
then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
Examples*/
//"9???1???9??1???9" 
//false
//"5??aaaaaaaaaaaaaaaaaaa?5?5"
//false
//"9???1???9??1???9"
// true
//"5??aaaaaaaaaaaaaaaaaaa?5?a??5"
//true 

function marks(str) {
    // code goes here  
    let isValid = false;
    let rX = /([.+])*([0-9])([a-zA-z]*[?][a-zA-z]*[?][a-zA-z]*[?])([0-9])([.+])*/g;
    function replacer(match, p1, p2, p3, p4, p5,  offset, string) {
        isValid = parseInt(p2) + parseInt(p4) != 10 ?  false : parseInt(p2) === parseInt(p4) ? false : true;
        return [p2, p4].join('');
    }
     str.replace(rX, replacer);
    return isValid;
  }
     
  // keep this function call here 
  console.log(marks("9???1???9??1???9"));
