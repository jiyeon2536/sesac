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
