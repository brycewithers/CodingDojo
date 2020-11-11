class SLL {
    constructor() {
      this.head = null;
    }

    // console log the data of every node in the current list
    read() {
      var current = this.head;
      // var next = this.head.next;
      //call isEmpty() function.
      while (current) {
        console.log(current.data);
        current = current.next;

        if (current.next === null) {
          console.log("this is the last node");
        }
      }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
      read(); // how do you call this function so it will go through everything then compare values?
      if (current.next === value) {
        console.log("Is this the card you're looking for?");
        return true;
      } else {
        return false;
      }
    }

    // return true / false if current list contains a data equal to value
    // do not loop

    // function calls itself
    // base case that ends the recursive call
    // change the inputs every time you call the function

    recursiveContains(current, val) {
      var next = current.next;
      //need an exit condition. or it will loop infinite.
      if (next === null) return;
      console.log(next.val);

      recursiveContains(current, next);
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
