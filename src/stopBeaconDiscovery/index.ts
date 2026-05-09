import { promisify } from "../utils";

/**
 * 停止搜索附近的 iBeacon 设备
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/ibeacon.html#stopbeacondiscovery
 */
export const stopBeaconDiscovery = promisify(uni.stopBeaconDiscovery);
