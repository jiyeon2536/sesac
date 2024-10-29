// 연습문제 3
// 다음의 지하철 노선 중에서, 출발역 ~ 도착역까지만을 반환하는 클래스를 작성하시오. (단방향만!)
import assert from 'assert'
import { LINE2 } from '../../localdata'
class Subway {
	#startIdx
	#endIdx
	#currIdx
	#didEnd

	constructor(start, end) {
		this.#startIdx = LINE2.indexOf(start)
		this.#currIdx = this.#startIdx
		this.#endIdx = LINE2.indexOf(end)
	}

	*[Symbol.iterator]() {
		while (true) {
			if (this.#currIdx === this.#endIdx) break
			yield LINE2[this.#currIdx++]
		}
		return
		// // 시작, 현재
		// let idx = LINE2.findIndex((el) => el === this.start)
		// let endIdx = LINE2.findIndex((el) => el === this.end)
		// if (endIdx < idx) {
		// 	// 한바퀴 돌아야 함.
		// 	endIdx += LINE2.length
		// }
		// return {
		// 	next() {
		// 		return {
		// 			value: LINE2[idx++ % LINE2.length],
		// 			done: idx > endIdx + 1,
		// 		}
		// 	},
		// }
	}

	toString() {
		return `현재 역은 ${LINE2[this.#currIdx]}역입니다.`
	}
}

const routes = new Subway('문래', '신림')
console.log([...routes])
assert.deepStrictEqual([...routes], ['문래', '대림', '구로디지털단지', '신대방', '신림'])

const it1 = routes[Symbol.iterator]()
;['문래', '대림', '구로디지털단지', '신대방', '신림'].forEach((value, i) => {
	assert.deepStrictEqual(it1.next(), { value, done: false })
	console.log(i, routes.toString())
})
// console.log(it1.next());
assert.deepStrictEqual(it1.next(), { value: undefined, done: true })

const route3 = new Subway('문래', '합정') // 46개 정거장이면 통과!
assert.strictEqual([...route3].length, 46)
const route4 = new Subway('신도림', '을지로입구') // 48개 정거장이면 통과!
assert.strictEqual([...route4].length, 48)
