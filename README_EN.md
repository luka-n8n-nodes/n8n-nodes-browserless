# @luka-cat-mimi/n8n-nodes-browserless

> n8n community node for integrating [Browserless](https://www.browserless.io/) — enabling web scraping, screenshots, PDF generation, and browser automation within n8n workflows.

Forked from [minhlucvan/n8n-nodes-browserless](https://github.com/minhlucvan/n8n-nodes-browserless). Thanks to **Minh Luc** for the original work.

## Features

- Browserless API V2 support
- Page content extraction (Content)
- Page screenshots (Screenshot)
- PDF generation (PDF)
- Structured data scraping (Scrape)
- Custom script execution (Execute)
- File downloads (Download)
- Performance metrics (Performance)
- Anti-block page access (Unblock)
- Anti-bot detection (Stealth + Headful mode)
- Usable as AI Agent tool (`usableAsTool: true`)

### Improvements over the Original

| Area | Original | This Fork |
|------|----------|-----------|
| PDF output | Fixed binary response, no output control | Supports Output Options (filename, MIME type, etc.) for better downstream node compatibility |
| Download output | Fixed binary response, no output control | Supports Output Options for customizable output behavior |
| PDF/Download performance | Unoptimized response body handling, high memory usage for large files | Optimized binary data processing, reduced memory footprint |
| Code input | Plain text input, no syntax distinction | JavaScript syntax highlighting for improved readability and editing experience |

## Installation

### Via n8n Community Nodes

1. Open your n8n instance → **Settings** → **Community Nodes**
2. Search and install `@luka-cat-mimi/n8n-nodes-browserless`

### Manual Installation

```bash
cd ~/.n8n/nodes
npm install @luka-cat-mimi/n8n-nodes-browserless
```

## Prerequisites: Deploy Browserless

```bash
docker run \
  --rm \
  -p 3000:3000 \
  -e "CONCURRENT=10" \
  -e "TOKEN=YOUR_SECURE_TOKEN" \
  ghcr.io/browserless/chromium
```

See [Browserless Docker Quick Start](https://docs.browserless.io/docs/docker-quickstart.html) for more deployment options.

## Credentials

The node requires the following credentials:

| Field | Description |
|-------|-------------|
| **Browserless URL** | Browserless instance URL, e.g. `http://localhost:3000` |
| **Token** | Access token |

## Supported Operations

| Operation | Description | API Docs |
|-----------|-------------|----------|
| Content | Get rendered HTML content of a page | [Docs](https://www.browserless.io/docs/content) |
| Screenshot | Capture a page screenshot | [Docs](https://www.browserless.io/docs/screenshot) |
| PDF | Export a page as PDF | [Docs](https://www.browserless.io/docs/pdf) |
| Scrape | Scrape page data as structured JSON | [Docs](https://www.browserless.io/docs/scrape) |
| Execute | Run custom JavaScript functions | [Docs](https://www.browserless.io/docs/function) |
| Download | Download files triggered by a page | [Docs](https://docs.browserless.io/HTTP-APIs/download) |
| Performance | Get page performance metrics | [Docs](https://docs.browserless.io/HTTP-APIs/performance) |
| Unblock | Access pages in anti-block mode | [Docs](https://docs.browserless.io/HTTP-APIs/unblock) |

## Anti-Bot Detection

Enable anti-detection with the following settings:

- **Browser Options** → **Stealth**: On
- **Browser Options** → **Headless**: Off

## Development

```bash
# Install dependencies
npm install

# Watch mode
npm run dev

# Build
npm run build

# Lint
npm run lint

# Run tests
npm test
```

## Compatibility

- Node.js >= 22.x
- n8n >= 1.0.0
- Browserless API V2

## Links

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Browserless Website](https://www.browserless.io/)
- [Browserless API Documentation](https://docs.browserless.io/)
- [Original Project](https://github.com/minhlucvan/n8n-nodes-browserless)

## Version History

### Fork Releases

- `1.2.0` — Forked from minhlucvan/n8n-nodes-browserless, renamed to `@luka-cat-mimi/n8n-nodes-browserless`
  - PDF / Download performance optimization with Output Options support
  - Code input with syntax highlighting
  - Improved project configuration and CI/CD

### Original Releases (minhlucvan)

- `1.0.0` — Browserless API V2 support
- `0.5.0` — Anti-bot detection
- `0.4.0` — Browser options, default no-cache header
- `0.3.0` — Fixed [#1](https://github.com/minhlucvan/n8n-nodes-browserless/issues/1), added tests
- `0.2.0` — Common fixes
- `0.0.1` — Initial release

## License

[MIT](LICENSE.md)
