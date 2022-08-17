
let prizeMoney = 7600; 
let prizeMoneyObject = {}
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 let played = [];

let totalCreatedTributes = 100;
let totalSoldTributes = 0;
for (let i = 1; i <=100; i++) {
     let tokenId = i;
    let mt = i%26 === 0 ? Math.floor(i/26)-1 :  Math.floor(i/26);
    let e; 
     e= letters.slice(0,letters.indexOf(letters[mt]));
    if(i > 676 ){
       let amt = i-26*mt;

       let w = e.reverse();
         e = w.slice(0,w.amt);

    }
    e.unshift('0x'); 
     e.push(letters[i-1-mt*26]);

     function buyNfts(amount) {
        console.log(amount)
        let listOfNFTs= [];
        for (let j = 0; j < amount; j++) {
            listOfNFTs.push(i+j);        
            totalSoldNFTs++;
        }

        return listOfNFTs;
        

        }

        prizeMoneyObject[e.join('')] = i%2 ==0 ?  buyNfts(1) : buyNfts(2);


}


console.log(prizeMoneyObject);
console.log(Object.keys(prizeMoneyObject).length)


let addressToTokenId = {
    '0xA': [ 1 ],
    '0xB': [ 2, 3 ],
    '0xD': [ 4, 5 ],
    '0xF': [ 6, 7 ],
    '0xH': [ 9 ],
    '0xJ': [ 8, 10, 11 ],
    '0xL': [ 12, 13 ],
    '0xN': [ 14, 15 ],
    '0xP': [ 16, 17 ],
    '0xR': [ 18, 19 ],
    '0xT': [ 20, 21 ],
    '0xV': [ 22, 23 ],
    '0xX': [ 24, 25 ],
    '0xZ': [ 26, 27 ],
    '0xAB': [ 28, 29 ],
    '0xAD': [ 30, 31 ],
    '0xAF': [ 32, 33 ],
    '0xAH': [ 34, 35 ],
    '0xAJ': [ 36, 37, 38, 39 ],
    '0xAN': [ 40, 41 ],
    '0xAP': [ 42, 43 ],
    '0xAR': [ 44, 45 ],
    '0xAT': [ 46, 47 ],
    '0xAV': [ 48, 49 ],
    '0xAX': [ 50, 51 ],
    '0xAZ': [ 52, 53 ],
    '0xABB': [ 54, 55 ],
    '0xABD': [ 56, 57 ],
    '0xABF': [ 58, 59 ],
    '0xABH': [ 60, 61 , 62, 63 ],
    '0xABL': [ 64, 65 ],
    '0xABN': [ 66, 67 ],
    '0xABP': [ 68, 69 , 70, 71 ],
    '0xABT': [ 72, 73 ],
    '0xABV': [ 74, 75 ],
    '0xABX': [ 76, 77 ,78, 79 ],
    '0xABCB': [ 80, 81 ],
    '0xABCD': [ 82, 83 ],
    '0xABCF': [ 84, 85 ],
    '0xABCH': [ 86, 87 ],
    '0xABCJ': [ 88, 89, 90, 91 ],
    '0xABCN': [ 92, 93 ],
    '0xABCP': [ 94, 95 ],
    '0xABCR': [ 96, 97 ],
    '0xABCT': [ 98, 99 ],
    '0xABCV': [ 100],

}
// run a Raffle on the total created Tributes 
{/*
Where 
4 win 100 lover coins
3win 500 lover coins
2 win 1000 lover coins
1 win 6000 lover coins
*/}
function draw() {
    // make sure the total sold tributes > 0
    if (totalSoldTributes < 1) {
        return;
    }
    // get a random number between 1 and total sold tributes
    let randomNumber = Math.floor(Math.random() * totalSoldTributes) + 1;
    // get the random number's token id
    let randomTokenId = randomNumber;
    // get the random number's token id's address
    let randomTokenIdAddress = Object.keys(prizeMoneyObject)[randomTokenId - 1];
    

}



