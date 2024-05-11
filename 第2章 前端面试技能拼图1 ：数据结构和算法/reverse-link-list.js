//反转单向链表
function reverseLinkList(listNode) {
    let prevNode
    let curNode
    let nextNode = listNode

    while (nextNode) {
        if (curNode && !prevNode) {
            delete curNode.next
        }
        if (curNode && prevNode) {//反转指针
            curNode.next = prevNode
        }
        //整体向后移动
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode.next
    }
    //最后一个补充：当nextNode为空时，此时curnode尚未设置next
    curNode.next = prevNode

    return curNode
}




//根据数组创建单向链表
function createLinkList(arr) {
    const length = arr.length
    if (length === 0) {
        throw new Error('arr is empty')
    }
    let curNode = {
        value: arr[length - 1]
    }
    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }
    return curNode
}
const arry = [100, 200, 300, 400, 500]
const list = createLinkList(arry)
console.log('linkList', list)

const recerselist = reverseLinkList(list)
console.log('reverselinkList', recerselist)