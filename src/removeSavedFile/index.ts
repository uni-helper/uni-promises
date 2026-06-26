import { promisify } from "../utils";

/**
 * 删除本地存储的文件
 *
 * 文档 https://uniapp.dcloud.net.cn/api/file/file?id=removesavedfile
 */
export const removeSavedFile = promisify(uni.removeSavedFile);
