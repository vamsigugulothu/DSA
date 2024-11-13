class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(item) {
    let node = new Node(item);
    if (this.head == null) {
      this.head = node;
      this.size += 1;
    } else {
      let cur = this.head;
      while (cur.next != null) {
        cur = cur.next;
      }
      cur.next = node;
      this.size += 1;
    }
  }

  addAtIndex(index, item) {
    if (index < 0 || index > this.size) {
      console.log("index out of bounds");
      return;
    }
    let node = new Node(item);
    let cur = this.head;
    if (index === 0) {
      node.next = cur;
      this.head = node;
    } else {
      let i = 0;
      let prev = null;
      while (i < index) {
        prev = cur;
        cur = cur.next;
        i++;
      }
      node.next = cur;
      prev.next = node;
    }
    this.size++;
  }

  delete(ele) {
    if (this.size === 0) {
      console.log("List is empty");
      return;
    }
    let cur = this.head;
    let prev = null;
    while (cur.data !== ele) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = cur.next;
    this.size -= 1;
  }

  deleteAtIndex(index) {
    if (index < 0 || index > this.size) {
      console.log("index out of bounds");
      return;
    }

    let cur = this.head;
    if (index === 0) {
      this.head = cur.next;
    } else {
      let i = 0;
      let prev = null;
      while (i < index) {
        prev = cur;
        cur = cur.next;
        i++;
      }
      prev.next = cur.next;
    }
    this.size -= 1;
  }

  print() {
    let cur = this.head;
    let res = "";
    while (cur) {
      res += cur.data + " ";
      cur = cur.next;
    }
    console.log(res);
  }
}

const list = new LinkedList();
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.addAtIndex(0, 2);
list.addAtIndex(3, 12);
list.deleteAtIndex(0);
list.print();
list.deleteAtIndex(3);
list.print();
list.delete(5);
list.print();
console.log(list);
