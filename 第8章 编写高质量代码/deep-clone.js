function deepClone(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj == null) {//不是对象或者数组直接返回
        return obj
    }

    //避免循环引用
    const objFormMap = map.get(obj)
    if (objFormMap) return objFormMap

    let tatget = {}
    map.set(obj, tatget)

    //map
    if (obj instanceof Map) {
        tatget = new Map()
        obj.forEach((v, k) => {
            const v1 = deepClone(v, map)
            const k1 = deepClone(k, map)
            tatget.set(k1, v1)
        })
    }
    //set
    if (obj instanceof Set) {
        tatget = new Set()
        obj.forEach((v) => {
            const v1 = deepClone(v, map)
            tatget.add(v1)
        })
    }
    //数组
    if (obj instanceof Array) {
        tatget = obj.map(item => deepClone(item, map))
    }
    //Object
    for (const key in obj) {
        console.log('objf', key)
        const val = obj[key]
        const val1 = deepClone(val, map)
        tatget[key] = val1
    }

    return tatget
}


const a = {
    set: new Set([10, 2, 0]),
    map: new Map([['x', 10], ['y', 20]]),
    info: {
        city: '深圳'
    },
    fn: () => { console.log(100) },
    name: '邢浩东'
}

const cloneA = deepClone(a)
console.log('deepclone', cloneA)