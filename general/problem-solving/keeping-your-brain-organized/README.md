# this directory is for tracking strategies for organizing your head

## flowcharting

https://www.geeksforgeeks.org/an-introduction-to-flowcharts/#:~:text=Flowchart%20is%20a%20graphical%20representation,is%20known%20as%20%E2%80%9Cflowcharting%E2%80%9D

## tool

http://draw.io/

## PEDAC

https://medium.com/launch-school/the-two-layer-problem-915b7587654c

## example

```js
// take an array and randomize it.

const arr = [1, 2, 3, 4, 5]

// Problem
// I have an array and I want to scramble it
// Example: [1,2,3,4,5] => [1,3,5,4,2]
// Data structure: array
// Algorithm:
// starting from the beginning of the list
// go through the entire list - swapping a random item in the
// list with the current item I am on
// Code

for (let i = 0; i < arr.length; i++) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const valToSwap = arr[randomIndex]
  const currVal = arr[i]
  arr[i] = valToSwap
  arr[randomIndex] = currVal
}
console.log(arr)
```

## JS Doc

- JSDoc (https://jsdoc.app/about-getting-started.html)
- JSDoc is a markup language used to annotate JavaScript source code files. Using comments containing JSDoc, programmers can add documentation describing the application programming interface of the code they're creating.

- add jsdoc comments

```js
/**
    @param {number} num1 - the first number
    @param {number} num2 - the second number
*/
function add(num1, num2) {
  return num1 + num2
}
add(1, 2)
```
