import { promisify } from '../utils';

/**
 * 开始下拉刷新
 *
 * 文档 http://uniapp.dcloud.io/api/ui/pulldown?id=startpulldownrefresh
 */
export const startPullDownRefresh = promisify(uni.startPullDownRefresh);
