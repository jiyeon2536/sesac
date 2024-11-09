import { time2, time3, timePromi } from '../hello'
describe.only('hello', () => {
	beforeEach(() => {
		console.log('BEFORE EACH')
	})
	afterEach(() => {
		console.log('AFTER EACH')
		jest.clearAllMocks() // 앞에꺼를 다 초기화해줘서 오류가 나지 않도록 함
	})
	describe('mock', () => {
		const user = {
			id: 1,
			name: 'Hong',
			getName(n: number) {
				return `${this.name}-${n}`
			},
		}
		const spy = jest.spyOn(user, 'getName')
		user.getName(1)
		expect(spy).toHaveBeenCalled()
		expect(spy).toHaveBeenCalledWith(1)

		// jest.mock('axios', () => {
		// 	defaults: {
		// 		get: jest.fn().mockResolvedValue({ id: 1 })
		// 		post: jest.fn().mockResolvedValue({ id: 1 })
		// 	}
		// })

		const pow = jest.fn((a) => a ** 2)
		expect(pow(3)).toBe(9)
		const calc = { id: 1, pow }
	})
	describe('promise', () => {
		test('timePromi', (done) => {
			timePromi(2).then((res) => {
				expect(res).toBe(3)
				done()
			})
		})
		test('timePromi2', async () => {
			try {
				const res = await timePromi(1)
				expect(res).toBe(3)
			} catch (err) {
				console.error('err', err)
				expect(err).toBe('oddnum: 1')
			}
		})

		test.only('timePromi3', (done) => {
			expect(timePromi(2)).resolves.toBe(3)
			expect(timePromi(1)).rejects.toBe('oddnum: 1').finally(done)
		})
	})

	test.skip('time', () => {
		const f = () => console.log('time in test')
		// const spy = jest.spyOn()
		const time = jest.fn((cb) => cb())
		time(f)
		expect(time).toHaveBeenCalled()
		// expect(time).toHaveBeenCalledTimes(1)
		// expect(time).toHaveBeenCalledWith(f)

		expect(() => time2()).toThrow()
		expect(() => time2()).toThrow(/Error/)
		expect(time3()).toBeNull()
		expect(time3()).toHaveProperty('name')
		// expect(time3(2).toStrictEqual({})) // undefined까지 명시해야함
		// expect(time3(2).toEqual({}))

		// expect(time3(2).name).toMatch(/ong/)
		// expect(time3(2)).toMatchObject({ name: 'Hong' })
	})
})
