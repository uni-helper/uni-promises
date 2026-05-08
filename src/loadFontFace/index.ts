import { promisify } from '../utils';

/**
 * 动态加载网络字体
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/font?id=loadfontface
 */
export const loadFontFace = promisify(uni.loadFontFace);
