# 改动日志

## 0.5.1 (2026-10-07)

- fix: 补充导出 `openSetting`、`requestMerchantTransfer`、`requestVirtualPayment`
- fix: 移除模板遗留的 `vue ^3.2.0` peer 依赖
- build: 升级 pnpm 12.9.1、ultracite 7.12.4、biome 2.5.15、@types/node 26.6.4，移除用不到的 vue 开发依赖
- ci: `pnpm/setup` 从 v2 升到 v3
- build: biome 配置跳过 SVG
- docs: README 新增 banner 和 logo，更新 badge，补充许可证，移除 yarn PnP 与 pnpm hoist 提示
- docs: 新增 AGENTS.md

## 0.5.0 (2026-09-10)

- build: 升级工具链到 `@biomejs/biome` 2.5、`ultracite` 7.11、`tsdown` 0.23、`bumpp` 12、`@dcloudio/types` 3.4.32，开发环境改用 Node 26
- build: 移除 `lefthook`、`is-ci` 和 `prepare` 脚本，不再安装 Git hooks；新增 `check` 脚本，`type-check` 改名 `typecheck`
- ci: 新增 `ci.yml`，在 ubuntu、macos、windows 上分别用 Node 22、24、26 跑构建、检查、类型检查；发布流程改用 `pnpm/setup@v2`
- fix: `MapContext` 的接口方法改为属性写法，满足 `useConsistentMethodSignatures`
- docs: README 补上用法小节，CONTRIBUTING 按当前工具链重写

## 0.4.0 (2026-06-26)

- feat: 新增 API

## 0.3.0 / 0.3.1 / 0.3.2 / 0.3.3 (2026-05-09)

- feat: 增加 API
- build: 切换到 `tsdown`

## 0.2.1 (2023-10-17)

- fix: 修复类型推导问题

## 0.2.0 (2023-06-21)

- feat!: 要求 `typescript` 为 `^4.8.0 || ^5.0.0`
- fix: 修复类型错误和赋值错误

## 0.1.5 (2023-02-16)

- build: 切换到 `unbuild`

## 0.1.4 (2023-01-04)

- fix: 修复导入
- build: 切换到 `rollup`

## 0.1.3 (2022-12-28)

- fix: 修复导出

## 0.1.2 (2022-12-26)

- fix: 修复类型

## 0.1.1 (2022-12-23)

- fix: 修复构建

## 0.1.0 (2022-12-23)

- 初次正式发布
