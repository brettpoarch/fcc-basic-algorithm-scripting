
// function converting temp in celsius to temp in fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);


/* function to reverse a string done 3 seperate ways
first way is without loop using .split() and . join() methods*/
function reverseString(str) {
  let arr = str.split('')
  arr.reverse()
  str = arr.join('')
  return str;
}

reverseString("hello");


//second loops throught the string and pushes letters to an array. then uses .join(method)
function reverseString(str) {
  let arr = []
  for (let i = str.length - 1; i >= 0; i--){
    arr.push(str[i])
  }
  str = arr.join('')
  return str;
}

reverseString("hello");


//third uses a loop to create the array and another loop to create the string
function reverseString(str) {
  let arr = []
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--){
    arr.push(str[i])
  }
  for (let j = 0; j < arr.length; j++){
    newStr += arr[j]
  }
  str = newStr
  return str;
}

reverseString("hello");


//function factorializing number
function factorialize(num) {
  if (num == 0){
    num = 1
  }
  for (let i = num - 1; i > 0; i--){
    num *= i
    console.log(num)
  }
  return num;
}

factorialize(5);


//function returning length of the longest word in a string
function findLongestWordLength(str) {
  let arr = str.split(' ')
  let longest = '';
  for (let i = 0; i < arr.length; i ++){ 
    if (arr[i].length > longest.length){
      longest = arr[i];
    }
  }
  return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


//function returning largest number in an array
function largestOfFour(arr) {
  let newArr = [];
  let a = '';
  for (let i = 0; i < arr.length; i++){ 
    for (let j = 0; j < arr[i].length; j++){
      if (arr[i][j] >= a || a == '') {
        a = arr[i][j];
       } 
    }
    newArr.push(a)
    a = ''
  }
  arr = newArr
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//function confirming the end of the string
function confirmEnding(str, target) {
    if (str.slice([str.length - (target.length)]) == target){
    return true;
  };
    return false;
}


//function to repeat string
function repeatStringNumTimes(str, num) {
  let newStr = ''
  if (num <= 0 ){
    return str = ''
  }
  for (var i = 0; i < num; i++){
    newStr = newStr + str
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);



confirmEnding("connor", "n");


//function to truncate a string
function truncateString(str, num) {
  if (str.length > num){
    str = str.slice(0, num) + '...'
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


