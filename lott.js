let slot1 = 40;
let slot2 = 70; 
let slot3 = 90; 
let slot4 = 100; 
let winningTokenIDs = [];
let totalWinSlots = 100;
let totalRemainingTokens = 1000;


function draw(_range){
      let num = Math.floor(Math.random() * _range+1) + 1;
      return num
}
function pickPrize(num) {
      console.log('randomNum : '+ num + '\n prize1 : ' + slot1 + '\n prize2 : ' + slot2 + '\n prize3 : ' + slot3+ '\n prize4 : ' + slot4 + ' \n totalWinSlots : ' + totalWinSlots);
    if(num <= slot1){
        slot1--;
        slot2--;
        slot3--;
        slot4--;
        totalWinSlots--;
        return 1;
    }
    else if(num >  slot1 && num <=  slot2){
        slot2--;
        slot3--;
        slot4--;
        totalWinSlots--;
        return 2;
    }
    else if(num > slot2 && num <= slot3){
        slot3--;
        slot4--;
        totalWinSlots--;
        return 3;
    }
    else if (num > slot3){
        slot4--;
        totalWinSlots--;
        return 4;
    }

}

function enterLotto() {
        if(draw(totalRemainingTokens) <= totalWinSlots){
           totalRemainingTokens--;
            return pickPrize(draw(totalWinSlots));
        }
        else{
           totalRemainingTokens--;
            return 0;
        }
}

for(let i = 0; i < 1000; i++){
   if(totalWinSlots > 0 && enterLotto() > 0){
    console.log('winner');
       winningTokenIDs.push(i);
       console.log(winningTokenIDs);
   }
   else {
       console.log('you did not win');
   }
}

