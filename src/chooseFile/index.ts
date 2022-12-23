import { promisify } from '../utils';

/**
 * 从本地选择文件
 *
 * 仅支持H5
 *
 * 文档 http://uniapp.dcloud.io/api/media/file?id=chooseFile
 */
export const chooseFile = promisify(uni.chooseFile);
