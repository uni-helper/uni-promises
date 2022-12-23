import { promisify } from '../utils';

/**
 * 使用地图查看位置
 *
 * 文档 http://uniapp.dcloud.io/api/location/open-location?id=openlocation
 */
export const openLocation = promisify(uni.openLocation);
