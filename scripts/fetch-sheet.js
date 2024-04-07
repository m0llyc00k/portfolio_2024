import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import csv from "csv-parser";

const CWD = process.cwd();
const CONFIG_PATH = `${CWD}/config.json`;
const CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
const { sheet } = CONFIG.google;

async function getAndWriteSheet(opt, cb) {
    const base = 'https://docs.google.com/spreadsheets/u/1/d';
    const url = `${base}/${opt.id}/export?format=csv&id=${opt.id}&gid=${opt.gid}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const body = await response.text();

            const csvFile = path.join(CWD, opt.filepath);
            const outputFile = opt.filepath.endsWith("data.csv") ? 'src/lib/data/Data.ts' : (opt.filepath.endsWith("polls.csv") ? 'src/lib/data/Polls.ts' : 'src/lib/data/Unknown.ts');

            console.log(`Processing sheet ${opt.id} with output file ${outputFile}...`);

            fs.writeFile(csvFile, body, (err) => {
                if (err) throw err;
                console.log(
                    `CSV with id ${opt.id} and gid ${opt.gid} successfully written to ${csvFile}`
                );

                const jsonData = [];
                fs.createReadStream(csvFile)
                    .pipe(csv())
                    .on('data', (data) => jsonData.push(data))
                    .on('end', () => {
                        fs.writeFile(outputFile, `const data = ${JSON.stringify(jsonData, null, 2)};\n\nexport default data;`, (err) => {
                            if (err) throw err;
                            console.log(`Data successfully written to ${outputFile}`);
                            cb();
                        });
                    });
            });
        }
    } catch (err) {
        console.error(err);
    }
}



function init() {
    let i = 0;
    const processNextSheet = () => {
        if (i < sheet.length) {
            const d = sheet[i];
            i++;
            if (d.id) {
                console.log(`Processing sheet ${i}...`);
                getAndWriteSheet(d, processNextSheet);
            }
        } else {
            console.log("All sheets processed.");
            process.exit();
        }
    };

    processNextSheet();
}


init();
