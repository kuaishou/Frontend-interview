// 手写一个getType函数，获取详细的数据类型

function getType(n) {
    const ObjectType = Object.prototype.toString.call(n)
    const spaceIndex = ObjectType.indexOf(' ')
    const type = ObjectType.slice(spaceIndex + 1, -1)
    return type.toLowerCase()


}

console.log('arry', getType([1, 2, 3]))
console.log('function', getType(() => 11))
console.log('number', getType(1))
console.log('boolin', getType(true))
console.log('null', getType(null))