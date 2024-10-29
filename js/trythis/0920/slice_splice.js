import assert from 'assert'

const arr2 = [1, 2, 3, 4, 5]
// ex1) [2,3]을 추출
const ex1 = arr2.slice(1, 3)
assert.deepEqual(ex1, [2, 3])

// ex2) [3]부터 모두 다 추출
const ex2 = arr2.slice(2)
assert.deepEqual(ex2, [3, 4, 5])

// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 4)

// ex4) 복원하기
arr2.splice(1, ...ex3)
console.log(arr2)

// ex5) [3] 부터 끝까지 제거하기

// ex6) 복원하기

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
