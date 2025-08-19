// implement a simple calculator that supports +, -, /, and * on exactly two numbers.
// Your input will be a string, like "4 * 8" or "66 / 33".
// You don't need to do any validation on the input; assume all operators and numbers are separated by a string.
// Next: implement multiple operations, evaluated left-to-right. e.g "3 - 1 - 1" is 1. "5 * 2 * 2" is 20.
// Next: implement parentheses. "3 - 1 - 1" is 1, but "3 - (1 - 1)" is 3. "4 - (6 - (1 - 1))" is -2.

type Operation = "+" | "-" | "*" | "/";

const operations = {
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
  "*": (a: number, b: number): number => a * b,
  "/": (a: number, b: number): number => a / b,
};

function assert(expected, actual) {
  if (expected !== actual) {
    console.log(
      "Test case failed! Expected",
      expected,
      "but you returned",
      actual,
    );
  }
}

function calc(input: string): number {
  const values: number[] = [];
  const ops: Operation[] = [];
  const split = input.replaceAll("(", "( ").replaceAll(")", " )").split(" ");
  let currentValue: null | number = null;
  let currentOperation: null | Operation = null;

  for (const char of split) {
    switch (char) {
      case "(":
        values.push(currentValue!);
        ops.push(currentOperation!);
        currentValue = null;
        currentOperation = null;
        break;
      case ")":
        const lastValue = values.pop()!;
        const lastOperation = ops.pop()!;
        currentValue = operations[lastOperation](currentValue!, lastValue);
        break;
      default:
        if (!isNaN(Number(char))) {
          if (currentOperation) {
            currentValue = operations[currentOperation](
              currentValue!,
              Number(char),
            );

            currentOperation = null;
          } else {
            currentValue = Number(char);
          }
        } else {
          currentOperation = char as Operation;
        }
        break;
    }
  }
  return currentValue!;
}

assert(20, calc("5 * 4"));
assert(2, calc("66 / 33"));
assert(1, calc("2 - 1"));
assert(50, calc("50 + 0"));
assert(125, calc("5 * (5 * (4 + 1))"));
/*
stack of numbers
[5]
operand = *

open parens

[5,5,*]
operand = *

[5,5,*,*]
4
operand + 1

5 * (5 * (4 + 1))
               ^
vals 5,5
ops *,*
currVal 5
currOp null
*/
