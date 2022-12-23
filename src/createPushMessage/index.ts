import { promisify } from '../utils';

/**
 * 创建本地通知栏消息
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/push.html#createpushmessage
 */
export const createPushMessage = promisify(uni.createPushMessage);
