class Node {
  constructor(
    public value: string,
    public left: Node | null,
    public right: Node | null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const a = new Node("A", null, null);
const b = new Node("B", null, null);
const c = new Node("C", null, null);
const d = new Node("D", null, null);
const e = new Node("E", null, null);
const f = new Node("F", null, null);
const g = new Node("G", null, null);
const h = new Node("H", null, null);
const i = new Node("I", null, null);
const j = new Node("J", null, null);
const k = new Node("K", null, null);
const l = new Node("L", null, null);
const m = new Node("M", null, null);
const n = new Node("N", null, null);
const o = new Node("O", null, null);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;
e.left = j;
e.right = k;
f.left = l;
f.right = m;
g.left = n;
g.right = o;

/*

render out the root

we constantly want the queue to be shown
at each iteration, highlight the current level
show the current element that has been shifted out
  highlight the left and right of that current element
  push those into the queue


DISPLAYS:
  the queue
  the level we are working on
  the current element
  the left and right of the current element

*/

//this bfs is to generate the queue at each iteration

const queues = [
  ["A"],
  ["B", "C"],
  ["C", "D", "E"],
  ["D", "E", "F", "G"],
  ["E", "F", "G", "H", "I"],
  ["F", "G", "H", "I", "J", "K"],
  ["G", "H", "I", "J", "K", "L", "M"],
  ["H", "I", "J", "K", "L", "M", "N", "O"],
  ["I", "J", "K", "L", "M", "N", "O"],
  ["J", "K", "L", "M", "N", "O"],
  ["K", "L", "M", "N", "O"],
  ["L", "M", "N", "O"],
  ["M", "N", "O"],
  ["N", "O"],
  ["O"],
];

const levels = [
  ["A"],
  ["B", "C"],
  ["D", "E", "F", "G"],
  ["H", "I", "J", "K", "L", "M", "N", "O"],
];

const printQueue = (root: Node) => {
  const queues = [];
  const queue = [root];

  while (queue.length > 0) {
    // console.log('queue', queue);
    const mappedQueue = queue.map((node) => node.value);
    queues.push([...mappedQueue]);
    // console.log('queues', queues);
    const curr = queue.shift();

    if (curr?.left) {
      queue.push(curr.left);
    }

    if (curr?.right) {
      queue.push(curr.right);
    }
  }

  return queues;
};

const printLevels = (root: Node) => {
  const levels = [];
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    const level = [];

    for (let i = 0; i < length; i++) {
      const curr = queue.shift();
      level.push(curr?.value);
      if (curr?.left) {
        queue.push(curr.left);
      }
      if (curr?.right) {
        queue.push(curr.right);
      }
    }
    levels.push(level);
  }
  return levels;
};
