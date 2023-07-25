// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

// Solution :
function reverseStr(inputString) {
  return inputString.split("").reverse().join("");
}

// Example
const inputStr = "hello world";
const outputStr = reverseStr(inputStr);
console.log(outputStr);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

//Solution :
function sumOfPositiveNumbers(numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

// Example
const inputArray = [2, -5, 10, -3, 7];
const outputSum = sumOfPositiveNumbers(inputArray);
console.log(outputSum);
