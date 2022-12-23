import { promisify } from '../utils';

/**
 * 使手机发生较短时间的振动（15ms）
 *
 * 文档 http://uniapp.dcloud.io/api/system/vibrate?id=vibrateshort
 */
export const vibrateShort = promisify(uni.vibrateShort);
