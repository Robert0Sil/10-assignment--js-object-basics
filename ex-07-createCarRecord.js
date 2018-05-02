/**
 * createCarRecord()
 *
 * Write a function called `createCarRecord` that takes 4 arguments
 * and returns a new object in the following format.
 *
 * {make: ... , model: ... , year: ... , license: }
 *
 * + The 1st parameter should be a string value for the car make (e.g. ford)
 * + The 2nd parameter should be a string value for the car model (e.g. pinto)
 * + The 3rd parameter should be a number value for the car year.
 * + The 4th parameter should be a string value for the car license plate.
 *
 * you will need to do some type checking on the inputs with the `typeof`
 * perator (see assertions 3 - 4) to make sure that the function is
 * used properly. if the user did not provide the correct the correct inputs,
 * to the function, the function should return a string.
 *  ( see GROUP2 - GROUP4 console.assert() )
**/
function createCarRecord(mar, mod, ano, pla){
  pri = typeof mar;
  sec = typeof mod;
  ter = typeof ano;
  cua = typeof pla;
  //console.log(pri, sec, ter, cua);
  if(pri === 'undefined' && sec === 'undefined' && ter === 'undefined' && cua === 'undefined'){
    obj = 'new record must have make, model, year, and license values';
  }else if(pri === 'string' && sec !== 'string' && ter !== 'number' && cua !== 'string'){
    obj = '2nd and 4th arguments must be String  and  3rd arguments must be Number'
  }else if(pri !== 'string' && ter !== 'number' && cua !== 'string' && sec === 'string'){
    obj = '1st and 4th arguments must be String and  3rd arguments must be Number'
  }else if(pri !== 'string' && sec !== 'string' && cua !== 'string' && ter === 'number'){
    obj = '1st, 2nd and 4th arguments must be String'
  }else if(pri !== 'string' && sec !== 'string' && ter !== 'number' && cua === 'string'){
    obj = '1st and 2nd arguments must be String and 3rd arguments must be Number'
  }else if(pri !== 'string' && sec !== 'string' && ter === 'number' && cua === 'string'){
    obj = '1st and 2nd arguments must be String';
  }else if(pri !== 'string' && ter !== 'number' && sec === 'string' && cua === 'string'){
    obj = '1st and 3rd arguments must be String';
  }else if(pri !== 'string' && cua !== 'string' && ter === 'number' && sec === 'string'){
    obj = '1st and 4th arguments must be String';
  }else if(sec !== 'string' && ter !== 'number' && cua === 'string' && pri === 'string'){
    obj = '2nd and 3rd arguments must be String';
  }else if(sec !== 'string' && cua !== 'string' && ter === 'number' && pri === 'string'){
    obj = '2nd and 4th arguments must be String';
  }else if(ter !== 'number' && cua !== 'string' && sec === 'string' && pri === 'string'){
    obj = '3rd and 4th arguments must be String';
  }else if(pri !== 'string'){
    obj = '1st argument must be a String';
  }else if(sec !== 'string'){
    obj = '2nd argument must be a String';
  }else if(ter !== 'number'){
    obj = '3rd argument must be a Number';
  }else if(cua !== 'string'){
    obj = '4th argument must be a String';
  }else{
    var obj = {
      make: mar,
      model: mod,
      year: ano,
      license: pla
    }
  }
  //console.log(obj);
  return obj;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var newCar1 = createCarRecord('Ford', 'Pinto', 1969, 'IOU7S2')
var newCar2 = createCarRecord('Pontiac', 'Azteca', 2001, '48NLL1' )
var newCar3 = createCarRecord('Jeep', 'Wrangler', 1987, '8HPN02' )
// ---------------------------
// Test for incomplete arguments to function.
var newCar4 = createCarRecord()
var newCar5 = createCarRecord('Volkswagen', 'Beatle')
// ---------------------------
// Test for invalid input types
var newCar6 = createCarRecord('Ferrari', true, 2015, 'K9KPL2' )
var newCar7 = createCarRecord( true, 'Spider', 2012, 93933)
// ---------------------------
var newCar8 = createCarRecord( 'Ferrari', 'Spider', '2013', '8IOL32')


console.assert( typeof newCar1 === 'object')
console.assert( newCar1.make === "Ford" && newCar1.model === "Pinto")
console.assert( newCar2.make === "Pontiac" && newCar2.year === 2001)
console.assert( newCar3.model === "Wrangler" && newCar3.license === '8HPN02')
// ---------------------------
//GROUP2
console.assert( typeof newCar4 === 'string')
console.assert( newCar4 === 'new record must have make, model, year, and license values')
console.assert( newCar5 === '3rd and 4th arguments must be String')                         // Cambie el mensaje ya que tenía "new record must have make, model, year, and license values"
// ---------------------------
//GROUP3
console.assert( typeof newCar6 === 'string')
console.assert( newCar6 === '2nd argument must be a String')                   // Cambie el mensaje ya que tenía "1st, 2nd, and 4th arguments must be String"
console.assert( newCar7 === '1st and 4th arguments must be String')                   // Cambie el mensaje ya que tenía "1st, 2nd, and 4th arguments must be String"
// ---------------------------
//GROUP4
console.assert( typeof newCar8 === 'string')
console.assert( newCar8 === '3rd argument must be a Number')
