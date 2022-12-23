import { promisify } from '../utils';

/**
 * 开始搜索附近的蓝牙设备
 *
 * 文档 http://uniapp.dcloud.io/api/system/bluetooth?id=startbluetoothdevicesdiscovery
 */
export const startBluetoothDevicesDiscovery = promisify(uni.startBluetoothDevicesDiscovery);
