class Student{
    constructor(name,number){
        this.name=name
        this.number=number
    }
    sayHi(){
        console.log(`姓名：${this.name}；学号：${this.number}`)
    }
}

const xialuo=new Student('夏洛',100)
const madongmei=new Student('马冬梅',101)

console.log(xialuo)
console.log(xialuo.sayHi())


console.log(madongmei)
console.log(madongmei.sayHi())
//继承
class Teacher extends Student{
    constructor(name,number,zhiwei){
        super(name,number)
        this.zhiwei=zhiwei
    }
    teach(){
        console.log(`姓名：${this.name}；职位：${this.zhiwei}`)
    }    
}

const lilaoshi=new Teacher('李老师',111,'班主任')
console.log(lilaoshi)
console.log(lilaoshi.sayHi())
console.log(lilaoshi.teach())