// 연습문제 1
// 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.

const assert = require('assert')
// function push(array, …args) {}
const arr1 = [1, 2, 3, 4]

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

assert.deepStrictEqual(push(arr1, 5, 6), [1, 2, 3, 4, 5, 6])
assert.deepStrictEqual(pop(arr1), 4)
assert.deepStrictEqual(pop(arr1, 2), [3, 4]) // 2개 팝!
assert.deepStrictEqual(unshift(arr1, 0), [0, 1, 2, 3, 4])
assert.deepStrictEqual(unshift(arr1, 7, 8), [7, 8, 1, 2, 3, 4])
assert.deepStrictEqual(shift(arr1), [2, 3, 4])
assert.deepStrictEqual(shift(arr1, 2), [3, 4]) // 2개 shift
assert.deepStrictEqual(arr1, [1, 2, 3, 4])

// 연습문제 2
// 다음과 같은 deleteArray를 순수 함수로 작성하시오.
const assert = require('assert')

const arr2 = [1, 2, 3, 4]

function deleteArray(array, arg1, arg2) {
	if (Number.isInteger(arg1)) {
		if (!arg2) return array.slice(0, arg1)
		return [array.slice(0, arg1), array.slice(arg2, array.length)].flat(Infinity)
	}
	return array.filter((el) => el[arg1] !== arg2)
}

assert.deepStrictEqual(deleteArray(arr2, 2), [1, 2])
assert.deepStrictEqual(deleteArray(arr2, 1, 3), [1, 4])
assert.deepStrictEqual(arr2, [1, 2, 3, 4])

const Hong = { id: 1, name: 'Hong' }
const Kim = { id: 2, name: 'Kim' }
const Lee = { id: 3, name: 'Lee' }
const users = [Hong, Kim, Lee]

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim])
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee])
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee])
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim])
assert.deepStrictEqual(users, [Hong, Kim, Lee])

// 연습문제 3
// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
const assert = require('assert')

const hong = { id: 1, name: 'Hong' }
const choi = { id: 5, name: 'Choi' }
const kim = { id: 2, name: 'kim' }
const lee = { id: 3, name: 'Lee' }
const park = { id: 4, name: 'Park' }
const users1 = [kim, lee, park] // 오염되면 안됨!!

users.addUser = function (user) {
	return [...users, user]
}

users.removeUser = function (user) {
	return users.filter((el) => el !== user)
}

users.changeUser = function (from, to) {
	return users.map((el) => (el === from ? to : el))
}

Object.defineProperty(users, 'addUser', { enumerable: false })
Object.defineProperty(users, 'removeUser', { enumerable: false })
Object.defineProperty(users, 'changeUser', { enumerable: false })

users.addUser(hong) // [kim, lee, park, hong]
users.removeUser(lee) // [kim, park]
users.changeUser(kim, choi) // [choi, lee, park]
// // (주의) Array.prototype 조작 금지!

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong])
assert.deepStrictEqual(users, [kim, lee, park])

assert.deepStrictEqual(users.removeUser(lee), [kim, park])
assert.deepStrictEqual(users, [kim, lee, park])

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park])
assert.deepStrictEqual(users, [kim, lee, park])

// 연습문제 4
// ex1) 배열의 각 원소를 String으로 변환하시오.
const assert = require('assert')

const arr4 = [1, 2, 3, true]
const ret1 = arr4.map((el) => el.toString()) // (<이 부분을 작성하시오>);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true'])

//ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) => {
	return args
		.map((el) => el.trim())
		.filter((el) => el !== '')
		.join(' ')
} // <이 부분을 작성하시오>;
const ret2 = classNames('', 'a b c', 'd', '', 'e')
assert.strictEqual(ret2, 'a b c d e')
// 주의: ' a b c d  e'면 안됨!!
// cf. example in React
// <div classNames=({x ? 'a b' : ''}, {'' ? 'c' : ''}, {z && 'e f'})

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

// const hong = { id: 1, name: 'Hong' }
// const choi = { id: 5, name: 'Choi' }
// const kim = { id: 2, name: 'kim' }
// const lee = { id: 3, name: 'Lee' }
// const park = { id: 4, name: 'Park' }
// const users = [kim, lee, park] // 오염되면 안됨!!

console.log(reduce(users1, (acc, user) => acc + user.name)) // [object Object]LeePark

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

assert.deepStrictEqual(
	reduce(a10, (acc, cur) => acc + cur, 0),
	a10.reduce((acc, cur) => acc + cur, 0)
)

assert.deepStrictEqual(
	reduce(users1, (acc, user) => acc + user.name),
	users1.reduce((acc, user) => acc + user.name)
)

// 연습문제 6
// 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오. (1회전으로 처리!)
//  → 배열의 각 요소를 제곱   n => n ** 2            [square]
//  → 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
//  → 배열의 각 요소를 세제곱  n => n ** 3            [cube]

const assert = require('assert')

const square = (n) => n ** 2
const sqrt = (n) => Math.sqrt(n)
const cube = (n) => n ** 3

const fns = [square, sqrt, cube]

const arr = [1, 2, 3, 4, 5]
// cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]

assert.deepStrictEqual(
	arr.map((el) => fns.reduce((acc, curFn) => curFn(el))),
	[1, 8, 27, 64, 125]
)

const fnReducer = (arr, fns) => arr.map((el) => fns.reduce((acc, curFn) => curFn(el)))

fnReducer(arr, fns)

// TryThis. 수행 순서를 자유롭게 변경하도록 해보세요. ??

// [square, sqrt, cube].reduce((acc, curFn) => curFn(el))
// [cube, square, sqrt].reduce((acc, curFn) => curFn(el))

// (v) 주소검색              fns = [f주소검색, f나이검색]
// ()  이름검색              search(users, fns)
// (v) 나이검색

// 연습문제 7
// 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.

// * rules f(s, e, step)
//  - step 기본값 = s > e ? -1 : 1
//  - step === 0 || s === e ? [s]
//  - e 가 없다면,
//   ⇒ s > 0 ? e = s, s = 1
//   ⇒ s < 0 ? e = -1
//   ⇒ s === 0 ? [0]
// - 비정상(예외)
//   ⇒ s - e > 0 && step > 0 ? [] start가 end보다 큰데, step 이 양수면 안됨
//   ⇒ s - e < 0 && step < 0 ? [] start가 end보다 작은데 step이 음수면 안됨
//   즉, (s - e) * step > 0

const assert = require('assert')

function range(start, end, step = start > end ? -1 : 1) {
	if (step === 0 || start === end) return [start]
	if ((start - end) * step > 0) return []
	if (end === undefined) {
		if (start === 0) return [0]
		start > 0 ? ([end, start] = [start, 0]) : (end = -1)
	}

	return Array.from({ length: Math.floor(Math.abs(start - end) + 1) / Math.abs(step) }, (_, idx) => start + idx * step)
}

// range(1, 10, 1) // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(1, 10, 2) // [1, 3, 5, 7, 9]
// range(1, 10) // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(10, 1) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// range(10, 1, -2) // [10, 8, 6, 4, 2]
// range(5) // [1, 2, 3, 4, 5]
// range(100) // [1, 2, 3, 4, 5, …, 99, 100]
// range(-5) // [-5, -4, -3, -2, -1]
// range(5, 5) // [5]                  range(1, 5, 0); // [1]
// range(5, 5, 0) // [5]                  range(0, 5);   // [0, 1, 2, 3, 4, 5]
// range(5, 5, -1) // [5]                  range(0, -1);  // [0, -1]
// range(5, 1, 1) // []                   range(0, -3);  // [0, -1, -2, -3]
// range(1, 5, -1) // []                   range(-3, 0);  // [-3, -2, -1, 0]
// range(1, 5, 6) // [1]                  range(5, 1);   // [5, 4, 3, 2, 1]
// range(0) // [0]     range(0, 0);  // [0]      range(0, 0, 5);   // [0]
// range(2, 1, -5) // [2]     range(0, -1, -5);  // [0]

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9])
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

assert.deepStrictEqual(range(5, 5, 0), [5])

assert.deepStrictEqual(range(1, 5, 0), [1])
assert.deepStrictEqual(range(5, 5, -1), [5])
assert.deepStrictEqual(range(5, 5), [5])
assert.deepStrictEqual(range(0, 0, 5), [0])
assert.deepStrictEqual(range(1, 5, -1), [])

// 여기까지 통과

assert.deepStrictEqual(range(1, 5, 6), [1])
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5])
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0])

assert.deepStrictEqual(range(5, 1, 1), [])
assert.deepStrictEqual(range(0, -1), [0, -1])
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3])
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1])
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2])

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5])
assert.deepStrictEqual(range(0), [0])
assert.deepStrictEqual(range(0, 0), [0])
assert.deepStrictEqual(range(2, 1, -5), [2])
assert.deepStrictEqual(range(0, -1, -5), [0])
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1])
assert.deepStrictEqual(
	range(50),
	Array.from({ length: 50 }, (_, i) => i + 1)
)
assert.deepStrictEqual(
	range(1, 150, 3),
	Array.from({ length: 50 }, (_, i) => i * 3 + 1)
)

// 연습문제 8
// 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
// 배열에서 합해서 N이 되는 두 개의 요소(index)를 찾는 keyPair(arr, N)
// 함수를 작성하시오. (O(n^2) 이면 fail!!)

const assert = require('assert')

function keyPair(arr, N) {
	let obj = {}
	arr.forEach((el, idx) => (obj[el] = idx)) // 키: 숫자, 값 : 인덱스

	for (const [k, v] of Object.entries(obj)) {
		if (obj[N - k]) {
			return [v, obj[N - k]] // 현재의 인덱스, 짝꿍의 인덱스
		}
	}
}

keyPair([1, 3, 4, 5], 7) // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16) // [3, 4]
keyPair([1, 2, 4, 3, 6], 10) // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9) // [3, 4]  or [1, 5]

// cf. O(n^2) ⇒ ⇒ ⇒ O(N) || O(logN)
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2])
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4])
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4])
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [1, 5])
