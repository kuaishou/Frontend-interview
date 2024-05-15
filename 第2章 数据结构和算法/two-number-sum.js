//数组中查找两数之和为目标的两个数

function findTwoNumber(arr, n) {//时间复杂度 n2---性能不好
    const res = []
    const length = arr.length
    if (length === 0) return res



    for (let i = 0; i < length - 1; i++) {
        const n1 = arr[i]
        let flag = false
        for (let j = i + 1; j < length; j++) {
            const n2 = arr[j]
            if (n1 + n2 === n) {
                flag = true
                res.push(n1)
                res.push(n2)
                break
            }

        }
        if (flag) {
            break
        }
    }
    return res

}

const nArr = [1, 5, 8, 9, 12, 17]

console.log('findTwoNumber', findTwoNumber(nArr, 17))

//双指针实现方法

function findTwoNumber1(arr, n) {

    const res = []
    const length = arr.length
    if (length === 0) return res

    let i = 0;
    let j = length - 1;
    while (i < j) {
        const n1 = arr[i]
        const n2 = arr[j]
        const two = n1 + n2
        if (two > n) {//和太大了，j减少
            j--
        } else if (two < n) {
            i++
        } else {
            res.push(n1)
            res.push(n2)
            break
        }
    }
    return res
}

console.log('findTwoNumber1', findTwoNumber1(nArr, 14))


//双for循环性能测试
console.time('findTwoNumber')
for (let i = 0; i < 100000; i++) {
    findTwoNumber(nArr, 14)
}
console.timeEnd('findTwoNumber')
//耗时---8ms



//双指针性能测试
const q2 = []

console.time('findTwoNumber1')
for (let i = 0; i < 100000; i++) {
    findTwoNumber1(nArr, 14)
}
console.timeEnd('findTwoNumber1')

//耗时---4ms
