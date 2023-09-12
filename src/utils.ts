import { DownloadFilePromise, RequestPromise, SimpleOptions, UploadFilePromise } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export function promisify<F extends (...args: any) => void>(callback: F) {
  return (...args: Parameters<typeof callback>) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const [options = { fail() {}, success() {} }] = args as Array<SimpleOptions | undefined>;
    return new Promise<Parameters<NonNullable<(typeof options)['success']>>[0]>(
      (resolve, reject) => {
        callback({
          ...options,
          success: (result: any) => {
            options?.success?.(result);
            resolve(result);
          },
          fail: (error: any) => {
            options?.fail?.(error);
            reject(error);
          },
        });
      },
    );
  };
}

export function mountTaskMethodToPromise<T = UniApp.GeneralCallbackResult>(
  task?: UniApp.RequestTask | UniApp.UploadTask | UniApp.DownloadTask,
  promise?: RequestPromise<T> | DownloadFilePromise<T> | UploadFilePromise<T>,
) {
  if (!task || !promise) return;
  for (const fn of [
    'onHeadersReceived',
    'offHeadersReceived',
    'onChunkReceived',
    'offChunkReceived',
    'onProgressUpdate',
    'offProgressUpdate',
  ] as const) {
    if (fn in task) {
      // @ts-expect-error no types
      promise[fn] = task[fn].bind(task);
    }
  }
  promise.abort = () => {
    task?.abort();
    return promise;
  };
}
