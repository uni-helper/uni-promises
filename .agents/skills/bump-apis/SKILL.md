---
name: bump-apis
description: Use this skill whenever the user requests to update apis (e.g., "更新 API", "同步最新 API", "检查 API 是否需要更新", "check for apis updates").
---

# 检查 API 是否需要更新

`src/<apiName>/index.ts` 是 `uni.<apiName>` 的 Promise 封装。检查对象是 `uni-app` 官方的回调式 API 和 `src/` 的差集，顺带核对每个封装文件里 JSDoc 的描述和链接。

参考信息：

1. <https://uniapp.dcloud.net.cn/api/>
2. <https://doc.dcloud.net.cn/uni-app-x/api/>
3. 每个 `src/<apiName>/index.ts` 里 JSDoc 的文档链接
4. `node_modules/@dcloudio/types/uni-app/` 下的类型声明。它是本仓库唯一的 dependencies，也是 `promisify` 能否落地的边界

要求：

1. 统一的表达格式，参考现有代码：JSDoc 第一行是一句话描述，最后一行是 `文档 <链接>`
2. 目录名、导出名与官方 API 名完全一致
3. 规范的表达，遵循 <https://github.com/ruanyf/document-style-guide>
4. 文档页的表达常常不规范、信息分散，不要整段照抄，整合成一句话
5. 链接统一用 `https://`（官方对 `http://` 做 301）

## 检查顺序

1. 拿 `/api/` 页面里表格中的 `uni.xxx` 条目与 `src/` 目录名逐条比对，得出缺失项和多余项。表格在页面 HTML 里是带相对链接的 `<tr>`，`curl` 抓下来直接解析即可。
2. 缺失项只有同时满足两条才补：参数是带 `success` 回调的 options 对象；`@dcloudio/types` 里有对应签名。以下情况直接跳过，不算漏封装：
   - 返回结果不走 `success` 回调的：`xxxSync` 同步方法、`onXxx` / `offXxx` 事件监听、`getXxxManager` 管理器
   - 创建时没有 `success`、直接返回实例的 `create*`：`createAnimation`、`createIntersectionObserver`、`createMediaQueryObserver`、`createWebviewContext`
   - 签名里没有 options 对象的，比如 `@dcloudio/types@3.4.32` 中 `hideToast()`、`hideLoading()`、`stopPullDownRefresh()`、`hideKeyboard()`、`closeAuthView()` 都是 `(): void`，`promisify` 推不出返回值。依赖升级后如果这些签名补上了 options，再按上面的规则补封装。
   - 剩下的零散项：`requireNativePlugin`、`getUpdateManager`、`getFileSystemManager`、`getChannelManager`、`getUniverifyManager`、`setLocale`、`rpx2px` / `upx2px`、`setLeftWindowStyle` 一类窗口样式方法
3. 逐个打开 JSDoc 里的链接。返回 301 / 308 说明路径变了，按跳转后的地址更新；返回 404 换新地址。微信文档对 `curl` 常常返回 404，要加 `--compressed` 复核，也可能是上游链接本身失效（如 `mp.weixin.qq.com/wiki?...` 已下线），这种情况直接删掉那段引用，不要保留死链。
4. 对照文档页核对名称和描述。uni-app 也收录的 API 优先链到 `uniapp.dcloud.net.cn`，只有微信小程序支持、uni-app 索引表里没有的 API 才链到微信文档。
5. 描述只重述 API 名的要改写成一句话说明，依据是该条目的文档页标题或首段。「需要基础库」「在插件中使用」这类信息写在描述之后，不能占第一行。
6. 三处必须同步：`src/<apiName>/` 目录、`src/index.ts` 里按字母序（忽略大小写）的 `export * from`、`README.md` 的 API 列表。漏掉 export 的 API 包里根本不存在。

## 改完必须跑

```bash
pnpm build       # 构建产物要能生成
pnpm check       # 格式和 lint
pnpm typecheck   # 新封装的类型推导是否成立
```

仓库没有测试脚本，这三条就是 CI 的全部内容。
