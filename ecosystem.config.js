const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const packageName = packageJson.name;

module.exports = {
  apps: [
    {
      name: packageName,
      cwd: "./apps/server",
      script: "./dist/main.js",
      args: "start"
    },
  ],
};