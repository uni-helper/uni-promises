import { promisify } from '../utils';

/**
 * 分享
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/share?id=share
 */
export const share = promisify(uni.share);
