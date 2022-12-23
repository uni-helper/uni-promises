import { promisify } from '../utils';

/**
 * 跳转到 TabBar 页面，并关闭其它所有非 TabBar 页面
 *
 * 文档 http://uniapp.dcloud.io/api/router?id=switchtab
 */
export const switchTab = promisify(uni.switchTab);
