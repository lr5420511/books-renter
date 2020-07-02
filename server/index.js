'use strict';

const { EventEmitter } = require('events');
const { fork } = require('child_process');
const promiseify = require('new-promiseify');
const { CHILD_PROCESS_PATH } = require('./config');

// 启动新的工作进程
const child = fork(CHILD_PROCESS_PATH);

const [once, send] = promiseify(
    [EventEmitter.prototype.once, 1, 2],
    child.send
);

// 开始工作循环
(async pairs => {
    for(let i = 0;;i++) {
        const [current, status] = pairs[i];
        await send.call(current, ...status);
        pairs.push([fork(CHILD_PROCESS_PATH), await once.call(current, 'message')]);
    }
})([[child, ['server', null]]]);