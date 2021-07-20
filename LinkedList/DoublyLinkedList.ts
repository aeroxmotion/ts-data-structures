interface Node<T> {
  value: T
  prev: Node<T> | null
  next: Node<T> | null
}

export class DoublyLinkedList<T> {
  private head: Node<T> | null = null
  private tail: Node<T> | null = null

  get isEmpty() {
    // Here we double check for both `tail` and `head`
    // which is not needed, but we leave it here
    // for implementation's clarity
    return !this.head && !this.tail
  }

  // Insertion
  // -> * at last
  push(value: T) {
    const node: Node<T> = {
      value,
      prev: null,
      next: null
    }

    if (this.isEmpty) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
  }

  // * <- at first
  unshift(value: T) {
    const node: Node<T> = {
      value,
      prev: null,
      next: null
    }

    if (this.isEmpty) {
      this.head = this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
  }

  // Deletion
  // -> * at last
  pop() {
    if (this.isEmpty) {
      return null
    }

    const { value, prev } = this.tail
    this.tail = prev

    if (prev) {
      prev.next = null
    } else {
      // No `prev` means we reach the `head`
      // so cleanup head
      this.head = null
    }

    return value
  }

  // * <- at first
  shift() {
    if (this.isEmpty) {
      return null
    }

    const { value, next } = this.head
    this.head = next

    if (next) {
      next.prev = null
    } else {
      // No `next` means we reach the `tail`
      // so cleanup tail
      this.tail = null
    }

    return value
  }

  // Traversal
  [Symbol.iterator] = function* () {
    const i = this as DoublyLinkedList<T>
    let node = i.head

    while (node) {
      yield node.value
      node = node.next
    }
  }
}
