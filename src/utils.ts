import type {
  DownloadFilePromise,
  RequestPromise,
  UploadFilePromise,
} from "./types";

// 作为 complete 回调的占位符。request/uploadFile/downloadFile 需要重写 options.success/fail，
// 用 noop 保证 complete 始终有值，避免向原始 API 传入 undefined。
// biome-ignore lint/suspicious/noEmptyBlockStatements: Work as expected.
export function noop() {}

// 将回调式 uni API 包装成 Promise。保留调用方传入的 success/fail 回调，同时用 resolve/reject 衔接 Promise。
// 泛型从原始 success 回调的入参类型推导出 Promise 的 resolve 值，使每个 API 无需手写返回类型。
// biome-ignore lint/suspicious/noExplicitAny: Work as expected.
export function promisify<F extends (...args: any) => void>(callback: F) {
  return (...args: Parameters<F>) => {
    type Options = Parameters<F>[0];
    const options = args[0] as Options;
    return new Promise<
      Parameters<NonNullable<NonNullable<Options>["success"]>>[0]
    >((resolve, reject) => {
      callback({
        ...options,
        // biome-ignore lint/suspicious/noExplicitAny: Work as expected.
        fail: (error: any) => {
          options?.fail?.(error);
          reject(error);
        },
        // biome-ignore lint/suspicious/noExplicitAny: Work as expected.
        success: (result: any) => {
          options?.success?.(result);
          resolve(result);
        },
      });
    });
  };
}

// 把 task 上的事件监听与 abort 挂载到返回的 Promise 上，使调用方在 await 之外仍能订阅进度/头部并主动取消任务，
// 与原生 uni.request/uploadFile/downloadFile 返回 task 的用法保持一致。
export function mountTaskMethodToPromise<T = UniApp.GeneralCallbackResult>(
  task?: UniApp.RequestTask | UniApp.UploadTask | UniApp.DownloadTask,
  promise?: RequestPromise<T> | DownloadFilePromise<T> | UploadFilePromise<T>
) {
  if (!(task && promise)) {
    return;
  }
  for (const fn of [
    "onHeadersReceived",
    "offHeadersReceived",
    "onChunkReceived",
    "offChunkReceived",
    "onProgressUpdate",
    "offProgressUpdate",
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
