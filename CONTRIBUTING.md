# 贡献指南

感谢你对 `@uni-helper/uni-promises` 的关注！本指南说明仓库结构、本地开发流程，以及新增 API 的封装约定。

在开始之前，请先浏览 [已开放的 issue](https://github.com/uni-helper/uni-promises/issues)。如果是新特性或较大改动，建议先开 issue 讨论方案，避免重复劳动或方向偏差。

## 环境要求

| 依赖 | 版本 |
| --- | --- |
| Node.js | 开发用 `26`（[.node-version](./.node-version)，`package.json#devEngines` 同样写死 `26`）。发布出去的包只要求 `>=14.18`（`package.json#engines`） |
| 包管理器 | `pnpm@12.9.1`（通过 `packageManager` 字段固定，启用 Corepack 后使用，不要混用 npm/yarn） |
| Git | 行尾统一为 LF（见 [.editorconfig](./.editorconfig)） |

版本对不上时 `devEngines` 只会打印警告，不会拦住安装，所以别指望它帮你发现用错了 Node 版本。

## 拉取代码并安装依赖

```shell
git clone https://github.com/uni-helper/uni-promises.git
cd uni-promises
corepack enable
pnpm install
```

仓库不再使用 Git hooks，也没有 `prepare` 脚本。改完代码请自己跑一遍下面的检查命令。

## 目录结构

```text
.
├── .github/workflows/
│   ├── ci.yml        # push 到 main 和 PR 时跑构建、检查、类型检查
│   └── release.yml   # 推送 v* tag 时发 GitHub Release 并发布到 npm
├── src/
│   ├── index.ts      # 桶文件，按字母序导出全部 API
│   ├── utils.ts      # promisify、mountTaskMethodToPromise、noop
│   ├── types.ts      # task 类 API 的 Promise 类型（TaskPromise 等）
│   └── <apiName>/    # 每个 API 一个目录，内部 index.ts 即封装实现
├── dist/             # 构建产物（发布到 npm 的内容，git 忽略）
├── biome.jsonc       # 继承 ultracite/biome/core
├── tsdown.config.ts  # 构建配置
└── package.json
```

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm build` | 用 [tsdown](./tsdown.config.ts) 构建，产物输出到 `dist/`（ESM + CJS + 类型声明），转译目标为 `ES2017` |
| `pnpm check` | 用 [ultracite](https://ultracite.dev)（底层 Biome）检查格式和 lint，只报不改 |
| `pnpm fix` | 同上去修，能自动改的都改掉，改完有问题的直接报错退出 |
| `pnpm typecheck` | `tsc --noEmit`，按 [tsconfig.json](./tsconfig.json) 检查类型 |
| `pnpm release` | 用 [bumpp](https://github.com/antfu/bumpp) 交互式打 tag，触发发布流程 |

CI 跑的就是 `pnpm build`、`pnpm check`、`pnpm typecheck` 这三条，提交前先在本地跑一遍能省一轮等待。

监听模式用 `pnpm build --watch`。写成 `pnpm build -- --watch` 会把 `--` 原样传给 tsdown，结果是原地构建一次就退出，进不了监听。

`pnpm fix` 只应用 Biome 的安全修复，unsafe 修复（比如把接口里的方法简写改成属性写法）它会跳过并提示。这类问题要手动改，或者临时用 `pnpm exec biome check --write --unsafe <文件>` 改单个文件。

## 代码风格

- 格式化与 lint 由 [Biome](./biome.jsonc) 统一管理（继承 `ultracite/biome/core`），缩进 2 空格、行尾 LF。
- 接口里的方法统一写成属性（`foo: (x) => R`），这是 `ultracite/biome/core` 里 `useConsistentMethodSignatures` 的要求。属性写法的函数参数在 `strictFunctionTypes` 下检查更严。
- 仓库内有意保留的 `biome-ignore` / `@ts-expect-error` 注释（多为 `noExplicitAny` 或 `uni.*` 类型缺失）请勿删除，除非根因已消除。

## 新增一个 API 封装

大多数回调式 API 只需一行：

```ts
// src/<apiName>/index.ts
import { promisify } from "../utils";

/**
 * 一句话描述（对应官方文档标题）
 *
 * 文档 https://uniapp.dcloud.net.cn/api/...
 */
export const <apiName> = promisify(uni.<apiName>);
```

完成后还需：

1. 在 `src/index.ts` 按**字母序**追加 `export * from "./<apiName>";`。
2. 在 `README.md` 的 API 列表里按字母序补一行 `- [<apiName>](./src/<apiName>/index.ts)`。
3. 文档链接统一使用 `https://`（官方对 `http://` 做 301 跳转）。

### task 类 API 的例外

`request`、`uploadFile`、`downloadFile` 返回的 task 上有 `onProgressUpdate`、`onHeadersReceived`、`abort` 等方法，单纯的 `promisify` 会丢掉这些能力。这类 API 需要仿照 `src/request/index.ts` 手写：

- 用 `mountTaskMethodToPromise` 把 task 的事件方法绑定到返回的 Promise 上；
- 返回类型用 `src/types.ts` 中对应的 `RequestPromise` / `UploadFilePromise` / `DownloadFilePromise`；
- 用 `noop` 兜底 `complete`，保证安全地重写 `success` / `fail`。

### 上下文类 API 的例外

`createMapContext` 返回的地图上下文上挂着一堆靠 `success` 回调取结果的方法，只包一层 `promisify` 不够。这类 API 用 `new Promise` 包起来，再把上下文上的方法逐个替换成 Promise 版：

- 返回类型 extends 官方类型，要 Promise 化的方法重新声明成 `name: (options) => Promise<...>`，Promise 的值取 `Parameters<NonNullable<Options["success"]>>[0]`；
- 替换前先 `bind(context)`，不绑定的话方法里的 `this` 会丢。

`getApp` 麻烦在另一头：它本身是同步函数，拿不到 App 实例时会直接抛错，用 `try/catch` 包一层转成 `reject`。

参考 `src/createMapContext/index.ts` 和 `src/getApp/index.ts`。

## 提交规范

仓库基于 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 由 [changelogithub](https://github.com/antfu/changelogithub) 生成 GitHub Release，提交信息建议遵循：

```text
<type>(<scope>): <subject>
```

常用 `type`：`feat`（新功能 / 新增 API 封装）、`fix`（修复）、`docs`（文档）、`style`（格式，不改逻辑）、`refactor`、`perf`、`build`、`ci`、`chore`。`subject` 用祈使句，结尾不加句号。示例：

```text
feat: 新增 configMTLS 封装
fix: 修复 uploadFile 进度回调未绑定的问题
docs: 修正 README 构建说明
```

[CHANGELOG.md](./CHANGELOG.md) 由维护者在发布前手动补一段，提交新 API 时不用改。

## 提交 Pull Request

1. 基于 `main` 创建特性分支：`feat/xxx`、`fix/xxx`、`docs/xxx`。
2. 一个 PR 只解决一件事；新增 API 封装时按上面的清单同步更新 `index.ts` 与 `README.md`。
3. 确保本地 `pnpm build`、`pnpm check`、`pnpm typecheck` 通过。
4. PR 描述写清「改了什么 / 为什么改 / 如何验证」，关联相关 issue（如 `Closes #123`）。
5. 等待 CI 通过与维护者 review，按反馈在原分支上继续提交。

CI 配置见 [.github/workflows/ci.yml](./.github/workflows/ci.yml)，在 `ubuntu-latest`、`macos-latest`、`windows-latest` 上分别跑 Node `22`、`24`、`26`，任意一格失败都会红。

## 发布说明（面向维护者）

发布由 [bumpp](./package.json) 与 GitHub Actions（[`.github/workflows/release.yml`](./.github/workflows/release.yml)）驱动，贡献者一般无需关心：

- 先在 `CHANGELOG.md` 顶部补上这一版，再执行 `pnpm release`，交互式选择版本号并打 tag（在 `main` 分支上做）。
- tag 推送触发 `release.yml`：`pnpx changelogithub` 生成 GitHub Release，接着 `pnpm -r publish --access public --no-git-checks` 发布到 npm，`prepublishOnly` 会先自动构建一次。
