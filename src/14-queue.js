const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.q = new ListNode();
    this.queue = this.q;
  }

  get size() {
    return this.queue.length;
  }

  enqueue(el) {
    this.queue.value = el;
    this.queue.next = new ListNode();
    this.queue = this.queue.next;
  }

  dequeue() {
    const res = this.q.value;
    this.q.value = this.q.next.value;
    this.q.next = this.q.next.next;
    return res;
  }
}

module.exports = Queue;
