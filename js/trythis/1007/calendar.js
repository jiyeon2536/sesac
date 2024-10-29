import { calendar } from '../../utils/date-utils'

import readline from 'readline'
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = ''
rl.on('line', (line) => {
	input = line
}).on('close', () => {
	const answer = calendar(input)
	console.log(answer)
	process.exit()
})
