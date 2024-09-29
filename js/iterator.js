const obj = {
	id: 1,
	name: 'Hong',
	[Symbol.iterator]() {
		let i = 0
		return {
			next: () => ({
				value: this.name[i++],
				done: i > this.name.length,
			}),
		}
	},
}
const arr = [1, 2, 3]
console.log(...arr)
if (typeof obj[Symbol.iterator] === 'function') console.log(...obj)

for (const x of arr) console.log('x= ', x)
for (const x in arr) console.log('x= ', x) // 이터러블 하지 않음. 키들을 전체 싹 한번에 가져옴.

function* route() {
	const start = yield '출발 역은?' // yield가 있으므로 caller에게 제어권 넘김. yield뒤는 그냥 메시지!
	const end = yield '도착 역은?'
	return `${start}역에서 출발하여 ${end}역에 도착합니다.`
}

const caller = route() // next() 함수가 있는것으로 볼 때, "내 안에 이터레이터 있다!"
const n = caller.next() // undefined보내면 제너레이터는 {value: '출발 역은?', done: false}를 caller에게 보내(반환하)고 일시 정지.
const n1 = caller.next('문래') // start에 '문래'를 주입하고, {value: '도착 역은?', done: false}를 caller에게 보내고 일시 정지.
const n2 = caller.next('신림') // end에 신림 주입하고, {value: '문래역에서 출발하여 신림역에 도착합니다.', done: true} 반환과 동시에 멈춤!
