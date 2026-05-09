import { promisify } from "../utils";

/**
 * 关闭 WebSocket 连接
 *
 * 文档 http://uniapp.dcloud.net.cn/api/request/websocket?id=closesocket
 */
export const closeSocket = () => promisify(uni.closeSocket);
