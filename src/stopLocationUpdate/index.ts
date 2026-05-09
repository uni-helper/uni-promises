import { promisify } from "../utils";

/**
 * 关闭监听实时位置变化，前后台都停止消息接收
 *
 * 文档 https://uniapp.dcloud.net.cn/api/location/location-change.html#stoplocationupdate
 */
export const stopLocationUpdate = promisify(uni.stopLocationUpdate);
