import { promisify } from '../utils';

/**
 * 通过 WebSocket 连接发送数据
 *
 * 文档 http://uniapp.dcloud.io/api/request/websocket?id=sendsocketmessage
 */
export const sendSocketMessage = () => promisify(uni.sendSocketMessage);
