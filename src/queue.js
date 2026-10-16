const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getUnderlyingList() {
    if (this.isEmpty()) {
      return null;
    }

    let current = this.head;
    let result = { value: current.value, next: null };
    let currentRes = result;

    while (current.next) {
      current = current.next;
      currentRes.next = { value: current.value, next: null };
      currentRes = currentRes.next;
    }

    return result;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return undefined;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;

    return removedNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = {
  Queue
};
