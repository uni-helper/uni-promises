import { promisify } from '../utils';

/**
 * 隐藏分享按钮
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/share?id=hidesharemenu
 */
export const hideShareMenu = promisify(uni.hideShareMenu);
