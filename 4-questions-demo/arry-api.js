const arr = [10, 20, 30, 40]

//pop 去除最后一位 返回最后一位数字
// const popRes=arr.pop()
// console.log(popRes,arr)

// // push 从后面添加一位---返回数组长度

// const pushRes=arr.push(50)
// console.log(pushRes,arr)

//shift 去除第一位 返回去除第一位数字
// const shiftRes=arr.shift()
// console.log(shiftRes,arr)

// // unshift 从前面添加一位---返回数组长度
// const unshiftRes=arr.unshift(50)
// console.log(unshiftRes,arr)

//纯函数--1、不改变原数组的值，2、返回一个数组

// const arr1=arr.concat([1,2])
// console.log(arr,arr1)

// const arr2=arr.map(num=>num*10)
// console.log(arr,arr2)

// const arr3=arr.filter(num=>num>20)
// console.log(arr,arr3)

// const arr4=arr.slice()
// console.log(arr,arr4)

//数组方法中非纯函数包含以下
//1、shift unshift push pop  改变了原数组
//2、forEach 没有返回数组
//3、some every
//4、reduce


//slice 是纯函数，切片原数组的值返回一个新数组
// const arr5=arr.slice(1,3)
// console.log(arr,arr5)

//第一个参数从哪里开始截取，第二个参数截取几位；之后的参数是传入的参数
// const arr6=arr.splice(1,2,'a','b','c')
// console.log(arr,arr6)// [10, 'a', 'b', 'c', 40]  [20, 30]

// const res = [10, 20, 30, 40].map(parseInt)
// console.log(res)//[10, NaN, NaN]
//上面函数拆解

const res1 = [10, 20, 30]?.map((num, index) => {
    return parseInt(num, index)
    //parseInt(10,0)  十进制返回10
    //parseInt(20,1)  没有该进制计算方法返回NaN 
    //     parseInt 第二个参数
    //     可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
    // 如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
    // 如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
})
console.log(res1)//[10, NaN, NaN]