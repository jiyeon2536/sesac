const obj = {
	name: 'Hong',
	id: 1,
	[Symbol.iterator]() {
		const keys = Object.keys(obj)
		let idx = 0
		return {
			next() {
				return {
					value: keys[idx++],
					done: keys.length < idx,
				}
			},
		}
	},
}

console.log([...obj])
console.log({ ...obj })
