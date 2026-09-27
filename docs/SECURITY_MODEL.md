# Security Model

## Principle

ChatGPT should never connect directly to arbitrary machines.

All execution must go through Zero Core Server policy and device pairing.

## Runtime boundary

```text
ChatGPT MCP connector
        ↓
Zero Core Server policy boundary
        ↓
Zero Agent execution boundary
```

## Minimum private-test protections

- restrict filesystem operations to allowed roots
- reject path traversal
- avoid following symlink or junction escapes outside allowed roots
- keep secrets out of logs
- ignore runtime secret files in git
- require explicit paired devices for `devices.exec`
- return structured errors for denied actions

## Future OAuth protections

OAuth should protect the Core MCP boundary with scopes, token verification, and clear consent.

No OAuth client secret, token, or user credential should be committed to this repository.
