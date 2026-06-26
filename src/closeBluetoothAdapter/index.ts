import { promisify } from "../utils";

/**
 * 关闭蓝牙模块
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/bluetooth?id=closebluetoothadapter
 */
export const closeBluetoothAdapter = promisify(uni.closeBluetoothAdapter);
