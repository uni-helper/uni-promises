import { promisify } from '../utils';

/**
 * 压缩图片
 *
 * 文档 http://uniapp.dcloud.io/api/media/image?id=compressimage
 */
export const compressImage = promisify(uni.compressImage);
