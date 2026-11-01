import { promisify } from "../utils";

/**
 * 关闭预览图片
 *
 * 文档 https://uniapp.dcloud.net.cn/api/media/image?id=closepreviewimage
 */
export const closePreviewImage = promisify(uni.closePreviewImage);
