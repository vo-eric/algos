/**
 * Queue via Stacks:
 *
 * Implement a MyQueue class which implements a queue using two stacks.
 */

class MyQueue {
  s1: number[];
  s2: number[];

  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  /**
   * Time: O(1)
   */
  push(val: number) {
    this.s1.push(val);
  }

  /**
   * Time: O(n), but amortizes to O(1)
   */
  pop() {
    if (!this.s2.length && !this.s1.length) {
      throw new Error("The queue is already empty");
    }

    if (!this.s2.length) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2.pop();
  }

  /**
   * Time: O(1)
   */
  peek() {
    return this.s1[0];
  }

  /**
   * Time: O(1)
   */
  isEmpty() {
    return this.s1.length || this.s2.length;
  }
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.pop();
console.log(queue.s1);
console.log(queue.s2);
queue.push(5);
console.log(queue.s1);
console.log(queue.pop());
console.log(queue.s1);
console.log(queue.s2);
