class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }
    addToFront(node) {
        //data,next
        node.next = this.head;
        this.head = node;
    }
    // head->  newNode(7)-v
    //                  (10)next-> (18)next-> null

    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);


var mySLL = new SLL();

mySLL.isEmpty()

mySLL.addToFront(new Node(10));
mySLL.addDataToFront(10);