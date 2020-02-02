
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
