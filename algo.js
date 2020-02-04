
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


//function to look through an array and return the first element(arg 1) to pass the test(arg 2) else if none pass return undefined
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i ++){
    if (func(arr[i])){
      return arr[i] 
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


//function to check if value is boolean primitive. done two ways
//first using if statement
function booWho(bool) {
  if(bool === true || bool === false){
    return  bool = true;
  }
   return bool = false;
}

booWho(1);

//second uses typeof
function booWho(bool) {
  return typeof bool === 'boolean'
}

booWho(1);


//function to capitalize the first letter of each sentence
function titleCase(str) {
  str = str.toLowerCase();
  let newStr = ''
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++){
    str = arr[i][0].toUpperCase();
    str = str + arr[i].slice(1);
    if (newStr == ''){
      newStr = str;
    } else {
      newStr = newStr + ' ' + str;
    }
  }
  return newStr;
}

titleCase("I'm a little tea pot");

//function to copy array 1 elements into aray 2 starting at the n index
function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  for (let i = arr1.length - 1 ; i >= 0; i--){
    arr3.splice(n, 0, arr1[i])
  }
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


//function to remove false values
function bouncer(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i]){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

bouncer([null, NaN, 1, 2, undefined]);


//function to Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted
function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort(function(a,b){
    return a-b
  });
  return num = arr.indexOf(num)
}

getIndexToIns([40, 20, 60, 1], 50);


//function to Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let arr1 = arr[0].toLowerCase()
  let arr2 = arr[1].toLowerCase()
  for (let i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) < 0){
      return false;
    }
  }
  return true;
};

mutation(["HELLO", "hey"]);



//Write a function that splits an array (first argument) into groups the length of size
function chunkArrayInGroups(arr, size) {
  let newArr = []
  for (let i = arr.length; i > 0; i -= size){
      newArr.push(arr.splice(0, size)) 
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);


