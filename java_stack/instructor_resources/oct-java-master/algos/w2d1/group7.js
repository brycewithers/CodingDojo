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
        newNode.next = this.top;
        this.top = newNode;
    }
    // remove from top
    pop() {
        if (this.top == null) {
            return;
        }
        var temp = this.top;
        this.top = this.top.next;
        return temp;
    }

    // aka check top
    peek() {    // return whole node
        return this.top;
    }

    peek() {    // return only data
        if (this.top) {
            return this.top.data;
        }
        return null;
    }

    // check if empty
    isEmpty() {
        return (!this.top);
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
    var temp = new slStack();
    var count = 0;
    while (!stack.isEmpty()) {
        temp.push(stack.pop());
        count++;
    }
    while (!temp.isEmpty()) {
        stack.push(temp.pop());
    }
    return count;
};
