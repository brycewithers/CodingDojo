// https://www.cs.usfca.edu/~galles/visualization/BST.html
//Neil Dylan Ryan Scott
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

//root, root.left, root.right, root.left.left, root.left.right
//root.right.left, root.right.right, root.left.left.left, root.left.left.right,
//root.left.right.left, root.left.right.right,
//root.right.left.left, root.right.left.right, root.right.right.left, root.right.right.right


// [root],
//[root.left root.right],
//[root.left's nodes, root.right's nodes]
//[root.left.left's nodes, root.left.right's nodes, root.right.left's nodes, root.right.right's nodes]
/*
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    // height
    // size
    // delete(val)

    // Preorder (DFS - Depth First Search)
    // (Root / Parent, Left, Right)
    // 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    printPreorder(current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // read everything, then recurse
            console.log(current.val);
            this.printPreorder(current.left);
            this.printPreorder(current.right);
        }
    }

    // Inorder (DFS)
    // (Left, Root / Parent, Right)
    // 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
    printInorder(current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // read everything, then recurse
            this.printInorder(current.left);
            console.log(current.val);
            this.printInorder(current.right);
        }
    }

    // Postorder (DFS)
    // (Left, Right, Root / Parent)
    // 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
    printPostorder(current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // read everything, then recurse
            this.printPostorder(current.left);
            this.printPostorder(current.right);
            console.log(current.val);
        }
    }

    // Preorder (DFS)
    // (Root / Parent, Left, Right)
    // 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    returnPreorderArray(current, array) {
        if (array === undefined) {
            array = [];
        }
        if (current === undefined) {
            current = this.root;
        }
        if (current) {
            // read everything, then recurse
            array.push(current.val);
            this.returnPreorderArray(current.left);
            this.returnPreorderArray(current.right);
        }

    }


    // BONUS
    // Levelorder (BFS - Breath first search)
    // Row-by-row left-right top-down
    // 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90
    // HINT: you can use a queue, stack, or array to store nodes
    printLevelorder(current, array1) {
        if (current === undefined) {
            current = this.root;
        };
        if (array1 === undefined) {
            array1 = [];
        }
        array1.push(current)
        if (current) {
            array1.push(current.left)
            array1.push(current.right)
            this.printLevelorder(current, array1)
        }

        print(array1);

        // ...
    }

    printLevelorder(current) {
        if (current == undefined) {
            current = this.root;
        }
        if (current == null) return;
        arr = [];
        arr.push(current);
        i = 0;
        while (i <= arr.length) {
            current = arr[i];
            i++;
            if (current.left != null) {
                arr.push(current.left);
            }
            if (current.right != null) {
                arr.push(current.right);
            }
        }
        console.log(arr);
        return arr;
    }


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