// 연습문제 7
// 다음과 같은 집합 A, B, C가 있을 때,
// 각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.
const assert = require('assert')

const intersect = (a, b) => {
	const setA = new Set(a)
	const setB = new Set(b)
	return [...setA].filter((el) => setB.has(el))
}

const diff = (a, b) => {
	const setA = new Set(a)
	const setB = new Set(b)
	return [...setA].filter((el) => !setB.has(el))
}

const union = (a, b) => {
	// 합집합 -> 둘다 합쳐서 중복제거
	const setA = new Set(a)
	for (const el of b) setA.add(el)
	return [...setA]
}

const A = [1, 2, 3, 4, 5, 3]
const B = [1, 22, 3, 44, 5]
const C = [11, 222, 3, 4, 555]
assert.deepStrictEqual(intersect(A, B), [1, 3, 5])
assert.deepStrictEqual(intersect(A, C), [3, 4])
assert.deepStrictEqual(diff(A, B), [2, 4])
assert.deepStrictEqual(diff(B, A), [22, 44])
assert.deepStrictEqual(diff(A, C), [1, 2, 5])
assert.deepStrictEqual(diff(B, C), [1, 22, 44, 5])
assert.deepStrictEqual(union(A, B), [1, 2, 3, 4, 5, 22, 44])
assert.deepStrictEqual(union(A, C), [1, 2, 3, 4, 5, 11, 222, 555])
