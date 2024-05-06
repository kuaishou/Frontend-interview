//var有变量提升

console.log(a)//由于变量提升输出 undefind
var a=100

// console.log(b)//没有变量提升---  报错Uncaught ReferenceError: Cannot access 'b' before initialization
const b=200
//const声明的变量不可修改  
// b=100  //报错  Uncaught TypeError: Assignment to constant variable.


//let const 有块级作用域
// for (var i=0;i<10;i++){
//     var j=i+1
// }
// console.log(i,j)//输出10 10

for (let i=0;i<10;i++){
    let j=i
}
console.log(i,j)//由于块级作用域   报错 i is not defined