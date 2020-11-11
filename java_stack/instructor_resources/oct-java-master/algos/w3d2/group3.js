//Names Ryan Cindhuri Xiao Jennifer Neil
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
        current = this.head;
        while(current.data!=val){
            current = current.next;
        }
        if(current.data != val && current.next === null){
            return null
        }
        else{
            removed = current;
            current.prev.next = current.next;
            current.next.prev = current.prev;
            removed.next =null;
            removed.prev = null;
        }
        this.length--;
        return removed;
//once we have this.node (with data) we want to put this.node.prev = this.node.next
//this.node.next=this.node.prev
//this.node= null
//forgot one arrow somewhere..


    }
//traverse through the DLL looking if the node.data is equal to the val
//if the node.data is equal to the value of the data, place a flag,
//then, we take the .prev and assign it's .next to the current node's .next
//we take the current node's next and assign it's prev to the current node's .prev.
//decrement the length
//return out the node


    // return true of false if the current DLL is a palindrome
    checkPalindrome(){
        var frontRunner =this.head;
        var forwardCount = 0;
        var backwardCount = 0;
        var backRunner = this.tail;
        halfLength = this.length/2;
        while(forwardCount <= halfLength && backwardCount <= halfLength){
            if(frontRunner.data === backRunner.data){
                frontRunner = frontRunner.next;
                backRunner = backRunner.prev;
                forwardCount++;
                backwardCount++;
            }
            else{
                return false;
            }
        }
        return true;

    }
//check both tail and head and decrement the tail, and increment the head,
//checking if both are equal until we hit the middle. we can check for the middle
//because we have the length property
//, returning true or false if they match.



    // push to head
    addHead(node) {
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
