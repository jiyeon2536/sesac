// 연습문제 5
// Array.reduce 함수를 고차 함수로 직접 구현하시오.
const assert = require('assert')

const reduce = (arr, fn, initValue) => {
	let acc = initValue === undefined ? arr[0] : initValue
	let idx = initValue === undefined ? 1 : 0
	while (idx < arr.length) {
		acc = fn(acc, arr[idx++])
	}
	return acc
}

assert.strictEqual(
	reduce([1, 2, 3], (a, b) => a + b, 0),
	6
) // 6이면 통과!

// [1, 2, 3].reduce((a, b) => a + b, 0)) // 6

assert.strictEqual(
	reduce([1, 2, 3, 4, 5], (a, b) => a + b),
	15
)
assert.strictEqual(
	reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
	120
)
assert.strictEqual(
	reduce([2, 2, 2], (a, b) => a * b),
	8
)
assert.strictEqual(
	reduce([3, 3, 3], (a, b) => a * b, 0),
	0
)

const hong = { id: 1, name: 'Hong' }
const choi = { id: 5, name: 'Choi' }
const kim = { id: 2, name: 'kim' }
const lee = { id: 3, name: 'Lee' }
const park = { id: 4, name: 'Park' }
const users = [kim, lee, park] // 오염되면 안됨!!

console.log(reduce(users, (acc, user) => acc + user.name)) // [object Object]LeePark

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

assert.deepStrictEqual(
	reduce(a10, (acc, cur) => acc + cur, 0),
	a10.reduce((acc, cur) => acc + cur, 0)
)

assert.deepStrictEqual(
	reduce(users, (acc, user) => acc + user.name),
	users.reduce((acc, user) => acc + user.name)
)
