function marks(str) {
    // code goes here  
    let isValid = false
    //;
    let rX = /([.+])*([0-9])([a-zA-z]*[?][a-zA-z]*[?][a-zA-z]*[?])([0-9])([.+])*/g;
    function replacer(match, p1, p2, p3, p4, p5,  offset, string) {
        parseInt(p2) + parseInt(p4) != 10 ? isValid = false : parseInt(p2) === parseInt(p4) ? isValid = false : isValid = true;
        console.log(p2, p4)
        return [p2, p4].join('');
    }
     str.replace(rX, replacer);
    return isValid;
  }