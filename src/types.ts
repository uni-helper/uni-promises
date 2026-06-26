/**
 * 通用任务 Promise：在原生 Promise 之上挂载 abort 与响应头监听，
 * 对齐 `uni.request`/`uni.uploadFile`/`uni.downloadFile` 返回 task 的能力。
 */
export interface TaskPromise<T = UniApp.GeneralCallbackResult>
  extends Promise<T> {
  abort: () => void;
  offHeadersReceived: (
    // biome-ignore lint/suspicious/noExplicitAny: Work as expected.
    callback: (result: { header: Record<string, any> }) => void
  ) => void;
  onHeadersReceived: (
    // biome-ignore lint/suspicious/noExplicitAny: Work as expected.
    callback: (result: { header: Record<string, any> }) => void
  ) => void;
}

/**
 * `request` 返回的 Promise，额外支持分块接收（流式响应）的订阅。
 */
export interface RequestPromise<T = UniApp.RequestSuccessCallbackResult>
  extends TaskPromise<T> {
  offChunkReceived: (
    callback?: (result: { data: ArrayBuffer }) => void
  ) => void;
  onChunkReceived: (callback: (result: { data: ArrayBuffer }) => void) => void;
}

/**
 * `downloadFile` 返回的 Promise，额外支持下载进度更新的订阅。
 */
export interface DownloadFilePromise<T = UniApp.DownloadSuccessData>
  extends TaskPromise<T> {
  offProgressUpdate: (
    callback: (result: {
      progress: number;
      totalBytesWritten: number;
      totalBytesExpectedToWrite: number;
    }) => void
  ) => void;
  onProgressUpdate: (
    callback: (result: {
      progress: number;
      totalBytesWritten: number;
      totalBytesExpectedToWrite: number;
    }) => void
  ) => void;
}

/**
 * `uploadFile` 返回的 Promise，额外支持上传进度更新的订阅。
 */
export interface UploadFilePromise<T = UniApp.UploadFileSuccessCallbackResult>
  extends TaskPromise<T> {
  offProgressUpdate: (
    callback: (result: {
      progress: number;
      totalBytesSent: number;
      totalBytesExpectedToSend: number;
    }) => void
  ) => void;
  onProgressUpdate: (
    callback: (result: {
      progress: number;
      totalBytesSent: number;
      totalBytesExpectedToSend: number;
    }) => void
  ) => void;
}
