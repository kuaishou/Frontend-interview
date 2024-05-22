//查找1-1000的对称数 101  202 。。。。

function findPalindromeNumber2(max) {
    const res = []

    for (let index = 1; index < max; index++) {
        const str = index + '';
        const reverseStr = str.split('').reverse().join('')
        if (str === reverseStr) {
            res.push(index)
        }
    }
    return res

}

console.log('findPalindromeNumber2', findPalindromeNumber2(1000))



function findPalindromeNumber1(max) {
    const res = []
    for (let i = 1; i < max; i++) {
        const str = i + ''
        const length = str.length
        if (length === 1) {
            res.push(i)
        } else {
            let flag = true
            for (let j = 0; j < length / 2; j++) {
                if (str[j] !== str[length - 1 - j]) {
                    flag = false
                    break
                }
            }
            if (flag) {
                res.push(i)
            }
        }
    }
    return res
}

console.log('findPalindromeNumber1', findPalindromeNumber1(1000))





