class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let current = this.head;
    let count = 0;
    if (current === null) {
      return 0;
    }
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;
    if (this.head === null) {
      return null;
    }
    if (current.next === null) {
      return current;
    }
    while (current.next.next !== null) {
      current = current.next;
    }
    return current.next;
  }

  at(index) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (index === count) {
        return current;
      }
      count++;
      current = current.next;
    }
  }

  pop() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = "";
    if (this.head === null) {
      string = "null";
    }
    while (current !== null) {
      string += `${current.value}` + "->";
      current = current.next;
    }
    string += "null";
    return string;
  }
}
