import { promisify } from "../utils";

/**
 * 预览图片
 *
 * 文档 http://uniapp.dcloud.net.cn/api/media/image?id=getimageinfo
 */
export const getImageInfo = promisify(uni.getImageInfo);
