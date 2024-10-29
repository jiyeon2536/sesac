// class Promise {
// 	thenFns = []
// 	catchFns = []
// 	constructor(f) {
// 		f(this.resolve, this.reject)
// 	}
// 	then(f1, f2) {
// 		this.thenFns.push(f1)
// 		this.catchFns.push(f2)
// 	}

// 	resolve(x) {
// 		const f = thenFns.pop()
// 		f(x)
// 	}
// 	reject(e) {
// 		const f = catchFns.pop()
// 		f(e)
// 	}
// }

// import { rand } from './utils/index.js'
// // const randtime = new Promise((resolve) => {
// // 	const sec = rand(1, 4) * 500
// // 	setTimeout(() => resolve(sec), sec)
// // })

// const randTime = () =>
// 	new Promise((resolve) => {
// 		const sec = rand(1, 4) * 500
// 		setTimeout(() => {
// 			console.log('sec=', sec)
// 			resolve(sec)
// 		}, sec)
// 	})

// const isParellel = true
// console.time('promi')
// if (isParellel) {
// 	Promise.all([randTime(), randTime(), randTime()]).then(() => console.timeEnd('promi'))
// } else {
// 	randTime()
// 		.then((x) => {
// 			return randTime()
// 		})
// 		.then((x) => {
// 			return randTime()
// 		})
// 		.then((x) => {
// 			return randTime()
// 		})
// 		.then(() => console.timeEnd('promi'))
// }

// async function p4() {
// 	const res = await fetch('url')
// 	const user1 = await res.json()
// }
// // then을 안쓰고 이렇게 쓸 수 있음.
const afterTime = (sec) =>
	new Promise((resolve, _reject) => {
		setTimeout(resolve, sec * 1000, sec)
	})

// function p5() {
// 	const mapResult = [1, 2, 3].map(async (val) => {
// 		const r = await afterTime(val)
// 		console.log(r)
// 		return r
// 	})
// 	console.log('mapResult=', mapResult)
// }
// p5()

// TryThis) 다음과 같이 출력되도록 병렬 실행하는 코드를 작성하시오.
// const rrr = <이 부분을 작성하세요>;
function asyncFilter() {
	return [1, 2, 3].filter(async (a) => {
		const r = await afterTime(a)
		console.log(r)
		return r % 2 === 1
	})
}
const tmp = asyncFilter()
console.log(tmp)

// console.log('odds=', rrr) // odds = [1, 3]

// const odds = [1, 2, 3].filter(async (val) => {
// 	const r = await afterTime(val)
// 	console.log(r)
// 	return r % 2 === 1
// })
// console.log('odds=', odds)

const ps2 = (await Promise.all([1, 2, 3].map(afterTime))).filter((a) => a % 2 === 1)
console.log(ps2)
