import { simplePromisify } from '../utils';

export interface MapContext extends UniApp.MapContext {
  getCenterLocation(
    options: UniApp.MapContextGetCenterLocationOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextGetCenterLocationOptions['success']>>[0]>;
  moveToLocation(
    options: UniApp.MapContextMoveToLocationOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextMoveToLocationOptions['success']>>[0]>;
  translateMarker(
    options: UniApp.MapContextTranslateMarkerOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextTranslateMarkerOptions['success']>>[0]>;
  includePoints(
    options: UniApp.MapContextIncludePointsOptions,
    // ): Promise<Parameters<NonNullable<UniApp.MapContextIncludePointsOptions['success']>>[0]>;
  ): Promise<any>;
  getRegion(
    options: UniApp.MapContextGetRegionOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextGetRegionOptions['success']>>[0]>;
  getScale(
    options: UniApp.MapContextGetScaleOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextGetScaleOptions['success']>>[0]>;
  addCustomLayer(
    options: UniApp.MapContextAddCustomLayerOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextAddCustomLayerOptions['success']>>[0]>;
  addGroundOverlay(
    options: UniApp.MapContextAddGroundOverlayOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextAddGroundOverlayOptions['success']>>[0]>;
  addMarkers(
    options: UniApp.MapContextAddMarkersOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextAddMarkersOptions['success']>>[0]>;
  fromScreenLocation(
    options: UniApp.MapContextFromScreenLocationOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextFromScreenLocationOptions['success']>>[0]>;
  initMarkerCluster(
    options: UniApp.MapContextInitMarkerClusterOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextInitMarkerClusterOptions['success']>>[0]>;
  moveAlong(
    options: UniApp.MapContextMoveAlongOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextMoveAlongOptions['success']>>[0]>;
  openMapApp(
    options: UniApp.MapContextOpenMapAppOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextOpenMapAppOptions['success']>>[0]>;
  removeCustomLayer(
    options: UniApp.MapContextRemoveCustomLayerOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextRemoveCustomLayerOptions['success']>>[0]>;
  removeGroundOverlay(
    options: UniApp.MapContextRemoveGroundOverlayOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextRemoveGroundOverlayOptions['success']>>[0]>;
  removeMarkers(
    options: UniApp.MapContextRemoveMarkersOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextRemoveMarkersOptions['success']>>[0]>;
  setCenterOffset(
    options: UniApp.MapContextSetCenterOffsetOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextSetCenterOffsetOptions['success']>>[0]>;
  toScreenLocation(
    options: UniApp.MapContextToScreenLocationOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextToScreenLocationOptions['success']>>[0]>;
  updateGroundOverlay(
    options: UniApp.MapContextUpdateGroundOverlayOptions,
  ): Promise<Parameters<NonNullable<UniApp.MapContextUpdateGroundOverlayOptions['success']>>[0]>;
}

export const createMapContext = (mapId: string, componentInstance?: any) => {
  return new Promise<MapContext>((resolve, reject) => {
    try {
      const context: any = uni.createMapContext(mapId, componentInstance);
      context.getCenterLocation = simplePromisify(context.getCenterLocation.bind(context));
      context.moveToLocation = simplePromisify(context.moveToLocation.bind(context));
      context.translateMarker = simplePromisify(context.translateMarker.bind(context));
      context.includePoints = simplePromisify(context.includePoints.bind(context));
      context.getRegion = simplePromisify(context.getRegion.bind(context));
      context.getScale = simplePromisify(context.getScale.bind(context));
      context.addCustomLayer = simplePromisify(context.addCustomLayer.bind(context));
      context.addGroundOverlay = simplePromisify(context.addGroundOverlay.bind(context));
      context.addMarkers = simplePromisify(context.addMarkers.bind(context));
      context.fromScreenLocation = simplePromisify(context.fromScreenLocation.bind(context));
      context.initMarkerCluster = simplePromisify(context.initMarkerCluster.bind(context));
      context.moveAlong = simplePromisify(context.moveAlong.bind(context));
      context.openMapApp = simplePromisify(context.openMapApp.bind(context));
      context.removeCustomLayer = simplePromisify(context.removeCustomLayer.bind(context));
      context.removeGroundOverlay = simplePromisify(context.removeGroundOverlay.bind(context));
      context.removeMarkers = simplePromisify(context.removeMarkers.bind(context));
      context.setCenterOffset = simplePromisify(context.setCenterOffset.bind(context));
      context.toScreenLocation = simplePromisify(context.toScreenLocation.bind(context));
      context.updateGroundOverlay = simplePromisify(context.updateGroundOverlay.bind(context));
      resolve(context);
    } catch (error) {
      reject(error);
    }
  });
};
