//快速排序

function quickSort(arr) {
    const length = arr.length;
    if (length === 0) return arr

    const midleindex = Math.floor(length / 2)
    const midleValue = arr.slice(midleindex, midleindex + 1)[0]
    const leftArr = []
    const rightArr = []

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i]
        if (value < midleValue) {
            leftArr.push(value)
        } else {
            rightArr.push(value)
        }
    }
    return quickSort1(leftArr).concat([midleValue], quickSort1(rightArr))

}
const sortArr = [8, 6, 4, 5, 7, 3, 2]
console.log('quickSort2', quickSort2(sortArr))

function quickSort1(arr) {
    const length = arr.length;
    if (length === 0) return arr

    const midleindex = Math.floor(length / 2)
    const midleValue = arr.splice(midleindex, 1)[0]
    const leftArr = []
    const rightArr = []

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i]
        if (value < midleValue) {
            leftArr.push(value)
        } else {
            rightArr.push(value)
        }
    }
    return quickSort1(leftArr).concat([midleValue], quickSort1(rightArr))

}

const sortArr1 = [8, 6, 4, 5, 7, 3, 2]

console.log('quickSort1', quickSort1(sortArr1))



function quickSort2(arr) {
    if (arr.length <= 1) { return arr }
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i])
        } else if (arr[i] > mid) {
            right.push(arr[i])
        }
    }
    return [...quickSort2(left), mid, ...quickSort2(right)]
}
const sortArr2 = [8, 6, 4, 5, 7, 3, 2]
console.log('quickSort2', quickSort2(sortArr2))


const spliceArr = []

for (let index = 0; index < 10*1000; index++) {
    spliceArr.push(Math.floor(Math.random() * 1000))
    
}
console.time('splice')
spliceArr.splice(5*10000,1)
console.timeEnd('splice')


const sliceArr = []

for (let index = 0; index < 10*1000; index++) {
    sliceArr.push(Math.floor(Math.random() * 1000))
    
}
console.time('slice')
sliceArr.slice(5*10000,5*10000+1)
console.timeEnd('slice')