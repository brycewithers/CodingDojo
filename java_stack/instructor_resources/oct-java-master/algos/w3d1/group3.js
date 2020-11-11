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
        if (this.head == null) {
            this.head = node;
        } else {
            this.head = this.head.prev;
            this.head = node;
        }
        this.length++;
    }

    removeTail() {
        if(this.tail !== null) {
            this.tail.prev = null;
            this.tail.next = null;
            this.length--;
        } else {
            return null;
        }
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        if(this.head == null) {
            return null;
        }
        var runner = this.head;
        while(runner.data != target){
            this.next = runner.next;
        }

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
    removeHead() { }
}
}
