// 实现一个测试函数

function test(title, calllback) {
    try {
        calllback()
        console.info('RIGHT:', title)
    } catch(err) {
        console.error('ERROR: ', title)
        console.error(err)
    }
}

function expect(actual) {
    return {
        toBe (expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

const sum = (a, b) => a + b
const substract = (a, b) => a + b

test('2 + 1 = 3', () => {
    expect(sum(2, 1)).toBe(3)
})

test('2 - 1 = 1', () => {
    expect(substract(2, 1)).toBe(1)
})