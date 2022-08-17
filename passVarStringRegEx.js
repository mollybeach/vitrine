let parents = '24';
let childern =  '127';


let isValid = true;
let re = new RegExp('[' + parents +']', 'g');

let rootNode = childern.match(re);
console.log(rootNode)

if(rootNode.length < parents.length-1){
  isValid = false;
  
}
console.log(isValid)
