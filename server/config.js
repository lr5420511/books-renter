'use strict';

const outs = module.exports = {};

// 需要注册的KOA中间件
outs.MIDDLE_WARES = [
    './wares/ware-cors', 
    './wares/ware-static', 
    './wares/ware-body', 
    './wares/ware-router'
];

// HTTP服务器侦听的TCP端口
outs.TCP_POINT = 8888;