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
        this.top = null; // this.top, this.end
    }

    // add to top
    push(newNode) {
        newNode.next = this.top;
        this.top = newNode;
    }

    // remove node in the top and return it
    pop() {
        if (this.isEmpty()) return null;

        var removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        return removed;
    }

    // return the last node element
    peek() {
        var current = this.top;
        var runner = this.top.next;

        if (this.top === null) return null;

        while (runner) {
            current = current.next;
            runner = runner.next;

        }
        return current;
    }

    // check if empty
    isEmpty() {
        if (this.top === null) {
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
// you may only use public stack methods push pop peek is empty
function countStack(stack) {
    let runner = this.top;
    let nodeCount = 0;
    if (this.top === null) return 0;

    while (runner !== null) {
        nodeCount++;
        runner = runner.next;
    }
    return nodeCount;
};

function read() {
    console.log("======= Current List Data ======");
    let runner = this.top;

    while (runner) {
        console.log(runner.data);
        runner = runner.next;
    }
    return;
}

// test our code in the methods above
var myNewSLL = new slStack();

// test the push i.e. putting node at the top
myNewSLL.push(1);
myNewSLL.push(2);
myNewSLL.push(3);
myNewSLL.push(4);
myNewSLL.push(5);
myNewSLL.read();  //  5, 4, 3, 2, 1
