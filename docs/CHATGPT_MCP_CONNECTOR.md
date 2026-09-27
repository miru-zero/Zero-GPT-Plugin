# ChatGPT MCP Connector

## Goal

Create a ChatGPT profile-level MCP Server connector for Zero.

## Connector values

```text
Name: Zero
Description: Zero MCP Bridge for canonical command and device tools.
Server URL: https://zero.miru.work/mcp
Authentication: None during private testing
```

## Expected result

ChatGPT should show Zero as an MCP Server connector, not as a local desktop plugin.

Expected sections:

```text
MCP Server: Zero
Capabilities: Read, Write
```

## Not expected

If the UI shows only:

```text
Open in desktop app
```

or treats the package as Codex/local, the package is wrong for this repo's target.

## After connector creation

Once ChatGPT creates a server-side app/connector ID, record it in project notes or environment-specific documentation. Do not commit secrets or OAuth credentials.
