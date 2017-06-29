function Node (data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}

Node.prototype.show = function() {
	return this.data;
}

function BST() {
	this.root = null;	
}

BST.prototype.insert = function(data) {
	var n = new Node(data, null, null);
	if (!this.root) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if(!current) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (!current) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

BST.prototype.inOrder = function(node) {
	if (node) {
		this.inOrder(node.left);
		console.log(node.show());
		this.inOrder(node.right);
	}
}

var bst = new BST();
bst.insert(10);
bst.insert(9);
bst.insert(12);
bst.insert(18);
bst.insert(7);
bst.inOrder(bst.root);