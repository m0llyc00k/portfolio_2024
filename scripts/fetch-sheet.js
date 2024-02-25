import fs from "fs";
import fetch from "node-fetch";
import path from "path";

const projects = [];

async function getAndWriteSheet(opt, cb) {
    const base = 'https://docs.google.com/spreadsheets/u/1/d';
    const url = `${base}/${opt.id}/export?format=csv&id=${opt.id}&gid=${opt.gid}`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const body = await response.text();
            const jsonData = csvToJson(body);
            projects.push(...jsonData);
            const file = path.join(process.cwd(), opt.filepath || 'src/data/data.json');

            fs.writeFile(file, JSON.stringify(jsonData, null, 2), (err) => {
                if (err) throw err;
                console.log(
                    'JSON data with id',
                    '\x1b[32m',
                    `${opt.id}`,
                    '\x1b[0m',
                    'and gid',
                    '\x1b[32m',
                    `${opt.gid}`,
                    '\x1b[0m',
                    'successfully written to',
                    '\x1b[34m',
                    `${file}\n`
                );
                cb();
            });
        }
    } catch (err) {
        console.error(err);
    }
}

function csvToJson(csv) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentLine[j] ? currentLine[j].trim() : null;
        }

        result.push(obj);
    }

    return result;
}

function init() {
    const CWD = process.cwd();
    const CONFIG_PATH = path.join(CWD, 'config.json');
    const CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
    const { sheet } = CONFIG.google;

    let i = 0;
    const next = () => {
        const d = sheet[i];
        if (d.id) {
            getAndWriteSheet(d, () => {
                i += 1;
                if (i < sheet.length) next();
                else {
                    const dataDir = path.join(CWD, 'src/lib');
                    const projectsFile = path.join(dataDir, 'Data.ts');

                    if (!fs.existsSync(dataDir)) {
                        fs.mkdirSync(dataDir, { recursive: true });
                    }

                    fs.writeFile(projectsFile, `const projects = ${JSON.stringify(projects, null, 2)};\n\nexport default projects;`, (err) => {
                        if (err) throw err;
                        console.log(`Projects data successfully written to ${projectsFile}`);
                        process.exit();
                    });
                }
            });
        }
    };

    next();
}

init();
