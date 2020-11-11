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

        // tree is null, which means the tree is empty (move root)
        if(tree === null) {
            this.root = node;
        }
        // find leaf node and add
        if (node.val < this.root) {
            this.left = node;
        }
        // insert to left

        // insert to the right return this.insert(node, tree.left);
    };

    getLargestFromSubtree(tree){
        // if no tree, tree is root

    }

    getSmallestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }
        var runner = tree.root;
        // ...
    }
};