const btn=document.getElementById('button');
const div2=document.getElementById('div2')
div2.addEventListener('click',event=>{
    event.preventDefault()//阻止默认行为
    if(event.target.tagName==='A'){
        alert(event.target.innerHTML)
    }
    
})
btn.addEventListener('click', function (event) {

    event.preventDefault()//阻止默认行为
    const newa=document.createElement('a')
    newa.innerHTML='new add'
    div2.appendChild(newa)
    console.log('clicked')
})