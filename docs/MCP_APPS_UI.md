# Zero MCP Apps UI

## Purpose

Zero uses MCP tools for machine actions and MCP Apps resources for ChatGPT embedded UI.

The ChatGPT-facing UI must be connector/action-owned. It must not ask the assistant to receive raw secrets in chat text.

## Current UI resource

```text
ui://zero/chatgpt-auth/v1.html
mimeType: text/html;profile=mcp-app
```

The UI is used by:

```text
zero.chatgpt.login
```

The tool descriptor must include both the current UI resource metadata and the OpenAI compatibility output template:

```text
_meta.ui.resourceUri = ui://zero/chatgpt-auth/v1.html
_meta["openai/outputTemplate"] = ui://zero/chatgpt-auth/v1.html
```

## Widget domain

ChatGPT requires a unique widget/app domain for the UI template.

Zero defaults to:

```text
https://zero.miru.work
```

Runtime override:

```text
ZERO_CHATGPT_WIDGET_DOMAIN=https://<dedicated-zero-widget-domain>
```

The resource content metadata must declare the domain and CSP using both current and compatibility keys:

```text
_meta.ui.domain
_meta.ui.csp
_meta["openai/widgetDomain"]
_meta["openai/widgetCSP"]
```

## UI-only import tool

The embedded app UI calls:

```text
zero.chatgpt.auth.import
```

This tool is UI-only and must not be surfaced as a model-facing raw-secret input path.

Required metadata:

```text
_meta.ui.visibility = ["app"]
```

## Secret boundary

Allowed output is redacted status only:

```json
{
  "auth": {
    "present": true,
    "status": "imported-test-fixture",
    "redacted": true
  }
}
```

Raw JSON, cookies, tokens, and session values must never be returned in ChatGPT text output.

## Display mode

The ChatGPT auth setup component is inline-only.

```json
{
  "availableDisplayModes": ["inline"]
}
```

## Tool surface counts

Zero intentionally exposes two different tool counts:

```text
providerToolsTotal = command/devices provider tools only
mcpToolsTotal      = ChatGPT App MCP tools/list surface
```

Current private-test surface:

```text
providerToolsTotal: 33  # command 29 + devices 4
mcpToolsTotal:      39  # provider tools + discovery/auth/app tools
specialToolsTotal:   6  # listZeroTools, callZeroTool, auth QA, ChatGPT auth/app tools
```

Do not compare `/tools.total` with ChatGPT's app tool count directly.
Use `/health.tools.providerToolsTotal` and `/health.tools.mcpToolsTotal`.

`contractVersion` is the shared Zero contract version, not the app/plugin/Core package version.
Use `/health.versions` for package and app identifiers.

## UI component source

The ChatGPT auth app UI follows the local Beautiful UI component patterns:

```text
M:\AI_ZERO\beautiful-ui
```

Current mappings:

```text
components/atoms/Button.tsx      -> pill action buttons
components/atoms/StatusPill.tsx  -> redacted status pill with dot
components/atoms/Chip.tsx        -> monospace metadata chips
app/globals.css                  -> dark surface tokens, card shadows, field inset
```

The MCP resource is still emitted as `text/html;profile=mcp-app`, so these React/Tailwind patterns are translated into inline HTML/CSS in Zero Core instead of bundling React into the connector metadata repo.
