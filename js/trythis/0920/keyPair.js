// 연습문제 8
// 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
// 배열에서 합해서 N이 되는 두 개의 요소(index)를 찾는 keyPair(arr, N)
// 함수를 작성하시오. (O(n^2) 이면 fail!!)

const assert = require('assert')

// function keyPair(arr, N) {
// 	let obj = {}
// 	arr.forEach((el, idx) => (obj[el] = idx)) // 키: 숫자, 값 : 인덱스

// 	for (const [k, v] of Object.entries(obj)) {
// 		if (obj[N - k]) {
// 			return [v, obj[N - k]] // 현재의 인덱스, 짝꿍의 인덱스
// 		}
// 	}
// }

const keyPair = (arr, n) => {
	const cache = {}
	for (let i = 0; i < arr.length; i++) {
		if (n - arr[i] in cache) return [cache[n - arr[i]], i] // 짝궁의 인덱스
		cache[arr[i]] = i
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
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4])
