import { promisify } from '../utils';

/**
 * 保存图片到系统相册
 *
 * 文档 http://uniapp.dcloud.io/api/media/image?id=saveimagetophotosalbum
 */
export const saveImageToPhotosAlbum = promisify(uni.saveImageToPhotosAlbum);
