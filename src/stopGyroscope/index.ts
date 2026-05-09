import { promisify } from "../utils";

/**
 * 停止监听陀螺仪数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/gyroscope.html#stopgyroscope
 */
export const stopGyroscope = promisify(uni.stopGyroscope);
