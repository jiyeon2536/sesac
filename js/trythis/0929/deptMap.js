// 연습문제 5
// 다음과 같이 부서와 직원 객체가 있을 때,
// deptMap과 empDept를 만들고, 개발팀 직원 이름 목록을 출력하시오. (key: id)
const assert = require('assert')

const hrTeam = { id: 1, dname: '인사팀' }
const devTeam = { id: 2, dname: '개발팀' }
const depts = [hrTeam, devTeam]

const deptMap = new Map()
for (const d of depts) {
	deptMap.set(d.id, d)
}
console.log(deptMap) // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)

const hong = { id: 1, name: 'Hong', dept: 1 } // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = { id: 2, name: 'Kim', dept: 2 }
const emps = [hong, kim, { id: 3, name: 'Park', dept: 2 }, { id: 4, name: 'Choi', dept: 2 }]
const empMap = new Map()
for (const e of emps) {
	empMap.set(e.id, e)
}
console.log(deptMap.get(hong.dept)?.dname)
console.log(empMap) // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

const empDept = new Map()
for (const [, { id, name, dept }] of empMap) {
	empDept.set({ id, name }, deptMap.get(dept))
}

console.log(empDept) // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }
// console.log(empDept.get(kim)?.dname) // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi

assert.deepStrictEqual(
	[...empDept.keys()],
	emps.map(({ id, name }) => ({ id, name }))
)
// assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname)

function getEmp(empId) {
	// {id:1, name: 'Hong', dept: {id:1, dname: 'Sale'}}
	for (const [{ id, name }, dept] of empDept) {
		if (id === empId) {
			return { id, name, dept }
		}
	}
}

assert.deepStrictEqual(getEmp(1), { id: 1, name: 'Hong', dept: { id: 1, dname: '인사팀' } })
