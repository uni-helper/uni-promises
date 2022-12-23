import { promisify } from '../utils';

/**
 * 停止搜寻附近的蓝牙外围设备
 *
 * 文档 http://uniapp.dcloud.io/api/system/bluetooth?id=stopbluetoothdevicesdiscovery
 */
export const stopBluetoothDevicesDiscovery = promisify(uni.stopBluetoothDevicesDiscovery);
