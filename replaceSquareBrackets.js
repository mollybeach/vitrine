
// replace square brackets and quotes with nothig

let moo = "['abc','xyz']";
let mooed = moo.replace(/[\[\]']*/g,'');
console.log(mooed);
let rG = /[\[\]]*/g; //let rG = /[\[\]']*/g;
//

let strArr = ["[10, 5, 1, 7, 40, 50]", "5", "10"];
let w = strArr[0].replace( rG, '');
console.log(w)
