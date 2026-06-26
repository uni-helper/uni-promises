import { promisify } from "../utils";

/**
 * 通过 WebSocket 连接发送数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/request/websocket?id=sendsocketmessage
 */
export const sendSocketMessage = () => promisify(uni.sendSocketMessage);
