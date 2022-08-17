function validation(str) { 


    let isValid = str.match(/tehe/);
      let regXXX = /tehe/i;
   let isValidy = str.match(regXXX);
  //  console.log(isValidy)
   let isValidTwo = str.match(/tehe/g)
   let isValidThree = str.match(/tehe/i) 
  
    let isValidFour = str.match(/tehe/gi) // both global and case insensitive 
   // console.log(isValid, isValidTwo, isValidThree);
    
    // if you use the g flag
    // it will give an array of how each time found 
  
    let myRegExp = /\d{3}/;
    let isThreeDigitsInARow = myRegExp.test(str);
     // console.log( isThreeDigitsInARow)
  
  
    let rEX = /the../;
     let hasAFiveLetterWordStartingWithThe = rEX.test(str); // thereisaplace isthereaplace passes
   // console.log(hasAFiveLetterWordStartingWithThe); // the with two space after pass
  
      let rX = /^the..$/;
     let isOnlyAFiveLetterWordStartingWithThe = rX.test(str); // thereisaplace isthereaplace fails 
  //  console.log(isOnlyAFiveLetterWordStartingWithThe); // while the with two space after pass the with 3 space after fail 
    // boundary /b
    let rXX = /\bcat\b/; // passes this is my cat 
     let isCat = rXX.test(str); // but fails this is my catalog
    //console.log(isCat);
  
      let rXXX = /\bcat\B/; // fails this is my cat because cat is its own word
     let isCatTwo = rXXX.test(str); // passes this is my catalog because cat is part of a bigger word
  
   // console.log(isCatTwo);
   // let strr = 'apple orange';
   // let xR = / ^(\S+)\s+(\S+)$ /;
  //  console.log(strr.match(xR));
  
    let reEX = /\w+@\w+\.(com| net| org)/;
    
  
    let isValidEmail = reEX.test(str);
   // console.log(isValidEmail);
  
  
  
  
    //PHONE #
  
    let regg = /\d{3}[.-]\d{4}/;
    let isValidPhone = regg.test(str); //true
  console.log(isValidPhone);
  
   // no global returns : [ '947-6991', index: 0, input: '947-6991 306-4687', groups: undefined ]
    // match more than one phone 
      let reggMulti = /\d{3}[.-]\d{4}/g;
      let matchPhone = str.match(reggMulti);  //[ '947-6991', '306-4687' ] the global returns array 
    console.log(matchPhone) 
  
  
  
  
  // groups and global
  
        let rgMulti = /(\d{3})[.-]\d{4}/g;
      let mphone = str.match(rgMulti); 
    console.log(mphone) // if it is global it does not return the groups of 306 3064687 and 947 7476991
    // you have to use the exec function for that // bruh idk lets use matchAll
  
    
    let rlMulti = /(\d{3})[.-]\d{4}/g;
      let mathPhone = str.matchAll(rlMulti);  //[ '947-6991', '306-4687' ] the global returns array 
    console.log(mathPhone); //Object [RegExp String Iterator] {}
    const arr = [...mathPhone]; //since it's iterator u have to use the spread to put it in array 
  // then u get 
    /*[
    [
      '947-6991',
      '947',
      index: 0,
      input: '947-6991 306-4687 9478889',
      groups: undefined
    ],
    [
      '306-4687',
      '306',
      index: 9,
      input: '947-6991 306-4687 9478889',
      groups: undefined
    ]
  ]*/
    console.log(arr);
    
    return isValidFour
    
  }
  // keep this function call here 
  //console.log(validation("mollyztehemoltehepeterTehe"));
  //console.log(validation('123'));
  //console.log(validation('the  '))
  //console.log(validation('thereisaplace '))
  //console.log(validation('the   '))
  //console.log(validation('apple orange'))
   //console.log(validation("mollyjbeach@gmail.com"))
  //console.log(validation("947-6991 306-4687"));
  console.log(validation("947-6991 306-4687 9478889"));
  
  /*[
    'tehe',
    index: 6,
    input: 'mollyztehemoltehepeter',
    groups: undefined
  ]*/
  // if you add the i it makes it case insensitvie 