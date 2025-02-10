// Using for loop
function sumFor(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Using while loop
function sumWhile(numbers: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

// Using recursion
function sumRecursion(numbers: number[]): number {
  // Base case: empty array
  if (numbers.length === 0) {
    return 0;
  }
  // Take first element and recursively sum the rest
  return numbers[0] + sumRecursion(numbers.slice(1));
}

// Using functional programming
function sumTheFunctionalWay(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Test array
const numbers = [1, 2, 3, 4];

// Testing all implementations
console.log("For loop sum:", sumFor(numbers));
console.log("While loop sum:", sumWhile(numbers));
console.log("Recursive sum:", sumRecursion(numbers));
console.log("Functional sum:", sumTheFunctionalWay(numbers));

// Edge cases
const emptyArray: number[] = [];
console.log("\nTesting edge case with empty array:");
console.log("For loop sum:", sumFor(emptyArray));
console.log("While loop sum:", sumWhile(emptyArray));
console.log("Recursive sum:", sumRecursion(emptyArray));
console.log("Functional sum:", sumTheFunctionalWay(emptyArray));
