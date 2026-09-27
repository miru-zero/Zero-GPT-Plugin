const fs = require('fs');
const path = require('path');

const forbidden = [
  '.codex-plugin/plugin.json',
  'agent-plugin/plugin.json',
  'claude-plugin/plugin.json',
  'plugin.json',
  'mcp.json',
  '.mcp.json',
  '.app.json'
];

const root = process.cwd();
const found = forbidden.filter((relativePath) => fs.existsSync(path.join(root, relativePath)));

if (found.length > 0) {
  console.error('Forbidden local-plugin package artifacts found:');
  for (const item of found) console.error(`- ${item}`);
  process.exit(1);
}

console.log('OK: no forbidden local-plugin package artifacts found.');
