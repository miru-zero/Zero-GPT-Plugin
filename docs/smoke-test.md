# Zero GPT Plugin Smoke Test

Date: 2026-09-27

## Live runtime checked

- Core/MCP endpoint: `https://zero.miru.work/mcp`
- Command tools visible through `$zero`: `29`
- Device tools visible through `$zero`: `4`
- Total tools visible through `$zero`: `33`

## Command tool smoke test

Smoke test directory:

```text
M:\Zero_HOME\sandbox\tmp\zero-command-smoke-20260927
```

Tested filesystem tools:

```text
createDirectory       PASS
writeFile             PASS
appendFile            PASS
replaceFile           PASS
readFile              PASS
createFile            PASS
touchFile             PASS
readFiles             PASS
getFileInfo           PASS
listDirectory         PASS
globFiles             PASS
grepFiles             PASS
copyFile              PASS
moveFile              PASS
renameFile            PASS
exists                PASS
hashFile              PASS
truncateFile          PASS
copyDirectory         PASS
moveDirectory         PASS
deleteFile            PASS
deleteDirectory       PASS
```

Tested path tools:

```text
resolvePath           PASS
normalizePath         PASS
joinPath              PASS
relativePath          PASS
getParentDirectory    PASS
getFilename           PASS
getExtension          PASS
```

## Device execution smoke test

MiruZero canonical device execution:

```text
zero.command.filesystem.readFile     PASS
zero.command.filesystem.writeFile    PASS
zero.command.path.joinPath           PASS
zero.command.path.getFilename        PASS
```

TON is intentionally left for a later agent update.

## Expected ChatGPT App UI after update

The Zero app should show version `1.1.0` and the expanded canonical tool set:

```text
command provider: 29 tools
devices provider: 4 tools
total: 33 tools
```
