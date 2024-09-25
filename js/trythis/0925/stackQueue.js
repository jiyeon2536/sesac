// class와 Array를 이용하여 Stack과 Queue를 구현하시오.

// ex1) Stack
const stack = new Stack() // or new Stack([1,2]); // ⇐⇒ (1,2)
stack.push(3) // 추가하기
console.log(stack.pop()) // 마지막에 추가된 하나 꺼내기
// ex2) Queue
const queue = new Queue()
queue.enqueue(3) // 추가하기
queue.enqueue(2) // 추가하기
console.log(queue.dequeue()) // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

// 이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.(Collection)
// 공통기능을 콜렉션에 넣고 스택과 큐에 해당 푸시팝/앤큐디큐만 넣어라
// 주의할점 어레이가 외부에서 조작됨녀 안됨
// 공통: clear(), print(), remove(), isEmtpy, peek, poll, length(size)
// peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
// poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
// remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
console.log(stack.peek, queue.peek) // 마지막(다음에 나올) 원소
queue.print() // 출력해보기
const arr = queue.toArray().map((a) => console.log(a))
if (!stack.isEmpty) stack.clear()
if (queue.length) queue.clear()
