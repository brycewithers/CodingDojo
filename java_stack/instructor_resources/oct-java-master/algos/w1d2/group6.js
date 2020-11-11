class SLL {
    constructor() {
        this.head = null;
    }

    // console log the data of every node in the current list
    read(){
        current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value){
        current= this.head;
        while(current){
            if(current.data===value){
                return true
            }
            else{
                current = current.next
            }
        }
        return false;
    }

    // return true / false if current list contains a data equal to value
    // do not loop

    // function calls itself
    // base case that ends the recrusive call
    // change the inputs every time you call the function

    recursiveContains(current, val){
        if(current === undefined) {
            current = this.head;
        }
        if(current===null){
            return false
        }
        if(current.value===val){
            return true
        }
        return this.recursiveContains(current.next, val)
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
myNewSLL.addToFront(new Node(5));
myNewSLL.addToFront(new Node(22));
myNewSLL.addToFront(new Node(17));


var current = myNewSLL.head;

console.log(myNewSLL.recursiveContains(current,17));

// var current = myNewSLL.head;

// while(current){
//     console.log(current.data);
//     current = current.next;

//     if(current.next === null){
//         console.log("this is the last node");
//     }
// }console.log(myNewSLL.recursiveContains(current,5));

// var current = myNewSLL.head;

// while(current){
//     console.log(current.data);
//     current = current.next;

//     if(current.next === null){
//         console.log("this is the last node");
//     }
// }