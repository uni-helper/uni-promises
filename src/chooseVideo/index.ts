import { promisify } from '../utils';

/**
 * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
 *
 * 文档 http://uniapp.dcloud.io/api/media/video?id=choosevideo
 */
export const chooseVideo = promisify(uni.chooseVideo);
