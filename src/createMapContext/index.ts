import { promisify } from '../utils';

export interface MapContext extends UniApp.MapContext {
  /** 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 uni.openLocation */
  getCenterLocation(
    options: UniApp.MapContextGetCenterLocationOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextGetCenterLocationOptions['success']>>[0]>;
  /** 将地图中心移动到当前定位点，需要配合 map 组件的 show-location 使用 */
  moveToLocation(
    options: UniApp.MapContextMoveToLocationOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextMoveToLocationOptions['success']>>[0]>;
  /** 平移marker，带动画 */
  translateMarker(
    options: UniApp.MapContextTranslateMarkerOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextTranslateMarkerOptions['success']>>[0]>;
  /** 缩放视野展示所有经纬度 */
  includePoints(
    options: UniApp.MapContextIncludePointsOptions,
    // ): Promise<Parameters<NonNullable<UniApp.MapContextIncludePointsOptions['success']>>[0]>;
  ): Promise<any>;
  /** 获取当前地图的视野范围 */
  getRegion(
    options: UniApp.MapContextGetRegionOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextGetRegionOptions['success']>>[0]>;
  /** 获取当前地图的缩放级别 */
  getScale(
    options: UniApp.MapContextGetScaleOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextGetScaleOptions['success']>>[0]>;
  /** 添加个性化图层 */
  addCustomLayer(
    options: UniApp.MapContextAddCustomLayerOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextAddCustomLayerOptions['success']>>[0]>;
  /** 创建自定义图片图层，图片会随着地图缩放而缩放 */
  addGroundOverlay(
    options: UniApp.MapContextAddGroundOverlayOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextAddGroundOverlayOptions['success']>>[0]>;
  /** 添加 marker */
  addMarkers(
    options: UniApp.MapContextAddMarkersOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextAddMarkersOptions['success']>>[0]>;
  /** 获取屏幕上的点对应的经纬度，坐标原点为地图左上角 */
  fromScreenLocation(
    options: UniApp.MapContextFromScreenLocationOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextFromScreenLocationOptions['success']>>[0]>;
  /** 初始化点聚合的配置，未调用时采用默认配置 */
  initMarkerCluster(
    options: UniApp.MapContextInitMarkerClusterOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextInitMarkerClusterOptions['success']>>[0]>;
  /**
   * 沿指定路径移动 marker，用于轨迹回放等场景
   *
   * 动画完成时触发回调事件，若动画进行中，对同一 marker 再次调用 moveAlong 方法，前一次的动画将被打断
   */
  moveAlong(
    options: UniApp.MapContextMoveAlongOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextMoveAlongOptions['success']>>[0]>;
  /** 拉起地图 APP 选择导航 */
  openMapApp(
    options: UniApp.MapContextOpenMapAppOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextOpenMapAppOptions['success']>>[0]>;
  /** 移除个性化图层 */
  removeCustomLayer(
    options: UniApp.MapContextRemoveCustomLayerOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextRemoveCustomLayerOptions['success']>>[0]>;
  /** 移除自定义图片图层 */
  removeGroundOverlay(
    options: UniApp.MapContextRemoveGroundOverlayOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextRemoveGroundOverlayOptions['success']>>[0]>;
  /** 移除 marker */
  removeMarkers(
    options: UniApp.MapContextRemoveMarkersOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextRemoveMarkersOptions['success']>>[0]>;
  /**
   * 设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)
   *
   * 默认偏移为[0.5, 0.5]
   */
  setCenterOffset(
    options: UniApp.MapContextSetCenterOffsetOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextSetCenterOffsetOptions['success']>>[0]>;
  /** 获取经纬度对应的屏幕坐标，坐标原点为地图左上角 */
  toScreenLocation(
    options: UniApp.MapContextToScreenLocationOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextToScreenLocationOptions['success']>>[0]>;
  /** 更新自定义图片图层 */
  updateGroundOverlay(
    options: UniApp.MapContextUpdateGroundOverlayOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextUpdateGroundOverlayOptions['success']>>[0]>;
}

export const createMapContext = (mapId: string, componentInstance?: any) => {
  return new Promise<MapContext>((resolve, reject) => {
    try {
      const context: any = uni.createMapContext(mapId, componentInstance);
      context.getCenterLocation = promisify(context.getCenterLocation.bind(context));
      context.moveToLocation = promisify(context.moveToLocation.bind(context));
      context.translateMarker = promisify(context.translateMarker.bind(context));
      context.includePoints = promisify(context.includePoints.bind(context));
      context.getRegion = promisify(context.getRegion.bind(context));
      context.getScale = promisify(context.getScale.bind(context));
      context.addCustomLayer = promisify(context.addCustomLayer.bind(context));
      context.addGroundOverlay = promisify(context.addGroundOverlay.bind(context));
      context.addMarkers = promisify(context.addMarkers.bind(context));
      context.fromScreenLocation = promisify(context.fromScreenLocation.bind(context));
      context.initMarkerCluster = promisify(context.initMarkerCluster.bind(context));
      context.moveAlong = promisify(context.moveAlong.bind(context));
      context.openMapApp = promisify(context.openMapApp.bind(context));
      context.removeCustomLayer = promisify(context.removeCustomLayer.bind(context));
      context.removeGroundOverlay = promisify(context.removeGroundOverlay.bind(context));
      context.removeMarkers = promisify(context.removeMarkers.bind(context));
      context.setCenterOffset = promisify(context.setCenterOffset.bind(context));
      context.toScreenLocation = promisify(context.toScreenLocation.bind(context));
      context.updateGroundOverlay = promisify(context.updateGroundOverlay.bind(context));
      resolve(context);
    } catch (error) {
      reject(error);
    }
  });
};
