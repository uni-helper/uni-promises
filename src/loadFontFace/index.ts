import { promisify } from '../utils';

/**
 * 动态加载网络字体
 *
 * 文档 http://uniapp.dcloud.io/api/ui/font?id=loadfontface
 */
export const loadFontFace = promisify(uni.loadFontFace);
