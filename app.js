const core = require('@actions/core');

const base64 = core.getInput('base64', { required: true });
const mask = core.getInput('mask');
const decoded = Buffer.from(base64, 'base64').toString('utf-8');
if (mask) core.setSecret(decoded);
core.setOutput('decoded', decoded);
