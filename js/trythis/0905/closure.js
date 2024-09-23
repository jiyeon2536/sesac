// 연습문제 1
// 1~n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오
// 단 array 메소드를 사용하지 말고 destructuring을 사용하시오
// loop 돌리지 마세요

function makeArray(n) {
	if (n === 1) return [1]
	return [...makeArray(n - 1), n]
}

function makeReverseArray(n) {
	if (n === 1) return [1]
	return [n, ...makeReverseArray(n - 1)]
}

const res1 = makeArray(10)
const res2 = makeReverseArray(5)

console.log(res1)
console.log(res2)

// 연습문제 2
// 클로저 예시 (memoizedFactorial) 코드의 실행 컨텍스트를 그려보세요

function memoized(fn) {
	// 범용 memoization function
	const memoizedTable = {} // {3: 3 * 2, 2: 2 * 1, 1: 1}
	return function B(k) {
		return memoizedTable[k] || (memoizedTable[k] = fn(k))
	}
}

const memoizedFactorial = memoized(function A(n) {
	if (n === 1) return 1
	return n * memoizedFactorial(n - 1)
})

console.log(memoizedFactorial(3)) // B(3) ⇒ 6
console.log(memoizedFactorial(5))

// 평가문제 1)
// 피보나치 수열을
// 1) Loop 이용하여 작성하시오

function loopFib(n) {
	if (n < 2) return n
	let fibArr = Array.from({ length: n + 1 }, (_, i) => (i === 1 ? 1 : 0))
	for (let i = 2; i <= n; i++) {
		fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
	}
	return fibArr[n]
}

console.log('loop', loopFib(5))
console.log('loop', loopFib(7))
console.log('loop', loopFib(30))

// 2) 순수 재귀를 이용하여 작성하시오

function fibonacci(n) {
	if (n < 2) return n
	return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(5)) // 5
console.log(fibonacci(7)) // 13
console.log(fibonacci(30)) // 832040
// console.log(fibonacci(-1))

// 3) memoization 하여 작성하시오

function memoization(fn) {
	let memoTable = {}
	return function memoize(n) {
		console.log('🚀 ~ memoization ~ memoTable:', memoTable)
		return memoTable[n] || (memoTable[n] = fn(n))
	}
}

function f(n) {
	if (n < 2) return n
	return f(n - 2) + f(n - 1)
}

const memoFibo = memoization(f)

console.log('memo', memoFibo(5))
console.log('memo', memoFibo(7))
console.log('memo', memoFibo(0))
