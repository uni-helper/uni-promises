# uni-promises

`@uni-helper/uni-promises` 把 uni-app 的回调式 API 封装成 Promise,发布为单一 npm 包。仓库没有子包:`pnpm-workspace.yaml` 没有 `packages:` 字段,只承载 pnpm 的 `configDependencies` 与 `minimumReleaseAgeExclude`。

## Project

- 语言:TypeScript(`strict: true`),`tsconfig.json` 继承 `@tsconfig/node26`,类型检查按 ESNext,`types` 只开 `@dcloudio/types` 和 `node`,模块解析 `Bundler`。
- 构建:tsdown 输出 ESM + CJS + dts 到 `dist/`,运行时代码转译到 `es2017`;`uni.*` 是运行时全局(由用户项目里的 uni-app 编译插件处理),不在打包范围。`files: ["dist"]`,`exports` 只有 `.`。
- Node:开发用 `26`(`.node-version` 与 `devEngines.runtime` 一致,`onFail: warn` 只警告不拦截);发布包 `engines.node` 是 `>=14.18`,两者用途不同,别混改。
- 包管理器:pnpm `12.9.1`(`packageManager` + `devEngines.packageManager`),经 Corepack 启用,不要用 npm/yarn 装依赖。
- 依赖:唯一 dependencies 是 `@dcloudio/types`(类型来源);peerDependencies 只有 `typescript`(optional)。src 和 dist 的运行时、类型都不引用 vue,对 Vue 2 和 Vue 3 项目都可用,不要加回 vue peer。
- 无测试框架、无 Git hooks、无 `prepare` 脚本;质量闸门是 build + check + typecheck,CI(`.github/workflows/ci.yml`)在 ubuntu/macos/windows × Node 22/24/26 矩阵上跑这三条。

## Commands

```bash
pnpm build        # tsdown 构建到 dist/(ESM + CJS + dts)
pnpm check        # ultracite(底层 Biome)lint + 格式,只报不改
pnpm fix          # 同上并自动修复,只应用 safe 修复,unsafe 问题会报错退出
pnpm typecheck    # tsc --noEmit
pnpm release      # bumpp 交互式选版本打 tag;推 tag 触发 release.yml(生成 GitHub Release 并发布 npm)
```

- 监听构建用 `pnpm build --watch`;写成 `pnpm build -- --watch` 会把 `--` 原样传给 tsdown,变成单次构建后退出。
- 没有 hooks,提交前自己跑 `pnpm build && pnpm check && pnpm typecheck`,和 CI 三步一致。

## Architecture

| 路径 | 职责 |
| --- | --- |
| `src/index.ts` | 桶文件,按字母序 `export * from` 全部 API 目录,外加 `./types` 和 `./utils` |
| `src/utils.ts` | `promisify`(回调→Promise 泛型包装)、`mountTaskMethodToPromise`(task 的事件方法挂到 Promise)、`noop`(complete 占位) |
| `src/types.ts` | task 类 Promise 类型:`TaskPromise`、`RequestPromise`、`UploadFilePromise`、`DownloadFilePromise` |
| `src/<apiName>/index.ts` | 每个 uni API 一个目录,多数是 `promisify(uni.<apiName>)` 一行封装 |

大多数回调式 API 一行搞定;有三种例外,新增同类 API 时照抄现有实现:

- **task 类**(`src/request`、`src/uploadFile`、`src/downloadFile`):原生返回带 `onProgressUpdate` / `onHeadersReceived` / `onChunkReceived` / `abort` 的 task,单纯 promisify 会丢。手写 `new Promise`,重写 `success` / `fail` 时保留调用方传入的回调,`complete` 用 `noop` 兜底,再 `mountTaskMethodToPromise` 把 task 方法绑到 Promise 上;返回类型用 `src/types.ts` 里对应的 Promise 类型。
- **上下文类**(`src/createMapContext`):用 `new Promise` 包 `uni.createMapContext`,把上下文上每个回调式方法逐个 `promisify(x.bind(context))` 替换——不 bind 会丢 `this`;接口里这些方法重声明为属性写法,返回 `Promise<Parameters<NonNullable<Options["success"]>>[0]>`。
- **`src/getApp`**:同步全局函数,拿不到 App 实例会直接抛错;内部改名 `_getApp` 避免遮蔽全局,`try/catch` 把错误转成 reject。

不变量:一个 API 必须三处同步——`src/<apiName>/` 目录、`src/index.ts` 按字母序追加 `export * from`、`README.md` API 列表按字母序补链接。dist 由 `src/index.ts` 生成,漏掉 export 的 API 包里根本不存在,README 列了它会直接误导用户。

## Conventions

- Biome 经 ultracite 生效(`biome.jsonc` 继承 `ultracite/biome/core`):缩进 2 空格、行尾 LF;全局变量 `uni`、`getApp` 已在 `biome.jsonc` 声明,源码里直接用。
- 接口方法一律属性写法(`foo: (x) => R`,不用方法简写),这是 `useConsistentMethodSignatures` 的要求,在 `strictFunctionTypes` 下检查更严。
- 已有的 `biome-ignore`(多为 `noExplicitAny`)和 `@ts-expect-error`(官方 `uni.*` 类型缺失)是有意保留的,根因没消除别删。
- 注释、JSDoc、提交信息用中文;每个 API 封装文件头有 JSDoc:一句话描述 + 官方文档链接,链接用 `https://`(官方对 `http://` 做 301)。
- 提交遵循 Conventional Commits,GitHub Release 由 changelogithub 从提交生成;`CHANGELOG.md` 由维护者发布前手动补,提交新 API 时不用改。
