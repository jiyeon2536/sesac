// 연습문제 1
import moment from 'moment'
import assert from 'assert'
// 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
const d1 = new Date(1970, 0, 1)
const d2 = new Date(1970, 0, 2)
const answer = d2 - d1

assert.strictEqual(answer, 86400000)

// 2) 이달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
// 10월 1일 ~ 10월 31일까지
// 1이상 31이하의 정수
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random())

let daysInOct = []

for (let i = 0; i < 5; i++) {
	daysInOct.push(new Date(2024, 9, rand(1, 31)))
}

daysInOct.sort((a, b) => (a - b > 0 ? -1 : 1))

console.log(daysInOct)

// 3) 내년(2025년)의 오늘의 요일을 출력하시오.
const days = '일월화수목금토'
const nextYear = new Date(2025, 9, 7)
assert.strictEqual(days[nextYear.getDay()], '화')

// 4) 오늘로부터 100일 후의 날짜는?
const targetDate = moment().add(100, 'days').format('YYYY-MM-DD')
console.log('🚀 ~ targetDate:', targetDate)
