//什么情况不能使用箭头函数
//箭头函数的缺点
// 对象方法不能使用监听函数--this指向的是window

const obj = {
    nam: '邢浩东',
    getName: () => {
        return this.name
    }
}

console.log('obj.getName', obj.getName())//undefined

//箭头函数不能使用arguments

//箭头函数不能使用new
const foo = (name, city) => {
    this.name = name
    this.city = city
}

// const newFoo=new foo('邢浩东','北京')// 报错 TypeError: foo is not a constructor

const fnoo = function (name, city) {//普通函数可以构造函数
    this.name = name
    this.city = city
}
const newFnoo = new fnoo('邢浩东', '北京')
console.log('newFnoo', newFnoo)

//原型方法不能使用箭头函数
const obj1 = {
    nam: '邢浩东',
}
obj1.__proto__.getName = () => {
    return this.name
}
console.log('obj11.getName', obj.getName())//undefined