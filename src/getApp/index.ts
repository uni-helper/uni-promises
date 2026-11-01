// `getApp` 是全局函数，这里换个名字导出，免得在模块作用域里把它盖住。
// 拿不到 App 实例时 `getApp()` 会直接报错，用 Promise 包一层，把错误转成 reject。

/**
 * 获取当前应用实例
 *
 * 传入 `{ allowDefault: true }` 时，`App` 还没定义也会返回一个默认实现，一般用于独立分包。
 *
 * 文档 https://uniapp.dcloud.net.cn/collocation/App.html
 */
const _getApp = (options?: App.GetAppOption) =>
  new Promise<ReturnType<typeof getApp>>((resolve, reject) => {
    try {
      const app = getApp(options);
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });

export { _getApp as getApp };
