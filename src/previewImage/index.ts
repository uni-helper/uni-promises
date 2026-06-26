import { promisify } from "../utils";

/**
 * 预览图片
 *
 * 文档 https://uniapp.dcloud.net.cn/api/media/image?id=previewimage
 */
export const previewImage = promisify(uni.previewImage);
