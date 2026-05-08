import { promisify } from '../utils';

/**
 * 将页面滚动到目标位置
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/scroll?id=pagescrollto
 */
export const pageScrollTo = promisify(uni.pageScrollTo);
