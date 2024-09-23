// 연습문제 6
// 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오. (1회전으로 처리!)
//  → 배열의 각 요소를 제곱   n => n ** 2            [square]
//  → 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
//  → 배열의 각 요소를 세제곱  n => n ** 3            [cube]

const assert = require('assert')

const square = (n) => n ** 2
const sqrt = (n) => Math.sqrt(n)
const cube = (n) => n ** 3

const fns = [square, sqrt, cube]

const arr = [1, 2, 3, 4, 5]
// cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]

assert.deepStrictEqual(
	arr.map((el) => fns.reduce((acc, curFn) => curFn(el))),
	[1, 8, 27, 64, 125]
)

const fnReducer = (arr, fns) => arr.map((el) => fns.reduce((acc, curFn) => curFn(el)))

fnReducer(arr, fns)

// TryThis. 수행 순서를 자유롭게 변경하도록 해보세요. ??

// [square, sqrt, cube].reduce((acc, curFn) => curFn(el))
// [cube, square, sqrt].reduce((acc, curFn) => curFn(el))

// (v) 주소검색              fns = [f주소검색, f나이검색]
// ()  이름검색              search(users, fns)
// (v) 나이검색
