import { DoublyLinkedList } from './DoublyLinkedList'

const doublyLinkedList = new DoublyLinkedList<number>()

console.assert(doublyLinkedList.isEmpty, 'List should start empty')

doublyLinkedList.push(1)

console.assert(!doublyLinkedList.isEmpty, 'List should be not empty after pushing')

doublyLinkedList.unshift(2)
doublyLinkedList.push(0)

let count = 3

for (const value of doublyLinkedList) {
  console.assert(value === --count, `Count should be: ${count} instead we got ${value}`)
}

console.assert(doublyLinkedList.shift() === 2, 'First value should be `2` after first shifting')
console.assert(doublyLinkedList.pop() === 0, 'Last value should be `0` after first popping')
console.assert(doublyLinkedList.shift() === 1, 'First value should be `1` after second shifting')
console.assert(doublyLinkedList.isEmpty, 'List should be empty after shifting/popping')
