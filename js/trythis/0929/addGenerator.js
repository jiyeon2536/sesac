// 연습문제 1
// 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.
import readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input })

function* add() {
	const first = yield '첫 번째 수?'
	const second = yield '두 번째 수?'
	return first + second
}

const itAdd = add()

console.log(itAdd.next().value)

rl.on('line', (answer) => {
	const num = Number(answer)
	if (isNaN(num)) {
		console.error('숫자를 입력하세요')
		return
	}
	const { value, done } = itAdd.next(num)
	if (done) {
		console.log('Total: ', value)
		rl.close()
	} else {
		console.log(value)
	}
}).on('close', () => {
	process.exit()
})
// console.log(itAdd.next(1).value)
// console.log(itAdd.next(2).value)

// (실행 결과: 1과 2를 넣었을 때)
// 첫 번째 수?  → 1   next(1)
// 두 번째 수?  → 2
// Total: 3
