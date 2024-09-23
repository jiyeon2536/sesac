const assert = require('assert')
;(function ex6() {
	function getDiffMillis(dt1, dt2) {
		const d1 = new Date(dt1)
		const d2 = new Date(dt2)
		const { getTime: getTime1 } = d1
		const { getTime: getTime2 } = d2
		return getTime1.call(d1) - getTime2.call(d2)
	}

	assert.strictEqual(getDiffMillis('2025-01-01', '2025-01-02'), -86400000)
})()

// this를 쓰는 함수를 디스트럭처링 하면 반드시 바인딩을 해줘야한다.

// class Dog {
// 	constructor(name) {
// 		this.name = name
// 	}

// 	getName() {
// 		return this.name
// 	}

// 	fn() {
// 		return 'FN'
// 	}

// 	static sfn() {
// 		return 'SFN'
// 	}
// }

// const lucy = new Dog('Lucy')
// const { sfn } = Dog
// const { name: aa, fn: fnnn, getName } = lucy

// console.log(aa, sfn(), fnnn(), getName)
// getName() // ?
