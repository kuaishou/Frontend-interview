//对象深度比较 
const isObject = (value) => {
    return typeof value === 'object' && value !== null
}

const isEqual = (obj1, obj2) => {
    //判断是否对象
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2
    }
    if (obj1 === obj2) {
        return true
    }
    //获取对象的key
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)

    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }
    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false
        }
    }

    return true
}

const lobj1 = {
    a: 100, b: {
        x: 11,
        y: 22
    }
}

const lobj2 = {
    a: 100, b: {
        x: 11,
        y: 22
    }
}
console.log(isEqual(lobj1, lobj2))
// console.log(isEqual(lobj1, lobj1))

