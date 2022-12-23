import { promisify } from '../utils';

/**
 * 获取已搜索到的蓝牙设备
 *
 * 文档 http://uniapp.dcloud.io/api/system/bluetooth?id=getbluetoothdevices
 */
export const getBluetoothDevices = promisify(uni.getBluetoothDevices);
