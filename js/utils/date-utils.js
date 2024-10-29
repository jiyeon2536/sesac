export const WEEKS = '일월화수목금토'

export const calendar = (inp) => {
	const dateObj = new Date(inp)
	if (isNaN(dateObj)) {
		console.log('유효한 날짜를 입력하세요')
		return
	}
	const year = dateObj.getFullYear()
	const month = dateObj.getMonth() + 1

	const firstDay = new Date(year, month - 1, 1)
	const lastDay = new Date(year, month, 0).getDate()

	const firstDayDay = firstDay.getDay()
	// const today = dateObj.getDate()

	const weeks = [
		''.padStart(6, ' '),
		`${month}월 ${year} `,
		'\n일 월 화 수 목 금 토\n',
		''.padStart(3 * firstDayDay, ' '),
	]
	for (let i = 1; i <= lastDay; i++) {
		if (i < 10) weeks.push(' ')
		weeks.push(i + ' ')
		const dayofw = (firstDayDay + i - 1) % 7
		if (dayofw === 6) weeks.push('\n')
	}
	const cal = weeks.join('')
	return cal
}
