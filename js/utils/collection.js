// class와 Array를 이용하여 Stack과 Queue를 구현하시오.

export class Collection {
	#arr = []
	constructor(...args) {
		this.#arr = [...args.flat(1)]
	}
	get _arr() {
		return this.#arr
	}

	get size() {
		return this.#arr.length
	}

	get isEmpty() {
		return this.#arr.length === 0
	}

	get isStack() {
		return this.constructor.name === 'Stack'
		// return this instanceOf Stack // 이거는 상속될수 있으므로 안좋음
	}

	get peek() {
		return this.#arr.at(this.isStack ? -1 : 0)
	}

	get poll() {
		return this.#arr.at(this.isStack ? 0 : -1)
	}

	*[Symbol.iterator]() {
		for (let i = 0; i < this.#arr.length; i++) {
			yield this.#arr[i]
		}
	}

	remove() {
		if (this.isStack) this.#arr.pop()
		else this.#arr.shift()
	}

	toString() {
		return JSON.stringify(this.#arr, null, 2)
	}

	print() {
		console.log(`${this.constructor.name}{${this.constructor.size}} ${this.toString()}`)
	}

	clear() {
		this.#arr.length = 0 // 이게 더 나음
		// this.#arr = []
	}

	toArray() {
		return [...this.#arr] // 조작을 막기 위해서 복사해서 보내줘야함
		// return this.#arr.slice()
	}
}

export class Stack extends Collection {
	push(val) {
		this._arr.push(val)
		return this
	}
	pop() {
		return this._arr.pop()
	}
}

export class Queue extends Collection {
	enqueue(val) {
		this._arr.push(val)
		return this
	}
	dequeue() {
		return this._arr.shift()
	}
}
