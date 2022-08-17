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

function mark(str) {
    // code goes here  
    let isValid = false;
    let prevP = [];
    let has3QMark = /[a-zA-Z]*[?][a-zA-Z]*[?][a-zA-Z]*[?]/;
   let rX = /([0-9])([a-zA-Z?]*)([0-9])/g;
   function replacer(match,  p1, p2, p3,  offset, string) {
      console.log(match);
      console.log(p1, p2, p3);
       isValid = parseInt(p1) + parseInt(p3) != 10 ?  isValid : has3QMark.test(p2) && prevP[0] ? true : has3QMark.test(p2) && prevP[0]+parseInt(p1)!=10 ? true : has3QMark.test(prevP[2])  ? true : false;
        prevP = [p1, p3];
    }
     str.replaceAll(rX, replacer);
    return isValid;
  }
     
  // keep this function call here 
//console.log(marks("9???1???9??1???9"));
// console.log(marks("acc?7??sss?3rr1??????5fdksljfd4?jj??6i"));
 //  console.log(marks("5??aaaaaaaaaaaaaaaaaaa?5?a??5"));
   console.log(mark("5??aaaaaaaaaaaaaaaaaaa?5?5"));
 //console.log(marks("5??aaaaaaaaaaaaaaaaaaa?5?5"));

