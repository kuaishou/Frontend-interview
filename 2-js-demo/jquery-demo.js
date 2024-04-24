class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length;
        for (let i = 0; i < length; i++) {
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }

    get(index) {
        return this[index]
    }
    each(fn) {
        for (let i = 0; i < length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
    //更多扩展的DOM API

}


//给jquery添加插件的方法
jQuery.prototype.dialog=function(info){
    alert(info)
}

//造轮子基于jquery新做一个框架
class myJQuery extends jQuery{
    constructor(selector){
        super(selector)
    }
    //扩展自己的方法addClass
    addClass(classname){

    }
}