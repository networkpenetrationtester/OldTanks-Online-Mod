const fs = require('fs');
const rl = require('readline');
const os = require('os');
const path = require('path');

const DEBUG = false;

const CACHE_REL_PATH = path.join('AppData', 'Roaming', 'OldTanksOnline.Client.Standalone', 'Local Store', 'cache');
const CACHE_ABS_PATH = {
    'win32': path.join(os.homedir(), CACHE_REL_PATH),
    'linux': path.join(os.homedir(), '.wine', 'drive_c', 'Users', os.userInfo().username, CACHE_REL_PATH)
}[os.platform()] ?? '';

if (!CACHE_ABS_PATH) throw new Error('Ts not supported cuh 😭🙏')

async function main() {
    if (fs.existsSync(CACHE_ABS_PATH)) {

        const io = rl.createInterface(process.stdin, process.stdout);
        io.setPrompt('Enter resource to search for: ');

        const FILES = fs.readdirSync(CACHE_ABS_PATH).map((filename, i) => {
            try {
                return {
                    encoded: filename,
                    decoded: atob(filename)
                }
            }
            catch {
                DEBUG && console.error('\x1b[31m', 'Filename contains invalid base64: ', filename, '\x1b[0m');
                return {
                    encoded: '',
                    decoded: ''
                }
            }
        });

        while (true) {
            let query = await new Promise(resolve => {
                io.addListener('line', (input) => {
                    io.removeAllListeners();
                    resolve(input)
                });
                io.prompt(true);
            });

            if (!query) continue;
            if (query == '!e') process.exit(0);

            for (const file of FILES) {
                if (file.decoded.match(query)) {
                    console.log('\x1b[32m', file.decoded, '->', file.encoded, '\x1b[0m');
                }
            }
        }

    } else {
        throw new Error('Game not found 💔🥀');
    }
}

main();