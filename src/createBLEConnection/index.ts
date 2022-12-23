import { promisify } from '../utils';

/**
 * 连接低功耗蓝牙设备
 *
 * 文档 http://uniapp.dcloud.io/api/system/ble?id=createbleconnection
 */
export const createBLEConnection = promisify(uni.createBLEConnection);
