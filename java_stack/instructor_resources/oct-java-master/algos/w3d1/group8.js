// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node) {
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.length++;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        } 
    }

    // pop from tail
    removeTail() {
        //adding the node to the end.
        // this.tail.next = node;

        if (this.isEmpty()) {
            return;
        }
        else if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next.prev = null;
            this.tail.next = null;
            this.length--;
        }
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        let runner = this.head;
        while (!runner == null || !runner.data != target) {
            runner = runner.next;
        }
        //runner is pointing to target node
        //this.node 
        runner.previous = node;
        this.node.previous=runner.previous;
        this.node.next= runner;
        runner.next=target.next; //off here.

    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        return this.length;
    }


    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // add after target if exists
    append(target, node) { }

    // pop from head
    removeHead() { }
}
