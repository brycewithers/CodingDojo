// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

// all recursive algorithms
// - call themselves
// - have a base case for returning a value and ending
// - move the inputs every time the function is called,
//   to move it closer to the base case

var myBST = new BST();
myBST.insert(new BSTNode(10));

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    // myBST.find(50);

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        if (current === undefined) {
            current = this.root;
        }

        // if current is null, return false up the call stack
        if (current == null) {
            return false;
        }

        // because current is certain to be not null, check val vs val
        // if equal, return true up the call stack
        if (current.val === val) {
            return true;
        }

        // otherwise we need to recurse

        // decide on which direction
        if (current.val > val) {
            current = current.left;
        } else {
            current = current.right;
        }

        // recurse now that current is moved, return the result
        return this.find(val, current);// true / false
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current) {
        if (current === undefined) {
            current = this.root;
        }

        // first iteration possibly move the head
        if (current.left === null) {
            this.root = current.right;
            current.right = null;
            return current;
        }

        // look ahead
        if (current.left && (current.left.left === null)) {
            var smallest = current.left;
            current.left = smallest.right;
            smallest.right = null;
            return smallest;
        }

        return this.removeSmallest(current.left);
    }

    // remove and return the smallest node of a given tree
    removeLargest(current) {
        if (current === undefined) {
            current = this.root;
        }

        // ..
    }

    // recursive
    insert(node, tree) {
        if (tree === undefined) {
            tree = this.root;
        };

        if (tree === null) {
            this.root = node;
            return;
        };

        // go left
        if (tree.val > node.val) {
            // check if null and add
            if (tree.left === null) {
                tree.left = node;
                return;
            } else {
                // else recurse left
                return this.insert(node, tree.left);
            }
            // else go right
        } else if (tree.val < node.val) {
            // check if null and add
            if (tree.right === null) {
                tree.right = node;
                return;
            } else {
                // else recurse right
                return this.insert(node, tree.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(tree) {
        // if no tree, tree is root
        if (tree === undefined) {
            tree = this.root;
        }

        // if tree becomes null, return null
        if (tree === null) {
            return null;
        }

        // if there is no further nodes, return tree
        if (tree.right === null) {
            return tree.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(tree.right);
    }

    // iterative
    getSmallestFromSubtree(tree) {
        // if tree is null, return it
        if (tree.root === null) return tree.root;

        // else create runner
        var runner = tree.root;
        // loop to the left if it exists
        while (runner.left) {
            runner = runner.left;
        }
        // when the while ends, return runner.val
        return runner.val;
    }
};