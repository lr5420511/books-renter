'use strict';

const { EventEmitter } = require('events');
const { createServer, Server } = require('http');
const Koa = require('koa');
const promiseify = require('new-promiseify');
const { KOA_MIDDLEWARES, TCP_PORT } = require('./config');

const [once, listen, send] = promiseify(
    [EventEmitter.prototype.once, 1, 2],
    Server.prototype.listen,
    process.send
);

// 注册KOA应用中间件
const koa = KOA_MIDDLEWARES.reduce((ctx, path) => ctx.use(require(path)), new Koa());

// Go!!
(async () => {
    const status = await once.call(process, 'message'),
        server = status[1] || createServer(koa.callback());
    // Handler for unknow error.
    (async () => {
        const error = await once.call(process, 'uncaughtException');
        console.log(`The child process of work need to exit, and because ${error}`);
        await send.call(process, status[0], server);
        process.exit();
    })();
    await listen.call(server, TCP_PORT);
    console.log(`Http serve has been opened, and is running on tcp ${TCP_PORT} port.`);
})();