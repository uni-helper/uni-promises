/**
 * 创建并返回 video 上下文 videoContext 对象
 *
 * 文档 http://uniapp.dcloud.io/api/media/video-context?id=createvideocontext
 */
export const createVideoContext = (videoId: string, componentInstance?: any) =>
  uni.createVideoContext(videoId, componentInstance);
