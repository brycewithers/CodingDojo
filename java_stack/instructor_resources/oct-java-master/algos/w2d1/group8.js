// Names Hyunsoo, Kenny, Umer, Jennifer
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
    // my copy of AddToFront which is similar to adding to top


    push(newNode) {               //   node:  1
        node.next = this.head;
        this.head = node;
        this.count++;
    }

    // remove from top
    pop() {
        var runner = this.head;
        while (runner) {
            if (runner.next.next == null) {
                runner = runner.next;
                runner.next = null;
            }
        }
    }

    // aka check top
    peek() {
        let runner = this.head;
        let lastNode = this.head;
        if (this.head === null) return null;

        while (runner !== null) {                  // Node:  1, 2, 3, 4, 5
            lastNode = runner;
            runner = runner.next;
        }
        return lastNode;

    }

    // this is how we doit with getting the size, which traverses the nodes from Head to the last


    // check if empty
    isEmpty() {
        if (this.head === null) {
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

};
