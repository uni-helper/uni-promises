import { promisify } from '../utils';

/**
 * 关闭蓝牙模块
 *
 * 文档 http://uniapp.dcloud.io/api/system/bluetooth?id=closebluetoothadapter
 */
export const closeBluetoothAdapter = promisify(uni.closeBluetoothAdapter);
