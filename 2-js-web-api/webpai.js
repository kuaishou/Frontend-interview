const div1=document.getElementById('div1')
const divList=document.getElementsByTagName('div')
console.log(divList.length)
console.log(divList[0])

const content=document.getElementsByClassName('.content')
console.log(content)


const pList=document.querySelectorAll('p')
const p0=pList[0]
console.log(p0.style.width)
p0.style.width='500px'
console.log(p0.style.width)

p0.className='p0'
console.log(p0.className)
console.log(p0.nodeName)
console.log(p0.nodeType)

p0.getAttribute('data-name')
console.log('dataname',p0.getAttribute('data-name'))
p0.setAttribute('data-name','xinghaodong')
console.log('dataname',p0.getAttribute('data-name'))
p0.setAttribute('style','font-size:50px')
