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
        if (tree == null) {
            return tree = node;
        }
        // find leaf node and add
        // insert to left
        if (node.val < tree.val){
            return this.insert(node, tree.left);
        }
        // insert to the right return this.insert(node, tree.left);
        if (node.val >= tree.val){
            return this.insert(node, tree.right);
        }
    };

    getLargestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }
        if (tree == null) return null;
        if (tree.right == null){
            return tree.val;
        }
        return this.getLargestFromSubtree(tree.right);
    }

    getSmallestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }
        if (tree == null) return null;
        while(tree.left != null) {
            tree = tree.left;
        }
        return tree.val;
        // ...
    }
};