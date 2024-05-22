
//连续的字符串
function findContinuousChar1(str) {

    const res = {
        char: '',
        length: 0
    }
    const length = str.length;
    if (length === 0) return res

    let tempLength = 0//临时记录字符串长度
    for (let i = 0; i < length; i++) {

        tempLength = 0//重置
        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) {
                tempLength++
            }
            if (str[i] !== str[j] || j === length - 1) {
                //不相等。或者到了最后一个元素，去判断最大值
                if (tempLength > res.length) {
                    res.char = str[i]
                    res.length = tempLength
                }
                if (i < length - 1) {
                    i = j - 1//性能优化跳步
                }
                break
            }
        }
    }
    return res
}

const Cstr = 'aaddbbeeee112222223'
console.log('findContinuousChar1', findContinuousChar1(Cstr))


//双指针方式
function findContinuousChar2(str) {

    const res = {
        char: '',
        length: 0
    }
    const length = str.length;
    if (length === 0) return res

    let tempLength = 0//临时记录字符串长度
    let i = 0//临时记录字符串长度
    let j = 0//临时记录字符串长度
    while (i < length) {
        if (str[i] === str[j]) {
            tempLength++
            i++
        }

        if (str[i] !== str[j] || j === length - 1) {
            if (tempLength > res.length) {
                res.char = str[j]
                res.length = tempLength
            }
            tempLength = 0
            j = i
        }

    }
    return res
}

console.log('findContinuousChar2', findContinuousChar2(Cstr))
