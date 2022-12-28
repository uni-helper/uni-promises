# @uni-helper/uni-promises

[![License](https://img.shields.io/github/license/uni-helper/uni-promises)](https://github.com/uni-helper/uni-promises/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@uni-helper/uni-promises)](https://www.npmjs.com/package/@uni-helper/uni-promises)

`uni-app` promise 化的 API。

## 起步

### 安装依赖

安装依赖。

使用 `npm`：

```shell
npm install @uni-helper/uni-promises
```

使用 `yarn`：

```shell
yarn install @uni-helper/uni-promises
```

`uni-app` 和 `pnpm` 结合使用存在问题，不建议使用 `pnpm` 安装依赖。

不考虑支持 `uni_modules`。

## API

- [addPhoneContact](./src/addPhoneContact.ts)
- [authorize](./src/authorize.ts)
- [checkIsSoterEnrolledInDevice](./src/checkIsSoterEnrolledInDevice.ts)
- [checkIsSupportSoterAuthentication](./src/checkIsSupportSoterAuthentication.ts)
- [checkSession](./src/checkSession.ts)
- [chooseAddress](./src/chooseAddress.ts)
- [chooseFile](./src/chooseFile.ts)
- [chooseImage](./src/chooseImage.ts)
- [chooseInvoice](./src/chooseInvoice.ts)
- [chooseInvoiceTitle](./src/chooseInvoiceTitle.ts)
- [chooseLocation](./src/chooseLocation.ts)
- [chooseMedia](./src/chooseMedia.ts)
- [chooseMessageFile](./src/chooseMessageFile.ts)
- [chooseVideo](./src/chooseVideo.ts)
- [clearStorage](./src/clearStorage.ts)
- [closeBLEConnection](./src/closeBLEConnection.ts)
- [closeBluetoothAdapter](./src/closeBluetoothAdapter.ts)
- [closePreviewImage](./src/closePreviewImage.ts)
- [closeSocket](./src/closeSocket.ts)
- [compressImage](./src/compressImage.ts)
- [compressVideo](./src/compressVideo.ts)
- [connectSocket](./src/connectSocket.ts)
- [createBLEConnection](./src/createBLEConnection.ts)
- [createCameraContext](./src/createCameraContext.ts)
- [createCanvasContext](./src/createCanvasContext.ts)
- [createInnerAudioContext](./src/createInnerAudioContext.ts)
- [createLivePlayerContext](./src/createLivePlayerContext.ts)
- [createLivePusherContext](./src/createLivePusherContext.ts)
- [createMapContext](./src/createMapContext.ts)
- [createMediaContainer](./src/createMediaContainer.ts)
- [createPushMessage](./src/createPushMessage.ts)
- [createSelectorQuery](./src/createSelectorQuery.ts)
- [createVideoContext](./src/createVideoContext.ts)
- [downloadFile](./src/downloadFile.ts)
- [getApp](./src/getApp.ts)
- [getBLEDeviceCharacteristics](./src/getBLEDeviceCharacteristics.ts)
- [getBLEDeviceRSSI](./src/getBLEDeviceRSSI.ts)
- [getBLEDeviceServices](./src/getBLEDeviceServices.ts)
- [getBackgroundAudioManager](./src/getBackgroundAudioManager.ts)
- [getBatteryInfo](./src/getBatteryInfo.ts)
- [getBluetoothAdapterState](./src/getBluetoothAdapterState.ts)
- [getBluetoothDevices](./src/getBluetoothDevices.ts)
- [getCheckBoxState](./src/getCheckBoxState.ts)
- [getClipboardData](./src/getClipboardData.ts)
- [getConnectedBluetoothDevices](./src/getConnectedBluetoothDevices.ts)
- [getExtConfig](./src/getExtConfig.ts)
- [getFileInfo](./src/getFileInfo.ts)
- [getImageInfo](./src/getImageInfo.ts)
- [getLocation](./src/getLocation.ts)
- [getNetworkType](./src/getNetworkType.ts)
- [getProvider](./src/getProvider.ts)
- [getPushClientId](./src/getPushClientId.ts)
- [getRecordManager](./src/getRecordManager.ts)
- [getSavedFileInfo](./src/getSavedFileInfo.ts)
- [getSavedFileList](./src/getSavedFileList.ts)
- [getScreenBrightness](./src/getScreenBrightness.ts)
- [getSelectedTextRange](./src/getSelectedTextRange.ts)
- [getSetting](./src/getSetting.ts)
- [getStorage](./src/getStorage.ts)
- [getStorageInfo](./src/getStorageInfo.ts)
- [getSystemInfo](./src/getSystemInfo.ts)
- [getUserInfo](./src/getUserInfo.ts)
- [getUserProfile](./src/getUserProfile.ts)
- [getVideoInfo](./src/getVideoInfo.ts)
- [hideHomeButton](./src/hideHomeButton.ts)
- [hideNavigationBarLoading](./src/hideNavigationBarLoading.ts)
- [hideShareMenu](./src/hideShareMenu.ts)
- [hideTabBar](./src/hideTabBar.ts)
- [hideTabBarRedDot](./src/hideTabBarRedDot.ts)
- [loadFontFace](./src/loadFontFace.ts)
- [login](./src/login.ts)
- [makePhoneCall](./src/makePhoneCall.ts)
- [navigateBack](./src/navigateBack.ts)
- [navigateBackMiniProgram](./src/navigateBackMiniProgram.ts)
- [navigateTo](./src/navigateTo.ts)
- [navigateToMiniProgram](./src/navigateToMiniProgram.ts)
- [notifyBLECharacteristicValueChange](./src/notifyBLECharacteristicValueChange.ts)
- [openAppAuthorizeSetting](./src/openAppAuthorizeSetting.ts)
- [openBluetoothAdapter](./src/openBluetoothAdapter.ts)
- [openDocument](./src/openDocument.ts)
- [openLocation](./src/openLocation.ts)
- [openSetting](./src/openSetting.ts)
- [openVideoEditor](./src/openVideoEditor.ts)
- [pageScrollTo](./src/pageScrollTo.ts)
- [preLogin](./src/preLogin.ts)
- [previewImage](./src/previewImage.ts)
- [reLaunch](./src/reLaunch.ts)
- [readBLECharacteristicValue](./src/readBLECharacteristicValue.ts)
- [redirectTo](./src/redirectTo.ts)
- [removeSavedFile](./src/removeSavedFile.ts)
- [removeStorage](./src/removeStorage.ts)
- [removeTabBarBadge](./src/removeTabBarBadge.ts)
- [request](./src/request.ts)
- [requestPayment](./src/requestPayment.ts)
- [requestSubscribeMessage](./src/requestSubscribeMessage.ts)
- [saveFile](./src/saveFile.ts)
- [saveImageToPhotosAlbum](./src/saveImageToPhotosAlbum.ts)
- [saveVideoToPhotosAlbum](./src/saveVideoToPhotosAlbum.ts)
- [scanCode](./src/scanCode.ts)
- [sendSocketMessage](./src/sendSocketMessage.ts)
- [setBLEMTU](./src/setBLEMTU.ts)
- [setBackgroundColor](./src/setBackgroundColor.ts)
- [setBackgroundTextStyle](./src/setBackgroundTextStyle.ts)
- [setClipboardData](./src/setClipboardData.ts)
- [setEnableDebug](./src/setEnableDebug.ts)
- [setKeepScreenOn](./src/setKeepScreenOn.ts)
- [setNavigationBarColor](./src/setNavigationBarColor.ts)
- [setNavigationBarTitle](./src/setNavigationBarTitle.ts)
- [setScreenBrightness](./src/setScreenBrightness.ts)
- [setStorage](./src/setStorage.ts)
- [setTabBarBadge](./src/setTabBarBadge.ts)
- [setTabBarItem](./src/setTabBarItem.ts)
- [setTabBarStyle](./src/setTabBarStyle.ts)
- [share](./src/share.ts)
- [shareWithSystem](./src/shareWithSystem.ts)
- [showActionSheet](./src/showActionSheet.ts)
- [showLoading](./src/showLoading.ts)
- [showModal](./src/showModal.ts)
- [showNavigationBarLoading](./src/showNavigationBarLoading.ts)
- [showShareMenu](./src/showShareMenu.ts)
- [showTabBar](./src/showTabBar.ts)
- [showTabBarRedDot](./src/showTabBarRedDot.ts)
- [showToast](./src/showToast.ts)
- [startBluetoothDevicesDiscovery](./src/startBluetoothDevicesDiscovery.ts)
- [startPullDownRefresh](./src/startPullDownRefresh.ts)
- [startSoterAuthentication](./src/startSoterAuthentication.ts)
- [stopBluetoothDevicesDiscovery](./src/stopBluetoothDevicesDiscovery.ts)
- [switchTab](./src/switchTab.ts)
- [uploadFile](./src/uploadFile.ts)
- [vibrate](./src/vibrate.ts)
- [vibrateLong](./src/vibrateLong.ts)
- [vibrateShort](./src/vibrateShort.ts)
- [writeBLECharacteristicValue](./src/writeBLECharacteristicValue.ts)

## 关联 ISSUE

如果你觉得这个库有用，你可以到 [这个 ISSUE](https://github.com/dcloudio/uni-app/issues/4084) 投票，鼓励官方引入支持。

## 致谢

- [taro](https://github.com/nervjs/taro)
