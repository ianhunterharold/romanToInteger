const romanNumsToNums = function(roman){
  const romanKeys = {
  "I":1, 
  "V":5,
  "X":10,
  "L":50,
  "C":100,
  "D": 500,
  "M":1000 
  };

  

  let arrOfChar = roman.split('');

  if (arrOfChar.length === 0){
      return "not a valid input"
    }

  // convert each value into a number
  let arrayOfNumbers = [];

  for (let i =0; i < arrOfChar.length; i++){
    for (const key in romanKeys){
      if (arrOfChar[i] === key){
        let addToEnd = arrayOfNumbers.push(romanKeys[key]);
      }
    }
  }

   if (arrayOfNumbers.length === 1){
       return arrayOfNumbers[0];
    }

  let number = 0; 

    for (let i =0, j=1; i < arrayOfNumbers.length; i++, j++){
      
      if (arrayOfNumbers[i] < arrayOfNumbers[j]){
      
        number += (arrayOfNumbers[j] - arrayOfNumbers[i]);
        console.log(number,"special exception")
        i++;
        j++;
      } else if ( arrayOfNumbers[i] && !arrayOfNumbers[j] ||arrayOfNumbers[i] >= arrayOfNumbers[j]){
        number += arrayOfNumbers[i];
        
      }
    }
    
  return number; 
}

const rom = 'LXXIV';
romanNumsToNums(rom);

// solution as a human
// iterate through the number given
// look for its values, if the value is lower then subtract, if the value is greater and then smaller add 

// say outloud the number

// solution as a dev

// break up number into array of char
// iterate over array of characters
// compare it to the string and add the value to the number 
// if the number is smaller then larger, subtract, 
// if the value is larger then smaller add 
