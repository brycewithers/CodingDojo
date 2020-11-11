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
        var runner = this.head;
        node.next = runner;
        this.head = node;
    }

    // pop from tail
    removeTail() {
        if (this.head === null) {
            return null;
        } else {
            var removed = this.tail;
            this.tail = removed.prev;
            removed.next = null;
            return removed;
        }
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        if(this.head === null) {
            return null;
        }
        var runner = this.head;
        while(runner) {
            if(!target) { 
                return DLList;
            } else {
                var prev = target.prev;
                target.prev = node;
                node.prev = prev;
            }
        }
        return DLList;
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
