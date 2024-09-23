// 연습문제 2
// 함수를 한번만 실행하게 하는 once 함수를 작성하시오

function once(fn, n) {
	let flag = true
	setInterval(() => {
		flag = true
	}, 1000 * n)
	return function (x, y) {
		if (flag) {
			console.log(fn(x, y))
			flag = false
		}
	}
}

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`, 4)
console.log(fn(1, 6)) // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)) // undefined
console.log(fn(3, 8)) // undefined

// * try this
// 매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
// (test 요령: 0.1초 한 번씩 - setInterval - 실행하게 해놓고, 1초 후에 초기화)
// cf. function once(f, rebirthDelay = 1000) {}

const intl = setInterval(() => {
	console.log(fn(1, 6))
}, 1000)