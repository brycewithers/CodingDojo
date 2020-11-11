class SLL {
    constructor() {
        this.head = null;
    }

    // console log the data of every node in the current list
    read() {
        if (this.isEmpty() == false) {
            let runner = this.head;
            while (runner.next != null) {
                console.log(runner.data);
                runner = runner.next;
            }
            console.log(runner.data);
        }
    }



    // find: return true / false if current list contains a data equal to value
    contains(value) {
        let runner = this.head;

        while (runner.next != null) {
            if (runner.data == value) {
                return true;
            }
            runner = runner.next;
        }
        if (runner.data == value) {
            return true;
        }
        return false;
    }

    // return true / false if current list contains a data equal to value
    // do not loop

    // function calls itself
    // base case that ends the crusive call
    // change the inputs every time you call the function

    recursiveContains(current, val) {
        //Initiates
        if (current === undefined) {
            current = this.head;
        }
        if (current.data == val) {
            return true;
        }
        else {
            if (current.next != null) {
                current = current.next;
            }
            else {
                return false;
            }
        }

        return recursiveContains(current, val)

    }

    recursiveContains(value, runner = null) {
        if (runner === null) {
            runner = this.head;
        }
        if (runner.data == value) {
            return true;
        }

        if (runner.next === null) {
            if (runner.data === value) {
                return true;
            } else {
                return false;
            }
        }
        return this.recursiveContains(value, runner.next)
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

while (current) {
    console.log(current.data);
    current = current.next;

    if (current.next === null) {
        console.log("this is the last node");
    }
}