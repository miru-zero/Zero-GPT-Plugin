# OAuth Roadmap

OAuth is intentionally postponed until the Zero tools and device execution contract are stable.

## Current private-test mode

```text
Authentication: None
Access control: private app/profile, allowed roots, device pairing, policy checks
```

## Future OAuth boundary

OAuth belongs at the Zero Core Server boundary:

```text
ChatGPT → OAuth → Zero Core Server → Zero Agent(s)
```

Agents should not become public OAuth servers.

## Proposed scopes

```text
zero:read       read/list/glob/grep/path tools
zero:write      write/append/replace/create/delete/move/copy/truncate tools
zero:devices    device status and devices.exec
zero:admin      future pairing and registry administration
```

## Implementation stages

1. Stabilize command tools.
2. Stabilize device execution.
3. Harden allowed-root and path policies.
4. Add Core OAuth metadata endpoints.
5. Add token verification at Core.
6. Add tool-level `securitySchemes` and scope checks.
7. Reconnect ChatGPT using OAuth.
