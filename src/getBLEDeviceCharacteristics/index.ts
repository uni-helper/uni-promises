import { promisify } from '../utils';

/**
 * 获取蓝牙设备指定服务中所有特征值
 *
 * 文档 http://uniapp.dcloud.io/api/system/ble?id=getbledevicecharacteristics
 */
export const getBLEDeviceCharacteristics = promisify(uni.getBLEDeviceCharacteristics);
