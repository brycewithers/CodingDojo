// expect to be pulled back into the main room at the top of the hour!!

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty(linkList) {
        if (linkList.head == null) {
            return true;
        }
        else {
            return false
        }
    };
    addToFront(stuff) {

    }
    addDataToFront(data) { }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);
var stuff = new Node(2)

var mySLL = new SLL();

mySLL.isEmpty(Node)

mySLL.addToFront(Node);
mySLL.addDataToFront(10);



//Node{
    //this.data = 10
    //this.next = stuff
}

//Node{
    //this.data = 2
    //this.next = null
}



