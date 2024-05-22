//反转字符串大小写

// 15aBcD----15AbCd

//ASCII编码方式----每个字母对应的编码范围
function switchLetterCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result += str[i].toLowerCase();
        } else if (code >= 97 && code <= 122) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log('switchLetterCase', switchLetterCase('15aBcD'))





