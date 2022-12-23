import { promisify } from '../utils';

/**
 * 初始化蓝牙模块
 *
 * 文档 http://uniapp.dcloud.io/api/system/bluetooth?id=openbluetoothadapter
 */
export const openBluetoothAdapter = promisify(uni.openBluetoothAdapter);
