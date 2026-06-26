import { promisify } from "../utils";

/**
 * 获取本地文件的文件信息
 *
 * 文档 https://uniapp.dcloud.net.cn/api/file/file?id=getsavedfileinfo
 */
export const getSavedFileInfo = promisify(uni.getSavedFileInfo);
