// 모든 Array가 다음 기능을 갖도록 구현하세요.
// 1) mapBy(), findBy(), filterBy(), rejectBy(), sortBy()
// 2) firstObject, lastObject
const assert = require('assert')

const hong = { id: 1, name: 'Hing' }
const kim = { id: 2, name: 'Kim' }
const lee = { id: 3, name: 'Lee' }
const users = [hong, lee, kim]

Array.prototype.mapBy = function (prop) {
	return this.map((el) => el[prop])
}
Array.prototype.findBy = function (key, value) {
	return this.find((el) => el[key] === value)
}
Array.prototype.filterBy = function (key, value, isInclude = false) {
	return this.filter((el) => (isInclude ? a[key]?.includes(val) : el[key] === value))
}

Array.prototype.rejectBy = function (key, value, isInclude = false) {
	return
}

Array.prototype.sortBy = function (key) {
	const [k, order] = key.split(':')
	if (order === 'desc') return this.sort((a, b) => (a[k] < b[k] ? 1 : -1))
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
			return this[this.length - 1]
		},
		set(value) {
			this[this.length - 1] = value
		},
	},
})

const arr = [1, 2, 3, 4, 5]

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5])
assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]) // 유저중에 id만 주세요
assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']) // 이름만 주삼
assert.deepStrictEqual(users.filterBy('id', 2), [kim]) // id가 이거인 거의 이름만 주삼
assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong, kim]) // key, value일부, isInclude

// assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]) // id가 2가 아닌거
// assert.deepStrictEqual(users.rejectBy('name', 'i', false), [hong, kim]) // ????
// assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]) //
assert.deepStrictEqual(users.findBy('name', 'Kim'), kim) // 하나만 나옴,
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong])
assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee])
assert.deepStrictEqual(users.firstObject, hong), assert.deepStrictEqual(users.lastObject, lee)
users.firstObject = kim
assert.deepStrictEqual(users.firstObject, kim)
users.lastObject = hong
assert.deepStrictEqual(users.lastObject, hong)
