// Hash Table Using JS Object
let called = 0;

let hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

class HashTable {
  constructor() {
    this.collection = {};
  }
  // Only change code below this line
  add(key, value){
    const hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[hashedKey][key] = value;
  }

  lookup (key) {
    const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  }

  remove (key){
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key];
    if (Object.keys(this.collection[hashedKey]).length == 0)
      delete this.collection[hashedKey];
  }
  printz(){  
    console.log(this.collection)
  }
  // Only change code above this line
};



let myHash = new HashTable();
myHash.add('molly', 'beach');
console.log(myHash.printz())

