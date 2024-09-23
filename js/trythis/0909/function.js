// 연습문제
// 다음 코드를 올바르게 수정하시오. (1초 후에 강아지의 이름을 출력)

const dog = {
	name: 'Maxx',
	showMyName() {
		console.log(`My name is ${this.name}.`)
	},
	whatsYourName() {
		setTimeout(() => this.showMyName(), 1000)
	},
}

dog.whatsYourName()

// 연습문제 2
// 함수를 한번만 실행하게 하는 once 함수를 작성하시오

function once(fn) {
	let flag = true
	return function (x, y) {
		if (flag) {
			console.log(fn(x, y))
			flag = false
		}
	}
}

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`)
console.log(fn(1, 6)) // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)) // undefined
console.log(fn(3, 8)) // undefined

// * try this
// 매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
// (test 요령: 0.1초 한 번씩 - setInterval - 실행하게 해놓고, 1초 후에 초기화)
// cf. function once(f, rebirthDelay = 1000) {}

function once(fn, n) {
	let flag = true
	setInterval(() => {
		flag = true
	}, 1000 * n)
	return function (x, y) {
		if (flag) {
			console.log(fn(x, y))
			flag = false
		}
	}
}

// 연습문제 3
// template 함수를 작성하세요
const before = () => console.log('before....')
const after = () => console.log('after...')

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`)
const someFn2 = (id, nickname, email, level) => console.log(`${id}/${nickname}/${email}/${level}`)

const template = (fn) => {
	return function (a, ...r) {
		before()
		fn(a, ...r)
		after()
	}
}

const temp = template(someFn) // before → someFn → after 실행
const temp2 = template(someFn2) // before → someFn2 → after 실행

temp('sico', 'hello')
temp2(1, 'sico', 'sico@gmail.com', 5)

// 연습문제 4
// getNextWeek 함수는 widx변수에 부수효과가 있다.
// 이를 부수효과가 없도록 변경하시오
// hint : closure, IIFE

const weeks = ['일', '월', '화', '수', '목', '금', '토']

const getNextWeek = (() => {
	let widx = -1
	return function () {
		widx += 1
		if (widx >= weeks.length) widx = 0
		return `${weeks[widx]}요일`
	}
})()

let cnt = 0
const intl = setInterval(() => {
	// widx += 2; // side-effect!
	console.log('call', cnt, getNextWeek())
	if ((cnt += 1) === 8) clearInterval(intl)
}, 1000)

// 연습문제 5
// pure function + callback function
// 앞 장표의 getNextWeek 함수를 발전시켜
// 다음과 같이 각 수업 별 요일을 선택하는 HTML을 작성하시오.
// 각각 요일 순회하는 순수함수로 작성

// 연습문제 6
// 다음 코드는 올바른가?
