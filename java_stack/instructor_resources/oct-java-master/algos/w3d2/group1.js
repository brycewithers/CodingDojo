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

    // remove and return the first node with data === val, if it exists
    removeVal(val){
        if (this.head == null){ // check if the list is empty
            return null; // if it is empty return null
        }
        if (this.length === 1 && this.head.data === val) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        }
        // otherwise
        let runner = this.head; // declare a variable 'runner' and this will let us look through the nodes
        while (runner) { // while loop that executes it's logic while the runner is pointing at a valid node
            if (runner.data === val) { // if we actually find a match between the val we are looking for and the nodes data
                if (runner == this.head) {
                    runner.next.prev = null;
                    this.head = runner.next;
                    runner.next = null;
                }
                else if (runner == this.tail) {
                    runner.prev.next = null;
                    this.tail = runner.prev;
                    runner.prev = null;
                }
                else {
                    runner.prev.next = runner.next; // next 4 lines get rid of the connections that validate the node we are trying to get rid of
                    runner.next.prev = runner.prev;
                    runner.next = null;
                    runner.prev = null;
                }
                this.length--;
                return runner;
            }
            runner = runner.next;
        }
    }

    // return true of false if the current DLL is a palindrome
    checkPalindrome(){
        let forwardRunner = this.head;
        let backwardRunner = this.tail;
        for(let i = 0; i < this.length / 2; i++) {
            if (forwardRunner.data != backwardRunner.data) {
                return false;
            }
            forwardRunner = forwardRunner.next;
            backwardRunner = backwardRunner.prev;
        }

        return true;
    }
    // pus h t
    // push to head( ode) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        var temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        var runner = this.head;
        while (runner) {
            if (runner.data === target) {
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if (runner === this.head){
                    this.head = node;
                }
                return;
            } else {
                runner = runner.next;
            }
        }
    }

    prependV2(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
                this.length++;
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        this.length++;
                        break; // Exit while loop - for now, assuming only before first instance of target
                    }
                }
            }
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
    addTail(node){}

    // add after target if exists
    append(target, node){}

    // pop from head
    removeHead(){}
}
