import { promisify } from '../utils';

/**
 * 调用扫码界面，扫码成功后返回对应的结果
 *
 * 文档 http://uniapp.dcloud.io/api/system/barcode?id=scancode
 */
export const scanCode = promisify(uni.scanCode);
