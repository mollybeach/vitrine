let interval = 25;
let gameLevel =0;
function enterLotto(_totalTicketsSold) {
    let modi  =_totalTicketsSold%interval;
    while(_totalTicketsSold>0){
        console.log(_totalTicketsSold)
        if(modi==0){
            gameLevel++;
        }
       _totalTicketsSold= _totalTicketsSold-interval;
    }
      return gameLevel
}

enterLotto(75);