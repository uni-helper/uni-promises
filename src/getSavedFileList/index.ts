import { promisify } from '../utils';

/**
 * 获取本地已保存的文件列表
 *
 * 文档 http://uniapp.dcloud.io/api/file/file?id=getsavedfilelist
 */
export const getSavedFileList = promisify(uni.getSavedFileList);
