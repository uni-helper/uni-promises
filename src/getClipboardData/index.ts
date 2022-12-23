import { promisify } from '../utils';

/**
 * 获得系统剪贴板的内容
 *
 * 文档 http://uniapp.dcloud.io/api/system/clipboard?id=getclipboarddata
 */
export const getClipboardData = promisify(uni.getClipboardData);
