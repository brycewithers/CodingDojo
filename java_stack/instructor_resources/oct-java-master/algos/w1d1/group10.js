// expect to be pulled back into the main room at the top of the hour!!
// groupMembers = [
//     'Britt',
//     'Kenny',
//     'Nelson',
//     'Shawn'
// ]


class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if (this.head == null) {
            return true;
        } else {
            return false;
        }
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    addDataToFront(data) {
        let node = new Node(data);
        // console.log(node.next) // null
        node.next = this.head;
        this.head = node;
        // addToFront(node)
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


