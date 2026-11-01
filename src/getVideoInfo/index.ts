import { promisify } from "../utils";

/**
 * 获取视频详细信息
 *
 * 文档 https://uniapp.dcloud.net.cn/api/media/video?id=getvideoinfo
 */
export const getVideoInfo = promisify(uni.getVideoInfo);
