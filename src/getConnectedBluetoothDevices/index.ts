import { promisify } from "../utils";

/**
 * 根据 uuid 获取处于已连接的设备
 *
 * 文档 http://uniapp.dcloud.net.cn/api/system/bluetooth?id=getconnectedbluetoothdevices
 */
export const getConnectedBluetoothDevices = promisify(
  uni.getConnectedBluetoothDevices
);
