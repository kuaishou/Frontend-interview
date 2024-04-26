
const obj1 = {
    age: 20,
    name: 'xxxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']

}

const obj2 = obj1
obj2.address.city = 'shenzhen'
console.log(obj1.address.city) // shenzhen
console.log(obj2) // shenzhen

// 深拷贝
function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) {//不是对象或者数组直接返回
        return obj
    }
    const result = obj instanceof Array ? [] : {}//初始化返回结果
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            //保证key不是原型的属性
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    return result//返回结果
}

const obj3 = deepClone(obj1)
obj3.address.city = 'shanghai'
console.log(obj1.address)
console.log(obj3.address)