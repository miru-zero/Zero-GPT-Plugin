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
