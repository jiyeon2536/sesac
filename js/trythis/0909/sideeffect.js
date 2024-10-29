import assert from 'assert'
import { WEEKS } from '../utils/date-utils'

// 연습문제 4
// getNextWeek 함수는 widx변수에 부수효과가 있다.
// 이를 부수효과가 없도록 변경하시오
// hint : closure, IIFE

const getNextWeek = (() => {
	let widx = -1
	return () => {
		widx += 1
		if (widx >= WEEKS.length) widx = 0
		return `${WEEKS[widx]}요일`
	}
})()

// 즉시실행함수
// const getNext = getNextWeek() 이렇게 받아서 쓰는거와 같은.!!

let cnt = 0
const intl = setInterval(() => {
	// widx += 2; // side-effect!
	console.log('call', cnt, getNextWeek())
	// if ((cnt += 1) === 8) clearInterval(intl)
}, 1000)
