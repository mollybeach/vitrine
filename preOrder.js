let preOrderArr = ((strArr[0].replace(/[\[\]]*/g, "")).split(",")).map((element => parseInt(element)));
console.log(preOrderArr);

let numGen = Math.floor(Math.log2(preOrderArr.length)+1);

