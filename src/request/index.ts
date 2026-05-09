import type { RequestPromise } from "../types";
import { mountTaskMethodToPromise, noop } from "../utils";

/**
 * 发起网络请求
 *
 * 文档 http://uniapp.dcloud.net.cn/api/request/request?id=request
 */
export function request<T = UniApp.RequestSuccessCallbackResult>(
  urlOrOptions: string | UniApp.RequestOptions,
  options?: UniApp.RequestOptions
) {
  const _options =
    typeof urlOrOptions === "string"
      ? { ...options, url: urlOrOptions, complete: options?.complete ?? noop }
      : {
          ...urlOrOptions,
          ...options,
          complete: urlOrOptions?.complete ?? options?.complete ?? noop,
        };
  const { success, fail } = _options;

  let task: UniApp.RequestTask | undefined;
  const promise: RequestPromise<T> = new Promise((resolve, reject) => {
    _options.success = (r) => {
      success?.(r);
      resolve(r);
    };
    _options.fail = (e) => {
      fail?.(e);
      reject(e);
    };
    task = uni.request(_options);
  }) as unknown as RequestPromise<T>;

  mountTaskMethodToPromise<T>(task, promise);

  return promise;
}
