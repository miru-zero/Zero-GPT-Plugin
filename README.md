# Zero GPT Plugin

Zero MCP Bridge for DevTeam/ZeroLab. Connects ChatGPT to `https://zero.miru.work/mcp` and exposes Zero command filesystem/path tools plus device registry actions.

## Current release target

- App version: `1.1.0`
- MCP endpoint: `https://zero.miru.work/mcp`
- Command provider tools: `29`
- Device provider tools: `4`
- Total tools: `33`

## Tool groups

### `zero.command.filesystem.*`

Filesystem tools for safe allowed-root operations:

- `readFile`
- `readFiles`
- `writeFile`
- `appendFile`
- `createFile`
- `touchFile`
- `replaceFile`
- `createDirectory`
- `deleteFile`
- `copyDirectory`
- `moveDirectory`
- `deleteDirectory`
- `truncateFile`
- `listDirectory`
- `getFileInfo`
- `globFiles`
- `grepFiles`
- `copyFile`
- `moveFile`
- `renameFile`
- `exists`
- `hashFile`

### `zero.command.path.*`

Path-only tools without filesystem side effects:

- `resolvePath`
- `normalizePath`
- `joinPath`
- `relativePath`
- `getParentDirectory`
- `getFilename`
- `getExtension`

### `zero.devices.*`

Device registry and remote execution tools:

- `list`
- `status`
- `heartbeat`
- `exec`

## Files

- `manifest.json` — app metadata for the Zero ChatGPT App source.
- `tools/zero-tools.json` — full provider/tool manifest exported from the live Zero Core.
- `docs/smoke-test.md` — smoke test evidence for the current tool set.

## Runtime status

The current Zero Core/MCP runtime has been tested with:

- `command` provider: `29` tools
- `devices` provider: `4` tools
- `$zero` plugin visibility: `33` tools
- MiruZero canonical `devices.exec`: PASS
- TON: left for a later agent update
