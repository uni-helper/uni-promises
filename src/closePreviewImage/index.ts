import { promisify } from '../utils';

/**
 * 预览图片
 *
 * 文档 http://uniapp.dcloud.net.cn/api/media/image?id=closepreviewimage
 */
export const closePreviewImage = promisify(uni.closePreviewImage);
