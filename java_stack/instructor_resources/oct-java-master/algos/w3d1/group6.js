//John, Neil, Scott
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
        if (this.head === null) {
            this.head = node;
        }
        else if (this.head === this.tail) {
            this.head = node
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        else {
            current = this.head;
            current.prev = node;
            node.next = current;
            this.head = current.prev;
        }
    }

    // pop from tail
    removeTail() {
        last = this.tail;
        this.tail = last.prev;
        last.prev.next = null;
        last.prev = null;
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        current = this.head;
        while(current.data != target){
            current = current.next;
        }
        if(current.next === null && current.data != target){
            return null;
        }
        current.prev.prev.next = node;
        current.prev = node;
        node.next = current;
        node.prev = current.prev.prev;
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
        if(this.tail === null){
            this.tail === node;
        }
        else if(this.tail === this.head){
            this.tail = node;
            this.tail.prev = this.head;
            this.head.next = this.tail;
        }
        else{
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = current.next;
        }
    }

    // add after target if exists
    append(target, node) {
        current = this.head;
        while(current.data != target){
            current = current.next;
        }
        if(current.next === null && current.data != target){
            return null;
        }
        current.next.next.prev = node;
        node.next = current.next.next
        node.prev = current;
        current.next = node;


    }

    // pop from head
    removeHead() {
        if(this.head === null){
            return null;
        }
        else{
            current = this.head;
            this.head = current.next;
            this.head.prev = null;
            current.next = null;
        }
    }
}
