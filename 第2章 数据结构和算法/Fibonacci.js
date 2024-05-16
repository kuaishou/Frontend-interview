//裴波那契数列
//递归有大量的重复计算---时间复杂度的O（）2的n次方非常耗费时间
function fibonacci(n) {
    if (n < 0) return 0
    if (n === 1) return 1

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log('fibonacci', fibonacci(10))

//优化
function fibonacci1(n) {
    if (n < 0) return 0
    if (n === 1) return 1
    let n1=1//记录n-1的结果
    let n2=0//记录n-2的结果
    let res=0//记录结果
    for(let i=2;i<=n;i++){
        res=n1+n2
        n2=n1
        n1=res
    }
    return res
}

console.log('fibonacci11', fibonacci(10))


 