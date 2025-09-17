/**
 * Stack of Plates:
 *
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
 * threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
 * composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
 * (that is, pop () should return the same values as it would if there were just a single stack).
 *
 * FOLLOW UP
 * Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack
 *
 */

class SetOfStacks {
  stacks: number[][];
  private capacity: number;

  constructor(capacity = 10) {
    this.stacks = [[]];
    this.capacity = capacity;
  }

  /**
   * Time: O(1)
   */
  push(val: number) {
    const currentStack = this.stacks[this.stacks.length - 1];
    if (currentStack.length === this.capacity) {
      this.stacks.push([val]);
    } else {
      currentStack.push(val);
    }
  }

  /**
   * Time: O(1)
   */
  pop() {
    const currentStack = this.stacks[this.stacks.length - 1];
    const val = currentStack.pop();

    if (!currentStack.length) {
      this.stacks.pop();
    }

    return val;
  }

  /**
   * Time: O(1)
   */
  popAt(index: number) {
    const stack = this.stacks[index];

    if (!stack.length) {
      throw new Error("The substack is already empty");
    }

    return stack.pop();
  }
}

const setOfStacks = new SetOfStacks(2);
setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(4);
console.log(setOfStacks.stacks);
setOfStacks.pop();
setOfStacks.pop();
console.log(setOfStacks.stacks);
setOfStacks.pop();
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(4);
console.log(setOfStacks.stacks);
setOfStacks.popAt(1);
console.log(setOfStacks.stacks);
setOfStacks.push(4);
console.log(setOfStacks.stacks);
setOfStacks.popAt(0);
setOfStacks.push(5);
console.log(setOfStacks.stacks);
