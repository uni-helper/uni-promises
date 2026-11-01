import { promisify } from "../utils";

/**
 * 获取图片信息
 *
 * 文档 https://uniapp.dcloud.net.cn/api/media/image?id=getimageinfo
 */
export const getImageInfo = promisify(uni.getImageInfo);
