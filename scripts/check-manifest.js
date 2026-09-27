const fs = require('node:fs');

const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
const tools = JSON.parse(fs.readFileSync('tools/zero-tools.json', 'utf8'));

const fail = (message) => {
  console.error(message);
  process.exitCode = 1;
};

if (manifest.version !== '1.1.0') fail('manifest version must be 1.1.0');
if (manifest.tools_total !== 33) fail('manifest tools_total must be 33');
if (tools.total !== 33) fail('tools total must be 33');

const counts = Object.fromEntries(tools.providers.map((provider) => [provider.name, provider.count]));
if (counts.command !== 29) fail('command provider must expose 29 tools');
if (counts.devices !== 4) fail('devices provider must expose 4 tools');

const names = new Set(tools.providers.flatMap((provider) => provider.tools.map((tool) => tool.canonicalName)));
for (const name of [
  'zero.command.filesystem.appendFile',
  'zero.command.filesystem.copyDirectory',
  'zero.command.filesystem.deleteDirectory',
  'zero.command.filesystem.truncateFile',
  'zero.command.path.joinPath',
  'zero.command.path.getFilename',
  'zero.devices.exec'
]) {
  if (!names.has(name)) fail(`missing canonical tool: ${name}`);
}

if (process.exitCode) process.exit(process.exitCode);
console.log('manifest check OK');
