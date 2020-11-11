// minStack

// recreate the Stack class as a minStack.
// minStacks support the following methods:
// push(node), pop(), peek(), isEmpty(), size()
// and a new method called
// getMin()

// getMin() should retrieve the minimum element of the stack.
// We should be able to do this in constant time with no looping!
// Just like size(), we can make this constant!
// How would we modify push and pop to keep track of a minimum element?
// Always checking if we need to update the min could be a way!

class Node {
    constructor(data) {
        this.data = data;
        this.next = next;
    }
}


class minStack {
    constructor() {
        this.top = null;
        this.length = 0;
        this.mins = []; // <- use just an array to track smallest nodes
    }

    // push a new node into the stack
    // is this new node now the smallest node in the list?
    // how would you check the current smallest?
    push(node) {
        if (this.isEmpty()) {
            this.top = node;
            this.mins.push(node.data);
        } else {
            this.top.next = node;
            this.top = node;
            if (this.mins[this.mins.length - 1] >= this.top.data) {
                this.mins.push(this.top.data);
            }
        }
    }

    // is the node your popping off the smallest node?
    pop() {
        if (this.isEmpty()) return null;

        let node = this.top;
        if (node.data == this.mins[this.mins.length - 1]) {
            this.mins.pop();
        }
        this.top = node.next;
        node.next = null;

        return node;
    }

    isEmpty() {
        return this.top == null ? true : false;
    }

    peek() {
        return this.top;
    }

    size() {
        return this.length;
    }

    // getMin should return the last node of the .mins array or null
    getMin() {
        return mins[mins.length - 1];
    }
}

var minStack = new minStack();
minStack.getMin();






// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
    var tempStack = new slStack();
    var sorted = true;

    while (!stack.isEmpty()) {
        var tempNode = stack.pop();
        if (tempStack.isEmpty() || tempStack.peek().data <= temp.data) {
            tempStack.push(tempNode);
        } else {
            sorted = false;
            tempStack.push(tempNode);
            break;
        }
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
    return sorted;
}

// bonus
// given two queues, return the one with the greater sum.
// return the queues to their original order
// assume node.data are integers
function greaterOfTwoQueues(queue1, queue2) {
    return sumQueue(queue1) >= sumQueue(queue2) ? queue1 : queue2;
}

function sumQueue(queue) {
    let newQueue = new Queue();
    let sum = 0;

    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        sum += node.data;
        newQueue.enqueue(node);
    }

    while (!newQueue.isEmpty()) {
        queue.enqueue(newQueue.dequeue());
    }

    return sum;
}


// Queue
// FIFO (First in, first out)


class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(node) {
        if (this.rear === null) {
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
    var palindrome = true;
    var stack = new Stack();  // create a stack to hold data
    var len = queue.length(); // get a fixed length

    for (var i = 0; i < len; i++) {
        var node = queue.dequeue();
        stack.push(new Node(node.data)); // we must create new Nodes for the stack
        queue.enqueue(node);
    }


    for (var i = 0; i < len; i++) {
        var dequeued = queue.dequeue();
        var popped = stack.pop();

        if (popped.data !== dequeued.data) {
            palindrome = false; // even if we flip palindrome to false, keep going to fix the queue
        }

        queue.enqueue(dequeued);
    }

    return palindrome;
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);

let myOtherQueue = new Queue();
myOtherQueue.enqueue(1);
myOtherQueue.enqueue(40);
myOtherQueue.enqueue(3);
myOtherQueue.enqueue(2);
myOtherQueue.enqueue(1);


