// class와 Array를 이용하여 Stack과 Queue를 구현하시오.

class Collection {
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

class Stack extends Collection {
	push(val) {
		this._arr.push(val)
		return this
	}
	pop() {
		return this._arr.pop()
	}
}

class Queue extends Collection {
	enqueue(val) {
		this._arr.push(val)
		return this
	}
	dequeue() {
		return this._arr.shift()
	}
}

// ex1) Stack
const stack = new Stack() // or new Stack([1,2]); // ⇐⇒ (1,2)
stack.push(3).push(5).push(8) // 추가하기 builder pattern
console.log(stack.pop()) // 마지막에 추가된 하나 꺼내기
// ex2) Queue
const queue = new Queue()
queue.enqueue(3) // 추가하기
queue.enqueue(2) // 추가하기
console.log(queue.dequeue()) // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

// 이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.(Collection)

// 공통: clear(), print(), remove(), isEmtpy, peek, poll, length(size)
// peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
// poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
// remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)

console.log(stack.peek, queue.peek) // 마지막(다음에 나올) 원소
queue.print() // 출력해보기
// const arr = queue.toArray().map((a) => console.log(a))
if (!stack.isEmpty) stack.clear()
if (queue.length) queue.clear()
