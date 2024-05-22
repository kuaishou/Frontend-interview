//数组扁平化



function flatten(arr) {
    const res = []
    //遍历数组遇到数组继续递归
    arr.forEach(item => {
        if (Array.isArray(item)) {
            const neearr = flatten(item)
            res.push(...neearr)
        } else {
            res.push(item)
        }
    })
    return res
}

const fullArry1 = [1, 2, [3, 4, [5,,[56], 6], 7], 8]

console.log('fullArry1', flatten(fullArry1))



function flatten1(arr) {
    let res = []
    //遍历数组遇到数组继续递归
    arr.forEach(item => {
        if (Array.isArray(item)) {
            const neearr=flatten1(item)
            // neearr.forEach(item1 => res.push(item1))
            res=res.concat(neearr)
        } else {
            // res.push(item)
            res=res.concat(item)
        }
    })
    return res
}


console.log('flatten1', flatten1(fullArry1))