# 贡献指南

感谢你对 `@uni-helper/uni-promises` 的关注！本指南说明仓库结构、本地开发流程，以及新增 API 的封装约定。

在开始之前，请先浏览 [已开放的 issue](https://github.com/uni-helper/uni-promises/issues)。如果是新特性或较大改动，建议先开 issue 讨论方案，避免重复劳动或方向偏差。

## 环境要求

| 依赖 | 版本 |
| --- | --- |
| Node.js | `>=14.18`（`package.json#engines`）。仓库 `.node-version` 为 `24`，推荐使用 LTS |
| 包管理器 | `pnpm@10.34.4`（通过 `packageManager` 字段固定，启用 Corepack 后使用，不要混用 npm/yarn） |
| Git | 行尾统一为 LF（见 `.editorconfig`） |

## 拉取代码并安装依赖

```shell
git clone https://github.com/uni-helper/uni-promises.git
cd uni-promises
corepack enable
pnpm install
```

`pnpm install` 会通过 `prepare` 脚本安装 [lefthook](./lefthook.yml) 的 Git hooks。

## 目录结构

```text
.
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
| `pnpm fix` | 用 [ultracite](https://ultracite.dev)（底层 Biome）自动修复格式与 lint 问题 |
| `pnpm release` | 用 [bumpp](https://github.com/antfu/bumpp) 交互式打 tag，触发发布流程 |

> 注意：本仓库**没有**单元测试和独立的 `type-check` 脚本。提交前请确保 `pnpm build` 通过；如需类型检查可手动执行 `pnpm exec tsc --noEmit`。

监听模式开发可用 `pnpm build -- --watch`（tsdown 原生支持 watch）。

## 代码风格

- 格式化与 lint 由 [Biome](./biome.jsonc) 统一管理（继承 `ultracite/biome/core`），缩进 2 空格、行尾 LF。
- 提交时 lefthook 会自动对暂存文件执行 `ultracite fix` 并把修复后的文件重新暂存；如需手动检查，运行 `pnpm fix`。
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

## 提交规范

仓库基于 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 由 [changelogithub](https://github.com/antfu/changelogithub) 生成 GitHub Release，提交信息建议遵循：

```text
<type>(<scope>): <subject>
```

常用 `type`：`feat`（新功能 / 新增 API 封装）、`fix`（修复）、`docs`（文档）、`refactor`、`perf`、`build`、`ci`、`chore`。`subject` 用祈使句，结尾不加句号。示例：

```text
feat: 新增 configMTLS 封装
fix: 修复 uploadFile 进度回调未绑定的问题
docs: 修正 README 构建说明
```

## 提交 Pull Request

1. 基于 `main` 创建特性分支：`feat/xxx`、`fix/xxx`、`docs/xxx`。
2. 一个 PR 只解决一件事；新增 API 封装时按上面的清单同步更新 `index.ts` 与 `README.md`。
3. 确保本地 `pnpm fix`、`pnpm build` 通过。
4. PR 描述写清「改了什么 / 为什么改 / 如何验证」，关联相关 issue（如 `Closes #123`）。
5. 等待 CI 通过与维护者 review，按反馈在原分支上继续提交。

## 发布说明（面向维护者）

发布由 [bumpp](./package.json) 与 GitHub Actions（[`.github/workflows/release.yml`](./.github/workflows/release.yml)）驱动，贡献者一般无需关心：

- `pnpm release` 交互式选择版本号并打 tag（仅在 `main` 分支执行）。
- tag 推送触发 `release.yml`：用 `changelogithub` 生成 GitHub Release，随后 `pnpm publish` 发布到 npm（`prepublishOnly` 会先自动构建）。
