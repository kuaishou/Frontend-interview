const arr = []
//二叉树的前序遍历
function preOrderTraverse(node) {//根左右
    if (node === null) return
    arr.push(node.value)
    // console.log(node.value)
    preOrderTraverse(node.left)
    preOrderTraverse(node.right)
}
//二叉树的中序遍历
function inOrderTraverse(node) {//左根右
    if (node === null) return

    inOrderTraverse(node.left)
    arr.push(node.value)
    // console.log(node.value)
    inOrderTraverse(node.right)

}
//二叉树的后序遍历
function postOrderTraverse(node) {//左右根
    if (node === null) return

    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    arr.push(node.value)
    // console.log(node.value)
}


const tree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

// preOrderTraverse(tree)
// inOrderTraverse(tree)
// postOrderTraverse(tree)


// 寻找bst里面的第K小值
  
function getKthValue(node, k) {
    inOrderTraverse(node)
    console.log(arr)
    return arr[k - 1] || null
}

console.log('k value',getKthValue(tree,3))    