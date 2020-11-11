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
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        node.prev = null;
    }

    // pop from tail
    removeTail() { 
        if(this.head == null){
            return false;
        }
        this.tail.prev = null;
        this.tail = this.tail.prev ;
        this.tail.next = null ; 
        

    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node) { 
        if(this.head == null){
            return false;
        }

        var runner = this.head;
        while (runner.data != target) {
            runner = runner.next;
            return false;
        }

        node.next = runner;
        node.prev = runner.prev;
        runner.prev.next = node;
        runner.prev = node;
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
