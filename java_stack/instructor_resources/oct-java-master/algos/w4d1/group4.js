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
        if (this.isEmpty()) {
            this.root = node;
            return;
        }

        if (node.data < tree.data) {
            if (tree.left == null) {
                tree.left = node;
            } else {
                this.insert(node, tree.left);
            }
        }

        if (node.data > tree.data) {
            console.log(node);
            if (tree.right == null) {
                tree.right = node;
            } else {
                this.insert(node, tree.right);
            }
        }
        // find leaf node and add

        // insert to left

        // insert to the right return this.insert(node, tree.left);
    };

    getLargestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // ...
    }

    getSmallestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // ...
    }
};