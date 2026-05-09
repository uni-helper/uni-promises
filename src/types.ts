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

export interface RequestPromise<T = UniApp.RequestSuccessCallbackResult>
  extends TaskPromise<T> {
  offChunkReceived: (
    callback?: (result: { data: ArrayBuffer }) => void
  ) => void;
  onChunkReceived: (callback: (result: { data: ArrayBuffer }) => void) => void;
}

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
