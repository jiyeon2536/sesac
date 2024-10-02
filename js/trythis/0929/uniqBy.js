// 연습문제 6
// 이전 Array.prototype에 Set을 이용하여 uniqBy() 함수도 추가하시오.
// Array.prototype.uniqBy = function(prop) {
//   …
// ]
const assert = require('assert')

Array.prototype.uniqBy = function (prop) {
	const set = new Set()
	for (const el of this) {
		set.add(el.dept)
	}
	return [...set]
}

const hong = { id: 1, name: 'Hong', dept: 'HR' }
const kim = { id: 2, name: 'Kim', dept: 'Server' }
const lee = { id: 3, name: 'Lee', dept: 'Front' }
const park = { id: 4, name: 'Park', dept: 'HR' }
const ko = { id: 7, name: 'Ko', dept: 'Server' }
const loon = { id: 6, name: 'Loon', dept: 'Sales' }
const choi = { id: 5, name: 'Choi', dept: 'Front' }
const users = [hong, kim, lee, park, ko, loon, choi]
users.uniqBy('dept') // [ 'HR', 'Server', 'Front', 'Sales' ]

assert.deepStrictEqual(users.uniqBy('dept'), ['HR', 'Server', 'Front', 'Sales'])

Array.prototype.mapBy = function (prop) {
	return this.map((el) => el[prop])
}
Array.prototype.findBy = function (key, value) {
	return this.find((el) => el[key] === value)
}
Array.prototype.filterBy = function (key, value, isInclude = false) {
	return this.filter((el) => (isInclude ? el[key]?.includes(value) : el[key] === value))
}

Array.prototype.rejectBy = function (key, value, isInclude = false) {
	return this.filter((el) => (isInclude ? !el[key]?.includes(value) : el[key] !== value))
}

Array.prototype.sortBy = function (key) {
	const [k, direction] = key.split(':')
	if (direction === 'desc') return this.sort((a, b) => (a[k] < b[k] ? 1 : -1))
	return this.sort((a, b) => (a[k] < b[k] ? -1 : 1))
}

Object.defineProperties(Array.prototype, {
	firstObject: {
		get() {
			return this[0]
		},
		set(value) {
			this[0] = value
		},
	},
	lastObject: {
		get() {
			return this.at(-1)
			// return this[this.length - 1]
		},
		set(value) {
			this[this?.length - 1] = value
			// this.with(-1, value) // 순수함수라서 안됨
		},
	},
})
