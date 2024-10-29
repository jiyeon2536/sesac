// 연습문제 1
// 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.

import assert from 'assert'
const arr = [1, 2, 3, 4]

function push(array, ...args) {
	return [...array, ...args]
}

const push = (arr, ...args) => [...arr, ...args]

function pop(array, length) {
	return length ? array.slice(length * -1) : array[array.length - 1]
}

const pop = (arr, cnt = 1) => (cnt === 1 ? arr.at(-cnt) : arr.slice(-cnt))

function unshift(array, ...args) {
	return [...args, ...array]
}

const unshift = (arr, ...args) => [...args, ...arr]

// [shift되는 원소들, 남은 원소들]
function shift(array, length = 1) {
	return [array.slice(0, length), array.slice(length)]
}

const shift = (arr, cnt = 1) => [arr.slice(0, cnt), arr.slice(cnt)]

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6])
assert.deepStrictEqual(pop(arr), 4)
assert.deepStrictEqual(pop(arr, 2), [3, 4]) // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4])
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4])
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]])
assert.deepStrictEqual(shift(arr, 2), [
	[1, 2],
	[3, 4],
]) // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4])
