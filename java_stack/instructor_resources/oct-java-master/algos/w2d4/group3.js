// Ryan Scott Ramelo Jyoti

// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers

//temp var where we pop() and move that value to temp, while comparing recent pop to temp.
// if popvalue > temp, continue til end.else popvalue < temp {return "not sorted"}


function isStackSorted(stack) {
    var temp = 0;
    var temp2 = 0;
    var sorted=true;
    var newStack = new stack// (popped stack value?)


    if (this.top = null){
        return true// "nothing here"
    }

    temp = stack.pop();
    newStack.push(temp);   // 1
    //   -> top-->  1, 2, 3, 4, 5    temp = 6  temp2= 2,


    // consume all the data in the Stack
    while (!stack.isEmpty()) {
        temp2 = stack.pop(); // temp2 = 1
        if(temp.data > temp2.data) {
            sorted = false;  // this happens
        }
        // save the data popped to the new Stack.
        newStack.push(temp2);  // 5, 4, 3, 2, 1
        temp = temp2;  //  5

    }

    // save the newStack to Stack;
    while  (!newStack.isEmpty())  {
        stack.push( newStack.pop() );  // 1, 2, 3, 4, 5
    }

    return sorted;
}

function getSumOfQueue(queue) {
    var sum = 0;

    // empty
    if (queue.isEmpty()) {
        return 0;
    }

    var newQueue = new Queue();

    // consume the queue and put it in the newQueue;
    //  rear -->1, 2, 3, 4,  <-- front   5 <--
    while(!queue.isEmpty()) {
        temp = queue.dequeue();  // temp = 4

        sum += temp.data;   // sum = 5+4 = 9
        newQueue.enqueue(temp);   // FIn FOut:  front ==> 5, 4, 3, 2, 1 <--rear
    }

    // queue = newQueue;

    // rebuild the old queue, using the newQueue
    while  (!newQueue.isEmpty() ) {
        queue.enqueue( newQueue.dequeue() );
    }

    return sum;
}

// bonus
// given two queues, return the one with the greater sum.
// return the queues to their original order
function greaterOfTwoQueues(queue1, queue2) {
    var sum1 = getSumOfQueue(queue1);
    var sum2 = getSumOfQueue(queue2);

    if (sum1 > sum2) return queue1;
    else return queue2;

}




// Queue
// FIFO (First in, first out)

//he mentioned a helper class

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

console.log(isPalindrome(myQueue));
console.log(isPalindrome(myOtherQueue));


