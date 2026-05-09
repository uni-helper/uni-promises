import { promisify } from "../utils";

/**
 * 获取所有已搜索到的 iBeacon 设备
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/ibeacon.html
 */
export const getBeacons = promisify(uni.getBeacons);
