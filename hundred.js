
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
let div2 = [ 2,  4,  6,  8, 10,  12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]
let div6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96]; 
let div3 = [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];
let div3Not6 = [ 3,  9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99]
let div2Not6=[2,  4,  8, 10, 14, 16,  20, 22, 26, 28, 32, 34, 38, 40, 44, 46, 50, 52,56, 58, 62, 64, 68, 70,  74, 76, 80, 82, 86, 88, 92, 94, 98, 100];


let gameOne = [];
let gameTwo = [];
let gameThree = [];
let gameFour = [];
for(i in list){
    let item=list[i];
    if(item%10===0){
    gameFour.push(item);
} else if (item%4===0 ){
    gameThree.push(item);
}
else if (item%2===0 || item%5===0){
    gameTwo.push(item);
}
else{
    gameOne.push(item);
}
}
console.log('GAME ONE ' + gameOne.length + ' winners ');
console.log(gameOne);
console.log('GAME TWO ' + gameTwo.length + ' winners ');
console.log(gameTwo);
console.log('GAME THREE ' + gameThree.length + ' winners ');
console.log(gameThree);
console.log('GAME FOUR ' + gameFour.length + ' winners ');
console.log(gameFour);
console.log(div6.length)

console.log(gameOne.length + gameTwo.length + gameThree.length + gameFour.length)
/*
console.log(div3Not6.length)
console.log(div2Not6.length )
console.log(div2Not6.length )*/