import { promisify } from '../utils';

/**
 * 压缩视频
 *
 * 文档 http://uniapp.dcloud.io/api/media/video?id=compressvideo
 */
export const compressVideo = promisify(uni.compressVideo);
