# Zero GPT Plugin Architecture

## Canonical model

```text
ChatGPT App Plugin / MCP Server Connector
        ↓ HTTPS MCP
Zero Core Server
        ↓ registry / routing
Zero Agent(s)
```

## App Plugin

The App Plugin is the ChatGPT-facing surface. It should only describe or reference the Zero MCP server connector.

It must not implement filesystem commands, path commands, device routing, pairing, or execution.

## Zero Core Server

The Core Server is the only public MCP boundary for Zero.

Responsibilities:

- expose `https://zero.miru.work/mcp`
- list canonical Zero tools
- validate MCP calls
- route command providers
- route device registry actions
- route `devices.exec` to paired agents
- enforce policy and future OAuth scopes

## Zero Agent

Agents run on machines such as MiruZero or TON.

Responsibilities:

- register with Core
- declare capabilities
- execute approved canonical tools
- return structured results

Agents are not ChatGPT plugins.

## Forbidden architecture

Do not package Zero as:

```text
.codex-plugin
agent-plugin
claude-plugin
local desktop plugin
standalone tool implementation inside ChatGPT app package
```

Those formats are local/plugin runtime wrappers and do not represent the intended Zero app-plugin layer.
