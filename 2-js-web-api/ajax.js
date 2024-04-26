//手写ajax
const xhr = new XMLHttpRequest()
xhr.open('GET', './test.json', true)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState)//返回数据
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // const res=JSON.parse(xhr.responseText)
            alert(xhr.responseText)
        }
    }


}
xhr.send()

//POST请求
// const postData = {
//     name: 'xing',
//     password: '123'
// }
// xhr.send(JSON.stringify(postData))


