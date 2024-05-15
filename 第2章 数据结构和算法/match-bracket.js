
//判断括号闭合

function matchBracket(str) {
    const stack = []
    const length = str.length;
    const leftString = '[{('
    const rightString = ']})'

    for (let i = 0; i < length; i++) {
        const s = str[i]
        if (leftString.indexOf(s) >= 0) {
            stack.push(s)
        } else if (rightString.indexOf(s) >= 0) {
            const last = stack[stack.length - 1]
            if (last == '(' && s == ')' || last == '{' && s == '}' || last == '[' && s == ']') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    console.log('stasck', stack)
    return stack.length === 0

}

console.log('括号闭合', matchBracket('{}{(ab])}'))