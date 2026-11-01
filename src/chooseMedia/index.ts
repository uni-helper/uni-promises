import { promisify } from "../utils";

/**
 * 拍摄或从手机相册中选择图片或视频
 *
 * 微信小程序需基础库 `2.10.0`，插件内使用需基础库 `2.11.1`。
 *
 * 文档 https://uniapp.dcloud.net.cn/api/media/video?id=choosemedia
 */
export const chooseMedia = promisify(uni.chooseMedia);
