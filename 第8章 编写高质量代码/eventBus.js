//自定义事件

class EventBus {
    constructor() {
        this.event = {}
    }
    on(type, fn, isOnce = false) {
        if (this.event[type] == null) {
            this.event[type] = []
        }

        this.event[type].push({
            fn, isOnce
        })
    }
    once(type, fn) {
        this.on(type, fn, true)

    }
    off(type, fn) {
        if (this.event[type] === null) {
            return
        }
        const fnList = this.event[type]
        if (fnList) {
            this.event[type] = fnList.filter(item => item.fn != fn)
        }
    }
    emit(type, ...args) {
        const fnList = this.event[type]
        if (fnList === null) {
            return
        }
        this.event[type] = fnList.filter(item => {
            const { fn, isOnce } = item
            fn(...args)

            if (isOnce) return false//是否是一次性函数
            return true
        })
    }

}

const e = new EventBus()

function fn1(a, b) { console.log('fn1',a, b) }
function fn2(a, b) { console.log('fn2',a, b) }
function fn3(a, b) { console.log('fn3',a, b) }

e.on('key1', fn1)
e.on('key1', fn2)
e.once('key1', fn3)
e.on('dddddd', fn3)
e.emit('key1',10,20)
e.emit('key1',11,22)
e.off('key1', fn1)
e.emit('key1',111,222)