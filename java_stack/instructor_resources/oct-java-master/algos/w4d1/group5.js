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
        if (tree.root == null){
            tree.root = node;
        }
        // find left node and add
        if (tree.root.val > node.val){


            BST.insert(node, tree);
        }
        if (tree.root.val < node.val){
            tree.left = node;
        }

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