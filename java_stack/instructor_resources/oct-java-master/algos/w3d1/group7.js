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
    addHead(node)  {
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    // pop from tail
    removeTail()  {
        if (this.isEmpty()) return null;

        let node = this.tail;
        this.tail = node.prev;
        return node;
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node)  {
        if (this.isEmpty) return null;
        let runner = this.head;
        while (runner) {
            if (runner.data == target) {
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
            }
            runner = runner.next;
        }
    }

    // return is empty
    isEmpty()  {
        return this.head === null;
    }

    // return length
    size()  {
        return this.length;
    }


    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node)  {
        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    // add after target if exists
    append(target, node)  {
        if (this.isEmpty) return null;
        let runner = this.head;
        while (runner) {
            if (runner.data == target) {
                node.next = runner.next;
                node.prev = runner;
                runner.next.prev = node;
                runner.next = node;
            }
            runner = runner.next;
        }
    }

    // pop from head
    removeHead()  {
        if (this.isEmpty) return null;
        if (this.size() == 1) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            return node;
        }
        let node = this.head;
        this.head = node.next;
        this.head.prev = null;
        node.next = null;
        return node;
    }
}
