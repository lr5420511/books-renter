// 获取元素的某个css属性值
export const elementCss = function(el, prop, callback = val => parseFloat(val)) {
    const value = getComputedStyle(el)[prop];
    return callback(value);
};

// 时间格式化
export const formatTime = function(time, template = '[y]-[m]-[d] [h]:[mi]:[s]') {
    time = new Date(time);
    const pairs = {
        sy: time.getYear,
        y: time.getFullYear,
        m: function() { return this.getMonth() + 1; },
        d: time.getDate,
        h: time.getHours,
        mi: time.getMinutes,
        s: time.getSeconds,
        ms: time.getMilliseconds
    };
    return template.replace(
        new RegExp(`\\[(${Object.keys(pairs).join('|')})\\]`, 'g'),
        (_, fir) => {
            const value = pairs[fir].call(time);
            return `${'0'.repeat(Math.max(0, 2 - String(value).length))}${value}`;
        }
    );
};