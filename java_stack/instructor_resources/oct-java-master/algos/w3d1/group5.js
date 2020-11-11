// Name Dylan Big Sid Jennifer Ryan
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
        if (this.head !== null) {
            this.head.prev = node;
            node.next = this.head;
            this.tail = node;
        }
        this.head = node;
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.tail == null) {
            return null;
        }
        temp = this.tail;
        if (this.length > 1) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return temp;
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        var runner = this.head;
        while (runner.data != target && runner != null) {
            runner = runner.next;
        }
        if (runner == null) {
            return;
        }
        node.next = runner;
        node.prev = runner.prev;
        runner.prev.next = node;
        runner.prev = node;
        this.length++;
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
    addTail(node) {
        if (this.tail !== null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.tail = node;
        this.length++;
    }

    // add after target if exists
    append(target, node) {
        var runner = this.head;
        while (runner.data != target && runner != null) {
            runner = runner.next;
        }
        if (runner == null) {
            return;
        }
        node.prev = runner;
        node.next = runner.next;
        runner.next.prev = node;
        runner.next = node;
        this.length++;
    }

    // pop from head
    removeHead() {
        if (this.head == null) {
            return null;
        }
        temp = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        this.length--;
        return temp;
    }
}
