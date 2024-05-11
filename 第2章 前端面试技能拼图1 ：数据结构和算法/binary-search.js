//二分查找

//循环的二分查找
function binarySearch(arr, target) {
    const length = arr.length
    if (length === 0) return -1

    let sartIndex = 0
    let endIndex = length - 1
    while (sartIndex <= endIndex) {
        const midindex = Math.floor((sartIndex + endIndex) / 2)
        const midvalue = arr[midindex]
        if (target < midvalue) {//目标在左侧
            endIndex = midindex - 1
        } else if (target > midvalue) {//目标在右侧
            sartIndex = midindex + 1
        } else {//找到目标
            return midindex
        }
    }
    return -1//未找到目标
}

const arrs = [1, 2, 3, 4, 5, 6, 7]

console.log(binarySearch(arrs, 5))


//递归的二分查找
function binarySearch1(arr, target, sartIndex, endIndex) {
    const length = arr.length
    if (length === 0) return -1
    if (sartIndex == null) sartIndex = 0
    if (endIndex == null) endIndex = length - 1
    if (sartIndex > endIndex) return -1
    const midindex = Math.floor((sartIndex + endIndex) / 2)
    const midvalue = arr[midindex]
    if (target < midvalue) {//目标在左侧
        return binarySearch1(arr, target, sartIndex, midindex - 1)
    } else if (target > midvalue) {//目标在右侧
        return binarySearch1(arr, target, midindex + 1, endIndex)
    } else {//找到目标
        return midindex
    }
}


const arrs11 = [1, 2, 3, 4, 5, 6, 7]

console.log('binarySearch', binarySearch1(arrs11, 5))

//性能 循环和递归的二分查找那个更快
//循环的耗时 10ms
//递归的耗时 30ms
//递归由于多次调用函数性能不好--但是差距不大；递归会更清晰
console.time('search')
for (let i = 0; i < 1000000; i++) {
    binarySearch(arrs, 5)
}
console.timeEnd('search')

console.time('search1')
for (let i = 0; i < 1000000; i++) {
    binarySearch1(arrs, 5)
}
console.timeEnd('search1')







