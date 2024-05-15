
//旋转数组K步
const arrdata = [1, 2, 3, 4, 5, 6]
function rotate1(arr, k) {//时间复杂度 On2  空间复杂度 n(1)
    const length = arr.length;
    if (!k || length === 0) {
        return arr
    }
    let setp = Math.abs(k % length)
    // console.log('da', setp)
    //时间复杂度 O(n2)
    //空间复杂度 O(n)
    for (let i = 0; i < setp; i++) {
        const da = arr.pop()
        // console.log('da', da)
        if (da != null) {
            arr.unshift(da)//数组是一个有顺序的结构，unshift、shift操作起来非常慢,后面的数据都要动；push/pop很快只有最后一位动!!!
        }
    }
    return arr
}

const arr1 = rotate1(arrdata, 3)
console.log('remoat1', arr1)

//第二种拆分数组的方法
const arrdata1 = [1, 2, 3, 4, 5, 6]
function rotate2(arr, k) {
    //时间复杂度 O(1)
    //空间复杂度 O(n)
    const length = arr.length;
    if (!k || length === 0) {
        return arr
    }
    const setp = Math.abs(k % length)//取绝对值
    const part1 = arr.slice(-setp)
    const part2 = arr.slice(0, length - setp)
    const part3 = part1.concat(part2)
    return part3
}

const arr2 = rotate2(arrdata1, 3)
console.log('remoat2', arr2)

//性能测试
const testArr1 = []
for (let i = 0; i < 10 * 10000; i++) {
    testArr1.push(i)
}
console.time('rotate1')
rotate1(testArr1, 9 * 10000)
console.timeEnd('rotate1')//时间很久

const testArr2 = []
for (let i = 0; i < 10 * 10000; i++) {
    testArr2.push(i)
}
console.time('rotate2')
rotate1(testArr2, 9 * 10000)
console.timeEnd('rotate2')



