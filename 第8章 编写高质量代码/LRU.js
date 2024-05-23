//手写LRU

class LRUCache {

    constructor(length) {
        if (length < 1) throw new Error('长度必须大于1')
        this.length = length
        this.data = new Map()//map是有序的所以使用该类型
    }
    set(key, value) {
        const data = this.data
        if (data.has(key)) {//存在的话先删除，再添加，这样保证设置的值在最新位置
            data.delete(key)
        }
        data.set(key, value)
        if (data.size > this.length) {//超出容量
            const lastKey = data.keys().next().value//map对象的最老的一位元素
            data.delete(lastKey)
        }
    }
    get(key) {
        const data = this.data
        if (!data.has(key)) return null
        const value = data.get(key)
        data.delete(key)//删除之后新增，保持访问的对象在最新位置
        data.set(key, value)
        return value
    }
}


const lruCache = new LRUCache(2)

lruCache.set(1, 1)
lruCache.set(2, 2)
console.log('lruCache', lruCache)
console.log('get1', lruCache.get(1), lruCache)
lruCache.set(3, 3)
console.log('lruCache', lruCache)



console.log('get8', lruCache.get(8), lruCache)
console.log('lruCache', lruCache)

