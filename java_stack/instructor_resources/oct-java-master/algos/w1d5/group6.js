class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // reverse the order of the nodes of a given linked list
    // original: (2) -> (7) -> (8) -> (6) ->
    // reverse: (6) -> (8) -> (7) -> (2)
    // do not move the .data between nodes
    reverse() {
        if (this.head == null) return null;
        var current = this.head;

        while (current.next) {
            var node = current.next;
            current.next = node.next;
            this.addToFront(node);
        }
    }


    // return the second to last value if it exists, else return null
    // given: n = 3,  (2) -> (7) -> (8) -> (67) -> (22) -> (55)
    // return: 8
    secondToLast() {
        if (this.head == null) return null;

        var runner = this.head.next
        var prev = this.head
        while (runner.next) {
            prev = runner;
            runner = runner.next;
        }

        return prev.data;
    }


    // return the nth to last value, else return -1
    nthToLast(n) {
        if (this.head == null) return -1;

        // console.log(this.size())
        if (this.size() < n) return -1;

        let runner = this.head;
        for (let i = 0; i < this.size() - n - 1; i++) {
            runner = runner.next;
        }
        return runner.data;
    }


    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    deleteVersion1(data) {
        // create a runner
        let runner = this.head;
        // check if head is empty
        if (!runner) {
            return;
        }
        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }
    }

    deleteVersion2(val) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == val) {
            this.head = runner.next;
            return;
        }

        while (runner && runner.data !== val) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
    }

    // Return the total amount of nodes in the list
    size() {
        if (this.head === null) { // Nothing to point to at start
            return 0;
        }
        var numNodes = 1;
        var curNode = this.head; // Start with first node
        while (curNode.next !== null) { // Loop while there are nodes to point to
            curNode = curNode.next; // Go to next node (if possible)
            numNodes++;
        }
        return numNodes;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed;
    }

    // bonus: add a node to the end of the list.
    addToBack(node) {
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if (runner === null) {
            this.head = node;
            return
        }

        // start while looping
        while (runner) {
            // check if the next node is null
            if (runner.next === null) {
                // if so, add here and return
                this.count++;
                runner.next = node;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    // console log the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    // return true / false if current list contains a data equal to value
    // do not loop
    recursiveContains(val, current) {
        // if you didn't pass current, current should be the head
        if (current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if (current === null) {
            return false;
        }

        // if runner.data === value, return true up the call stack
        if (current.data === val) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(val, current.next);
    }

    // return true / false if list is empty
    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    // add node to front of list
    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    // create a node with data and add to front of list
    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
}
