import { promisify } from '../utils';

/**
 * 启用低功耗蓝牙设备特征值变化时的notify功能，订阅特征值
 *
 * 文档 http://uniapp.dcloud.io/api/system/ble?id=notifyblecharacteristicvaluechange
 */
export const notifyBLECharacteristicValueChange = promisify(uni.notifyBLECharacteristicValueChange);
