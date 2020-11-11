class SLL {
    constructor(){
        this.head = null;
        this.new Node = this.head;

        if(this.head = null){
            this.head = new Node(value);
        }
        else{
            runner = this.head;

        }
    }
}

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

var node = new Node(10);

// this.addToEnd= function(value){
// create the new node
// if head is null set head to new node else
// create runner set it to head
// create while
// runner = runner.next
// runner.next !==null
// set runners next to new Node
// one of these not sure which =====this.head.next.val or
// this.next.val or this.next.next.val


class SLL {
    constructor(){
        this.head = null;
    }

    isEmpty(){}
    // boolean
    addToFront(node){
        node.next = this.head;
        this.head = node;
    }
    addDataToFront(data){

    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);


var mySLL = new SLL();

mySLL.isEmpty()
mySLL.addToFront(new Node(10));
mySLL.addDataToFront(10);