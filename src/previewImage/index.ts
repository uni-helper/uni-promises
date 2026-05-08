import { promisify } from '../utils';

/**
 * 预览图片
 *
 * 文档 http://uniapp.dcloud.net.cn/api/media/image?id=previewimage
 */
export const previewImage = promisify(uni.previewImage);
