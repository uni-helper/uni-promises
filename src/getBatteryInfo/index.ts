import { promisify } from '../utils';

/**
 * 获取设备电量
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/batteryInfo.html
 */
export const getBatteryInfo = promisify(uni.getBatteryInfo);
