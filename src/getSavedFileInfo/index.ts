import { promisify } from '../utils';

/**
 * 获取本地文件的文件信息
 *
 * 文档 http://uniapp.dcloud.io/api/file/file?id=getsavedfileinfo
 */
export const getSavedFileInfo = promisify(uni.getSavedFileInfo);
