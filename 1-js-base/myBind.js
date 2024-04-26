//手写Bind


Function.prototype.myBind = function () {
    //将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)
    //获取this的第一项
    const t = args.shift()
    //fn1.bind(...)中的fn1
    const self = this
    return function () {
        return self.apply(t, args)
    }
}

function fn1(a, b, c) {
    console.log(this)
    console.log(a, b, c)
    return "this is fn1"
}
const fn2 = fn1.myBind({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)