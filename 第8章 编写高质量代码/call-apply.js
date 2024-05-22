//手写call
Function.prototype.myCall = function (context, ...args) {
    if (context == null) context = globalThis
    if (typeof context !== 'Object') context = new Object(context)//值类型 变成对象

    const fnkey = Symbol()
    context[fnkey] = this//this是当前函数
    const res = context[fnkey](...args) //绑定了this

    delete context[fnkey]//清理掉fn，防止污染

    return res


}


//手写apply
Function.prototype.myApply = function (context, args) {
    if (context == null) context = globalThis
    if (typeof context !== 'Object') context = new Object(context)//值类型 变成对象

    const fnkey = Symbol()
    context[fnkey] = this//this是当前函数
    const res = context[fnkey](...args)

    delete context[fnkey]

    return res
}

function fn(a, b, c) {
    console.log(this, a, b, c)

}

fn.myCall({ x: 100 }, 100, 200, 300)
fn.myApply({ x: 200 }, [100, 200, 300])