import { promisify } from "../utils";

/**
 * 压缩图片
 *
 * 文档 https://uniapp.dcloud.net.cn/api/media/image?id=compressimage
 */
export const compressImage = promisify(uni.compressImage);
