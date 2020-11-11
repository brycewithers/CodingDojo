// https://www.cs.usfca.edu/~galles/visualization/BST.html
//Neil, Jyoti, Ryan, Carlo
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
        if(this.root===null){
            this.root = node
            return;
        }
        if(tree.right==null && tree.left==null){
            tree = node;
        }
        if(tree.val<node.val && tree.val!=node.val){
            return this.insert(node, tree.right);
        }
        else if (tree.val>node.val && tree.val!=node.val){
            return this.insert(node, tree.left);
        }

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

        // ...
        while(tree.right){
            tree = tree.right;
        }
        return tree;
    }

    getSmallestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // ...
        while(tree.left){
            tree = tree.left;
        }
        return tree;
    }
};



