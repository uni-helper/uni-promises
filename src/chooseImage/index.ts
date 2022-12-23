import { promisify } from '../utils';

/**
 * 从本地相册选择图片或使用相机拍照
 *
 * 文档 http://uniapp.dcloud.io/api/media/image?id=chooseimage
 */
export const chooseImage = promisify(uni.chooseImage);
