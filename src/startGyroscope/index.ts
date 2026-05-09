import { promisify } from "../utils";

/**
 * 开始监听陀螺仪数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/gyroscope.html#startgyroscope
 */
export const startGyroscope = promisify(uni.startGyroscope);
