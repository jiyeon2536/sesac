const assert = require('assert')

function once(cb) {
	let done = false
	return function (...args) {
		if (done) return
		done = true
		return cb(...args)
	}
}

;(function ex2_1() {
	const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`)

	assert.strictEqual(fn(1, 6), '금일 운행금지 차량은 끝번호 1, 6입니다!')
	assert.strictEqual(fn(2, 7), undefined)
	assert.strictEqual(fn(3, 8), undefined)
})()

// ex2_1()

const onceAgain = (cb, rebirthDelay = 1000) => {
	let done = false
	return (...args) => {
		if (done) {
			setTimeout(() => {
				done = false
			}, rebirthDelay)
			return
		}
		done = true
		return cb(...args)
	}
}

;(function ex2_2() {
	const rebirthSec = 2000
	const fn = onceAgain((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`, rebirthSec)

	assert.strictEqual(fn(1, 6), '금일 운행금지 차량은 끝번호 1, 6입니다!')
	assert.strictEqual(fn(2, 7), undefined)
	assert.strictEqual(fn(3, 8), undefined)
	setTimeout(() => {
		assert.strictEqual(fn(4, 9), undefined)
	}, rebirthSec - 500)
	setTimeout(() => {
		assert.strictEqual(fn(4, 9), '금일 운행금지 차량은 끝번호 4, 9입니다!')
		console.debug('done')
	}, rebirthSec)
})()
