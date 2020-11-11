// Names Angineh John Nelson Umer Jennifer

// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

BST.insert(new BSTNode(10));

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    // recursive
    insert(node, tree){
        if(tree === undefined){
            tree = this.root;
        };
        while (current) { // while the current node exists
            if (current.val > node.val){ // if current nodes is greater than inserting value
                current.left = current; // move current node to the left
            }
            if (current.val < node.val){ // if current node is less than inserting value
                current.right = current; // move current node to the right
            }
        }
        current = node;
        // tree is null, which means the tree is empty (move root)

        // find leaf node and add

        // insert to left

        // insert to the right return this.insert(node, tree.left);
    };

    getLargestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        while (current.right){
            current = current.right;
        }

        return current;

        // ...
    }

    getSmallestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        while (current.left){
            current = current.left;
        }

        return current;
        // ...
    }
};