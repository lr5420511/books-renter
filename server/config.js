'use strict';

const outs = module.exports = {};

// 工作进程所对应的入口模块路径
outs.CHILD_PROCESS_PATH = './child.js';

// KOA应用需要注册的中间件
outs.KOA_MIDDLEWARES = [

];

// HTTP服务需要侦听的TCP端口
outs.TCP_PORT = 8808;