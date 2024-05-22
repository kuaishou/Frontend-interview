//移动数组内的0到数组的末尾，其他元素的相对位置不变

//时间复杂的O(n^2)
function moveZero(arr) {
    const length = arr.length
    if (length === 0) return

    let zeroLength = 0
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {

            arr.push(arr.splice(i, 1)[0])
            i--
            zeroLength++
        }
    }
}

const moveArr = [1, 3, 5, 0, 0, 0, 6, 7, 9]
// moveZero(moveArr)
// console.log('moveArr',moveArr)

//双指针方式处理时间复杂度好点On
function moveZero1(arr) { 
    const length = arr.length
    if (length === 0) return
    let i
    let j=-1//指向第一个0

    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            //找到第一个0
            if(j<0){
                j=i
            }
        }
        if(arr[i]!==0&&j>=0){
            const n=arr[i]
            arr[i]=arr[j]
            arr[j]=n
            j++
        }
    }

}

// moveZero1(moveArr)
// console.log('moveArr1',moveArr)



const marr1=[]
console.time('moveArr1')
for (let i = 0; i < 10000; i++) {
    if(i%10===0){
        marr1.push(0)
    }else{
        marr1.push(i)
    }
}
moveZero(marr1)

console.timeEnd('moveArr1')

const marr2=[]
console.time('moveArr2')
for (let i = 0; i < 10000; i++) {
    if(i%10===0){
        marr2.push(0)
    }else{
        marr2.push(i)
    }
}
moveZero1(marr2)

console.timeEnd('moveArr2')
