/**
 * Sort Stack:
 *
 * Write a program to sort a stack such that the smallest items are on the top. You can use
 * an additional temporary stack, but you may not copy the elements into any other data structure
 * (such as an array). The stack supports the following operations: push, pop, peek, and is Empty
 *
 * 
 * 
 * 
//if the stack is [5,1,3] the sorted stack should be [5,3,1]
*/

class SortedStack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  /**
   * Time: O(n)
   */
  push(val: number) {
    const temp = [];

    while (this.stack.length && this.stack[this.stack.length - 1] > val) {
      temp.push(this.stack.pop());
    }

    this.stack.push(val);

    while (temp.length) {
      this.stack.push(temp.pop());
    }
  }

  /**
   * Time: O(1)
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * Time: O(1)
   */
  peek() {
    return this.stack[0];
  }

  /**
   * Time: O(1)
   */
  isEmpty() {
    return this.stack.length === 0;
  }
}

const sortedStack = new SortedStack();
sortedStack.push(5);
sortedStack.push(7);
sortedStack.push(4);
console.log(sortedStack.stack);
sortedStack.push(3);
console.log(sortedStack.stack);
sortedStack.pop();
console.log(sortedStack.stack);
sortedStack.push(1);
console.log(sortedStack.peek());
console.log(sortedStack.isEmpty());
