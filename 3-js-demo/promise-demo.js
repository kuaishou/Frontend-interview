const url = '//img1.bdstatic.com/static/searchdetail/img/logo-2X_1a73254.png'
const url2 = 'https://image.baidu.com/search/albumsdetail?tn=albumsdetail&word=%E7%9A%AE%E5%BD%B1&fr=albumslist&album_tab=%E8%AE%BE%E8%AE%A1%E7%B4%A0%E6%9D%90&album_id=394&rn=30'
function loadImg(src) {
    return new Promise(
        (resove, reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resove(img)
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败${src}`)
                reject(err)
            }
            img.src = src
        }
    )
}

loadImg(url).then(img => {
    console.log(img.width)
    return img
}).then((imgs) => {
    console.log(imgs.height)
    return loadImg(url2)
}).then((imgs) => {
    console.log(imgs.height)
}).catch(err => console.log(err))