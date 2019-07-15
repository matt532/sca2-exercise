const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  let array = [];
  let firstLetter = 0, lastLetter = 0;
  //let subStr = str.slice(0, str.indexOf(" "))
  //array.push(subStr)
  
  while(lastLetter < str.length)
  {
    if(str[lastLetter] === ' ')
    {
      array.push(str.slice(firstLetter, lastLetter));
      firstLetter = lastLetter + 1;
    }
    else if(lastLetter === str.length -1)
    {
      array.push(str.slice(firstLetter, lastLetter + 1));
    }
    lastLetter++;
  }
  
  return array;
};

const reverse = str => {
  // TODO - write a function which reverses the string
  let reverse = "";
  for(let i = str.length -1; i >= 0; i--)
  {
    reverse += str[i];
  }
  return reverse;
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  if(arr.length === 1)
    return arr;

  let duplicate;
  let uniqueArr = [];
  for(let i = 0; i < arr.length; i++)
  {
    duplicate = false;
    for(let j = 0; j < arr.length; j++){
      if(i !== j && arr[i] === arr[j])
        duplicate = true;
    }
    if(duplicate === false)
      uniqueArr.push(arr[i]);
  }
  return uniqueArr;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let product = 1;
  while(num > 0)
  {
    product *= num;
    num--;
  }
  return product;
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if(arr1.length !== arr2.length)
    return -1;

  let zippedArr = [];
  for(let i = 0; i < arr1.length; i++)
  {
    //let temp = [arr1[i], arr2[i]];
    zippedArr.push([arr1[i], arr2[i]]);
  }
  return zippedArr;
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = [], arr2 = [];
  for(let i = 0; i < arr.length; i++)
  {
    let temp = arr[i];
    arr1.push(temp[0]);
    arr2.push(temp[1]);
  }
  console.log(arr1);
  console.log(arr2);
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftRight("Hello", 3) === "lloHe"
  arr = str.split("");
  for(let i = 0; i < num; i++)
  {
    
  }
  
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:
//assert(1 < 2);
//assert(1 + 2 === 3);
//assert([2, 3][0] === 2);
console.log(tokenize("Hello there. General Kenobi!"));
assert(reverse("1234") === "4321");
console.log(uniqueOnes([1, 2, 2, 1, 9, 5, 3, 5, 7]));
assert(factorial(6) === 720);
console.log(zip([1, 2, 3, 8], [5, 3, 1, 3]));
unzip([ [ 1, 5 ], [ 2, 3 ], [ 3, 1 ], [ 8, 3 ] ]);
console.log(shiftRight("hello", 3));