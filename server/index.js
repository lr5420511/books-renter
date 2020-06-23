'use strict';

const { EventEmitter } = require('events');
const { Server, createServer } = require('http');
const Koa = require('koa');
const promiseify = require('new-promiseify');
const { MIDDLE_WARES, TCP_POINT } = require('./config');

const [once, listen] = promiseify(
    [EventEmitter.prototype.once, 1, 1],
    Server.prototype.listen
);

// Register koa middlewares.
const koa = MIDDLE_WARES.reduce((ctx, path) => ctx.use(require(path)), new Koa());

// Handle for unknow error.
(async () => {
    const error = await once.call(process, 'uncaughtException');
    console.log(`A unknow error has been throwed, and current nodejs process need to exit. \n${error}`);
    process.exit();
})();

// Open a http server.
(async () => {
    const server = createServer(koa.callback());
    await listen.call(server, TCP_POINT);
    console.log(`A koa http server has been opened, and is running on tcp ${TCP_POINT} port.`);
})();