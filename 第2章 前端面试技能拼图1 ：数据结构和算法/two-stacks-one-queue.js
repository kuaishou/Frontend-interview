
//用两个栈实现一个队列[4]
class MyQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    add(n) {
        this.stack1.push(n)
    }
    delete() {
        let res;
        const stack1 = this.stack1
        const stack2 = this.stack2
        while (stack1.length) {//先把stack1所有元素移动到stack2中
            stack2.push(stack1.pop())
        }
        //获取stack1队列的第一位，也是stack2的最后一位
        res = stack2.pop()

        while (stack2.length) {//先把stack2所有元素移动到stack1中
            stack1.push(stack2.pop())
        }

        return res

    }
    get length() {
        return this.stack1.length
    }




}

const mystack = new MyQueue()
mystack.add(1)
mystack.add(2)
mystack.add(3)
mystack.add(4)
// mystack.delete()
console.log('length1', mystack.length)
console.log(mystack, mystack.delete())
console.log('length2', mystack.length)


