
//用链表实现一个队列[4]
class MyQueue {
    constructor() {
        this.head = null//头
        this.tail = null//尾
        this.len = 0
    }
    add(n) {
        const newNode = {
            value: n,
            next: null
        }
        if (this.head === null) {
            this.head = newNode
        }
        const tailNode = this.tail;
        if (tailNode) {
            tailNode.next = newNode
        }
        this.tail = newNode
        this.len++
    }
    delete() {
        let res;
        if (this.head === null) {
            return null
        }
        const nextNode = this.head.next;
        res = this.head.value;
        this.head = nextNode
        this.len--
        return res
    }
    get length() {
        return this.len
    }




}

const mystack = new MyQueue()
mystack.add(1)
mystack.add(2)
mystack.add(3)
mystack.add(4)
// mystack.delete()
console.log('length1', mystack.length)
console.log('delete', mystack.delete())
console.log('length2', mystack.length)
console.log('myQueue', mystack)


