# Zero GPT Plugin

Zero GPT Plugin is the ChatGPT app-plugin surface for Zero.

This repository is intentionally **not** a Codex local plugin, not an Agent plugin, and not the runtime implementation of Zero tools.

## Correct architecture

```text
ChatGPT App Plugin / MCP Server Connector
        ↓
Zero Core Server
        ↓
Zero Agent(s)
```

## Layer ownership

| Layer | Repository role | Runtime responsibility |
| --- | --- | --- |
| App Plugin | Declares the ChatGPT-facing app/plugin identity and MCP connector intent | No tool execution logic |
| Zero Core Server | Owns the public MCP endpoint and routing | Lists tools, validates calls, routes to providers/devices |
| Zero Agent | Runs on paired machines | Executes canonical tools under policy |

## Current MCP endpoint

```text
https://zero.miru.work/mcp
```

## What this repo must not contain

This repo must not contain local plugin package formats:

```text
.codex-plugin/plugin.json
agent-plugin/plugin.json
claude-plugin/plugin.json
plugin.json
mcp.json
.app.json
```

Those files cause ChatGPT/Codex to treat the package as a local or desktop plugin package. That is not the desired Zero architecture.

## Desired ChatGPT profile flow

The Zero connection should be created as a ChatGPT MCP Server connector in the user's ChatGPT profile/app settings:

```text
Name: Zero
Server URL: https://zero.miru.work/mcp
Authentication: None for private testing; OAuth later
```

After ChatGPT creates the server-side MCP connector, this repository can store documentation, contracts, and release notes for that app-plugin layer.

## Future OAuth direction

OAuth belongs at the Zero Core Server boundary, not in the Agent and not in a Codex local plugin wrapper.

See:

- `docs/ARCHITECTURE.md`
- `docs/CHATGPT_MCP_CONNECTOR.md`
- `docs/OAUTH_ROADMAP.md`
- `docs/SECURITY_MODEL.md`

## MCP Apps UI

Zero now documents the ChatGPT embedded UI/resource layer in `docs/MCP_APPS_UI.md`.

Current UI resource:

```text
ui://zero/chatgpt-auth/v1.html
```

The template must declare a widget domain, defaulting to `https://zero.miru.work`, with `ZERO_CHATGPT_WIDGET_DOMAIN` available for deployment overrides.
