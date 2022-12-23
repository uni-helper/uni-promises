import { promisify } from '../utils';

/**
 * 需要基础库： `2.10.0`
 *
 * 在插件中使用：需要基础库 `2.11.1`
 *
 * 拍摄或从手机相册中选择图片或视频。
 *
 * 文档 https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html
 */
export const chooseMedia = promisify(uni.chooseMedia);
