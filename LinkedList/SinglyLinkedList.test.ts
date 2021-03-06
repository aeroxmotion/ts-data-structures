import { SinglyLinkedList } from './SinglyLinkedList'

const singlyLinkedList = new SinglyLinkedList<number>()

console.assert(singlyLinkedList.isEmpty, 'List should start empty')

singlyLinkedList.unshift(1)

console.assert(!singlyLinkedList.isEmpty, 'List should be not empty after unshifting')

singlyLinkedList.unshift(2)

let count = 3

for (const value of singlyLinkedList) {
  console.assert(value === --count, `Count should be: ${count} instead we got ${value}`)
}

console.assert(singlyLinkedList.shift() === 2, 'First value should be `2` after shifting for the first time')
console.assert(singlyLinkedList.shift() === 1, 'First value should be `1` after shifting for the second time')
console.assert(singlyLinkedList.isEmpty, 'List should be empty after shifting twice')
