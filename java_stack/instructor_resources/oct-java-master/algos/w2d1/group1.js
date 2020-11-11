// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO


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
    }

    // add to top
    push(newNode) {
        var current = this.head; // make current;
        newNode.next = current;
        this.head = newNode;

    }

    // remove from top
    pop() {
        var current = this.head;
        this.head = current.next;
        return current;
    }

    // aka check top
    peek() {
        var current = this.head;
        return current;
    }

    // check if empty
    isEmpty() {
        var current = this.head
        if (current) {
            return false;
        } else {
            return true;
        }
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
    if (stack.isEmpty()) {
        return 0;
    } else {
        var newArr = new slStack();
        var counter = 0;
        //  go with a while loop instead for simplicity
        while (stack.peek()) { // peek to check if a node exists in front
            newArr.push(stack.pop())// we pop the stack and push into our new stack
            counter++; // increase counter
        }
        //we now have a full counter of each node which is in backwards order
        // We wil need to have the stack returned back into original order, so we reverse the method
        while (newArr.peek()) { // peek to check if a node exists in front
            stack.push(newArr.pop())// we pop the stack and push into our new stack
        }
        //stack is now put into correct order again


        return counter;
        // return the counter for total nodes in stack
    }



}
