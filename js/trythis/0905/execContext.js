// 120p

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
}) // A는 전역객체로 잡히지 않음. 호출될 때 parameter 로서 가장 먼저 실행됨..
// 대체 parameter 라는 것의 정체는 뭔가..
// -> 실행시점에 만들어지므로 이름이 필요 없음. 어디 다른 데 쓰이지도 않으니까..

const f1 = memoized(function a1() {})

// A(1)

var g
console.log(x)
if (g) {
	var x
	let c
}

// 블럭 내의 스코프는 언제 만들어지는가..!
