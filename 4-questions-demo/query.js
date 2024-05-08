
//传统方式获取URL参数

function query(name){
    const search=window.location.search.substr(1)
    const reg=new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
    const res=search.match(reg)
    console.log(res)
    if(res===null){
        return null
    }
    return res[2]
}
query('a')

function query1(name){
    const search=location.search
    const p=new URLSearchParams(search)
    return p.get(name)

}
query1('a')
console.log('query1',query1('a'))
