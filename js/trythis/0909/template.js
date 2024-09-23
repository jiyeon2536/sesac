const before = () => console.log('before....')
const after = () => console.log('after...')

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`)
const someFn2 = (id, nickname, email, level) => console.log(`${id}/${nickname}/${email}/${level}`)

const template = (cb) => {
	return (...args) => {
		before()
		cb(...args)
		after()
	}
}

const temp = template(someFn) // before → someFn → after 실행
const temp2 = template(someFn2) // before → someFn2 → after 실행

temp('sico', 'hello')
temp2(1, 'sico', 'sico@gmail.com', 5)
