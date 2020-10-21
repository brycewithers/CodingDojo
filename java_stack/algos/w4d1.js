// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

var myBST = new BST();
myBST.insert(new BSTNode(10));


function ten(){
    // ...
    return 10;
}

var example = ten() + ten();

// a function call is equal to whatever that function returns
// a function must hit a return statement for it's value to be resolved

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

        if(tree === null){
            this.root = node;
            return;
        };

        // go left
        if(tree.val > node.val){
            // check if null and add
            if(tree.left === null){
                tree.left = node;
                return;
            }else{
                // else recurse left
                return this.insert(node, tree.left);
            }
        // else go right
        }else if(tree.val < node.val){
            // check if null and add
            if(tree.right === null){
                tree.right = node;
                return;
            }else{
                // else recurse right
                return this.insert(node, tree.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // if tree becomes null, return null
        if(tree === null){
            return null;
        }

        // if there is no further nodes, return tree
        if(tree.right === null){
            return tree.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(tree.right);
    }

    // iterative
    getSmallestFromSubtree(tree){
        // if tree is null, return it
        if(tree.root === null) return tree.root;

        // else create runner
        var runner = tree.root;
        // loop to the left if it exists
        while(runner.left){
            runner = runner.left;
        }
        // when the while ends, return runner.val
        return runner.val;
    }
};