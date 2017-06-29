function Node(element) {
	this.element = element;
	this.next = null;
}

function LList() {
	this.head = new Node("head");
}

LList.prototype.find = function(item) {
	var currNode = this.head;
	while (currNode.element != item && currNode.next) {
		currNode = currNode.next;
	}
	if (currNode.element == item) {
		return currNode;
	} else {
		return false;
	}
}

