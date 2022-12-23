import { promisify } from '../utils';

/**
 * 断开与低功耗蓝牙设备的连接
 *
 * 文档 http://uniapp.dcloud.io/api/system/ble?id=closebleconnection
 */
export const closeBLEConnection = promisify(uni.closeBLEConnection);
