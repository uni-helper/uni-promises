import { promisify } from "../utils";

/**
 * 向低功耗蓝牙设备指定特征值写入二进制数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/ble?id=writeblecharacteristicvalue
 */
export const writeBLECharacteristicValue = promisify(
  uni.writeBLECharacteristicValue
);
