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

const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const EXTENSION_ID = process.env.EXTENSION_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CLIENT_ID = process.env.CLIENT_ID;

const webStore = require('chrome-webstore-upload')({
  extensionId: EXTENSION_ID,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  refreshToken: REFRESH_TOKEN,
});

(async () => {
  await archive.finalize();
  await webStore.uploadExisting(fs.createReadStream(zipName));
  try {
    await webStore.publish('trustedTesters');
  } catch (err) {
    console.error(`${err}`);
  }
})();
