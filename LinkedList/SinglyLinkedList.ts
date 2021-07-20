interface Node<T> {
  value: T
  next: Node<T> | null
}

export class SinglyLinkedList<T> {
  private head: Node<T> | null = null

  get isEmpty() {
    return !this.head
  }

  // Insertion
  // * <- at first
  unshift(value: T) {
    this.head = { value, next: this.head }
  }

  // Deletion
  // * <- at first
  shift() {
    if (this.isEmpty) {
      return null
    }

    const { value, next } = this.head
    this.head = next

    return value
  }

  // Traversal
  [Symbol.iterator] = function* (this: SinglyLinkedList<T>) {
    let node = this.head

    while (node) {
      yield node.value
      node = node.next
    }
  }
}
