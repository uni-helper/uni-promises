import { promisify } from '../utils';

/**
 * 获取文件信息
 *
 * 文档 https://uniapp.dcloud.net.cn/api/file/file.html#getfileinfo
 */
export const getFileInfo = promisify(uni.getFileInfo);
