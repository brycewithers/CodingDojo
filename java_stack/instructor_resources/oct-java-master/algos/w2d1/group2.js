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
        //no previous only next.
        //add to top, point head to new node, then new node point to previous item.

        if (this.head != null) {
            var runner = this.top;
            var prev = runner;
            this.head = newNode;
            newNode.next = prev;
        } else {
            this.head = newNode;
        }
    }

    // remove from top
    pop() {
        var runner = this.top;
        this.head = runner.next;
        runner = null;
        return runner;
    }

    // aka check top
    peek() {
        var runner = this.top;
        if (runner != null) {
            return runner.data;
        } else {
            return null;
        }
    }

    // check if empty
    isEmpty() {
        var runner = this.top;
        if (!runner) {
            console.log("empty list");
            return true;
        } else {
            return false;
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
        console.log('empty stack');
        return stack;
    } else {
        newStack = new slStack();
        var count = 0;
        var runner = stack.this.top;
        while (runner) {
            var poppedNode = stack.pop();
            newStack.push(poppedNode);
            count++;
            runner = runner.next;
        }
    }
    return count;
}











secondToLast() {
    let runner = this.head;

    if (!runner) return -1;
    if (!runner.next) return -1;

    while (runner.next) {
        if (runner.next.next === null) {
            return runner.data;
        }
        runner = runner.next;
    }
}
nthToLast(n) {
    if (this.head === null) {
        return this.head;
    }
    var runnerFast = this.head;
    var runnerSlow = this.head;
    var count = 0;
    while (runnerFast) {
        if (count >= n) {
            runnerSlow = runnerSlow.next;
        }
        runnerFast = runnerFast.next;
        count++;
    }
    return count < n ? -1 : runnerSlow.data;
}