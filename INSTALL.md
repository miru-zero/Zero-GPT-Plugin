# Install Zero GPT Plugin v1.1.0

Use the portable upload ZIP for the ChatGPT plugin/app upload flow.

This package fixes the upload validation error by including recognized root plugin content:

- `plugin.json`
- `app.json`
- `.app.json`
- `mcp.json`
- `.mcp.json`
- `.codex-plugin/plugin.json`

After upload, the app should show:

```text
Zero version: 1.1.0
command tools: 29
devices tools: 4
total: 33
```

If the workspace app was already published, refresh/review the app actions in ChatGPT workspace settings after uploading the new version.
