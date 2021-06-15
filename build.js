const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const { version } = require('./manifest.json');

const zipName = path.join(__dirname, '.build', 'outputs', `SEMI-Build-v${version}.zip`);
fs.mkdirSync(path.dirname(zipName), { recursive: true });

const output = fs.createWriteStream(zipName);
const archive = archiver('zip');
archive.pipe(output);

archive.directory('icons');
archive.directory('scripts');
archive.directory('styles');
archive.file('manifest.json');
archive.finalize();
