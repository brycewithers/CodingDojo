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
        this.head = newNode;
    }

    // remove from top
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        var remove = this.top;
        this.head = this.head.next;
        remove.next = null;
        return remove;
    }

    // aka check top
    peek() {
        var current = this.top;
        while (current) {
            current = current.next;
        }
        return current;
    }

    // check if empty
    isEmpty() {
        if (this.top == null) {
            return true;
        }
        return false;
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
    var count = 0;
    var current = stack.peek();
    if (stack.isEmpty()) {
        return count;
    }
    while (current) {
        var newPop = stack.pop();
        newStack.push(newPop);
        count++;
    }
    return count;
};
