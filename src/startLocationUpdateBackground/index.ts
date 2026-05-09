import { promisify } from "../utils";

/**
 * 开启小程序进入前后台时均接收位置消息
 *
 * 文档 https://uniapp.dcloud.net.cn/api/location/location-change.html#startlocationupdatebackground
 */
export const startLocationUpdateBackground = promisify(
  uni.startLocationUpdateBackground
);
