import { promisify } from '../utils';

/**
 * 设置蓝牙最大传输单元
 *
 * 需在 createBLEConnection 调用成功后调用，mtu 设置范围 (22, 512)
 *
 * 安卓 5.1 以上有效
 *
 * 文档 http://uniapp.dcloud.io/api/system/ble?id=setBLEMTU
 */
export const setBLEMTU = promisify(uni.setBLEMTU);
