import { promisify } from '../utils';

/**
 * 获取本机蓝牙适配器状态
 *
 * 文档 http://uniapp.dcloud.net.cn/api/system/bluetooth?id=getbluetoothadapterstate
 */
export const getBluetoothAdapterState = promisify(uni.getBluetoothAdapterState);
