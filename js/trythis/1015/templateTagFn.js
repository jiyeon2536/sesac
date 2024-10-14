// 연습문제
// 오른쪽과 같은 형태로 출력하는 fmt 함수를 작성하시오.
const fmt = (tmplstrs, ...args) => {
	let ret = tmplstrs[0]

	for (let i = 0; i < args.length; i++) {
		const tmp = args[i].toLocaleString().padStart(8, ' ')
		ret += tmp + tmplstrs[i + 1]
	}
	return ret
}

const total = { price: 45000, vat: 4500 }

console.log(fmt`주문합계: ${total.price}원`)
console.log(fmt`세액합계: ${total.vat}원`)
