const assert = require('assert')

// 1. 특정 배열의 원소 중 소수가 존재하는지 체크하는 함수를 작성하세요

// some, every, filter 쓰는 것임.. 다시 풀어봐~ ㅠㅠ

// const isPrime = (n) => {
// 	if (n === 1) return false
// 	for (let i = 2; i <= Math.sqrt(n); i++) {
// 		if (n % i === 0) return false
// 	}
// 	return true
// }

// 배열 메소드만으로 구현
const isPrime = (n) => {
	return true
}
// every 써서 만들기

const hasPrime = (arr) => (arr.findIndex((el) => isPrime(el)) === -1 ? false : true)
// filter, some 써서 만들기

assert.strictEqual(hasPrime([1, 2, 3]), true)
assert.strictEqual(hasPrime([4, 6, 8]), false)

// 2. 특정 배열의 원소 중 소수만 추출하는 함수를 작성하세요
const primeNumbers = (arr) => arr.filter((el) => isPrime(el))
const arr100 = Array.from({ length: 100 }, (_, i) => i + 1)

assert.deepStrictEqual(
	primeNumbers(arr100),
	[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
)
