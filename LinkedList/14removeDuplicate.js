// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.

  let temp = linkedList;
  if (temp == null) return;

  while (temp.next != null) {
    if (temp.value == temp.next.value) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return linkedList;
}
