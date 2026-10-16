const { NotImplementedError } = require('../lib');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class Stack {
  constructor() {
    this.top = undefined;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return undefined;
    }

    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;

    return poppedValue;
  }

  peek() {
    return this.isEmpty() ? undefined : this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

module.exports = {
  Stack,
};
