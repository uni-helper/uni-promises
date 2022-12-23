import { promisify } from '../utils';

/**
 * 读取低功耗蓝牙设备指定特征值的二进制数据值
 *
 * 文档 http://uniapp.dcloud.io/api/system/ble?id=readblecharacteristicvalue
 */
export const readBLECharacteristicValue = promisify(uni.readBLECharacteristicValue);
