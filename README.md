# @uni-helper/uni-promises

[![License](https://img.shields.io/github/license/uni-helper/uni-promises)](https://github.com/uni-helper/uni-promises/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@uni-helper/uni-promises)](https://www.npmjs.com/package/@uni-helper/uni-promises)

`uni-app` promise 化的 API。要求 `node >= 14.18`。

## 起步

### 安装依赖

安装依赖。

使用 `npm`：

```shell
npm install @uni-helper/uni-promises
```

使用 `yarn v1`：

```shell
yarn add @uni-helper/uni-promises
```

`uni-app` 和 `pnpm` 结合使用存在问题，不建议使用 `pnpm` 安装依赖。

不考虑支持 `uni_modules`。

## API

- [addPhoneContact](./src/addPhoneContact/index.ts)
- [authorize](./src/authorize/index.ts)
- [checkIsSoterEnrolledInDevice](./src/checkIsSoterEnrolledInDevice/index.ts)
- [checkIsSupportSoterAuthentication](./src/checkIsSupportSoterAuthentication/index.ts)
- [checkSession](./src/checkSession/index.ts)
- [chooseAddress](./src/chooseAddress/index.ts)
- [chooseFile](./src/chooseFile/index.ts)
- [chooseImage](./src/chooseImage/index.ts)
- [chooseInvoice](./src/chooseInvoice/index.ts)
- [chooseInvoiceTitle](./src/chooseInvoiceTitle/index.ts)
- [chooseLocation](./src/chooseLocation/index.ts)
- [chooseMedia](./src/chooseMedia/index.ts)
- [chooseMessageFile](./src/chooseMessageFile/index.ts)
- [chooseVideo](./src/chooseVideo/index.ts)
- [clearStorage](./src/clearStorage/index.ts)
- [closeBLEConnection](./src/closeBLEConnection/index.ts)
- [closeBluetoothAdapter](./src/closeBluetoothAdapter/index.ts)
- [closePreviewImage](./src/closePreviewImage/index.ts)
- [closeSocket](./src/closeSocket/index.ts)
- [compressImage](./src/compressImage/index.ts)
- [compressVideo](./src/compressVideo/index.ts)
- [connectSocket](./src/connectSocket/index.ts)
- [createBLEConnection](./src/createBLEConnection/index.ts)
- [createCameraContext](./src/createCameraContext/index.ts)
- [createCanvasContext](./src/createCanvasContext/index.ts)
- [createInnerAudioContext](./src/createInnerAudioContext/index.ts)
- [createLivePlayerContext](./src/createLivePlayerContext/index.ts)
- [createLivePusherContext](./src/createLivePusherContext/index.ts)
- [createMapContext](./src/createMapContext/index.ts)
- [createMediaContainer](./src/createMediaContainer/index.ts)
- [createPushMessage](./src/createPushMessage/index.ts)
- [createSelectorQuery](./src/createSelectorQuery/index.ts)
- [createVideoContext](./src/createVideoContext/index.ts)
- [downloadFile](./src/downloadFile/index.ts)
- [getApp](./src/getApp/index.ts)
- [getBLEDeviceCharacteristics](./src/getBLEDeviceCharacteristics/index.ts)
- [getBLEDeviceRSSI](./src/getBLEDeviceRSSI/index.ts)
- [getBLEDeviceServices](./src/getBLEDeviceServices/index.ts)
- [getBackgroundAudioManager](./src/getBackgroundAudioManager/index.ts)
- [getBatteryInfo](./src/getBatteryInfo/index.ts)
- [getBluetoothAdapterState](./src/getBluetoothAdapterState/index.ts)
- [getBluetoothDevices](./src/getBluetoothDevices/index.ts)
- [getCheckBoxState](./src/getCheckBoxState/index.ts)
- [getClipboardData](./src/getClipboardData/index.ts)
- [getConnectedBluetoothDevices](./src/getConnectedBluetoothDevices/index.ts)
- [getExtConfig](./src/getExtConfig/index.ts)
- [getFileInfo](./src/getFileInfo/index.ts)
- [getImageInfo](./src/getImageInfo/index.ts)
- [getLocation](./src/getLocation/index.ts)
- [getNetworkType](./src/getNetworkType/index.ts)
- [getProvider](./src/getProvider/index.ts)
- [getPushClientId](./src/getPushClientId/index.ts)
- [getRecordManager](./src/getRecordManager/index.ts)
- [getSavedFileInfo](./src/getSavedFileInfo/index.ts)
- [getSavedFileList](./src/getSavedFileList/index.ts)
- [getScreenBrightness](./src/getScreenBrightness/index.ts)
- [getSelectedTextRange](./src/getSelectedTextRange/index.ts)
- [getSetting](./src/getSetting/index.ts)
- [getStorage](./src/getStorage/index.ts)
- [getStorageInfo](./src/getStorageInfo/index.ts)
- [getSystemInfo](./src/getSystemInfo/index.ts)
- [getUserInfo](./src/getUserInfo/index.ts)
- [getUserProfile](./src/getUserProfile/index.ts)
- [getVideoInfo](./src/getVideoInfo/index.ts)
- [hideHomeButton](./src/hideHomeButton/index.ts)
- [hideNavigationBarLoading](./src/hideNavigationBarLoading/index.ts)
- [hideShareMenu](./src/hideShareMenu/index.ts)
- [hideTabBar](./src/hideTabBar/index.ts)
- [hideTabBarRedDot](./src/hideTabBarRedDot/index.ts)
- [loadFontFace](./src/loadFontFace/index.ts)
- [login](./src/login/index.ts)
- [makePhoneCall](./src/makePhoneCall/index.ts)
- [navigateBack](./src/navigateBack/index.ts)
- [navigateBackMiniProgram](./src/navigateBackMiniProgram/index.ts)
- [navigateTo](./src/navigateTo/index.ts)
- [navigateToMiniProgram](./src/navigateToMiniProgram/index.ts)
- [notifyBLECharacteristicValueChange](./src/notifyBLECharacteristicValueChange/index.ts)
- [openAppAuthorizeSetting](./src/openAppAuthorizeSetting/index.ts)
- [openBluetoothAdapter](./src/openBluetoothAdapter/index.ts)
- [openDocument](./src/openDocument/index.ts)
- [openLocation](./src/openLocation/index.ts)
- [openSetting](./src/openSetting/index.ts)
- [openVideoEditor](./src/openVideoEditor/index.ts)
- [pageScrollTo](./src/pageScrollTo/index.ts)
- [preLogin](./src/preLogin/index.ts)
- [previewImage](./src/previewImage/index.ts)
- [reLaunch](./src/reLaunch/index.ts)
- [readBLECharacteristicValue](./src/readBLECharacteristicValue/index.ts)
- [redirectTo](./src/redirectTo/index.ts)
- [removeSavedFile](./src/removeSavedFile/index.ts)
- [removeStorage](./src/removeStorage/index.ts)
- [removeTabBarBadge](./src/removeTabBarBadge/index.ts)
- [request](./src/request/index.ts)
- [requestPayment](./src/requestPayment/index.ts)
- [requestSubscribeMessage](./src/requestSubscribeMessage/index.ts)
- [saveFile](./src/saveFile/index.ts)
- [saveImageToPhotosAlbum](./src/saveImageToPhotosAlbum/index.ts)
- [saveVideoToPhotosAlbum](./src/saveVideoToPhotosAlbum/index.ts)
- [scanCode](./src/scanCode/index.ts)
- [sendSocketMessage](./src/sendSocketMessage/index.ts)
- [setBLEMTU](./src/setBLEMTU/index.ts)
- [setBackgroundColor](./src/setBackgroundColor/index.ts)
- [setBackgroundTextStyle](./src/setBackgroundTextStyle/index.ts)
- [setClipboardData](./src/setClipboardData/index.ts)
- [setEnableDebug](./src/setEnableDebug/index.ts)
- [setKeepScreenOn](./src/setKeepScreenOn/index.ts)
- [setNavigationBarColor](./src/setNavigationBarColor/index.ts)
- [setNavigationBarTitle](./src/setNavigationBarTitle/index.ts)
- [setScreenBrightness](./src/setScreenBrightness/index.ts)
- [setStorage](./src/setStorage/index.ts)
- [setTabBarBadge](./src/setTabBarBadge/index.ts)
- [setTabBarItem](./src/setTabBarItem/index.ts)
- [setTabBarStyle](./src/setTabBarStyle/index.ts)
- [share](./src/share/index.ts)
- [shareWithSystem](./src/shareWithSystem/index.ts)
- [showActionSheet](./src/showActionSheet/index.ts)
- [showLoading](./src/showLoading/index.ts)
- [showModal](./src/showModal/index.ts)
- [showNavigationBarLoading](./src/showNavigationBarLoading/index.ts)
- [showShareMenu](./src/showShareMenu/index.ts)
- [showTabBar](./src/showTabBar/index.ts)
- [showTabBarRedDot](./src/showTabBarRedDot/index.ts)
- [showToast](./src/showToast/index.ts)
- [startBluetoothDevicesDiscovery](./src/startBluetoothDevicesDiscovery/index.ts)
- [startPullDownRefresh](./src/startPullDownRefresh/index.ts)
- [startSoterAuthentication](./src/startSoterAuthentication/index.ts)
- [stopBluetoothDevicesDiscovery](./src/stopBluetoothDevicesDiscovery/index.ts)
- [switchTab](./src/switchTab/index.ts)
- [uploadFile](./src/uploadFile/index.ts)
- [vibrate](./src/vibrate/index.ts)
- [vibrateLong](./src/vibrateLong/index.ts)
- [vibrateShort](./src/vibrateShort/index.ts)
- [writeBLECharacteristicValue](./src/writeBLECharacteristicValue/index.ts)

## 关联 ISSUE

如果你觉得这个库有用，你可以到 [这个 ISSUE](https://github.com/dcloudio/uni-app/issues/4084) 投票，鼓励官方引入支持。

## 致谢

- [taro](https://github.com/nervjs/taro)
