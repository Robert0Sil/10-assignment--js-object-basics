/**
 * createNameObject()
 *
 * Write a function called `createNameObject` that takes a full first
 * & last name string and returns an object with `firstName`
 * and `lastName` properties that have string values.
 *
**/
function createNameObject(nom){
  var arrt = nom.split(' ');
  //console.log(nom);
  var obj = {
    firstName: arrt[0],
    lastName: arrt[1]
  }
  //console.log(arrt);
  //console.log(obj);
  return obj;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var nameObj1 = createNameObject("Benzo Lorenzo")
console.assert(nameObj1.firstName === 'Benzo')
console.assert(nameObj1.lastName === 'Lorenzo')

var nameObj2 = createNameObject("Felipe Tortuga")
console.assert(nameObj2.firstName === 'Felipe')
console.assert(nameObj2.lastName === 'Tortuga')

var nameObj3 = createNameObject("Lupe Maria")
console.assert(nameObj3.firstName === 'Lupe')         // Cambie la variable ya que tenía "nameObj2"
console.assert(nameObj3.lastName === 'Maria')         // Cambie la variable ya que tenía "nameObj2"
