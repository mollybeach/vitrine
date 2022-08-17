let slot1 = 40;  
let slot2 = 70; 
let slot3 = 90; 
let slot4 = 100; 
let totalSlots = 100;


function getPrize() {

    let num = Math.floor(Math.random() * totalSlots) + 1;
      console.log('randomNum : '+ num + '\n prize1 : ' + slot1 + '\n prize2 : ' + slot2 + '\n prize3 : ' + slot3+ '\n prize4 : ' + slot4 + ' \n totalSlotss : ' + totalSlots);
    if(num <= slot1){
        slot1--;
        slot2--;
        slot3--;
        slot4--;
        totalSlots--;

        return 1;
    }
    else if(num >  slot1 && num <=  slot2){
        slot2--;
        slot3--;
        slot4--;
        totalSlots--;
        return 2;
    }
    else if(num > slot2 && num <= slot3){
        slot3--;
        slot4--;
        totalSlots--;
        return 3;
    }
    else if (num > slot3){
        slot4--;
        totalSlots--;
        return 4;
    }

}



// 1000 contestants each times run through the remaining slots and select 100 random numbers. and push them into an array.

function getPrize2(tokenID, totalSlots) {
    let num = Math.floor(Math.random() * totalSlots) + 1;
    let  winningNumbers = [];
    for(let i = 0; i < 100; i++){
        winningNumbers.push(num);
        if(num === tokenID){
            totalSlots--;
            return tokenID
        }
    }
    return 0;
}

for(let i = 0; i < 100; i++){
    console.log(getPrize2(i, totalSlots));
}


/*


  getPrize();
  console.log('game# : ' + z);
  console.log('totalSlots' + totalSlots)
}
*/