//闭包隐藏数据，只提供api
function createCache() {
    const data = {}
    return {
        set: (key, val) => {
            data[key] = val
        },
        get: (key) => {
            return data[key]
        }
    }
}

const c = createCache()
c.set('aa', 100)
console.log(c.get('aa'))//100
console.log(data.aa)//报错