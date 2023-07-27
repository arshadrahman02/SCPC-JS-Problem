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

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

// Solution

function findMostFrequentElement(arr) {
  const frequencyMap = {};
  let mostFrequentElement = null;
  let maxFrequency = 0;

  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxFrequency) {
      mostFrequentElement = num;
      maxFrequency = frequencyMap[num];
    }
  }

  return mostFrequentElement;
}

// Example
const newArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(newArr);
console.log(mostFrequent);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
//Solution

function calculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Cannot divide by zero!";
    }
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}

// Example
console.log(calculator(5, "+", 3));
console.log(calculator(10, "-", 4));
console.log(calculator(3, "*", 7));
console.log(calculator(12, "/", 4));
console.log(calculator(5, "/", 0));
console.log(calculator(5, "%", 3));

//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

//Solution

function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*_-+=";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Example
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

//Solution
function romanToInteger(romanNumeral) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentValue = romanValues[romanNumeral[i]];
    const nextValue = romanValues[romanNumeral[i + 1]];

    if (nextValue > currentValue) {
      total += nextValue - currentValue;
      i++; // Skip the next character since we've already handled it
    } else {
      total += currentValue;
    }
  }

  return total;
}

// Example
console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("IV"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

//Solution
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array should contain at least two numbers.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "No second smallest element found.";
  }

  return secondSmallest;
}

// Example
const taskArray = [5, 3, 1, 9, 2, 7];
const secondSmallest = findSecondSmallest(taskArray);
console.log(secondSmallest);
