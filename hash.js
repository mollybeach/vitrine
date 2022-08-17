var called = 0;
var hash = string => {
    // example of the string: 'cat'
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
    // example at each iteration if string is cat:
    // what is string.charCodeAt(i); if i =0 and string is cat then string.charCodeAt(i) = 99
    /// what is the char code of 'c'?:  99
    // what is the char code of 'a'?:  97
    // what is the char code of 't'?:  116
    // what is the sum of the char codes of 'cat':  (99 + 97 + 116) = 314
    // what if it was 'dog':
    // what is the char code of 'd':  100
    // what is the char code of 'o':  111
    // what is the char code of 'g':  103
    // what if it was 'bunny':
    // what is the char code of 'b':  98
    // what is the char code of 'u':  117
    // what is the char code of 'n':  110
        // what is the char code of 'n':  110
    // what is the char code of 'y':  121
    // what is the sum of the char codes of 'bunny':  (98 + 117 + 110 + 110+  121) = 594



  }
  return hashed;
};
// how does hash tables work?
// hash tables are a data structure that stores data in a hash table


var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  //add should accept a key value pair to add to the hash table
  this.add = (key,value) => {
    const hashedKey = hash(key);  // example: hash('cat') => would be 314 // what happens if differnt letters add up to the same number? : Then
    this.collection[hashedKey] = this.collection[hashedKey] || {}; // example: this.collection[1234] = {};
    this.collection[hashedKey][key]=value; //example: this.collection[1234]['cat'] = 'meow';
    // example of what this collection looks like:
    // this.collection[314] = {
    //   'cat': 'meow'
    // }
    // what if we add another key value pair to the hash table?
    // this.collection[594] ={
    //   'bunny': 'thump'
    // }
    // example of what this collection looks like after adding another key value pair:
    // this.collection[314] = {
    //   'cat': 'meow'
    // }
    // this.collection[594] ={
    //   'bunny': 'thump'
    // }
    // what if we add another key value pair to the hash table?
    // this.collection[314] = {
    //   'dog': 'woof'
    // }
    // now with cat dog and bunny what does this collection look like?
    // this.collection[314] = {
    //   'cat': 'meow',
    //   'dog': 'woof'
    // }
    // this.collection[594] ={
    //   'bunny': 'thump'
    // }

    // how would i call the dog?
    // this.collection[314]['dog']
    // this.collection[594]['bunny']
    // this.collection[314]['cat']

    }

  }
  this.remove = (key) => {
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key]
  }
  this.lookup = (key) => {
    const haskedKey = hash(key);
    return this.collection[hashedKey]

        const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  }
  
  // Only change code above this line
};


