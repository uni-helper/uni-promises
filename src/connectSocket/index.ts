import { promisify } from "../utils";

/**
 * 创建一个 WebSocket 连接
 *
 * 文档 https://uniapp.dcloud.net.cn/api/request/websocket?id=connectsocket
 */
export const connectSocket = () => promisify(uni.connectSocket);
