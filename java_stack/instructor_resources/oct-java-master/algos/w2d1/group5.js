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
        this.top = null;
    }

    // add to top
    push(newNode) {
        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            let node = this.top;
            this.top = newNode;
            this.top.next = node;
        }
    }

    // remove from top
    pop() {
        if (this.isEmpty()) return null;
        let node = this.top;
        this.top = this.top.next;
        node.next = null;
        return node;
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top == null;
    }
}

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isEmpty

function countStack(stack) {
    let newStack = new slStack();
    let count = 0;
    while (stack.peek()) {
        newStack.push(stack.pop());
        count++;
    }
    while (newStack.peek()) {
        stack.push(newStack.pop());
    }
    return count;
}
