import fs from 'fs';
import path from 'path';
import process from 'process';
import { parseCsv } from './parseCsv';
import { tagAccountingLines } from './tagAccountingLines';

const processCsv = csv => {
  const data = parseCsv(csv);

  const tagLines = tagAccountingLines(data);

  console.log('*********************');
  console.log('*********');
  console.log('****');
  console.log('**');
  console.log('*');
  console.log(' ');
  console.log('🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 RESULT - BELOW 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 ');
  console.log(' ');
  console.log(' ');
  console.log(tagLines);
  console.log(' ');
  console.log(' ');
  console.log('🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 RESULT - ABOVE  🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 ');
  console.log(' ');
  console.log('*****************************************************');

  console.log(`🚀 Your bank account downloads csv has been successfully parsed! aiii`);
};

const run = () => {
  if (!process.argv[2]) {
    console.log(`
    Please enter a file path as an argument - ie:
    >> yarn start ../path/to/csv-file.csv
    `);
    return;
  }

  const file = path.join(__dirname, process.argv[2]);

  fs.readFile(file, 'utf8', (err, contents) => {
    console.log('*****************************************************');
    console.log('  ORIGINAL CSV DOWNLOADED FROM CATER ALLEN - BELOW');
    console.log('*****************************************************');
    console.log(contents);
    console.log('*****************************************************');
    console.log('  ORIGINAL CSV DOWNLOADED FROM CATER ALLEN - ABOVE');
    console.log('*****************************************************');

    if (err) {
      console.log(err);
      return;
    }

    processCsv(contents);
  });
};
run();

export default run;
