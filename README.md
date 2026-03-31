# @luka-cat-mimi/n8n-nodes-browserless

> n8n 社区节点：集成 [Browserless](https://www.browserless.io/) 平台，在 n8n 工作流中实现网页抓取、截图、PDF 生成、自动化浏览器操作等功能。

基于 [minhlucvan/n8n-nodes-browserless](https://github.com/minhlucvan/n8n-nodes-browserless) 进行二次开发，感谢原作者 **Minh Luc** 的贡献。

## 功能特性

- 支持 Browserless API V2
- 网页内容抓取（Content）
- 页面截图（Screenshot）
- PDF 生成（PDF）
- 结构化数据抓取（Scrape）
- 自定义脚本执行（Execute）
- 文件下载（Download）
- 性能分析（Performance）
- 反封锁访问（Unblock）
- 支持反机器人检测（Stealth + Headful 模式）
- 可作为 AI Agent 工具使用（`usableAsTool: true`）

### 相比原版的优化

| 优化项 | 原版 | 本版 |
|--------|------|------|
| PDF 输出 | 固定返回 binary，无法控制输出选项 | 支持 Output Options 配置（文件名、MIME 类型等），提升下游节点兼容性 |
| Download 输出 | 固定返回 binary，无法控制输出选项 | 支持 Output Options 配置，可自定义输出行为 |
| PDF/Download 性能 | 响应体处理未优化，大文件场景下内存占用高 | 优化二进制数据处理流程，降低内存开销 |
| Code 节点 | 代码输入为纯文本框，无语法区分 | 支持代码高亮语法（JavaScript），提升可读性与编写体验 |

## 安装

### 通过 n8n 社区节点安装

1. 打开 n8n 实例 → **Settings** → **Community Nodes**
2. 搜索并安装 `@luka-cat-mimi/n8n-nodes-browserless`

### 手动安装

```bash
cd ~/.n8n/nodes
npm install @luka-cat-mimi/n8n-nodes-browserless
```

## 前置要求：部署 Browserless

```bash
docker run \
  --rm \
  -p 3000:3000 \
  -e "CONCURRENT=10" \
  -e "TOKEN=YOUR_SECURE_TOKEN" \
  ghcr.io/browserless/chromium
```

更多部署方式参考 [Browserless Docker 快速开始](https://docs.browserless.io/docs/docker-quickstart.html)。

## 凭证配置

节点需要配置以下凭证：

| 字段 | 说明 |
|------|------|
| **Browserless URL** | Browserless 实例地址，如 `http://localhost:3000` |
| **Token** | 访问令牌 |

## 支持的操作

| 操作 | 说明 | API 文档 |
|------|------|----------|
| Content | 获取页面渲染后的 HTML 内容 | [文档](https://www.browserless.io/docs/content) |
| Screenshot | 对页面进行截图 | [文档](https://www.browserless.io/docs/screenshot) |
| PDF | 将页面导出为 PDF 文件 | [文档](https://www.browserless.io/docs/pdf) |
| Scrape | 以结构化 JSON 抓取页面数据 | [文档](https://www.browserless.io/docs/scrape) |
| Execute | 执行自定义 JavaScript 函数 | [文档](https://www.browserless.io/docs/function) |
| Download | 下载页面触发的文件 | [文档](https://docs.browserless.io/HTTP-APIs/download) |
| Performance | 获取页面性能指标 | [文档](https://docs.browserless.io/HTTP-APIs/performance) |
| Unblock | 反封锁模式访问页面 | [文档](https://docs.browserless.io/HTTP-APIs/unblock) |

## 反机器人检测

通过以下配置实现反检测：

- **Browser Options** → **Stealth**: 开启
- **Browser Options** → **Headless**: 关闭

## 开发

```bash
# 安装依赖
npm install

# 开发模式（监听文件变更）
npm run dev

# 构建
npm run build

# 代码检查
npm run lint

# 运行测试
npm test
```

## 兼容性

- Node.js >= 22.x
- n8n >= 1.0.0
- Browserless API V2

## 相关链接

- [n8n 社区节点文档](https://docs.n8n.io/integrations/community-nodes/)
- [Browserless 官网](https://www.browserless.io/)
- [Browserless API 文档](https://docs.browserless.io/)
- [原始项目](https://github.com/minhlucvan/n8n-nodes-browserless)

## 版本历史

### Fork 后的版本

- `1.2.0` — Fork 自 minhlucvan/n8n-nodes-browserless，更新包名为 `@luka-cat-mimi/n8n-nodes-browserless`
  - PDF / Download 性能优化，支持 Output Options 输出配置
  - Code 输入支持高亮语法
  - 优化项目配置与 CI/CD

### 原始版本（minhlucvan）

- `1.0.0` — 支持 Browserless API V2
- `0.5.0` — 反机器人检测
- `0.4.0` — 浏览器选项，默认 no-cache 请求头
- `0.3.0` — 修复 [#1](https://github.com/minhlucvan/n8n-nodes-browserless/issues/1)，添加测试
- `0.2.0` — 修复常见问题
- `0.0.1` — 初始发布

## 许可证

[MIT](LICENSE.md)
