// 연습문제 1
// 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.

const assert = require('assert')
// function push(array, …args) {}
const arr = [1, 2, 3, 4]

function push(array, ...args) {
	return [...array, ...args]
}

function pop(array, length) {
	return length ? array.slice(length * -1) : array[array.length - 1]
}

function unshift(array, ...args) {
	return [...args, ...array]
}

function shift(array, length = 1) {
	return array.slice(length)
}

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6])
assert.deepStrictEqual(pop(arr), 4)
assert.deepStrictEqual(pop(arr, 2), [3, 4]) // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4])
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4])
assert.deepStrictEqual(shift(arr), [2, 3, 4])
assert.deepStrictEqual(shift(arr, 2), [3, 4]) // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4])
