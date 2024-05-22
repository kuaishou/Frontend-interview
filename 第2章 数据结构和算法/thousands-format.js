//千分位格式化
//115544788---115,544,788


function format(num) {
    let res = ''

    const newNum = num + '';
    const length = newNum.length;
    for (let i = length - 1; i >= 0; i--) {
        if ((length - i) % 3 === 0) {
            if (i === 0) {
                res = newNum[i] + res
            } else {
                res = ',' + newNum[i] + res
            }

        }else{
            res = newNum[i] + res
        }

    }
    return res

}
const num = 115544788
console.log('format', format(num))