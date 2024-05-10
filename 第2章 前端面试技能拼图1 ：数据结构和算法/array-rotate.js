
//旋转数组K步
const arrdata = [1, 2, 3, 4, 5, 6]
function rotate1(arr, k) {
    const length = arr.length;
    if (!length) {
        return arr
    }
    let setp = Math.abs(k % length)
    console.log('da', setp)
    for (let i = 0; i < setp; i++) {
        const da = arr.pop()
        console.log('da', da)
        if (da != null) {
            arr.unshift(da)
        }
    }
    return arr
}

const arr1 = rotate1(arrdata, 3)
console.log('remoat1', arr1)



//第二种拆分数组的方法
function rotate2(arr, k) {
    const length = arr.length;
    if (!length) {
        return arr
    }
    let setp = Math.abs(k % length)
    const part1 = arr.slice(-setp)
    const part2 = arr.slice(0, length - setp)
    const part3 = part2.concat(part1)
    return part3
}

const arr2 = rotate2(arrdata, 3)
console.log('remoat2', arr2)



