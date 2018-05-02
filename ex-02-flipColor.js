/**
 * flipColor()
 *
 * Write a function called flipColor. This function may be
 * used to change the color of a tile in a game. It should
 * take as input an object. If that object's color property
 * has the value blue, it should change it to red, and
 * vice-versa.
*/
function flipColor(obj){
  var col = ' ';
  //console.log(obj.color);
  if(obj.color === 'blue'){
    col = 'red';
  }else{
    col = 'blue';
  }

  var nobj = {
    width: obj.width,
    height: obj.height,
    color: col
  }
  //console.log(nobj);
  return nobj;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var tileObj = {
    width: "200px",
    height: "200px",
    color: "blue"
}

var tileObj2 = flipColor(tileObj)

console.assert(tileObj2.color === "red")

var tileObj3 = flipColor(tileObj2)
console.assert(tileObj3.color === "blue")
