export const timeStr = (ms) => {
    ms = parseInt(ms, 10)
    let m = 0, s = 0
    if (ms > 1000 * 60) {
        m = Math.floor(ms / (1000 * 60))
        ms %= 1000 * 60
    }
    if (ms > 1000) {
        s = Math.round(ms / 1000 * 100) / 100
        ms -= s
    }
    let str = ''
    if (m > 0) {
        str += m + '分'
    }
    if (s > 0) {
        str += s + '秒'
    }
    return str
}

console.log(timeStr(1000 * 60 * 2.99))