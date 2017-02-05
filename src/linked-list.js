const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node (data);

        if (this.length != 0) {
            this._tail.next = node;
            node.prev = this._tail;
        }
        else {
            this._head = node;
        }
        this._tail = node;

        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        var node = new Node();
        node = this._head;
        for (var i = 0; i < this.length; i++){
            node = node.next;
        }
        return this._tail.data;
    }

    at(index) {
        var node = new Node();
        node = this._head;
        for (var i = 0; i < index; i++){
            node = node.next;
        }
        return node.data;
    }

    insertAt(index, data) {
        var temp = new Node();
        temp = this._head;
        var node = new Node(data);
        if(this.length) {
            for (var i = 0; i < index; i++) {
                temp = temp.next;
            }
            temp.data = node.data;
        } else {
            return -1;
        }
        return this;
    }

    isEmpty() {
        if(this._head == null)
            return true;
        else
            return false;
    }

    clear() {
        var node = new Node();
        var temp = this._head;
        for (var i = 0; i < this.length - 1; i++){
            temp = temp.next;
            temp.prev = node;
        }

        this._tail = node;
        this._head = node;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var tempNode = this._head;
        var count = 0;
        if (index == 0) {
            this._head = tempNode.next;
            if (!this._head) {
                this._tail = null;
            } else {
                this._head.prev = null;
            }
        } else if (index == (this.length - 1)) {
            tempNode = this._tail;
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            while (count < index) {
                tempNode = tempNode.next;
                count++;
            }
            tempNode.prev.next = tempNode.next;
        }
        this.length--;

        return this;
    }

    reverse() {
        var temp = new Node();
        var node = new Node();
        node = this._head;

        if (this.length > 1) {
            for (var i = 0; i < this.length; i++) {
                temp = node.next;
                node.next = node.prev;
                node.prev = temp;
                node = node.prev;
            }
        }
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;

        return this;
    }

    indexOf(data) {
        var node_1 = new Node(data);
        var node_2 = new Node();
        var count = 0;
        var temp = 0;
        node_2 = this._head;
        for (; count < this.length; count++){
            if(node_1.data == node_2.data) {
                temp++;
                break;
            }
            node_2 = node_2.next;
        }
        if (temp == 0)
            return -1;
        else
            return count;
    }
}
module.exports = LinkedList;
