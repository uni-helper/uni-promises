import { promisify } from '../utils';

/**
 * 保存视频到系统相册
 *
 * 文档 http://uniapp.dcloud.io/api/media/video?id=savevideotophotosalbum
 */
export const saveVideoToPhotosAlbum = promisify(uni.saveVideoToPhotosAlbum);
