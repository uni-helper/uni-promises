import { promisify } from '../utils';

/**
 * 获取蓝牙设备的信号强度。
 *
 * 文档 http://uniapp.dcloud.io/api/system/ble?id=getBLEDeviceRSSI
 */
export const getBLEDeviceRSSI = promisify(uni.getBLEDeviceRSSI);
