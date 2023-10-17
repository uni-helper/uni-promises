export interface TaskPromise<T = UniApp.GeneralCallbackResult> extends Promise<T> {
  abort: () => void;
  onHeadersReceived: (callback: (result: { header: Record<string, any> }) => void) => void;
  offHeadersReceived: (callback: (result: { header: Record<string, any> }) => void) => void;
}

export interface RequestPromise<T = UniApp.RequestSuccessCallbackResult> extends TaskPromise<T> {
  onChunkReceived: (callback: (result: { data: ArrayBuffer }) => void) => void;
  offChunkReceived: (callback?: (result: { data: ArrayBuffer }) => void) => void;
}

export interface DownloadFilePromise<T = UniApp.DownloadSuccessData> extends TaskPromise<T> {
  onProgressUpdate: (
    callback: (result: {
      progress: number;
      totalBytesWritten: number;
      totalBytesExpectedToWrite: number;
    }) => void,
  ) => void;
  offProgressUpdate: (
    callback: (result: {
      progress: number;
      totalBytesWritten: number;
      totalBytesExpectedToWrite: number;
    }) => void,
  ) => void;
}

export interface UploadFilePromise<T = UniApp.UploadFileSuccessCallbackResult>
  extends TaskPromise<T> {
  onProgressUpdate: (
    callback: (result: {
      progress: number;
      totalBytesSent: number;
      totalBytesExpectedToSend: number;
    }) => void,
  ) => void;
  offProgressUpdate: (
    callback: (result: {
      progress: number;
      totalBytesSent: number;
      totalBytesExpectedToSend: number;
    }) => void,
  ) => void;
}
