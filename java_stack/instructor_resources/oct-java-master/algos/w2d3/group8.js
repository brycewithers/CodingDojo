//Neil, Angineh,John, Juan
// queue: isPalindrome
// return true or false if the queue is a palindrome:
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar



//            r                   f
// queue = <-(1)<-(2)<-(3)<-(2)<-(1)
// return true

//            r               f
// queue = <-(1)<-(3)<-(4)<-(40)
// return false

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty, length)
// return the queue back to it's original order

// you may use stacks or queues as additional storage, or even arrays
// you may create helper methods to break this challenge down into smaller parts

function isPalindrome(queue) {
    //check until the end of the queue, store it in an array
    //put it in forwards to one queue, and backwards in another queue
    //we get a length from the length method, and divide it by 2
    //take the queues and compare them to eachother by dequeueing both at the same time.
    //slam the queueback in forwards with the same queue.
    //profit


    if (queue.isEmpty() == true) {
        return null;
    }
    forwardsQueue = new Queue();
    backwardsQueue = new Queue();
    var holder = [];
    var queueLength = queue.length();
    var tempLength = queueLength;
    while (tempLength > 0) {
        holder.push(queue.dequeue());
        tempLength--;
        //goes all the way to the end of the queue slamming the node data into the array
    }
    for (x = 0; x < queueLength; x++) {
        forwardsQueue.enqueue(holder[x]);
    }
    for (y = queueLength; y > 0; y--) {
        backwardsQueue.enqueue(holder[y])
    }
    for (z = 0; z < queueLength; z++) {
        if (forwardsQueue.dequeue() === backwardsQueue.dequeue()) {

        }
        else {
            return false;
        }
    }
    for (i = 0; i < queueLength; i++) {
        queue.enqueue(holder[i]);
    }
    return true;
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);

console.log(isPalindrome(myQueue));

// Queue
// FIFO (First in, first out)



class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(node) {
        f(this.rear === null)   {
            this.rear = node;
            this.front = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.length++;
    }

    dequeue() {
        if (this.front === null) {
            return null;
        };
        if (this.front === this.rear) {
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    checkFront() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.front === null;
    }

    length() {
        return this.length;
    }
}

function readQueue(queue) {
    var tempQueue = new Queue();

    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
}


// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// first in, first out

class arrStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;

        return removed;
    }

    // aka check top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

    length() {
        return this.length;
    }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
    let newStack = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop()); h
    }

    return count;
};



