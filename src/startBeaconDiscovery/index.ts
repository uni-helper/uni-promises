import { promisify } from '../utils';

/**
 * 开始搜索附近的 iBeacon 设备
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/ibeacon.html#startbeacondiscovery
 */
export const startBeaconDiscovery = promisify(uni.startBeaconDiscovery);
