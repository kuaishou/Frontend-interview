
const div1 = document.getElementById('div1')

// let timer = null
// div1.addEventListener('drag', function (e) {
//     if (timer) {
//         return
//     }
//     timer = setTimeout(() => {
//         console.log(e.offsetX, e.offsetY)
//         timer = null
//     },200)
// })



//节流
function throttle(fn, delay = 100) {
    //timer是闭包中 
    let timer = null

    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
div1.addEventListener('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY)
}))