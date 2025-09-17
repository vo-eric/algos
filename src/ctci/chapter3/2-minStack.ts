/**
 * Stack Min:
 *
 * How would you design a stack which, in addition to push and pop, has a function min
 * which returns the minimum element? Push, pop and min should all operate in 0(1) time.
 */

class MinStack {
  stack: number[];
  mins: number[];

  constructor(stack: number[] = [], mins: number[] = []) {
    this.stack = stack;
    this.mins = mins;
  }

  /**
   * Time: O(1)
   */
  push(val: number) {
    this.stack.push(val);

    if (!this.mins.length || this.mins[this.mins.length - 1] >= val) {
      this.mins.push(val);
    }
  }

  /**
   * Time: O(1)
   */
  pop() {
    const val = this.stack.pop();

    if (this.mins[this.mins.length - 1] === val) {
      this.mins.pop();
    }

    return val;
  }

  /**
   * Time: O(1)
   */
  min() {
    return this.mins[this.mins.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
console.log(minStack.min()); //3
minStack.push(2);
minStack.push(1);
minStack.push(2);
// console.log(minStack.mins)
minStack.pop();
console.log(minStack.min()); //1
minStack.pop();
console.log(minStack.min()); //2
minStack.push(-1);
minStack.push(-1);
minStack.pop();
console.log(minStack.min()); //-1
minStack.pop();
console.log(minStack.min()); //2
