import { promisify } from '../utils';

/**
 * 保存文件到本地
 *
 * 文档 http://uniapp.dcloud.io/api/file/file?id=savefile
 */
export const saveFile = promisify(uni.saveFile);
