// 연습문제 1
console.log('====1번 문제====')
for (let i = 0.1; i < 1; i = i + 0.1) {
	console.log(i.toFixed(1))
}

// 연습문제 2
console.log('====2번 문제====')

for (let i = 1; i <= 10; i++) {
	const sq = Math.sqrt(i)
	sq % 1 && console.log(`${i} ${sq.toFixed(3)}`)
}

// 연습문제 3
console.log('====3번 문제====')

//// 스위치문 이용
const today = new Date()
switch (today.getDay()) {
	case 0:
		console.log(`오늘은 일요일입니다.`)
		break
	case 1:
		console.log(`오늘은 월요일입니다.`)
		break
	case 2:
		console.log(`오늘은 화요일입니다.`)
		break
	case 3:
		console.log(`오늘은 수요일입니다.`)
		break
	case 4:
		console.log(`오늘은 목요일입니다.`)
		break
	case 5:
		console.log(`오늘은 금요일입니다.`)
		break
	case 6:
		console.log(`오늘은 토요일입니다.`)
		break
}

//// 다른 방법
console.log(`오늘은 ${'일월화수목금토'[new Date().getDay()]}요일입니다.`)

// 연습문제 4
console.log('====4번 문제====')

function addPoints(a, b) {
	const dec = Math.max(a.toString().split('.')[1]?.length || 0, b.toString().split('.')[1]?.length || 0)
	return Number((a + b).toFixed(dec))
}

console.log(addPoints(0.21354, 0.1)) // 0.31354
console.log(addPoints(0.14, 0.28)) // 0.42
console.log(addPoints(0.34, 0.226)) // 0.566
console.log(addPoints(10.34, 200.226)) // 210.566
console.log(addPoints(0.143, -10.28)) // -10.137
console.log(addPoints(0.143, -10)) // -9.857
