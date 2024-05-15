
//判断重复的字符串+
//给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
const str ='leetcode'    //expect result is 0
const str2 ='loveleetcode' //expect result is 2

// solution  1 , use hash table ,save the string's item as key to 
// object , then interate the map . if the key's ferquency of occurrenc
// is 1 . get current item's index , return it 
function firstSpecialStr(str) {
    let map = {}
    let result 
    for(let i in str){
        map[str[i]] ?  map[str[i]] ++ :  map[str[i]] = 1
    }
    console.log(map)
    for(let i in str){
        console.log('ddd',i)
        if(map[str[i]] === 1){
            result = i
            break
        }
    }
    return result
}


console.log(firstSpecialStr(str2))

// function repeatString(str) {
//     let len = str.length;
//     let res=''
//     for (let i = 0; i < len; i++) {
//         if (res.indexOf(str[i]) < 0) {
//             res = res + str[i]
//         } else {
//             return res
//             break
//         }
//     }

//     return res

// }

const srttt = 'abcabc'

// console.log(repeatString(srttt))
var repeatedSubstringPattern = function(s) {
    let str=s+s
    console.log('sc',str.slice(1,str.length-1))
    return str.slice(1,str.length-1).includes(s)
    };

    console.log(repeatedSubstringPattern(srttt))

// console.log('括号闭合', matchBracket('{}{(ab])}'))