import { promisify } from '../utils';

/**
 * 获取蓝牙设备的所有服务
 *
 * 文档 http://uniapp.dcloud.io/api/system/ble?id=getbledeviceservices
 */
export const getBLEDeviceServices = promisify(uni.getBLEDeviceServices);
