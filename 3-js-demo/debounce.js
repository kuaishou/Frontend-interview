
const input1 = document.getElementById('input1')

// const timer = null
// input1.addEventListener('keyup', function () {
//     if (timer) {
//         clearTimeout(timer)
//     }
//     timer = setTimeout(()=>{
//         console.log(input1.value)
//         timer = null
//     },5000)
//     // timer = setTimeout(() => {
//     //     console.log(input1.value)
//     //     timer = null
//     // }, 500)
// })


//防抖是几秒后执行，-----后执行
function debounce(fn, delay = 500) {
    //timer是闭包中
    let timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}
input1.addEventListener('keyup', debounce(function () {
    console.log(input1.value)
}))