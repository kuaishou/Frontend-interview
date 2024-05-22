//手写bind函数
//context 传的this
//binfargs 传入的参数数组
Function.prototype.myBind = function (context, ...bindargs) {
    //context 传的this
    //binfargs 传入的参数数组
    const self = this



    //返回一个函数
    return function (...args) {
        console.log(context, bindargs, args)
        const newArgs = bindargs.concat(args)
        console.log('newArgs', newArgs)
        return self.apply(context, newArgs)
    }

}

function fn(a, b, c) {
    console.info(this, a, b, c)
}

const fn1 = fn.myBind({ x: 100 }, 10)
fn1(20, 30)