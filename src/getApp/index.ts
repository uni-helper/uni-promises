// `getApp` 是全局函数，这里换个名字导出，免得在模块作用域里把它盖住。
// 拿不到 App 实例时 `getApp()` 会直接报错，用 Promise 包一层，把错误转成 reject。
const _getApp = () =>
  new Promise<ReturnType<typeof getApp>>((resolve, reject) => {
    try {
      const app = getApp();
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });

export { _getApp as getApp };
