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

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current){
        if(current === undefined){
            current = this.root;
        }
        if(tree === null){
            return false;
        }
        if(tree.val === val) {
            return true;
        }
        if(tree.val > val) {
            return this.find(node, tree.left)
        }
        if(tree.val < val) {
            return this.find(node, tree.right)
        }
        // ..
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current){
        if(current === undefined){
            current = this.root;
        }
        if(current === null){
            return this.root;
        }
        var runner = current.left;
        var removed;
        while(runner) {
            runner = current.left;
        }
        removed = current;
        this.root = null;
        return removed;

        // ..
    }

    // remove and return the smallest node of a given tree
    removeLargest(current){
        if(current === undefined){
            current = this.root;
        }
        if(tree === null){
            return this.root;
        }
        var runner = tree.right;
        var removed;
        while(runner) {
            runner = tree.right;
        }
        removed = this.root;
        this.root = null;
        return removed;

        // ..
    }

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