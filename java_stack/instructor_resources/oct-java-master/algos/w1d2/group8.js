class SLL {
    constructor() {
        this.head = null;
    }

    // console log the data of every node in the current list
    read(){
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }


    }

    // find: return true / false if current list contains a data equal to value
    contains(value){
        var runner = this.head;
        while (runner) {
            if (runner.data === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    contains(value){
        var runner = this.head;
        while (runner.next && runner.data != value){
            runner = runner.next;
        }
    return runner.data == value;
    }

    // return true / false if current list contains a data equal to value
    // do not loop

    // function calls itself
    // base case that ends the recursive call
    // change the inputs every time you call the function

    recursiveContains(current, val){
        if (current == null){
            return false;
        } else if (current.data == val){
            return true;
        } else {
            return recursiveContains(current.next, val);
        }
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

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

// var node = new Node(10);


// var mySLL = new SLL();

// mySLL.isEmpty()

// mySLL.addToFront(new Node(10));
// mySLL.addDataToFront(10);


var myNewSLL = new SLL();
myNewSLL.addToFront(5);
myNewSLL.addToFront(22);
myNewSLL.addToFront(17);


var current = myNewSLL.head;

while(current){
    console.log(current.data);
    current = current.next;

    if(current.next === null){
        console.log("this is the last node");
    }
}