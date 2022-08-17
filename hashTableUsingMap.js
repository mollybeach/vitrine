// Hash Table Using JS Map Object 

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
    this.collection = new Map();
  }
  // Only change code below this line
  add(key, value){
    const bucketNum = hash(key);
    let bucket = {}
    bucket[key] = value;
    console.log(bucket)
     this.collection.set(bucketNum, bucket)
  }

  lookup (key) {
    const bucketNum = hash(key);
    return this.collection.get(bucketNum)
  }

  remove (key){
    const bucketNum = hash(key);
    this.collection.delete(bucketNum)
  }
  print(){  
    return this.collection
  }
  // Only change code above this line
};


let myHash = new HashTable();
myHash.add('molly', 'beach');
myHash.add('peter', 'whidden');

console.log(myHash.print())
myHash.remove('peter')
console.log(myHash.print())

