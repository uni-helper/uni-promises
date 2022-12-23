import { promisify } from '../utils';

/**
 * 关闭 WebSocket 连接
 *
 * 文档 http://uniapp.dcloud.io/api/request/websocket?id=closesocket
 */
export const closeSocket = () => promisify(uni.closeSocket);
