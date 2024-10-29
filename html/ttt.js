import { debounce, throttle } from '../js/utils/timer-utils.js'

document.addEventListener('DOMContentLoaded', () => {
	const WEEKS = '일월화수목금토'

	const createGnwFn = () => {
		let widx = -1
		return function getNextWeek() {
			widx += 1
			if (widx >= WEEKS.length) widx = 0
			return `${WEEKS[widx]}`
		}
	}

	const throttle = (cb, delay) => {
		let timer
		return (tag, ...args) => {
			if (timer) return
			timer = setTimeout(() => {
				const res = cb(...args)
				tag.innerText = res
				timer = null
			}, delay)
		}
	}

	const $body = document.querySelector('body')

	function createSubjectSelector(subject, getNextWeek) {
		const $div = document.createElement('div')
		const $span = document.createElement('span')
		const $input = document.createElement('input')
		$input.setAttribute('type', 'button')
		$input.setAttribute('value', `${subject} 수업 요일 선택>`)
		$div.classList.add('mb')

		$span.innerText = '요일을 선택하세요'

		const act = debounce((res) => {
			$span.innerText = res
		}, 500)

		const act1 = throttle(getNextWeek, 500)

		$input.addEventListener('click', () => {
			if (subject === '국어') {
				const res = getNextWeek()
				act(res)
			} else if (subject === '수학') {
				act1($span)
			}
		})

		$body.appendChild($div)
		$body.appendChild($input)
		$body.appendChild($span)
	}

	createSubjectSelector('국어', createGnwFn())
	createSubjectSelector('수학', createGnwFn())

	const $searchDiv = document.createElement('div')
	$searchDiv.classList.add('mt')

	const $inputBox = document.createElement('input')
	$inputBox.setAttribute('type', 'text')

	const act2 = debounce((e) => {
		console.log(new Date(), 'search>>', e.target.value)
	}, 500)

	$inputBox.addEventListener('input', (e) => act2(e))

	$body.appendChild($searchDiv)
	$searchDiv.appendChild($inputBox)
})
